import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "./theme"
import WorkspaceFiles from "./pages/WorkspaceFiles"
import Account from "./pages/Account"

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <WorkspaceFiles />
    </ChakraProvider>
  )
}

export default App