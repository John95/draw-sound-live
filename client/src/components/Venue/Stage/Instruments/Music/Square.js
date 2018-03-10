import React, { Component } from 'react';

class Square extends Component {

    dimensions = {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
    }

    componentDidUpdate() {
        const props = this.props.instrumentProps;
        if (props.location.mouseDown && this.props.name === props.location.activeNode) {
            let h = this.dimensions.height;
            let w = this.dimensions.width;
            if (w < 1) {
                w = 100
            }
            if (h < 1) {
                h = 100
            }
            this.props.soundUpdater(
                props.location.x - this.dimensions.left,
                props.location.y - this.dimensions.top,
                w,
                h
            )
        }
    }

    handleMouseEnter = event => {
        const rect = event.target.getBoundingClientRect();
        this.dimensions.left = rect.left;
        this.dimensions.top = rect.top;
        this.dimensions.width = rect.width;
        this.dimensions.height = rect.height;
        this.props.instrumentProps.handleNodeChange(this.props.name);
    }

    handleMouseDown = event => {
        this.props.instrumentProps.handleClick(true);
        // added this to enable acces to xy onClick
        this.props.instrumentProps.handleMouseMove(event.pageX, event.pageY);
    }

    handleMouseUp = event => {
        event.target.removeEventListener("mousemove", this.handleMouseMove)
        this.props.instrumentProps.handleClick(false);
    }

    handleMouseMove = event => {
        const props = this.props.instrumentProps;
        const width = event.offsetWidth;
        const height = event.offsetHeight;
        if (props.location.mouseDown) {
            props.handleMouseMove(event.pageX, event.pageY);
        }
    }

    handleMouseLeave = event => {
        const related = event.relatedTarget;
        if (!related.classList) {
            this.props.instrumentProps.handleClick(false);
        } else if (!event.relatedTarget.classList.contains("square")) {
            this.props.instrumentProps.handleClick(false);
        }
    }

    render() {
        return (
            <div
                onMouseEnter={this.handleMouseEnter}
                onMouseDown={this.handleMouseDown}
                onMouseMove={this.handleMouseMove}
                onMouseUp={this.handleMouseUp}
                onMouseLeave={this.handleMouseLeave}
                className="square"
                id={"square" + this.props.name}>
            </div>
        );
    }
}

export default Square;