import React, { useState } from 'react'

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title and Desc can not be blank");
    }
    else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  }
  return (
    <div className='container mt-4'>
      <h3 className='mb-4'>Add Todo</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input id="title" type="Text" value={title} className="form-control" onChange={(e) => { setTitle(e.target.value) }} />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Desc</label>
          <input id='desc' type="text" value={desc} className="form-control" onChange={(e) => { setDesc(e.target.value) }} />
        </div>

        <button type="submit" className="btn btn-sm btn-primary">Submit</button>
      </form>
    </div>
  )
}
