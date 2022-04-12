import { IconButton, Td, Tr} from '@chakra-ui/react'
import { CheckIcon, DeleteIcon, SmallCloseIcon } from '@chakra-ui/icons'

export default function TodoListItem({todo, handleDelete, handleDoneTodo}){
  return (
		<Tr>
			<Td>
				<IconButton
					aria-label = 'Complete a to do'
					colorScheme='teal'
					icon = { todo.done ? <SmallCloseIcon/> : <CheckIcon/>}
					maxWidth='40'
					onClick={ () => handleDoneTodo(todo.id)  }
					variant='solid'
				/>
				<IconButton
					aria-label = 'Delete a to do'
					colorScheme='pink'
					icon = { <DeleteIcon/>}
					maxWidth='40'
					mx = '2'
					onClick={ () => handleDelete(todo.id)  }
					variant='solid'
				/>
			</Td>
			<Td>
				{todo.desc} { todo.done && '✅' }
			</Td>
		</Tr>
  )
}