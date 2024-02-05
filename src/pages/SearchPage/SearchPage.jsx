import { useState } from "react";
import SearchInput from "../../components/SearchForm/SearchInput";
import useSearchUser from "../../hooks/useSearchUser";
import UserCard from "../../components/SearchForm/UserCard";

const SearchPage = () => {
  const [value, setValue] = useState(null);
  const { isLoading, users, getUserProfile } = useSearchUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (value.trim()) {
      await getUserProfile(value);
    }
    e.target.reset();
  };
  // const displaySuggestedUsers = !value && !users;
  const displayFoundUsers = !isLoading && users;
  console.log(users);
  return (
    <>
      <SearchInput
        value={value}
        setValue={setValue}
        handleSubmit={handleSubmit}
      />
      {displayFoundUsers &&
        users.map((user) => <UserCard key={user.uid} user={user} />)}
    </>
  );
};

export default SearchPage;
