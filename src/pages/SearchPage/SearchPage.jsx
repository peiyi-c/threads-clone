import {
  InputGroup,
  InputLeftElement,
  Input,
  useColorModeValue,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

const SearchPage = () => {
  const [value, setValue] = useState("");
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
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          size={{ base: "xs", md: "md" }}
          variant={"search"}
          pl={"3.25rem"}
          maxlength="25"
          placeholder="Search"
        />
        {value.length > 0 && (
          <InputRightElement
            h={"full"}
            w={"48px"}
            right={"12px"}
            cursor={"pointer"}
          >
            <SmallCloseIcon
              role="button"
              onClick={() => setValue("")}
              color={IconColor}
            />
          </InputRightElement>
        )}
      </InputGroup>
    </>
  );
};

export default SearchPage;
