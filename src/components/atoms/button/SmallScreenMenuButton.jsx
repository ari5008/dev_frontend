import { IconButton } from "@chakra-ui/button"
import { HamburgerIcon } from "@chakra-ui/icons"
import { memo } from "react"

export const SmallScreenMenuButton = memo(({onOpen}) => {
    
    return (
        <IconButton
        aria-label="メニューボタン" 
        icon={<HamburgerIcon fontSize='20px'/>} 
        variant="unstyled" 
        display={{ base: "block", lg: "none" }} 
        onClick={onOpen} 
        />
    )
})