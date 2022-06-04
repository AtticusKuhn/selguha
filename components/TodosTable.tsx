// import next from "next"
import { parse, next } from "../time/time"
import React from "react"
import { useLive, db } from "../db"
import CheckBox from "./checkbox"

const TodosTable: React.FC<{ todos: number[] }> = ({ todos }) => {
    return <div>
        <table className="w-full mx-auto text-sm text-left text-primary-500 dark:text-primary-400" >
            <thead className="w-full text-sm text-left text-primary-500 dark:text-primary-400">
                <tr>
                    <th>Number</th>
                    <th>Name</th>
                    <th>Done?</th>
                    <th>Importance</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo, index) => <Row key={index} id={todo} index={index} />)}
            </tbody>
        </table>
    </div>
}
const Row: React.FC<{ id: number, index: number }> = ({ id, index }) => {
    const todo = useLive(() => db.todos.get(id), {
        categories: [],
        completed: false,
        importance: 1,
        name: "Loading...",
        subTodos: [],
        time: "",

    })
    return <tr key={index} className="even:bg-primary-100 odd:bg-primary-200 rounded">
        <td>{index + 1}</td>
        <td>{todo.name}</td>
        <td><CheckBox /></td>
        <td>{todo.importance}</td>
        <td>{todo.time ? next(new Date(), parse(todo.time)).toLocaleString("en-US") : 'no time'}</td>

    </tr>
}
export default TodosTable