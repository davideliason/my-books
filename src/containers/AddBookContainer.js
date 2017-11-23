import React from 'react'

import {connect} from 'react-redux'
import AddBook from '../components/AddBook.js';
import {addBook} from '../actions/index.js';


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addBook:(title,author,genre,owned) => {

            dispatch(addBook(title,author,genre,owned));
        }
    }
};

const AddBookContainer = connect(null,mapDispatchToProps)(AddBook)

export default AddBookContainer
