import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

const useShowToast = () => {
  const toast = useToast();

  const showToast = useCallback(
    (title, description, status) => {
      toast({
        title,
        description,
        status,
        duration: 2500,
        isClosable: true,
        variant: "subtle",
      });
    },
    [toast]
  );

  return showToast;
};

export default useShowToast;
