import { memo, useState } from "react";
import { Flex, Box, useDisclosure } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import "../../../styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faSignOutAlt, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { SmallScreenDrawer } from "../../molecules/drawer/SmallScreenDrawer";
import { useMutateAuth } from "../../../hooks/useMutateAuth";
import { SmallScreenMenuButton } from './../../atoms/button/SmallScreenMenuButton';
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const Header = memo(() => {

  // const [id, setId] = useState(null)
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(`${import.meta.env.VITE_API_URL}/account`);
  //     setId(response.data.id)import { ViewIcon } from '@chakra-ui/icons';

  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // fetchData();

  const queryClient = useQueryClient()
  const expiry = localStorage.getItem('expiry');
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { logoutMutation } = useMutateAuth()

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const logout = async () => {
    await logoutMutation.mutateAsync()
    queryClient.removeQueries(['account'])
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
        <Flex align="center" mr={9} _hover={{ cursor: "pointer" }}>
          <Box fontSize="lg" textShadow="2px 0px 2px #0b0c0d">
            <Link to="/" className="link">
              <span>～ 曲選出 ～</span>
            </Link>
          </Box>
        </Flex>
        {!(expiry && new Date().getTime() < parseInt(expiry)) ? (
          <Flex align="center" fontSize="md" flexGrow={2} display={{ base: "none", lg: "flex" }}>
            <Box px={3} m={1}>
              <Link to="/tracks" className="link">
                <span>
                  曲を閲覧
                </span>
              </Link>
            </Box>
          </Flex>
        ) : (
          <Flex align="center" fontSize="md" flexGrow={2} display={{ base: "none", lg: "flex" }}>
            <Box px={3} m={1}>
              <Link to="/account/tracks" className="link">
                <span>
                  曲を閲覧
                </span>
              </Link>
            </Box>
          </Flex>
        )}
        <Flex align="center" fontSize="md" flexGrow={2} display={{ base: "none", lg: "flex" }} justifyContent="flex-end">
          {!(expiry && new Date().getTime() < parseInt(expiry)) ? (
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
            <>
              <Box px={3} m={1}>
                <Link to={`/account`} className="link">
                  <span>
                    Myアカウント
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                </Link>
              </Box>
              <Box px={3} m={1}>
                <Link to="/" className="link" onClick={logout}>
                  <span>
                    ログアウト
                    <FontAwesomeIcon icon={faSignOutAlt} />
                  </span>
                </Link>
              </Box>
            </>
          )}
        </Flex>
        <SmallScreenMenuButton onOpen={onOpen} />
      </Flex>
      <SmallScreenDrawer isOpen={isOpen} handleOverlayClick={handleOverlayClick} logout={logout} expiry={expiry} />
    </>
  )
})

