import { db, Todo, useLive } from "../db";
import { next, parse } from "../time/time";

const TodoView: React.FC<{ todoId: number }> = ({ todoId }) => {
    const todo = useLive(() => db.todos.get(todoId), {
        categories: [],
        completed: false,
        importance: 1,
        name: "Loading...",
        subTodos: [],
        time: "",

    })
    return <div className="rounded bg-primary-200 p-tiny flex gap-5">
        <input type="checkbox" />
        <div className="font-bold">{todo.name}</div>
        <div>{todo?.categories?.join(",")}</div>
        <div>{todo?.importance}</div>
        <div>{todo.time ? next(new Date(), parse(todo.time)).toISOString() : 'no time'}</div>

    </div>
}
export default TodoView