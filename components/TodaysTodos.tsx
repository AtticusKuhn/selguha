import { useLiveQuery } from "dexie-react-hooks"
import React from "react"
import { db, useLive } from "../db"
import Todo from "./Todo"

const TodaysTodos: React.FC<{}> = () => {
    const todos = useLive(() => db.todaysTodos(new Date()), [])
    return <div>
        <div>Todays Todos</div>
        {todos.map((t, i) => (<Todo key={i} todoId={t.id} />))}
    </div>
}
export default TodaysTodos