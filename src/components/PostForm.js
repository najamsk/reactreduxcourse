
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {createPost} from '../actions/postActions';

class PostForm extends Component {

    // using constructor for that.
    constructor(props){
        super(props);
        this.state ={
            title: '',
            body:''
        };

        this.onChange = this.onChange.bind(this); //alternate is to do on each form element onchange like onChange={this.onChange.bind(this)}
        this.onSubmit = this.onSubmit.bind(this); //alternate is to do on each form element onchange like onChange={this.onChange.bind(this)}
    }

    componentDidMount(){
        console.log("posts did mount");
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body,
        };

        //call action

       // fetch('https://jsonplaceholder.typicode.com/posts', { method: 'POST',
       //             headers:{
       //                 'content-type': 'application/json',
       //             },
       //             body: JSON.stringify(post)
       //           })
       //     .then(res => res.json())
        //     .then(data => console.log(data));

        //calling Action to Redux
        this.props.createPost(post);
        //reseting form fields
        this.setState({title:'', body:''});

    }

    render() {
        return (
                <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                <div>
                <label>Title:</label> <br/>
                <input type="text" name="title" value={this.state.title} onChange={this.onChange.bind(this)}/>
                </div>
                <div>
                <label>Body:</label> <br/>
                <textarea name="body" value={this.state.body} onChange={this.onChange.bind(this)} />
                </div>
                <div>
                <input type="submit" value="submit"/>
                </div>
                </form>
                </div>
        );
    }
}



PostForm.propTypes = {
    createPost: PropTypes.func.isRequired,
};


export default connect(null, {createPost} )(PostForm);
//export default PostForm;
