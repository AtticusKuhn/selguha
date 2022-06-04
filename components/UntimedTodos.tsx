import { useLiveQuery } from "dexie-react-hooks"
import React from "react"
import { db, useLive } from "../db"
import Header from "./Header"
import Todo from "./Todo"
import TodosTable from "./TodosTable"

const UntimedTodos: React.FC<{}> = () => {

    const todos = useLive(() => db.untimedTodos(), []);
    return <div>
        <Header>Untimed Todos</Header>
        <TodosTable todos={todos.map(t => t.id)} />
    </div>
}
export default UntimedTodos