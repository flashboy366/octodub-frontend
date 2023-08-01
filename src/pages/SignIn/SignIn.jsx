import { Button } from "@chakra-ui/button"
import { Card, CardBody, CardHeader } from "@chakra-ui/card"
import { Image } from "@chakra-ui/image"
import { Input } from "@chakra-ui/input"
import { Box, Divider, Heading, Text, VStack } from "@chakra-ui/layout"
import AuthenticationWrapper from "../../components/AuthenticationWrapper"

const SignIn = () => {
    return (
        <AuthenticationWrapper>
            <Card bg="white.100" width="452px" alignItems="center">
                <CardHeader>
                    <Heading fontFamily="jakarta" fontSize="24px">
                        Sign in
                    </Heading>
                </CardHeader>
                <CardBody paddingLeft="80px" paddingRight="80px" width="100%">
                    <VStack gap="25px">
                        <Button
                            colorScheme="white"
                            boxShadow="base"
                            width="100%"
                            display="flex"
                            justifyContent="space-between"
                        >
                            <Image src="google-logo.svg" />
                            <Text
                                fontFamily="jakarta"
                                color="black.100"
                                fontSize="14px"
                                fontWeight="400"
                                width="100%"
                            >
                                Continue with Google
                            </Text>
                        </Button>
                        <Divider borderColor="gray.200"/>
                        <Input
                            placeholder="Email"
                            fontFamily="jakarta"
                            borderColor="gray.100"
                            _placeholder={{color: 'gray.300'}}
                        />
                        <Input
                            placeholder="Password"
                            fontFamily="jakarta"
                            borderColor="gray.100"
                            _placeholder={{color: 'gray.300'}}
                        />
                        <Button
                            variant="action"

                            display="flex"
                            justifyContent="space-around"
                            fontFamily="jakarta"
                        >
                            Continue
                            <Box>
                                <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.23364e-09 5.59933C9.67628e-09 5.31063 0.234035 5.07658 0.522743 5.07658L13.4171 5.07659C13.7058 5.07659 13.9398 5.31063 13.9398 5.59933C13.9398 5.88802 13.7058 6.12207 13.4171 6.12207L0.522743 6.12207C0.234035 6.12207 2.79101e-09 5.88802 6.23364e-09 5.59933Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.51634 10.8469C8.31226 10.6428 8.31226 10.3118 8.51634 10.1076L12.9024 5.72157C12.9705 5.65347 12.9705 5.54314 12.9024 5.47511L8.51634 1.08902C8.31226 0.884875 8.31226 0.553876 8.51634 0.349797C8.72049 0.145649 9.05149 0.145649 9.25564 0.349797L13.6417 4.73582C14.1181 5.21221 14.1181 5.98447 13.6417 6.4608L9.25564 10.8469C9.05149 11.051 8.72049 11.051 8.51634 10.8469Z" fill="white"/>
                                </svg>
                            </Box>
                        </Button>
                        <Button
                            colorScheme="white"
                        >
                            <Text
                                fontFamily="jakarta"
                                textDecoration="underline"
                                fontSize="14px"
                                color="black.100"
                            >Sign up</Text>
                        </Button>
                    </VStack>
                </CardBody>
            </Card>
        </AuthenticationWrapper>
    )
}

export default SignIn