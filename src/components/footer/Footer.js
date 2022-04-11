import {
  Box,
  Center,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

function Footer() {

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
            Made with ❤️ by Juan Diaz
          </Text>
        </Container>
      </Box>
    </Center>
  );
}

export default Footer;

