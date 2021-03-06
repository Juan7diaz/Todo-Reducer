import { Flex, IconButton, Spacer, useColorMode} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function DarkMode(){

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex style={{'padding': '12px 12px 0px 0px'}}>
      <Spacer />
      <IconButton
        aria-label = {colorMode === 'light' ? 'Switch to dark mode' :  'Switch to light mode'}
        icon={ colorMode === 'light' ? <MoonIcon/> : <SunIcon/> }
        onClick={ toggleColorMode }
      />
  	</Flex>
  )
}