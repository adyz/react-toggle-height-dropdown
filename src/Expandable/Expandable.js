import React from "react";

import "./expandable.css";

class Expandable extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      expanded: false,
      styles: {
        height: "auto"
      }
    };
  }
  toggle() {
    this.setState(state => {
      return {
        expanded: !state.expanded,
        styles: {
          height: state.expanded
            ? `${this.props.initialHeight}px`
            : `${this.elementOriginalHeight}px`,
          transition: "250ms ease-in-out"
        }
      };
    });
  }
  componentDidMount() {
    this.elementOriginalHeight = this.element.clientHeight;
    this.setState(state => {
      return {
        styles: {
          height: `${this.props.initialHeight}px`
        }
      };
    });
  }
  render() {
    return (
      <div className="expandable">
        <div
          onClick={() => this.toggle()}
          className="expandable__content"
          ref={myref => (this.element = myref)}
          style={this.state.styles}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Expandable;
