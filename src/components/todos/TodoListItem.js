import { IconButton, Td, Tr} from '@chakra-ui/react'
import { CheckIcon, DeleteIcon, SmallCloseIcon } from '@chakra-ui/icons'

export default function TodoListItem({todo, handleDelete, handleDoneTodo}){
  return (
		<Tr>
			<Td>
				<IconButton
					onClick={ () => handleDoneTodo(todo.id)  }
					icon = { todo.done ? <SmallCloseIcon/> : <CheckIcon/>}
					colorScheme='teal'
					variant='solid'
					maxWidth='40'
				/>
				<IconButton
					mx = '2'
				 	onClick={ () => handleDelete(todo.id)  }
					icon = { <DeleteIcon/>}
					colorScheme='pink'
					variant='solid'
					maxWidth='40'
				/>
			</Td>
			<Td>
				{todo.desc} { todo.done && '✅' }
			</Td>
		</Tr>
  )
}