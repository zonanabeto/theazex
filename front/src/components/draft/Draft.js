import React, {Component} from 'react';
import {Editor,createEditorState,} from 'medium-draft';

class Draft extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: createEditorState(), // for empty content
    };

    
    // this.state = {
    //   editorState: createEditorState(data), // with content
    // };
    

    this.onChange = (editorState) => {
      this.setState({ editorState });
    };
  }

  componentDidMount() {
    this.refs.editor.focus();
  }

  render() {
    const { editorState } = this.state;
    return (
      <Editor
        ref="editor"
        editorState={editorState}
        onChange={this.onChange} />
    );
  }
};

export default Draft;