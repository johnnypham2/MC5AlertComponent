import Alert from "./Alert"

function App()
{
  return (
    <>
    <div>
    <Alert text="success!" color="success"/>
    <Alert text="Danger!" color="danger"/>
    <Alert text="Warning!" color="warning"/>
    <Alert text="These were your alerts!" color="info"/>

    </div>
    </>
  )
}

export default App;