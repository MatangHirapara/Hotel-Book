import React from 'react'
import "./email.css"
import { useSelector } from 'react-redux';

const Email = () => {
  const email = useSelector((state) =>  state.email.selectedToor)
  console.log("email", email)
  return (
    <>
      <div className='inbox' >
        <div className='underInbox' >
            <table className='inboxTable' >
              <tr>
                <th>Id.</th>
                <th>Inbox-Massage</th>
                <th>Place</th>
                <th>Price</th>
              </tr>
              <tr>
                <td>{email.id}.</td>
                <td>'Congratulation' for hotel booked....... {email.title}</td>
                <td>{email.name}</td>
                <td>Rs. {email.money}</td>
              </tr>
            </table>
        </div>
      </div>
    </>
  )
}

export default Email;