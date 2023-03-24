import React, { Component } from 'react';
import PoemFields from './PoemFields';

class NewPoemForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: ""
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <div>
                <h2>
                    Write a Poem:
                </h2>
                <form>
                    <PoemFields formData={this.state} handleChange={this.handleChange} />
                    <input type="submit" value="Create Poem" />
                </form>
            </div>
        )
    }
}

export default NewPoemForm;