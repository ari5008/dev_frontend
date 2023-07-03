import { Box, Button, Flex, Grid, Heading, Input, Stack, Tag, Text, Wrap } from "@chakra-ui/react";
import { memo, useState } from "react";
import { useQueryAccount } from "../../hooks/useQueryAccount";
import { accountStore } from "../../store/accountStore";
import { useMutateAccount } from './../../hooks/useMutateAccount';
import { AccountAvatar } from "../atoms/avatar/AccountAvatar";
import { CheckIcon } from "@chakra-ui/icons";
import { CustomSpinner } from "../atoms/spinner/CustomSpinner";
import { TrackCard } from "../molecules/card/TrackCard";
import { ScrollToTopOnMount } from "../atoms/scroll/ScrollToTopOnMount";
import { useQueryTracks } from "../../hooks/useQueryTrack";

export const Account = memo(() => {

  const [flag] = useState(true)
  const { data: accountData, isLoading } = useQueryAccount()
  const { data: trackData, isLoading: trackLoading } = useQueryTracks()
  const trackDataByAccountId = trackData?.slice().filter((track) => track.account_id === accountData?.id)

  const { editedAccount } = accountStore()
  const updateAccount = accountStore((state) => state.updateEditedAccount)
  const { updateAccountMutation, loading } = useMutateAccount()

  const submitAccountHandler = (e) => {
    e.preventDefault()
    const accountAndTrack = [editedAccount, data]
    updateAccountMutation.mutate(accountAndTrack)
  }

  return (
    <>
      {isLoading ? (
        <Flex flexDirection='column' alignItems='center' justifyContent='center' h='90vh'>
          <CustomSpinner />
        </Flex>
      ) : (
        <Box minH="90vh">
          <Flex
            mt="2.5rem"
            mb={10}
            color='black'
            flexDirection='column'
          >
            <ScrollToTopOnMount />
            <Box h={{ base: '265px', md: '250px' }} bg='white' borderTopRadius={10}>
              <Heading textAlign='center' fontSize="25px" py={7}>アカウント画面</Heading>
              <form onSubmit={submitAccountHandler}>
                <Flex justifyContent="center">
                  <Box pr={{ base: "5px", md: "20px" }} pt={2}>
                    <AccountAvatar updateAccount={updateAccount} editedAccount={editedAccount} />
                  </Box>
                  <Stack>
                    <Box textAlign='left' >
                      <Tag colorScheme='blackAlpha'>
                        ユーザー名
                      </Tag>
                    </Box>
                    <Input
                      size={{ base: "lg", md: "md" }}
                      name="user_name"
                      placeholder='(15文字以内)'
                      variant='outline'
                      type="text"
                      w={{ base: "230px", md: "400px" }}
                      onChange={(e) => updateAccount({ ...editedAccount, user_name: e.target.value })}
                      value={editedAccount.user_name}
                    />
                  </Stack>
                </Flex>
                <Flex justifyContent="center">
                  <Button
                    size={{ base: "lg", md: "md" }}
                    colorScheme="teal"
                    type="submit"
                    mt="20px"
                    isLoading={loading}
                    loadingText="登録する"
                  >
                    <CheckIcon mr={1} />
                    登録する
                  </Button>
                </Flex>
              </form>
            </Box>
            <Box flex='1' bg='gray.200' borderBottomRadius={10} py={7} >
              <Heading textAlign="center" color="blackAlpha.600" size="xl" pb={1}>過去の選曲</Heading>
              {trackLoading ? (
                <Flex flexDirection='column' alignItems='center' justifyContent='center' h='30vh' >
                  <CustomSpinner />
                </Flex>
              ) : (
                <>
                  {(Array.isArray(trackDataByAccountId) && trackDataByAccountId?.length !== 0) ? (
                    <Wrap pt={{ base: 4, md: 10 }} justify="center">
                      <Grid templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }} gap="50px">
                        {trackDataByAccountId?.map((dat, index) => (
                          <Box key={index} minWidth={{ base: "auto", md: "250px" }}>
                            <TrackCard dat={dat} flag={flag} />
                          </Box>
                        ))}
                      </Grid>
                    </Wrap>
                  ) : (
                    <Wrap py={{ base: 2, md: 4 }} justify="center" color="blue.900" fontWeight="bold">
                      <Text mt={4}>何も選曲されていません...</Text>
                    </Wrap>
                  )}
                </>
              )}
            </Box>
          </Flex >
        </Box>
      )}
    </>
  )
});