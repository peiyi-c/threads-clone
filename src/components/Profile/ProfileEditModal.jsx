/* eslint-disable no-unused-vars */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Button,
  Switch,
  Avatar,
  HStack,
  useColorModeValue,
  ModalHeader,
  Heading,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useRef, useState } from "react";
import usePreviewImg from "../../hooks/usePreviewImg";
import useEditProfile from "../../hooks/useEditProfile";
import PropTypes from "prop-types";

const ProfileEditModal = ({ onCloseEdit, isOpenEdit, user }) => {
  const borderColor = useColorModeValue("#DADDE1", "#F3F5F726");
  const [inputs, setInputs] = useState({
    displayName: user.displayName,
    profilePicURL: user.profilePicURL,
    bioDescription: user.bioDescription,
    bioLink: user.bioLink,
    isPrivate: user.isPrivate,
  });
  const [field, setField] = useState(null);
  const fileRef = useRef();

  const { onOpen, isOpen, onClose } = useDisclosure();
  const { handleImgChange, selectedFile, setSelectedFile } = usePreviewImg();
  const { editProfile, isUpdating } = useEditProfile();

  const togglePrivate = () => {
    setInputs((prev) => ({
      ...prev,
      isPrivate: !prev.isPrivate,
    }));
  };

  const handleOnOpen = (e) => {
    setField((prev) => e.target.name);
    onOpen();
  };

  const handleSubmit = () => {
    editProfile(inputs, selectedFile);
    setSelectedFile(null);
    onCloseEdit();
  };

  return (
    <>
      <Modal
        isCentered
        isOpen={isOpenEdit}
        onClose={onCloseEdit}
        size={"lg"}
        variant={"form"}
      >
        <ModalOverlay />
        <form>
          <ModalContent>
            <ModalBody>
              <HStack gap={5}>
                <FormControl mb={3} borderBottom={`1px solid ${borderColor}`}>
                  <FormLabel mb={0} fontSize={"15px"} fontWeight={"bold"}>
                    Display Name
                  </FormLabel>
                  <Input
                    onClick={handleOnOpen}
                    title="display name"
                    type="text"
                    variant={"standard"}
                    size="md"
                    value={inputs.displayName}
                    name="displayName"
                    readOnly
                    cursor={"pointer"}
                  />
                </FormControl>
                <Avatar
                  src={selectedFile || inputs.profilePicURL}
                  alt={inputs.displayName}
                  size={"md"}
                  alignSelf={"flex-start"}
                  onClick={() => fileRef.current.click()}
                  cursor={"pointer"}
                />
                <Input
                  type="file"
                  ref={fileRef}
                  hidden
                  onChange={handleImgChange}
                />
              </HStack>

              <FormControl mb={3} borderBottom={`1px solid ${borderColor}`}>
                <FormLabel mb={0} fontSize={"15px"} fontWeight={"bold"}>
                  Bio
                </FormLabel>
                <Input
                  onClick={handleOnOpen}
                  title="bio"
                  type="text"
                  variant={"standard"}
                  size="md"
                  value={inputs.bioDescription}
                  name="bioDescription"
                  readOnly
                  cursor={"pointer"}
                />
              </FormControl>
              <FormControl mb={3} borderBottom={`1px solid ${borderColor}`}>
                <FormLabel mb={0} fontSize={"15px"} fontWeight={"bold"}>
                  Link
                </FormLabel>
                <Input
                  onClick={handleOnOpen}
                  title="link"
                  type="text"
                  variant={"standard"}
                  size="md"
                  placeholder="+ Add link"
                  value={inputs.bioLink}
                  name="bioLink"
                  readOnly
                  cursor={"pointer"}
                />
              </FormControl>
              <FormControl display={"flex"} justifyContent={"space-between"}>
                <FormLabel
                  htmlFor="profile-private"
                  fontSize={"15px"}
                  fontWeight={"bold"}
                >
                  Private profile
                </FormLabel>

                <Switch
                  id="profile-private"
                  size="lg"
                  colorScheme="blackAlpha"
                  name="isPrivate"
                  onChange={togglePrivate}
                  isChecked={inputs.isPrivate ? "checked" : null}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                onClick={handleSubmit}
                isLoading={isUpdating}
                type="submit"
                w={"full"}
                borderRadius={8}
                py={6}
              >
                Done
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
      {isOpen && (
        <ProfileEditFieldModal
          onCloseEdit={onCloseEdit}
          onCloseField={onClose}
          isOpenField={isOpen}
          setInputs={setInputs}
          inputs={inputs}
          field={field}
        />
      )}
    </>
  );
};

ProfileEditModal.propTypes = {
  onCloseEdit: PropTypes.func,
  isOpenEdit: PropTypes.bool,
  user: PropTypes.object,
};

export default ProfileEditModal;

// modal for each field
const ProfileEditFieldModal = ({
  onCloseField,
  isOpenField,
  inputs,
  setInputs,
  field,
}) => {
  const [inputEdit, setInputEdit] = useState(inputs[field]);

  const filterField = (field) => {
    switch (field) {
      case "displayName":
        return "display name";
      case "bioLink":
        return "link";
      case "bioDescription":
        return "bio";
    }
  };

  const handleChange = (e) => {
    setInputEdit((prev) => e.target.value);
  };

  const handleDone = () => {
    setInputs({
      ...inputs,
      [field]: inputEdit,
    });
    onCloseField();
  };

  return (
    <Modal
      isCentered
      isOpen={isOpenField}
      onClose={onCloseField}
      size={"lg"}
      variant={"form"}
    >
      <ModalOverlay />
      <form>
        <ModalContent maxW={{ md: "calc(100vw - 12rem)", lg: "48rem" }}>
          <ModalHeader>
            <HStack justifyContent={"space-between"}>
              <Button
                onClick={() => onCloseField()}
                variant={"line"}
                fontSize={"17px"}
                fontWeight={"normal"}
              >
                Cancel
              </Button>
              <Heading fontSize={"16px"}>Edit {filterField(field)}</Heading>
              <Button
                onClick={handleDone}
                variant={"line"}
                fontSize={"17px"}
                fontWeight={"normal"}
                color={useColorModeValue("#0095F6", "18A3F3")}
              >
                Done
              </Button>
            </HStack>
          </ModalHeader>
          <ModalBody borderRadius={{ md: "18px" }}>
            <FormControl mb={3}>
              <FormLabel hidden>{filterField(field)}</FormLabel>
              <Input
                type="text"
                variant={"standard"}
                size="md"
                value={inputEdit}
                onChange={handleChange}
              />
            </FormControl>
          </ModalBody>
        </ModalContent>
      </form>
    </Modal>
  );
};

ProfileEditFieldModal.propTypes = {
  onCloseField: PropTypes.func,
  isOpenField: PropTypes.bool,
  user: PropTypes.object,
  inputs: PropTypes.object,
  setInputs: PropTypes.func,
  field: PropTypes.string,
};
