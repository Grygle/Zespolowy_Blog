import React, { Component } from 'react';
//import Main from "./Main";

class BlogPost extends Component {


    constructor(props) {
        super(props);
        this.state = {
            value: 'Please insert content.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your data was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {

        const currentDate =  new Date();
        const datetime = currentDate.getDate() + "-" + (currentDate.getMonth()+1)+ "-" + currentDate.getFullYear();

        return (
            <div>
                <h2 className="title">Insert data to create a post</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Enter a title </label>
                    <input id="title" name="title" type="text" />

                    <label>
                        <span> Content </span>
                        <textarea value={this.state.value} onChange={this.handleChange} />
                    </label>

                    <input type="submit" value="Submit" />

                    <p className="date">Creation Date: {datetime}</p>
                </form>
            </div>
        );
    }
}

export default BlogPost;