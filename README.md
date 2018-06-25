# My Books
## November 19, 2017
### [David Eliason](http://www.davethemaker.com)

#### [Return to Portfolio](https://github.com/davideliason/davideliason.github.io)

#### Please view on [Heroku](https://my-books-per-react.herokuapp.com/)

---

## Objectives
This is a systematic approach to put into practice the tools and techniques as instructed in the Redux team example of 'Todos', using Redux to build a single source of truth, passing state and dispatch as props to components. This app also explores the components updating the store using event handlers.

## Steps/Process/Lessons
After creating the basic structure of CRA (create-react-app), it seemed fairly trivia for spinning up a redux store and passing the state of books to child components. For me, the trickiest part was really understanding the process for passing onClick handlers to child components and being able to update the state by calling those handlers. I don't fully understand the syntax for how Link components populated and triggered those in the Redux Todolist example in https://redux.js.org/docs/basics/ExampleTodoList.html, so I created separate components each with own connected props and state; while not optimal for production, I do understand how it works.

Another learning point for me was understanding how to grab various input text field values from a form without using a module. I found this article to be helpful in usings refs to individuate disparate form values: https://stackoverflow.com/questions/38281957/react-redux-how-to-get-user-input.


## Conclusion

The result of this exercise was an app that displayed the books information with an option to filter the results based on genre. This implementation used Redux as a single source of truth, passing data to be rendered as props to components.

---

Please view on [Heroku](https://my-books-per-react.herokuapp.com/)

![My-Books-React](./my-books-react-redux.png?raw=true "My Books")


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).