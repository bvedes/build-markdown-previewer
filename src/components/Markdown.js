import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import "./Editor.scss";
import { initValue } from "../utils";

class Markdown extends Component {
  state = {
    markdown: initValue,
  };

  render() {
    const { markdown } = this.state;
    return (
      <div className="wrapper">
        <h1>Build a Markdown Previewer</h1>
        <div className="input">
          <textarea
            className="input"
            id="editor"
            value={markdown}
            onChange={(e) => this.setState({ markdown: e.target.value })}
          ></textarea>
        </div>
        <div className="prev" id="preview">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    );
  }
}
export default Markdown;
