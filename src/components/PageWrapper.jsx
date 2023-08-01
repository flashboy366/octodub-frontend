import { VStack, Box } from "@chakra-ui/layout"
import Header from "./Header"

const PageWrapper = ({children}) => {
    return (
        <Box
            paddingLeft="50px"
            paddingRight="50px"
            display="flex"
            justifyContent="center"
        >
            <VStack maxWidth="1277px" width="100%" height="90vh">
                <Header />
                {children}
            </VStack>
        </Box>
    )
}

export default PageWrapper