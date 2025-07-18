import { useState } from 'react'

function App() {
  const articles = ["Lorem1", "Lorem2", "Lorem3", "Lorem4", "Lorem5", "Lorem6"]
  const [list, setList] = useState("")


  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <ul>
            {articles.map((article) => (
              <li key={id}>{article}</li>
            ))}
          </ul>
          <input type="text" value={list} onChange={e => { setList(e.target.value) }} />
        </div>
      </form >
    </>
  )
}

export default App