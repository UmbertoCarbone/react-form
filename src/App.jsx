import { useState } from 'react'

function App() {
  const articles = []
  const [list, setList] = useState(articles)
  const [item, setItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    setList([...list, item])
    setItem("");
  }
  return (
    <>
      <div className="container">
        <ul>
          {list.map((article, index) => (
            <li key={index}>
              {article}
              <button type="button" className="btn ">
                <i className="bi bi-trash3"></i></button>
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <input type="text" value={item} onChange={e => { setItem(e.target.value) }} />
          <button type="submit" className="btn btn-primary ms-2">
            <i className="bi bi-plus"></i>
          </button>
        </form >
      </div >
    </>
  )
}

export default App