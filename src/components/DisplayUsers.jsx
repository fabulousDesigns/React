import useFetch from "./CustomHooks";

const URL = "http://localhost:9090/api/auth/allUsers  ";
const FetchUser = () => {
  const users = useFetch(URL);

  return (
    <div>
      <h1>Users</h1>
      {users.data && (
        <ul>
          {users.data.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchUser;
