import Form from './components/Form'

function App() {
    function submitHandler(event) {
        event.preventDefault()
        console.log('submitted')
    }

    return (
        <div className="container">
            <header className="App-header">
                <h1>Paycheck Simulator</h1>
                <Form onSubmit={submitHandler} />
            </header>
        </div>
    )
}

export default App
