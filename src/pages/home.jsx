import React from 'react'
import { Navbar } from 'react-bootstrap'
import Body from '../body'

const URL = "http://localhost/databasemissionBack/"

export default function Home() {
  const [filter, setFilter] = React.useState("0")
    return (
    <>
    <Navbar url={URL} setFilter={setFilter} />
    <Body url={URL} filter={filter}/></>
  )
}
