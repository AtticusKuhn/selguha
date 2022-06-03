import { useLiveQuery } from "dexie-react-hooks"
import React from "react"
import { db, useLive } from "../db"
import Todo from "./Todo"

const UntimedTodos: React.FC<{}> = () => {

    const todos = useLive(() => db.untimedTodos(), []);
    return <div>
        <div>Untimed Todos</div>
        {todos.map((t, i) => (<Todo key={i} todoId={t.id} />))}
    </div>
}
export default UntimedTodos