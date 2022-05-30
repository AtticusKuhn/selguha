import React from "react"
import { db, useLive } from "../db"
import Todo from "./Todo"

const UntimedTodos: React.FC<{}> = () => {
    const todos = useLive(() => db.untimedTodos(), [])
    return <div>

        {todos.map((t, i) => (<Todo key={i} todo={t} />))}
    </div>
}
export default UntimedTodos