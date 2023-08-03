import { VStack, Text, HStack, Select, Card, CardBody, Button, useDisclosure } from "@chakra-ui/react"
import PageWrapper from "../components/PageWrapper"
import LanguageSelectIcon from "../assets/LanguageSelectIcon"
import { AddIcon } from "@chakra-ui/icons"
import WorkspaceFileItem from "../components/WorkspaceFileItem"
import { useState } from "react"
import WorkspaceVideoView from "../components/WorkspaceVideoView"

const WorkspaceFiles = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ chosenProject, setChosenProject ] = useState(null)

    const projects = [
        {
            pictureURL: "workspace1.png",
            title: "Chris Evans",
            uploadDate: "Jul 7, 5:10 PM",
            languageBadges: [
                {
                    language: "Brazilian",
                    status: "ready",
                },
                {
                    language: "Malaysian",
                    status: "in_progress",
                    statusMessage: "19 min left",
                },
                {
                    language: "English",
                    status: "source",
                },
            ],
        },
        {
            pictureURL: "workspace2.png",
            title: "Kendrick Lamar",
            uploadDate: "Jul 7, 5:10 PM",
            languageBadges: [
                {
                    language: "Malaysian",
                    status: "in_progress",
                    statusMessage: "19 min left",
                },
                {
                    language: "English",
                    status: "source",
                },
            ],
        },
        {
            pictureURL: "workspace3.png",
            title: "Van Damme",
            uploadDate: "Jul 7, 5:10 PM",
            languageBadges: [
                {
                    language: "Malaysian",
                    status: "in_progress",
                    statusMessage: "19 min left",
                },
                {
                    language: "English",
                    status: "source",
                },
            ],
        },
        {
            pictureURL: "workspace4.png",
            title: "Leonardo's renaissance",
            uploadDate: "Jul 7, 5:10 PM",
            languageBadges: [
                {
                    language: "Malaysian",
                    status: "in_progress",
                    statusMessage: "19 min left",
                },
                {
                    language: "English",
                    status: "source",
                },
            ],
        }
    ]

    const updateChosenProject = (index) => {
        setChosenProject(projects[index])
    }

    const projectElements = projects.map((project, index) => (
        <WorkspaceFileItem
            pictureURL={project.pictureURL}
            title={project.title}
            uploadDate={project.uploadDate}
            languageBadges={project.languageBadges}
            key={index}
            onClick={() => { updateChosenProject(index); onOpen() }}
        />
    ))

    return (
        <>
            <PageWrapper>
                <Card
                    bg='white'
                    borderRadius={15}
                    width="100%"
                >
                    <CardBody
                        padding="20px"
                        paddingTop="10px"
                        paddingBottom="10px"
                    >
                        <HStack
                            width="100%"
                            justifyContent="space-between"
                        >
                            <HStack>
                                <LanguageSelectIcon boxSize={4} color="gray.300"/>
                                <Select
                                    placeholder={"Language"}
                                    fontFamily="jakarta"
                                />
                            </HStack>
                            <HStack>
                                <Select
                                    placeholder={"Sort by"}
                                    fontFamily="jakarta"
                                />
                            </HStack>
                        </HStack>
                    </CardBody>
                </Card>
                <Card
                    bg='white'
                    borderRadius={15}
                    width="100%"
                    height="100%"
                >
                    <CardBody padding="20px">
                        <VStack
                            bg='white'
                            borderRadius={15}
                            alignItems="flex-start"
                            gap="30px"
                        >
                            <HStack
                                width="100%"
                                justifyContent="space-between"
                                alignItems="flex-state"
                            >
                                <Text fontFamily="mukta" fontWeight={400} fontSize="20px">
                                    Files
                                </Text>
                                <Button variant="action">
                                    <HStack>
                                        <AddIcon />
                                        <Text
                                            fontFamily="mukta"
                                            fontWeight="500"
                                            fontSize="15px"
                                        >
                                            Translate new video
                                        </Text>
                                    </HStack>
                                </Button>
                            </HStack>
                            <VStack width="100%">
                                {projectElements}
                            </VStack>
                            <WorkspaceVideoView
                                chosenProject={chosenProject}
                                isOpen={isOpen}
                                onClose={onClose}
                            />
                        </VStack>
                    </CardBody>
                </Card>
            </PageWrapper>
        </>
    )
}

export default WorkspaceFiles