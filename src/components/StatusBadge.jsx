import { Box, HStack } from "@chakra-ui/react"

const StatusBadge = ({markerPresent, children, ...props}) => {
    return (
        <HStack
            height="25px"
            borderRadius="11px"
            alignItems="center"
            padding="10px"
            {...props}
        >
            {markerPresent
                ? <Box
                    width='8px'
                    height='8px'
                    as='span'
                    bgColor={props.color}
                    borderRadius='20px'
                    zIndex={1}
                    p='1px'
                />
                : null}
            {children}
        </HStack>
    )
}

export default StatusBadge