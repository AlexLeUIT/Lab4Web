import React, { useState, useEffect } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null); // lưu dữ liệu người dùng
  const [loading, setLoading] = useState(true); // trạng thái loading
  const [error, setError] = useState(null); // trạng thái lỗi

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setUser(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []); // chạy 1 lần khi component mount

  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '400px',
    margin: '20px auto',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center'
  };

  if (loading) {
    return <div style={containerStyle}><h3>Loading...</h3></div>;
  }

  if (error) {
    return <div style={containerStyle}><h3 style={{color: 'red'}}>Error: {error}</h3></div>;
  }

  return (
    <div style={containerStyle}>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Website:</strong> {user.website}</p>
    </div>
  );
}

export default UserProfile;
