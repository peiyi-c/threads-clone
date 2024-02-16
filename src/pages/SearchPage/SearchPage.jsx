import { useState } from "react";
import SearchInput from "../../components/SearchForm/SearchInput";
import useSearchUser from "../../hooks/useSearchUser";
import UserCard from "../../components/SearchForm/UserCard";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";

const SearchPage = () => {
  const [value, setValue] = useState(null);
  const { isLoading, users, getUserProfile } = useSearchUser();
  const { isLoadingInitial, suggestedUsers } = useGetSuggestedUsers();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (value.trim()) {
      await getUserProfile(value);
    }
    e.target.reset();
  };

  const displaySuggestedUsers = !isLoadingInitial && !value && suggestedUsers;
  const displayFoundUsers = !isLoading && users;

  return (
    <>
      {/* search input field */}
      <SearchInput
        value={value}
        setValue={setValue}
        handleSubmit={handleSubmit}
      />
      {/* suggested users */}
      {displaySuggestedUsers &&
        suggestedUsers.map((user) => (
          <UserCard key={user.uid} profile={user} />
        ))}

      {/* found user result */}
      {displayFoundUsers &&
        users.map((user) => <UserCard key={user.uid} profile={user} />)}
    </>
  );
};

export default SearchPage;
