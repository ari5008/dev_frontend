import { IconButton } from "@chakra-ui/button"
import { HamburgerIcon } from "@chakra-ui/icons"
import { memo } from "react"

export const MenuIconButton = memo(({onOpen}) => {
    
    return (
        <IconButton
        aria-label="メニューボタン" 
        icon={<HamburgerIcon />} 
        size="xl" 
        variant="unstyled" 
        display={{ base: "block", lg: "none" }} 
        onClick={onOpen} 
        />
    )
})