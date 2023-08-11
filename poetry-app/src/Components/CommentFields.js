import React, { Component } from 'react';

class CommentFields extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <p>
                <input type="textarea" name="content" id="comment_content" onChange={event => this.props.handleChange(event)} value={this.props.formData.content} />
            </p>
        )
    }
}

export default CommentFields;