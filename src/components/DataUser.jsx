import React from 'react'

const DataUser = ({users}) => {
  return (
    <>
      {
        users.map((items) => {
          return(
            <tr key={items.id}>
              <td>{items.id}</td>
              <td>{items.name}</td>
              <td>{items.email}</td>
              <td>{items.address.street}</td>
            </tr>
          )
        })
      }

    </>
  )
}

export default DataUser
