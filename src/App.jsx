import { ChakraProvider } from "@chakra-ui/react"
import SignIn from "./pages/SignIn/SignIn"
import { theme } from "./theme"

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <SignIn />
    </ChakraProvider>
  )
}

export default App