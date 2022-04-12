import {
  Button,
  Modal as ModalUI,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'

export default function Modal({handleDelete, isOpen, setIsOpen, todoId}){

  const deleteAndClose = () => {
    handleDelete(todoId)
    setIsOpen(false)
  }

  return (
    <>
      <ModalUI closeOnOverlayClick={false} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you sure?</ModalHeader>
          <ModalBody>
            this option cannot be reversed, are you sure you want to remove this all?
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='pink' mr={3} onClick={ () => deleteAndClose() }>
              Delete
            </Button>
            <Button variant='ghost' onClick={ () => setIsOpen(false) }>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </ModalUI>
    </>
  )
}