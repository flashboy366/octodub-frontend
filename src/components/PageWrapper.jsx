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
            <VStack maxWidth="1277px" width="100%" height="90vh" gap="10px">
                <Box width="100%">
                    <Header />
                </Box>
                {children}
            </VStack>
        </Box>
    )
}

export default PageWrapper