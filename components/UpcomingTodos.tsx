import React from "react";
import { db, useLive } from "../db";
import Todo from "./Todo";

const UpcomingTodos: React.FC<{}> = () => {
    const todos = useLive(() => db.upcomingTodos(new Date(), 1), []);
    return <div>
        <div>Upcoming Todos</div>
        {todos.map((t, i) => (<Todo key={i} todoId={t.id} />))}
    </div>
}
export default UpcomingTodos