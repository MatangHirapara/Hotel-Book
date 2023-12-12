import React, { useEffect, useState } from 'react'
import "./email.css"
import { useSelector } from 'react-redux';

const Email = () => {
  const [emailStore, setEmailStore] = useState([]);
  const email = useSelector((state) => state.email.selectedToor);

  useEffect(() => {
    setEmailStore([email, ...emailStore])
  }, [])

  return (
    <>
      <div className='inbox' >
        <div className='underInbox' >
          {!(email.id === undefined) ? (

            <table className='inboxTable' >
              <tr>
                <th>Id.</th>
                <th>Inbox-Massage</th>
                <th>Place</th>
                <th>Price</th>
              </tr>
              {emailStore.map((el) => {
                return (
                  <tr>
                    <td>{el.id}.</td>
                    <td>'Congratulation' for hotel booked....... {el.title}</td>
                    <td>{el.name}</td>
                    <td>Rs. {el.money}</td>
                  </tr>
                )
              })}
            </table>
          ) : (<><div style={{ textAlign: 'center' }}>Empty</div></>)
          }
        </div>
      </div>
    </>
  )
}

export default Email;