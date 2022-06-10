import './css/app.css';
import Header from './components/Header';
import { ChakraProvider } from '@chakra-ui/react'
import { VStack, Flex, Heading } from '@chakra-ui/layout';

function App() {
  return (
    <ChakraProvider>
      <VStack>
        <Flex w="100%">
            <div className="App">
              <Header />
            </div>
    </Flex>
    </VStack>
    </ChakraProvider>
  );
}

export default App;
