import { useForm } from '../../hooks/useForm'
import { Box, Button, Center, Heading, Input, SimpleGrid } from '@chakra-ui/react'

export default function AddTodo ({ handleAddTodo }){

  const [ {task}, handleInputChange, reset ] = useForm({task: ''})

  const handleSubmit = (evt) => {
    //detiene el comportamiento por defecto
    evt.preventDefault()

    //para que el todo tenga mas de 1 letra
    if( task.trim().length <= 2 ) return

    //se crea en una constante el nuevo todo
    const newTodo = {
      id: new Date().getTime(),
      desc: task,
      done: false,
    }

    //envia el todo nuevo como parametro de la funcion handleAddTodo
    handleAddTodo( newTodo )

    //limpia el formulario
    reset()
  }

  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
			<Box p='6'>
				<Center>
					<Box display='flex' alignItems='baseline'>
            <Heading as='h2' fontSize='30px'>Add new todo</Heading>
					</Box>
				</Center>
      <Box
      	mt='6'
        fontWeight='semibold'
        lineHeight='tight'
      >
        <form onSubmit={ handleSubmit }>
          <Input
            name = 'task'
            value={ task }
            onChange = { handleInputChange }
            autoComplete = 'off'
            variant='outline'
            placeholder='Buy meat'
          />
          <SimpleGrid columns={ 1 }>
            <Button  type='submit' colorScheme='teal' variant='solid' mt='6' >
              Add
            </Button>
          </SimpleGrid>
        </form>
        </Box>
      </Box>
		</Box>
  )
}