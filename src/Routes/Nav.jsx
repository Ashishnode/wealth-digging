import React,{useState} from 'react'

const Nav = () => {
  const [islogging, setLogging] = useState("false")
  return (
    <div>
      {islogging ? null : undefined}
    </div>
  )
}

export default Nav
