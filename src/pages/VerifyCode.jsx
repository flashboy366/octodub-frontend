import { Button, IconButton } from "@chakra-ui/button"
import { Card, CardBody, CardHeader } from "@chakra-ui/card"
import { HStack, Heading, Text, VStack } from "@chakra-ui/layout"
import AuthenticationWrapper from "../components/AuthenticationWrapper"
import { PinInput, PinInputField } from "@chakra-ui/pin-input"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"

const VerifyCode = () => {
    return (
        <AuthenticationWrapper>
            <Card width="452px" alignItems="center">
                <IconButton
                    colorScheme="white"
                    transform="auto"
                    position="absolute"
                    translateX="-200px"
                    translateY="7px"
                    color="black.100"
                    icon={<ArrowBackIcon boxSize={4} />}
                />
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
                            fontFamily="jakarta"
                            rightIcon={<ArrowForwardIcon boxSize={4} />}
                            width="160px"
                        >
                            Continue
                        </Button>
                    </VStack>
                </CardBody>
            </Card>
        </AuthenticationWrapper>
    )
}

export default VerifyCode