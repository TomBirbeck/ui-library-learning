import './App.css';
import { Box, ChakraProvider, extendTheme, Flex, Heading, Grid, GridItem } from '@chakra-ui/react'
import {AddIcon} from '@chakra-ui/icons'

const colors = {
  busy: {
    100: '#ffffff',
    200: '#000000'
  }
}

const theme = extendTheme({colors})


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box className="App" w='100vw' h='100vh' bgColor={'yellow.300'}>
    <Box h={'20%'} display="grid" gridTemplateColumns={'1fr 1fr 1fr'} gridGap={'2.5'} alignItems={'center'} justifyContent={'center'} bgColor={'purple.100'}>
      <Box h='40%' color='red.600' border={'solid 2px red'} bgColor={'busy.200'} p={'2.5'}>
      <Heading>Box 1</Heading>
      </Box>
      <Box w='100%' h='40%' color='red.600' border={'solid 2px red'} bgColor={'busy.200'} display={'grid'} placeContent={'center'}>
      <Heading>Box 2</Heading>
      </Box>
      <Box w='100%' h='40%' color='red.600' borderStyle='solid' borderWidth='5px' borderColor='gray.800' bgColor={'busy.100'}>
      <Heading>Box 3</Heading>
      </Box>
    </Box>
    <Flex h={'20%'} align={'center'} justify={'space-between'} bgColor={'green.100'} gap={'5'}> 
    <Flex h='40%' w={'100%'} color='red.600' border={'solid 2px red'} bgColor={'busy.200'} justify={'end'}>
      <Heading>Flexed Box 1</Heading>
      </Flex>
      <Flex h='40%' w={'100%'} color='red.600' border={'solid 2px red'} bgColor={'busy.200'}  justify={'center'} align={'center'}>
      <Heading>Flexed Box 2</Heading>
      </Flex>
      <Flex h='40%' w={'100%'} p={'2.5'} color='red.600' borderStyle='solid' borderWidth='5px' borderColor='gray.800' bgColor={'busy.100'}>
      <Heading>Flexed Box 3</Heading>
      </Flex>
    </Flex>
    <Grid h={'20%'} templateColumns={'0.5fr 1fr 1fr 0.5fr'} gap={'2'} placeContent={'center'} bgColor={'orange.400'}>
      <GridItem min-h='40%' color='red.600' border={'solid 2px red'} bgColor={'busy.200'} p={'2.5'}>
      <Heading>Grid Box 1</Heading>
      </GridItem>
      <Grid w='100%' min-h='40%' color='red.600' border={'solid 2px red'} bgColor={'busy.200'} placeContent={'center'}>
      <Heading>Grid Box 2</Heading>
      </Grid>
      <GridItem w='100%' min-h='40%' color='red.600' borderStyle='solid' borderWidth='5px' borderColor='gray.800' bgColor={'busy.100'}>
      <Heading>Grid Box 3</Heading>
      </GridItem>
      <GridItem w='100%' min-h='40%' color='red.600' borderStyle='solid' borderWidth='5px' borderColor='gray.800' bgColor={'busy.100'}>
      <Heading>Grid Box 4</Heading>
      </GridItem>
    </Grid>
    <Grid h={'40%'} templateColumns={'repeat(3, 1fr)'} templateAreas={'box2 box2 box3'}>
    <Box w='100%' h='40%' color='red.600' borderStyle='solid' borderWidth='5px' borderColor='gray.800' bgColor={'busy.100'}>
      <Heading>Grid Area Box 1</Heading>
      </Box>
    <Box w='100%' h='40%' color='red.600' gridArea={'box2'} borderStyle='solid' borderWidth='5px' borderColor='gray.800' bgColor={'busy.100'}>
      <Heading>Grid Area Box 2</Heading>
      </Box>
    <Box w='100%' h='40%' color='red.600' gridArea={'box3'} borderStyle='solid' borderWidth='5px' borderColor='gray.800' bgColor={'busy.100'}>
      <Heading>Grid Area Box 3</Heading>
      </Box>
    <Box w='100%' h='40%' color='red.600' borderStyle='solid' borderWidth='5px' borderColor='gray.800' bgColor={'busy.100'}>
      <Heading>Grid Area Box 4</Heading>
      </Box>
    </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
