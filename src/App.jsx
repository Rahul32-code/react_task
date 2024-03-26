import { useState, useEffect } from 'react'
import DataUser from './components/DataUser'

const API = "https://jsonplaceholder.typicode.com/users";


const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <DataUser users={users} />
        </tbody>
      </table>
    </>
  )
}

export default App
