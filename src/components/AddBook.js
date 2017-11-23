
import React, { Component, PropTypes } from 'react'

class AddBook extends Component {

    handleSubmit(event) {
        let inputTitle = this.refs.title;
        let inputAuthor = this.refs.author;
        let inputGenre = this.refs.genre;

        event.preventDefault();
       
        this.props.addBook(inputTitle.value,inputAuthor.value,inputGenre.value,false);
        inputTitle.value = ''
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input placeholder="title" ref="title"/>
                    <input placeholder="author"ref="author"/>
                    <input placeholder="genre"ref="genre"/>

                    <button type="submit">
                        Add Book
                    </button>
                </form>
            </div>
        );
    }
}

export default AddBook