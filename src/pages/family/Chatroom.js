import React, { useState, useEffect, useRef } from 'react'
import { firestore, auth } from '../../services/firebase'
import SendMessage from './SendMessage'
import { Link } from 'react-router-dom'

export default function Chatroom() {

  const [showNavbar, setShowNavbar] = React.useState(false);

  const scroll = useRef()
  const [messages, setMessages] = useState([])

  useEffect(() => {
    firestore.collection('familyMessages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  return (
    <div className='mx-4 pt-8 pb-12'>

      {showNavbar ? <div className="grid place-items-center">
        <Link to="/sos">
          <button className='bg-yellow-800 border-2 hover:bg-yellow-900 border-r-4 border-b-4 border-black text-white font-bold py-2 px-8 rounded-md text-xl md:text-2xl'>An SOS message was send by Harshal <span>Click here to view last location.</span></button>
        </Link>
      </div> : null}

      <div className="flex justify-center items-center h-screen mx-4">
        <div className='flex flex-col'>
          <div className="border-2 border-indigo-500 rounded-t-md bg-primary p-4 w-128 overflow-y-scroll flex flex-col h-128 max-w-7xl min-w-7xl">
            {messages.map(({ id, text, photoURL, uid }) => (
              <div>
                <div key={id} className={`flex p-5 space-x-1 items-center my-2 rounded-full ${uid === auth.currentUser.uid ? 'rounded-br-3xl bg-[#3b85d4] flex-row-reverse float-right text-white' : 'rounded-bl-3xl bg-[#fafafa] float-left'}`}>
                  <img className='bg-black rounded-full h-10 w-10 border-2 border-black' src={photoURL} alt="" />
                  <p className='font-medium text-md break-words'>{text}</p>
                </div>
              </div>
            ))}
          </div>
          <SendMessage scroll={scroll} />
          <div ref={scroll}></div>

        </div>
      </div>

      <div className="grid place-items-center">
        <button className='bg-red-800 border-2 hover:bg-red-900 border-r-4 border-b-4 border-black text-white font-bold py-2 px-8 rounded-md text-xl md:text-2xl' onClick={() => setShowNavbar(true)}>SOS</button>
      </div>

    </div>
  )
}
