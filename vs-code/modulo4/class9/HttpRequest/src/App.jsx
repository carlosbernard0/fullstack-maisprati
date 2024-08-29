import Form from "./components/Form"
import GetUser from "./components/GetUser"
import PutUser from "./components/PutUser"
import DeleteUser from "./components/DeleteUser"

function App() {
  
  return (
    <>
      <hr />
      POST
      <Form/>
      <hr />
      GET
      <GetUser/>
      <hr />
      PUT
      <PutUser/>
      <hr />
      DELETE
      <DeleteUser/>
      <hr />
    </>
  )
}

export default App
