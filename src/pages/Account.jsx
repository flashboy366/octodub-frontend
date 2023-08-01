import PageWrapper from "../components/PageWrapper"
import { Box, HStack, Text, VStack } from "@chakra-ui/layout"

const Account = () => {
    return (
        <PageWrapper>
            <VStack
                bg='white'
                borderRadius={15}
                width="100%"
                height="100%"
                padding="20px"
                alignItems="flex-start"
                gap="20px"
            >
                <Text fontFamily="mukta" fontWeight={400} fontSize="20px">
                    Account
                </Text>
                <HStack justifyContent="space-between" width="100%">
                    <Box
                        borderWidth={1}
                        borderColor="#E4E4E4"
                        width="100%"
                        maxWidth="444px"
                        height="329px"
                        borderRadius={15}
                        padding="20px"
                    >
                        <Text fontFamily="mukta" fontWeight="400" fontSize="16px">
                            Payment method
                        </Text>
                    </Box>
                    <Box
                        borderWidth={1}
                        borderColor="#E4E4E4"
                        width="100%"
                        maxWidth="444px"
                        height="329px"
                        borderRadius={15}
                        padding="20px"
                    >
                        <Text fontFamily="mukta" fontWeight="400" fontSize="16px">
                            Payment method
                        </Text>
                    </Box>
                </HStack>
            </VStack>
        </PageWrapper>
    )
}

export default Account