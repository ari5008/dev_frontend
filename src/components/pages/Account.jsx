import { Box, Button, Flex, Heading, Input, Spinner, Text, Textarea } from "@chakra-ui/react";
import { memo, useEffect } from "react";
import { useQueryAccount } from "../../hooks/useQueryAccount";
import { accountStore } from "../../store/accountStore";
import { useMutateAccount } from './../../hooks/useMutateAccount';
import { AccountAvatar } from "../atoms/avatar/AccountAvatar";

export const Account = memo(() => {

  const { isLoading } = useQueryAccount()
  const { editedAccount } = accountStore()
  const updateAccount = accountStore((state) => state.updateEditedAccount)
  const { updateAccountMutation } = useMutateAccount()

  useEffect(() => {
    // console.log(editedAccount)
  }, [editedAccount])

  const submitAccountHandler = (e) => {
    e.preventDefault()
    updateAccountMutation.mutate(editedAccount)
  }

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
          <Box h={{ base: '360px', md: '300px' }} bg='white' borderTopRadius={10}>
            <Heading textAlign='center' fontSize="25px" py={7}>アカウント画面</Heading>
            <Box ml={{ base: '25px', md: '45px' }}>
              <form onSubmit={submitAccountHandler}>
                <Box
                  display='flex'
                  alignItems='center'
                  justifyContent='left'
                  pb={8}
                >
                  <AccountAvatar updateAccount={updateAccount} editedAccount={editedAccount}/>
                  <Input
                    placeholder='ユーザー名(20文字以内)'
                    variant='outline'
                    w="60%"
                    type="text"
                    onChange={(e) => updateAccount({ ...editedAccount, name: e.target.value })}
                    value={editedAccount.name}
                  />
                </Box>
                <Box
                  display='flex'
                  alignItems={{ base: 'center', md: 'flex-end' }}
                  justifyContent='left'
                  flexDirection={{ base: 'column', md: 'row' }}
                >
                  <Textarea
                    placeholder='プロフィール(100文字以内)'
                    resize="none"
                    mr={5}
                    mb={{ base: '20px', md: '0px' }}
                    type="text"
                    onChange={(e) => updateAccount({ ...editedAccount, introduction: e.target.value })}
                    value={editedAccount.introduction}
                  />
                  <Button
                    colorScheme='teal' variant='outline'
                    mr={8}
                    size="md"
                    type="submit"
                  >
                    登録する
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
          <Box flex='1' bg='gray.200' borderBottomRadius={10}>
            <Text></Text>
          </Box>
        </Flex >
      )}
    </>
  )
});