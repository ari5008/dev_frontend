import { Alert, AlertIcon, AlertTitle, Stack } from "@chakra-ui/react";

const ErrorAlert = ({ errors }) => {

  return (
    <Stack spacing={3} my={5}>
      {errors.map((error, index) => (
        <Alert status="error" key={index} color="black">
          <AlertIcon />
          <AlertTitle>{error}</AlertTitle>
        </Alert>
      ))} 
    </Stack>
  );
};

export default ErrorAlert;