import { memo } from "react";
import { Flex, Box, useDisclosure } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import "../../../styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { SmallScreenDrawer } from "../../molecules/drawer/SmallScreenDrawer";
import { useLoginUser } from "../../../providers/LoginUserProvider";
import { useMutateAuth } from "../../../hooks/useMutateAuth";

export const Header = memo(() => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isLoggedIn } = useLoginUser()
  const { logoutMutation } = useMutateAuth()

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const navigate = useNavigate()

  const onClickHome = () => navigate("/")
  const onClickLogin = () => navigate("/login")
  const onClickSignup = () => navigate("/signup")
  const onClickViewTopic = () => navigate("/topic")

  const logout = async () => {
    await logoutMutation.mutateAsync()
  }

  return (
    <>
      <Flex
        as="nav"
        bg="#154563"
        color="white"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 3 }}
        position="fixed"
        zIndex="10"
        top="0"
        width="100%"
      >
        <Flex align="center" mr={8} _hover={{ cursor: "pointer" }}>
          <Box fontSize="lg" textShadow="2px 0px 2px #0b0c0d">
            <Link to="/" className="link">
              <span>曲選出</span>
            </Link>
          </Box>
        </Flex>
        <Flex align="center" fontSize="md" flexGrow={2} display={{ base: "none", lg: "flex" }}>
          <Box px={2} m={1}>
            <Link to="/topic" className="link">
              <span>Topic閲覧</span>
            </Link>
          </Box>
        </Flex>
        <Flex align="center" fontSize="md" flexGrow={2} display={{ base: "none", lg: "flex" }} justifyContent="flex-end">
          {!isLoggedIn ? (
            <>
              <Box px={3} m={1}>
                <Link to="/login" className="link">
                  <span>
                    ログイン
                    <FontAwesomeIcon icon={faSignInAlt} />
                  </span>
                </Link>
              </Box>
              <Box px={3} m={1}>
                <Link to="/signup" className="link">
                  <span>
                    新規登録
                    <FontAwesomeIcon icon={faUserPlus} />
                  </span>
                </Link>
              </Box>
            </>
          ) : (
            <Box px={3} m={1}>
              <Link to="/" className="link" onClick={logout}>
                <span>ログアウト</span>
              </Link>
            </Box>
          )}
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <SmallScreenDrawer isOpen={isOpen} handleOverlayClick={handleOverlayClick} onClickHome={onClickHome} onClickLogin={onClickLogin} onClickSignup={onClickSignup} onClickViewTopic={onClickViewTopic} />
    </>
  )
})

