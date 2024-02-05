/* eslint-disable react/prop-types */
import {
  InputGroup,
  InputLeftElement,
  Input,
  useColorModeValue,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";

const SearchInput = ({ value, setValue, handleSubmit }) => {
  const IconColor = useColorModeValue("#999999", "#777777");

  return (
    <form onSubmit={handleSubmit}>
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
          value={value || ""}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          size={{ base: "xs", md: "md" }}
          variant={"search"}
          pl={"3.25rem"}
          maxLength="25"
          placeholder="Search"
        />
        {value?.length > 0 && (
          <InputRightElement
            h={"full"}
            w={"48px"}
            right={"12px"}
            cursor={"pointer"}
          >
            <SmallCloseIcon color={IconColor} onClick={() => setValue("")} />
          </InputRightElement>
        )}
      </InputGroup>
    </form>
  );
};

export default SearchInput;
