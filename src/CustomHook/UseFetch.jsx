import { useUser } from "../CustomHook/useUser"

export const UseFetch = () => {
  const users = useUser();

  return (
    <div>
      <h1>User Details</h1>
      <table>
        <thead>
          <tr>
            <th>User_Name</th>
            <th>User_email</th>
            <th>User_address</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}> 
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.street}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};