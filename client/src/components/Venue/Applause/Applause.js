import React, { Component } from 'react';

class Applause extends Component {
    state = {
        upClaps: 0,
        downClaps: 0
    }

    componentDidMount() {
        this.props.socket.on("up", clap => {
            this.setState({ upClaps: this.state.upClaps + 1 })
        })
        this.props.socket.on("down", clap => {
            this.setState({ downClaps: this.state.downClaps + 1 })
        })
    }

    componentDidUpdate(prevProps) {
        if (this.state.downClaps > 3) {
            this.props.stopPerformance();
        }   

        if (!this.props.performer) {
            if (prevProps.isPerformer) {
                //TODO: Update performer's lifetime claps in DB
            }    
            this.setState({
                upClaps: 0,
                downClaps: 0
            })
        }
    }

    handleClap = type => {
        this.props.socket.emit(type);
    }

    render() {
        let disable = null;
        this.props.isPerformer ? disable = true : disable = false;
        return <div className="applause fixed-right">
            <div>
                <div>{this.state.upClaps}</div>
                <button disabled={disable} onClick={() => this.handleClap("up")}>.</button>
            </div>
            <div>
                <div>{this.state.downClaps}</div>
                <button disabled={disable} onClick={() => this.handleClap("down")}>.</button>

            </div>
        </div>
    }

}

export default Applause;
