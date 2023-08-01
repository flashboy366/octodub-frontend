import { Button } from "@chakra-ui/button"
import { Card, CardBody, CardHeader } from "@chakra-ui/card"
import { HStack, Heading, Text, VStack } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import AuthenticationWrapper from "../components/AuthenticationWrapper"
import { PinInput, PinInputField } from "@chakra-ui/pin-input"

const VerifyCode = () => {
    return (
        <AuthenticationWrapper>
            <Card width="452px" alignItems="center">
                <Button
                    colorScheme="white"
                    transform="auto"
                    position="absolute"
                    translateX="-200px"
                    translateY="7px"
                >
                    <Image src="arrow-left.svg" />
                </Button>
                <CardHeader>
                    <Heading fontFamily="jakarta" fontSize="24px" fontWeight="600">
                        Enter the code
                    </Heading>
                </CardHeader>
                <CardBody paddingLeft="40px" paddingRight="40px" width="100%">
                    <VStack gap="25px">
                        <VStack gap="0">
                            <Text fontFamily="jakarta" fontSize="14px">
                                We sent verification code to{' '}
                                <Text as="span" fontWeight="bold">
                                    hazukovkirill@gmail.com
                                </Text>
                            </Text>
                            <Text fontFamily="jakarta" fontSize="14px">
                                Please put the code here:
                            </Text>
                        </VStack>
                        <VStack alignItems="flex-start">
                            <HStack>
                                <PinInput type="number" placeholder="">
                                    <PinInputField/>
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                </PinInput>
                            </HStack>
                            <Text
                                fontFamily="jakarta"
                                fontSize="14px"
                                fontWeight="400"
                                color="#545454"
                            >
                                Resend availible in 35 s. 
                            </Text>
                        </VStack>
                        <Button
                            variant="action"

                            display="flex"
                            justifyContent="space-around"
                            fontFamily="jakarta"
                        >
                            Continue
                            <Image src="arrow-right.svg" />
                        </Button>
                    </VStack>
                </CardBody>
            </Card>
        </AuthenticationWrapper>
    )
}

export default VerifyCode