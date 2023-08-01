import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "./theme"
import Account from "./pages/Account"
import SignIn from "./pages/SignIn"
import VerifyCode from "./pages/VerifyCode"

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Account />
    </ChakraProvider>
  )
}

export default App