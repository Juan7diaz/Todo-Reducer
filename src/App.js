import { Center} from '@chakra-ui/react'
import AddTodo from './components/todo/AddTodo'
import ListTodos from './components/todo/ListTodos'
import Header from './components/header/Header'
import DarkMode from './components/darkMode/DarkMode'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <DarkMode/>

      <Center my={10}>
        <Header/>
      </Center>

      <Center my={10}>
        <AddTodo />
      </Center>

      <Center my={10}>
        <ListTodos />
      </Center>

      <Footer/>
    </>
  );
}

export default App;
