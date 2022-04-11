import { Badge, Box, Button, Center, SimpleGrid,Input } from '@chakra-ui/react'

function AddTodo (){
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
			<Box p='6'>
				<Center>
					<Box display='flex' alignItems='baseline'>
						<Badge borderRadius='full' px='2' colorScheme='teal'>
							Add new todo
						</Badge>
					</Box>
				</Center>
      <Box
        mt='6'
        fontWeight='semibold'
        as='h4'
        lineHeight='tight'
      >
				<Input variant='outline' placeholder='Buy meat' />
        <SimpleGrid columns={1}>
          <Button colorScheme='teal' variant='solid' mt='6' >
            Add
          </Button>
        </SimpleGrid>
      </Box>
    </Box>
		</Box>
  )
}

export default AddTodo