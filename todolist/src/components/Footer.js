import React, { Component } from "react";

class Footer extends Component {
  render() {
    const { filter, setVisibilityFilter } = this.props;
    return (
      <div>
        <span>show:</span>
        <button
          onClick={() => setVisibilityFilter("all")}
          disabled={ filter === "all" }
        >
          all
        </button>
        <button
          onClick={() => setVisibilityFilter("active")}
          disabled={filter === "active"}
        >
          active
        </button>

        <button
          onClick={() => setVisibilityFilter("completed")}
          disabled={filter === "completed"}
        >
          completed
        </button>
      </div>
    );
  }
}

export default Footer;
