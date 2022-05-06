import React from 'react'
import { Navbar } from 'react-bootstrap'
import Body from '../components/body/body'

const URL = "http://localhost/databasemissionBack/"

export default function Home() {

  const [filter, setFilter] = React.useState("0")
    
  return (
    <div>
    <Navbar url={URL} setFilter={setFilter} />
    <Body url={URL} filter={filter}/>
    </div>
  )
}
