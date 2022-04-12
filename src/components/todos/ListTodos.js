import TodoListItem from './TodoListItem'
import {
	Box,
	Center,
	Heading,
	Table,
	TableContainer,
	Tbody,
	Text,
	Th,
	Thead,
	Tr,
	useColorMode,
} from '@chakra-ui/react'

export default function ListTodos({ todos, handleDelete, handleDoneTodo }){

	const { colorMode } = useColorMode()

  return (
    <Box borderWidth='1px' borderRadius='lg' overflow='hidden' maxWidth='1000px'>
			<Box p='6'>
				<Center>
					<Box display='flex' alignItems='baseline'>
						<Heading size='h2' fontSize='30px'>My to-do list</Heading>
					</Box>
				</Center>
				<Box
					mt='6'
					fontWeight='semibold'
					lineHeight='tight'
				>
					{ todos.length > 0 ?
						(
							<TableContainer>
								<Table variant='striped'>
								<Thead>
									<Tr>
										<Th>action</Th>
										<Th>description</Th>
									</Tr>
								</Thead>
									<Tbody>
										{
											todos.map( todo => (
													<TodoListItem
														key={ todo.id }
														todo={ todo }
														handleDelete={ handleDelete }
														handleDoneTodo={ handleDoneTodo }
													/>
												))
											}
									</Tbody>
								</Table>
							</TableContainer>
						) :
						(
							<Text color={colorMode === 'light' ? 'gray.700' : 'gray.400' }>you don't have anything pending 🔥</Text>
						)
					}
				</Box>
    	</Box>
		</Box>
  )
}