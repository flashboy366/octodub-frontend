import { HStack, Image, Text, VStack } from "@chakra-ui/react"
import TranslationIcon from "../assets/TranslationIcon"
import StatusBadge from "./StatusBadge"

const WorkspaceFileItem = ({pictureURL, title, uploadDate, languageBadges, ...props}) => {
    const languageBadgeElements = languageBadges.map((badge, index) => {
        let color
        let bg

        if (badge.status == "ready") {
            color = "black"
            bg = "#00D1FF"
        }
        if (badge.status == "in_progress") {
            color = "#076EF4"
            bg = "#EBF1FD"
        }
        if (badge.status == "source") {
            color = "black"
            bg = "#FFA800"
        }

        return (
            <StatusBadge
                color={color}
                bg={bg}
                markerPresent={badge.statusMessage}
                key={index}
            >
                <Text fontFamily="mukta" fontWeight="400" fontSize="14px">
                    {badge.language}
                    {badge.statusMessage
                        ? ' - ' + badge.statusMessage
                        : null}
                </Text>
            </StatusBadge>
        )
    })

    return (
        <HStack
            width="100%"
            borderRadius="11px"
            borderColor="#F3F3F3"
            borderWidth="1px"
            overflow="hidden"
            gap="17px"
            paddingRight="15px"
            _hover={{bg: 'gray.400'}}
            {...props}
        >
            <Image src={pictureURL} width="170px" height="90px" />
            <VStack width="100%" gap="25px">
                <HStack width="100%" justifyContent="space-between" >
                    <Text fontFamily="raleway" fontWeight="400" fontSize="16px">
                        {title}
                    </Text>
                    <HStack>
                        {languageBadgeElements}
                    </HStack>
                </HStack>
                <HStack width="100%" paddingLeft="7px" paddingRight="7px" justifyContent="space-between" >
                    <TranslationIcon color="#999999"/>
                    <Text
                        fontFamily="jakarta"
                        fontWeight="400"
                        fontSize="12px"
                        color="gray.300"
                    >
                        {uploadDate}
                    </Text>
                </HStack>
            </VStack>
        </HStack>
    )
}

export default WorkspaceFileItem