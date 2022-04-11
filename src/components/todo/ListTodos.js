import { Box, Center,Heading} from '@chakra-ui/react'
import TodoListItem from './TodoListItem'

function ListTodos(){
  return (
    <Box borderWidth='1px' borderRadius='lg' overflow='hidden'>
			<Box p='6'>
				<Center>
					<Box display='flex' alignItems='baseline'>
						<Heading size='' fontSize='30px'>My list Todo's</Heading>
					</Box>
				</Center>
				<Box
					mt='6'
					fontWeight='semibold'
					as='h4'
					lineHeight='tight'
				>
					<TodoListItem/>
				</Box>
    	</Box>
		</Box>
  )
}

export default ListTodos