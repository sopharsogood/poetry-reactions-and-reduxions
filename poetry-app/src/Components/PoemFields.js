import React, { Component } from 'react';

class PoemFields extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <p>
                Title: <input type="text" name="title" id="title" onChange={event => this.props.handleChange(event)} value={this.props.formData.title} /> <br />
                Poem: <input type="textarea" name="content" id="content" onChange={event => this.props.handleChange(event)} value={this.props.formData.content} />
            </p>
        )
    }
}

export default PoemFields;