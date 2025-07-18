import { useState } from 'react'

function App() {
  const articles = []

  const [list, setList] = useState(articles)
  const [item, setItem] = useState("")


  function handleSubmit(e) {
    e.preventDefault();
    setList([
      ...list,
      {
        id: crypto.randomUUID(),
        title: item,
      }
    ])
    setItem("");
  }
  function handleDelete(id) {
    setList(prev => prev.filter(post => post.id !== id))
    /* setList(prev => prev.filter(post => post.id !== id))
    setList(prev => prev.filter(post => post.id !== id)) */
  }
  return (
    <>
      <div className="container text-center">
        <ul className="list-unstyled">
          <h1 className="bg-secondary-subtle">Todolist</h1>
          {list.map((article) => (
            <li key={article.id}>
              {article.title}
              <button type="button" className="btn " onClick={() => handleDelete(article.id)}>
                <i className="btn btn-danger bi bi-trash3"></i></button>
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <input type="text" value={item} onChange={e => { setItem(e.target.value) }} />
          <button type="submit" className="btn btn-success ms-2">
            <i className="bi bi-plus"></i>
          </button>
        </form >
      </div >
    </>
  )
}

export default App