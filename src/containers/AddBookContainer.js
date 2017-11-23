import React from 'react'

import {connect} from 'react-redux'
import AddBook from '../components/AddBook.js';
import {addBook} from '../actions/index.js';


const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (evt) => {
            dispatch(addBook(evt.target.querySelector('input').value,"jim","mystery",true))
        }
    }
}

const AddBookContainer = connect(null,mapDispatchToProps)(AddBook)

export default AddBookContainer
