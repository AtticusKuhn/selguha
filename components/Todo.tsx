import { Todo } from "../db";

const TodoView: React.FC<{ todo: Todo }> = ({ todo }) => {
    return <div className="rounded bg-primary-200">
        <div className="font-bold">{todo.name}</div>

    </div>
}
export default TodoView