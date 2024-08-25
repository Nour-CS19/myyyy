import React, { useState, useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // يمكنك هنا استبدال الرابط التالي برابط API للحصول على بيانات المستخدمين
    const mockUsers = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
    ];

    // محاكاة استدعاء API
    setTimeout(() => {
      setUsers(mockUsers);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
}

export default Users;
