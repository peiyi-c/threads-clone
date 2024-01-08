import {
  InputGroup,
  InputLeftElement,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchPage = () => {
  const IconColor = useColorModeValue("#999999", "#777777");
  return (
    <>
      <InputGroup mt={"6px"}>
        <InputLeftElement
          pointerEvents="none"
          h={"full"}
          w={"48px"}
          left={"12px"}
        >
          <SearchIcon color={IconColor} />
        </InputLeftElement>
        <Input
          type="text"
          size={"md"}
          variant={"search"}
          pl={"3.25rem"}
          maxlength="25"
          placeholder="Search"
        />
      </InputGroup>
    </>
  );
};

export default SearchPage;
