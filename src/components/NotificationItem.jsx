import { InfoOutlineIcon } from "@chakra-ui/icons"
import { Divider, HStack, Text, VStack } from "@chakra-ui/layout"
import { MenuItem } from "@chakra-ui/menu"
import { Popover, PopoverBody, PopoverContent, PopoverTrigger } from "@chakra-ui/popover"
import StatusBadge from "./StatusBadge"

const NotificationItem = ({projectName, projectDate, projectStatus}) => {
    let projectComplete = projectStatus == "completed"
    return (
        <MenuItem _focus={{bg: 'gray.400'}}>
            <VStack width="100%">
                <HStack width="100%" justifyContent="space-between" alignItems="flex-start">
                    <VStack alignItems="flex-start" gap={0}>
                        <Text
                            fontFamily="jakarta"
                            fontWeight="400"
                            fontSize="14px"
                        >
                            {projectName}
                        </Text>
                        <Text
                            fontFamily="jakarta"
                            fontWeight="400"
                            fontSize="11px"
                            color="gray.300"
                        >
                            {projectDate}
                        </Text>
                    </VStack>
                    <StatusBadge
                        width="110px"
                        bg={projectComplete ? "#EBF6EE" : "#F6EBEB"}
                        color={projectComplete ? "#269D44" : "#E33C3C"}
                        markerPresent
                    >
                        <Text fontFamily="mukta" fontWeight="400" fontSize="14px">
                            {projectComplete ? "Completed" : "Failed"}
                        </Text>
                        {projectComplete ? null :
                            <Popover trigger="hover">
                                <PopoverTrigger>
                                    <InfoOutlineIcon color="black"/>
                                </PopoverTrigger>
                                <PopoverContent bg="#EAEAEA">
                                    <PopoverBody>
                                        <Text
                                            fontFamily="mukta"
                                            fontSize="14px"
                                            fontWeight="400"
                                            color="gray.300"
                                        >
                                            Sorry, there`s been an error.
                                            We have returned the minutes to your balance
                                        </Text>
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>
                        }
                    </StatusBadge>
                </HStack>
                <Divider borderColor="#F3F3F3"/>
            </VStack>
        </MenuItem>
    )
}

export default NotificationItem