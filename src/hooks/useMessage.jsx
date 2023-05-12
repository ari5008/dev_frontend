import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

export const useMessage = () => {
  const toast = useToast();

  const showMessage = useCallback(({title, status } ) => { 
    toast({
      title,
      status,
      position: "bottom-right",
      duration: 2000,
      isClosable: true,
    })
  }, [])

  return { showMessage }
}