import { Spinner, Text } from '@chakra-ui/react';
import { memo } from 'react';

export const CustomSpinner = memo(() => {
  return (
    <>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        style={{ width: '5rem', height: '5rem' }}
        mb={2}
      />
      <Text fontSize="20px">...Loading</Text>
    </>
  )
})