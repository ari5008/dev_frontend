import { IconButton } from "@chakra-ui/button"
import { HamburgerIcon } from "@chakra-ui/icons"
import { Flex, Text  } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { memo, useState } from "react"

export const SideMapIconButton = memo(({ onOpen }) => {

  const [isOpen, setIsOpen] = useState(false);
  const MotionHamburgerIcon = motion(HamburgerIcon);

  return (
    <>
      <Flex
        align="center"
        flexDirection="column"
      >
        <IconButton
          aria-label="メニューボタン"
          icon={<MotionHamburgerIcon
            onClick={() => setIsOpen(!isOpen)}
            color="gray.400"
            transition={{
              duration: 0.2,
            }}
            whileHover={{
              scale: 1.09,
            }}
            />}
          fontSize='65px'
          variant="unstyled"
          onClick={onOpen}
        />
        <Text color="gray.400" fontSize='15px' paddingTop="2.7rem">サイドマップ</Text>
      </Flex>
    </>
  )
})
