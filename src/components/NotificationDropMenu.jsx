import { Box } from "@chakra-ui/layout"
import NotificationIcon from "../assets/NotificationIcon"
import { Menu, MenuButton, MenuList } from "@chakra-ui/menu"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { Button } from "@chakra-ui/button"
import NotificationItem from "./NotificationItem"

const NotificationDropMenu = () => {
    return(
        <Menu>
            <MenuButton
                variant="action"
                as={Button}
                rightIcon={<ChevronDownIcon boxSize={5}/>}
                leftIcon={<>
                    <NotificationIcon />
                    <Box
                        width='8px'
                        height='8px'
                        as='span'
                        position='absolute'
                        right='51px'
                        top='11px'
                        bgColor='accent.100'
                        borderRadius='20px'
                        zIndex={9999}
                        p='1px'
                    />
                </>}
                fontFamily="jakarta"
                fontSize="12px"
                fontWeight="400"
                color="#C2C2C2"
                _active={{color: "white.100"}}
            />
            <MenuList
                width="432px"
                borderTopRadius={0}
                borderBottomRadius="30px"
                position="relative"
                top="4px"
                paddingBottom="30px"
            >
                <NotificationItem
                    projectName="Chris Evans: Brazilian"
                    projectDate="Jul 7, 5:10 PM"
                    projectStatus="completed"
                />
                <NotificationItem
                    projectName="Van Damme: Malaysian"
                    projectDate="Jul 7, 5:10 PM"
                    projectStatus="failed"
                />
            </MenuList>
        </Menu>
    )
}

export default NotificationDropMenu