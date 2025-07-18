import { useState } from 'react'

function App() {
  const articles = ["Lorem1", "Lorem2", "Lorem3", "Lorem4", "Lorem5", "Lorem6"]
  const [list, setList] = useState(articles)
  const [item, setItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    setList([...list, item])


  }
  return (
    <>
      <div className="container">
        <ul>
          {list.map((article) => (
            <li>{article}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <input type="text" value={item} onChange={e => { setItem(e.target.value) }} />
          <button type="submit" className="btn btn-primary ms-2">
            <i className="bi bi-plus"></i>
          </button>
        </form >
      </div>
    </>
  )
}

export default App