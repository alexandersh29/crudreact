import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { isEmpty, size } from 'lodash';
import shortid from 'shortid';
import './App.css';

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const addTask = (e) => {
    e.preventDefault()
    if (isEmpty(task)) {
      console.log("Task vacío")
      return
    }

    const newTask = {
      id: shortid.generate(),
      name: task
    }
    setTasks([...tasks, newTask])
    setTask("")
  }
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id)
    setTasks(filteredTasks)
  }



  return (
    <>
    <div className="container mt-5">
      <h1>Tareas</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Actividades</h4>
          {
            size(tasks) === 0 ? (
              <h5 className="text-center">Aún no hay tareas</h5>
            ) : (
              <ul className="list-group">
                
                {
                tasks.map((task)=> (
                  <li className="list-group-item" key={task.id}>
                    {task.name}
                    <button
                    className="btn btn-danger btn-sm float-right mx-2"
                    onClick={()=>deleteTask(task.id)}
                    >Eliminar</button>
                    <button className="btn btn-warning btn-sm float-right">Editar</button>
                  </li>
                )) 
              }
              </ul>
            )
          }</div>
        <div className="col-4">
          <h4 className="text-center">Formulario</h4>
          <form onSubmit={addTask}>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingresar una tarea..."
              onChange={(text) => setTask(text.target.value)}
              value={task}
            />
            <button className="btn btn-dark btn-block"
              type="submit">Agregar</button>
          </form>
        </div>

      </div>
    </div>
    </>
  )
}

export default App;
