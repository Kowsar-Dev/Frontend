import React from 'react';
import { useGetUsersQuery } from '../features/api/apiSlice';

const UserList = () => {
  const { data: users, isLoading, error } = useGetUsersQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error?.status || JSON.stringify(error)}</div>;

  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
