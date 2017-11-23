
import React, { Component, PropTypes } from 'react'

class AddBook extends Component {

    handleSubmit(event) {
        let input = this.refs.input;
        event.preventDefault();
       
        this.props.addBook(input.value,"jim","mystery",false);
        input.value = ''
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input ref="input"/>
                    <button type="submit">
                        Add Book
                    </button>
                </form>
            </div>
        );
    }
}

export default AddBook