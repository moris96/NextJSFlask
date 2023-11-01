import React, { useEffect, useState } from "react"

function index() {
  const [message, setMessage] = useState("Loading...")
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
    .then((response) => response.json())
    .then((data) => {
      setMessage(data.message)
      setPeople(data.people)
      console.log(data.people)
    })
  }, [])



  return (
    <div>
      <div>{message}</div>

      {people.map((person, i) => (
        <div key={i}>{person}</div>
      ))}


    </div>
  )
}

export default index
