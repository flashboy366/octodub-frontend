import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "./theme"
import VerifyCode from "./pages/VerifyCode"

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <VerifyCode />
    </ChakraProvider>
  )
}

export default App