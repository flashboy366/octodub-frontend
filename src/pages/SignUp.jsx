import { Button } from "@chakra-ui/button"
import { Card, CardBody, CardHeader } from "@chakra-ui/card"
import { Image } from "@chakra-ui/image"
import { Input } from "@chakra-ui/input"
import { Box, Divider, Heading, Text, VStack } from "@chakra-ui/layout"
import AuthenticationWrapper from "../components/AuthenticationWrapper"

const SignUp = () => {
    return (
        <AuthenticationWrapper>
            <Card width="452px" alignItems="center">
                <CardHeader>
                    <Heading fontFamily="jakarta" fontSize="24px">
                        Sign up
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
                            <Image src="arrow-right.svg" />
                        </Button>
                        <Button
                            colorScheme="white"
                        >
                            <Text
                                fontFamily="jakarta"
                                textDecoration="underline"
                                fontSize="14px"
                                color="black.100"
                            >Sign in</Text>
                        </Button>
                    </VStack>
                </CardBody>
            </Card>
        </AuthenticationWrapper>
    )
}

export default SignUp