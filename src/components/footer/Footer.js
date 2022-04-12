import {
  Box,
  Center,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Footer() {

  return (
    <Center>
      <Box
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>
            Made by  <a
              href='https://github.com/juan7diaz'
              rel='noopener noreferrer'
              target='_blank'
            >
              Juan Diaz
            </a>
          </Text>
        </Container>
      </Box>
    </Center>
  );
}