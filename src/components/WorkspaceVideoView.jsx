import { ArrowBackIcon, DeleteIcon, DownloadIcon, EditIcon } from "@chakra-ui/icons"
import { Box, Button, Divider, HStack, Image, Modal, ModalBody, ModalContent, ModalOverlay, Select, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react"
import TranslationIcon from "../assets/TranslationIcon"
import StatusBadge from "./StatusBadge"

const WorkspaceVideoView = ({chosenProject, isOpen, onClose}) => {
    let languageElements
    if (chosenProject) languageElements = chosenProject.languageBadges.map((badge, index) => {
        let color
        let bg = "#EBF6EE"
        let statusColumn

        if (badge.status == "ready") {
            color = "#269D44"
            statusColumn = <StatusBadge
                                color={color}
                                bg={bg}
                                markerPresent
                                key={index}
                                width="fit-content"
                            >
                                <Text fontFamily="mukta" fontWeight="400" fontSize="14px">
                                    Completed
                                </Text>
                            </StatusBadge>
        }
        if (badge.status == "in_progress") {
            color = "#076EF4"
            statusColumn = <StatusBadge
                                color={color}
                                bg={bg}
                                markerPresent
                                key={index}
                                width="fit-content"
                            >
                                <Text fontFamily="mukta" fontWeight="400" fontSize="14px">
                                    In progress
                                    {badge.statusMessage
                                        ? ' - ' + badge.statusMessage
                                        : null}
                                </Text>
                            </StatusBadge>
        }
        if (badge.status == "source") {
            statusColumn = <Text
                                fontFamily="jakarta"
                                fontWeight="400"
                                fontSize="14px"
                            >Source</Text>
        }

        return (
            <Tr key={index} _hover={{bg: 'gray.400'}}>
                <Td>
                    <Text
                        fontFamily="jakarta"
                        fontWeight="400"
                        fontSize="14px"
                    >{badge.language}</Text>
                </Td>
                <Td>
                    {statusColumn}
                </Td>
                <Td>
                    <HStack
                        fontFamily="mukta"
                        fontWeight="400"
                        fontSize="13px"
                        color="gray.300"
                    >
                        <Button colorScheme="white" color="gray.300">
                            <HStack>
                                <DownloadIcon />
                                <Text>
                                    Export
                                </Text>
                            </HStack>
                        </Button>
                        <Divider orientation="vertical" height="15px" />
                        <Select placeholder="MOV" />
                    </HStack>
                </Td>
                <Td>
                    <Button 
                        colorScheme="white"
                        color="#999999"
                        size="xs"
                        height="30px"
                        _hover={{
                            bg: "#FF7E7E",
                            color: "white",
                        }}
                    >
                        <DeleteIcon boxSize={4} />
                    </Button>
                </Td>
            </Tr>
        )
    })

    return chosenProject
        ? <Modal
            isOpen={isOpen}
            onClose={onClose}
            motionPreset="slideInRight"
            width="100%"
        >
            <ModalOverlay />
            <ModalContent
                bg="white"
                top="68px"
                height="76.2vh"
                width="800px"
                maxWidth="800px"
                borderRadius={15}
            >
                <ModalBody padding="20px">
                    <VStack width="100%" gap="20px">
                        <HStack width="100%" justifyContent="space-between">
                            <HStack>
                                <Button
                                    onClick={onClose}
                                    colorScheme="white"
                                    color="#999999"
                                    _hover={{bg:"gray.400"}}
                                >
                                    <ArrowBackIcon boxSize={4}/>
                                </Button>
                                <Text
                                    fontFamily="raleway"
                                    fontSize="16px"
                                    fontWeight="500"
                                >
                                    {chosenProject.title}
                                </Text>
                                <Button colorScheme="white" color="#999999" size="xs">
                                    <EditIcon boxSize={4} />
                                </Button>
                                <Divider orientation="vertical" height="20px" />
                                <Button 
                                    colorScheme="white"
                                    color="#999999"
                                    size="xs"
                                    height="30px"
                                    _hover={{
                                        bg: "#FF7E7E",
                                        color: "white",
                                    }}
                                >
                                    <DeleteIcon boxSize={4} />
                                </Button>
                            </HStack>
                            <Button variant="action">
                                <HStack>
                                    <TranslationIcon />
                                    <Text
                                        fontFamily="mukta"
                                        fontSize="15px"
                                        fontWeight="600"
                                    >
                                        Translate this video
                                    </Text>
                                </HStack>
                            </Button>
                        </HStack>
                        <Box>
                            <Image
                                src={chosenProject.pictureURL}
                                width="650px"
                                objectFit="contain"
                            />
                        </Box>
                        <TableContainer width="650px">
                            <Table variant="simple">
                                <Thead>
                                    <Tr>
                                        <Th>
                                            <Text
                                                textTransform="none"
                                                fontSize="14px"
                                                fontFamily="mukta"
                                                fontWeight="400"
                                            >Language</Text>
                                        </Th>
                                        <Th>
                                            <Text
                                                textTransform="none"
                                                fontSize="14px"
                                                fontFamily="mukta"
                                                fontWeight="400"
                                            >Status</Text>
                                        </Th>
                                        <Th>
                                            <Text
                                                textTransform="none"
                                                fontSize="14px"
                                                fontFamily="mukta"
                                                fontWeight="400"
                                            >Export / Format</Text>
                                        </Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {languageElements}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
        : null
    
}

export default WorkspaceVideoView