import { Heading, useColorModeValue} from '@chakra-ui/react'

function Header(){

  //los colores que debe tomar el degradado del titulo para modoDark/modoLight
  const initial = useColorModeValue('#319795', '#81e6d9')
  const final = useColorModeValue('#d53f8c','#fbb6cd')

  return (
    <Heading
      style={{lineHeight: '0.9', textAlign: 'center'}}
      bgGradient={`linear(to-l, ${initial}, ${final})`}
      bgClip='text'
      fontSize='6xl'
    >
      TODO REDUCER
    </Heading>
  )
}

export default Header