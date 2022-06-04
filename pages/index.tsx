import { useLiveQuery } from "dexie-react-hooks";
import React, { FormEventHandler } from "react"
import CreateCategory from "../components/CreateCategory";
import CreateTodoForm from "../components/CreateTodoForm"
import TodaysTodos from "../components/TodaysTodos";
import UntimedTodos from "../components/UntimedTodos";
import UpcomingTodos from "../components/UpcomingTodos";
import { db, useLive } from "../db";

const IndexPage: React.FC<{}> = () => {
    const todos = useLive(() => db.todos.toArray(), []);

    return <div className="bg-primary-100 w-full h-full min-h-screen">
        <div className="grid grid-cols-2	">
            <CreateTodoForm />
            <UntimedTodos />
            <CreateCategory />
            <UpcomingTodos />
        </div>
        <button onClick={() => db.delete()} className="bg-accent font-bold p-lg m-auto">Delete All</button>

    </div>
}
export default IndexPage