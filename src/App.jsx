import { ChakraProvider } from "@chakra-ui/react"
import SignIn from "./pages/SignIn/SignIn"

const App = () => {
  return (
    <ChakraProvider>
      <SignIn />
    </ChakraProvider>
  )
}

export default App