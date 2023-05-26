import { Box, Button, Flex, Grid, GridItem, Heading, Input, Spinner, Tag, Text, Textarea } from "@chakra-ui/react";
import { memo, useEffect } from "react";
import { useQueryAccount } from "../../hooks/useQueryAccount";
import { accountStore } from "../../store/accountStore";
import { useMutateAccount } from './../../hooks/useMutateAccount';
import { AccountAvatar } from "../atoms/avatar/AccountAvatar";
import { CheckIcon } from "@chakra-ui/icons";

export const Account = memo(() => {

  const { isLoading } = useQueryAccount()
  const { editedAccount } = accountStore()
  const updateAccount = accountStore((state) => state.updateEditedAccount)
  const { updateAccountMutation, loading } = useMutateAccount()

  const submitAccountHandler = (e) => {
    e.preventDefault()
    updateAccountMutation.mutate(editedAccount)
  }

  useEffect(() => {
    // console.log(editedAccount)
  }, [editedAccount])

  return (
    <>
      {isLoading ? (
        <Flex flexDirection='column' alignItems='center' justifyContent='center' h='90vh'>
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            style={{ width: '5rem', height: '5rem' }}
            mb={2}
          />
          <Text fontSize="20px">...Loading</Text>
        </Flex>
      ) : (
        <Flex
          mt="2.5rem"
          h="80vh"
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
                    <Tag variant='outline' colorScheme='black'>ユーザー名</Tag>
                  </GridItem>
                  <GridItem colSpan={2} >
                    <Input
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
                  <Tag variant="outline" colorScheme="black">
                    プロフィール
                  </Tag>
                </GridItem>
                <Grid templateColumns={{ base: "1fr", md: "1fr auto" }} alignItems="center">
                  <GridItem>
                    <Textarea
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
                      colorScheme="teal"
                      variant="outline"
                      size="md"
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
          
          <Box flex='1' bg='gray.200' borderBottomRadius={10}>
            <Text></Text>
          </Box>
        </Flex >
      )}
    </>
  )
});