import { Button, Divider,OrderedList, WrapItem, Wrap} from '@chakra-ui/react'

function TodoListItem(){
  return (
    <OrderedList spacing={3}>
			<Wrap>
				<WrapItem>
					Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
				</WrapItem>
				<Button colorScheme='pink' variant='solid' maxWidth='40'  Color='white'>
					delete
				</Button>
			</Wrap>
			<Divider />
			<Wrap>
				<WrapItem>
					Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
				</WrapItem>
				<Button colorScheme='pink' variant='solid' maxWidth='40'>
					delete
				</Button>
			</Wrap>
	</OrderedList>
  )
}

export default TodoListItem