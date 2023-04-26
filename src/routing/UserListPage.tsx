import { Link, Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const UserListPage = () => {
  const users = [
    { id: 1, name: "Mosh" },
    { id: 2, name: "John" },
    { id: 3, name: "Alice" },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "flex-start" }}>
      <ul className="list-group" style={{ width: "50%", marginRight: "10px" }}>
        {users.map((user) => (
          <li className="list-group-item" key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default UserListPage;
