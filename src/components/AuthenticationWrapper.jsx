import { Box, VStack } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"

const AuthenticationWrapper = ({children}) => {
    return (
        <>
            <Box
                bg="brand.100"
                height="40vh"
                width="100vw"
                position="absolute"
                zIndex="0"
            />
            <VStack paddingTop="100px" gap="100px" bg="background.100">
                <Image src="authentication-logo.svg" zIndex="1"/>
                {children}
            </VStack>
        </>
    )
}

export default AuthenticationWrapper