import { Divider, HStack } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import { Button } from "@chakra-ui/button"
import { Menu, MenuButton } from "@chakra-ui/menu"
import { ChevronDownIcon, TimeIcon } from "@chakra-ui/icons"
import AccountIcon from "../assets/AccountIcon"
import WorkspaceIcon from "../assets/WorkspaceIcon"
import NotificationDropMenu from "./NotificationDropMenu"

const Header = () => {
    return (
        <>
            <HStack
                height="70px"
                bg="brand.100"
                width="full"
                paddingLeft="15px"
                paddingRight="15px"
                borderBottomLeftRadius={15}
                borderBottomRightRadius={15}
                display="flex"
                justifyContent="space-between"
            >
                <Image src="header-logo.svg" />
                <HStack>
                    <Menu>
                        <MenuButton
                            variant="action"
                            as={Button}
                            rightIcon={<ChevronDownIcon boxSize={5} />}
                            leftIcon={<TimeIcon boxSize={4}/>}
                            fontFamily="jakarta"
                            fontSize="12px"
                            fontWeight="400"
                            color="#C2C2C2"
                            _active={{color: "white.100"}}
                        >
                            4 projects in progress
                        </MenuButton>
                    </Menu>
                    <NotificationDropMenu />
                    <Divider orientation="vertical" borderColor="white.100" height="25px"/>
                    <Button
                        color="#C2C2C2"
                        _active={{color: "white.100"}}
                        variant="action"
                        leftIcon={<WorkspaceIcon />}
                        fontFamily="jakarta"
                        fontSize="14px"
                    >
                        Workspace
                    </Button>
                    <Button
                        color="#C2C2C2"
                        _active={{color: "white.100"}}
                        variant="action"
                        leftIcon={<AccountIcon />}
                        fontFamily="jakarta"
                        fontSize="14px"
                    >
                        Account
                    </Button>
                </HStack>
            </HStack>
        </>
    )
}

export default Header