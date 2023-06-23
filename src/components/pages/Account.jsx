import { Box, Button, Flex, Grid, GridItem, Heading, Input, Tag, Textarea, Wrap } from "@chakra-ui/react";
import { memo, useState } from "react";
import { useQueryAccount } from "../../hooks/useQueryAccount";
import { accountStore } from "../../store/accountStore";
import { useMutateAccount } from './../../hooks/useMutateAccount';
import { AccountAvatar } from "../atoms/avatar/AccountAvatar";
import { CheckIcon } from "@chakra-ui/icons";
import { CustomSpinner } from "../atoms/spinner/CustomSpinner";
import { TrackCard } from "../molecules/card/TrackCard";
import { useTracksByAccountId } from "../../hooks/useQueryTrackByAccountId";

export const Account = memo(() => {

  const [flag] = useState(true)
  const { data: accountData, isLoading } = useQueryAccount()
  const { data, isLoading: trackLoading } = useTracksByAccountId(accountData?.id);
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
        <Flex
          mt="2.5rem"
          mb={8}
          color='black'
          flexDirection='column'

        >
          <Box h={{ base: '380px', md: '330px' }} bg='white' borderTopRadius={10}>
            <Heading textAlign='center' fontSize="25px" py={7}>アカウント画面</Heading>
            <form onSubmit={submitAccountHandler}>
              <Grid
                templateColumns="0.1fr 1fr"
                pl={{ base: '25px', md: '80px' }}
              >
                <AccountAvatar updateAccount={updateAccount} editedAccount={editedAccount} />
                <Grid templateRows='repeat(2, auto)' gap={2} >
                  <GridItem rowSpan={1} colSpan={2} >
                    <Tag  colorScheme='blackAlpha' >ユーザー名</Tag>
                  </GridItem>
                  <GridItem colSpan={2} >
                    <Input
                      size={{ base: "lg", md: "md" }}
                      name="user_name"
                      placeholder='(20文字以内)'
                      variant='outline'
                      w="95%"
                      type="text"
                      width={{ base: '95%', md: '50%' }}
                      onChange={(e) => updateAccount({ ...editedAccount, user_name: e.target.value })}
                      value={editedAccount.user_name}
                    />
                  </GridItem>
                </Grid>
              </Grid>
              <Grid templateColumns="1fr" gap={2} pt={6} pl={{ base: '25px', md: '80px' }}>
                <GridItem>
                  <Tag  colorScheme="blackAlpha">
                    プロフィール
                  </Tag>
                </GridItem>
                <Grid templateColumns={{ base: "1fr", md: "1fr auto" }} alignItems="center">
                  <GridItem>
                    <Textarea
                      size={{ base: "lg", md: "md" }}
                      name="introduction"
                      placeholder="(100文字以内)"
                      resize="none"
                      pr={6}
                      width="95%"
                      mb={{ base: "20px", md: "0px" }}
                      type="text"
                      onChange={(e) =>
                        updateAccount({ ...editedAccount, introduction: e.target.value })
                      }
                      value={editedAccount.introduction}
                    />
                  </GridItem>
                  <GridItem alignSelf="center" justifySelf="center">
                    <Button
                      size={{ base: "lg", md: "md" }}
                      colorScheme="teal"
                      type="submit"
                      mr="50px"
                      mt={{ base: "0px", md: "35px" }}
                      isLoading={loading}
                      loadingText="登録する"
                    >
                      <CheckIcon mr={1} />
                      登録する
                    </Button>
                  </GridItem>
                </Grid>
              </Grid>
            </form>
          </Box>
          <Box flex='1' bg='gray.200' borderBottomRadius={10} py={7}>
            <Heading textAlign="center" color="blackAlpha.600" size="xl">過去の選曲</Heading>
            <Wrap pt={{ base: 4, md: 10 }} justify="center">
              <Grid templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }} gap="50px">
                {trackLoading ? (
                  <Flex flexDirection='column' alignItems='center' justifyContent='center' h='30vh'>
                    <CustomSpinner />
                  </Flex>
                ) : (
                  <>
                    {data?.map((dat, index) => (
                      <Box key={index} minWidth={{ base: "auto", md: "250px" }}>
                        <TrackCard dat={dat} flag={flag} />
                      </Box>
                    ))}
                  </>
                )}
              </Grid>
            </Wrap>
          </Box>
        </Flex >
      )}
    </>
  )
});