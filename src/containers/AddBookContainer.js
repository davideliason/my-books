import React from 'react'

import {connect} from 'react-redux'
import AddBook from '../components/AddBook.js';
import addBook from '../actions/index.js';


let mapDispatchToProps = ({dispatch}) => ({

	return (
		<div>
			<form onSubmit={e => {
					e.preventDefault()
					dispatch(addBook(input.title,input.author,input.genre,input.owned))
					input.title ='';
					input.author = '';
					input.genre = '';
					input.owned = '';
				}}>

			 <input ref={node => {
          		input = node
        			}} />
		        <button type="submit">
		          Add Todo
		        </button>
     		 </form>
		</div>
		)
})

const AddBookContainer = connect(mapDispatchToProps)(AddBook)

export default AddBookContainer
