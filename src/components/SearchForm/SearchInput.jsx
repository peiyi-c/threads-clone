import {
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import useColors from "../../hooks/useColors";
import PropTypes from "prop-types";

const SearchInput = ({ value, setValue, handleSubmit }) => {
  const { subText } = useColors();
  return (
    <form onSubmit={handleSubmit}>
      <InputGroup mt={"6px"}>
        <InputLeftElement
          pointerEvents="none"
          h={"full"}
          w={"48px"}
          left={"12px"}
        >
          <SearchIcon color={subText} />
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
            <SmallCloseIcon color={subText} onClick={() => setValue("")} />
          </InputRightElement>
        )}
      </InputGroup>
    </form>
  );
};

export default SearchInput;

SearchInput.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  handleSubmit: PropTypes.func,
};
