import { useEffect, useReducer } from 'react';
import { todoReducer } from './components/todos/todoReducer';
import { Center} from '@chakra-ui/react'
import AddTodo from './components/todos/AddTodo'
import DarkMode from './components/darkMode/DarkMode'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import ListTodos from './components/todos/ListTodos'

const init = () => {
  //retornamos cuales son los todos que estan guardado en el localStorage
  // si no hay nada guardado retornamos un array vacio
  return JSON.parse( localStorage.getItem('todos') ) || []
}

function App() {

	const [ todos, dispatch ] = useReducer( todoReducer, [], init )

	useEffect(() => {
    //cuando el array de todos cambia, se guarda automatimante en el localstorage
    // el localstorage unicamente guarda string
		 localStorage.setItem('todos', JSON.stringify( todos ))
	}, [ todos ]);

  //nos guarda un nuevo todo
	const handleAddTodo = ( newTodo ) => {
		dispatch( {
			type: 'add',
			payload: newTodo
		})
	}

  //nos guarda un nuevo todo
	const handleDoneTodo = ( todoId ) => {
		dispatch( {
			type: 'done',
			payload: todoId
		})
	}

  //nos elimina un todo en base al ID
  const handleDelete  = ( todoId ) => {
    dispatch( {
      type: 'delete',
      payload: todoId
    })
	}

  return (
    <>
      <DarkMode/>

      <Center my={10}>
        <Header todos={ todos }/>
      </Center>

      <Center my={10}>
        <AddTodo handleAddTodo={ handleAddTodo } />
      </Center>

      <Center my={10}>
        <ListTodos todos={ todos } handleDelete={ handleDelete } handleDoneTodo={ handleDoneTodo }/>
      </Center>

      <Footer/>
    </>
  );
}

export default App;
