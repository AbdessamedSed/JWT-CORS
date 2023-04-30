import React, { useState, useEffect ,useContext } from 'react'
import AuthContext from '../context/AuthContext'

const HomePage = () => {

  let [notes, setNotes] = useState([])
  let {authtokens, logoutUser} = useContext(AuthContext)



  useEffect(()=> {
    getNotes()
  }, [])

  let getNotes = async () => {
    let response = await fetch('http;//127.0.0.1:8000/api/notes/', {
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer' + String(authtokens.access)
      }
    })

    let data = response.json()

    if(response.status === 200){
      setNotes(data)
    } else if (response.statusText === 'Unauthorized'){
      logoutUser()
    }
  } 

  return (
    <div>
        <p>
            You are Logged to the home page!
        </p>

        <ul>
          {notes.map(note => {
            <li key={note.id}>{note.body}</li>
          })}
        </ul>
    </div>
  )
}

export default HomePage
