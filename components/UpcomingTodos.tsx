import React from "react";
import { db, useLive } from "../db";
import Header from "./Header";
import Todo from "./Todo";
import TodosTable from "./TodosTable";

const UpcomingTodos: React.FC<{}> = () => {
    const todos = useLive(() => db.upcomingTodos(new Date(), 1), []);
    return <div>
        <Header>Upcoming Todos</Header>
        <TodosTable todos={todos} />
        {/* {todos.map((t, i) => (<Todo key={i} todoId={t.id} />))} */}
    </div>
}
export default UpcomingTodos