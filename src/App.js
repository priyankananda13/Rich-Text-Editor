import React, { Component } from "react";
import "./index.css";
import { TextEditor } from "./components/min/text-editor";
import { CommentEditorRed } from "./components/min/comment-editor/red";
import { CommentEditorYellow } from "./components/min/comment-editor/yellow";
import { CommentEditorBlue } from "./components/min/comment-editor/blue";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <p className="page-title">John Doe Interview</p>
          <div className="App">
            <TextEditor />
          </div>
          <div className="wrapper">
            <div className="comments-block">
            <span className="box-heading">Box 1</span>
              <div className="comment-red">
                <div className="avatar">
                  <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
                </div>
                <div className="editor">
                  <div className="avatar-info">
                    <p>
                      <strong>Speaker 1</strong>  <span> 09:45</span>
                    </p>
                  </div>
                  <div className="speaker-comment">
                    <CommentEditorRed />
                  </div>
                </div>
              </div>
              <div className="comment-red">
                <div className="avatar">
                  <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                </div>
                <div className="editor">
                  <div className="avatar-info">
                    <p>
                    <strong>Speaker 2</strong>  <span> 06:35</span>
                    </p>
                  </div>
                  <div className="speaker-comment">
                    <CommentEditorBlue />
                  </div>
                </div>
              </div>
              <div className="comment-red">
                <div className="avatar">
                  <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                </div>
                <div className="editor">
                  <div className="avatar-info">
                    <p className="speaker">
                    <strong>Speaker 3</strong><span> 04:30</span>
                    </p>
                  </div>
                  <div className="speaker-comment">
                    <CommentEditorYellow />
                  </div>
                </div>
              </div>
            </div>

            <div className="buttons">
              <button className="red-btn">Lot of Calls in the beg...</button>
              <button className="blue-btn">Frequency of use ins...</button>
              <button className="yellow-btn">Lot of Calls in the beg...</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
