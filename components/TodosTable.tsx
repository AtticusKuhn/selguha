// import next from "next"
import { parse, next } from "../time/time"
import React, { useEffect, useState } from "react"
import { useLive, db, Todo } from "../db"
import CheckBox from "./checkbox"
import { stringToColor } from "../utils"
import { clickHeader, column, useDisp, useSel } from "../redux"
import { useSelector } from "react-redux"

const CategoryChip: React.FC<{ category: number }> = ({ category }) => {
    const cat = useLive(() => db.categories.get(category), { name: "loading...", id: 12 })
    return <div
        className="rounded inline-block"
        style={{ backgroundColor: stringToColor(cat.name) }}
    >
        {cat.name}
    </div>
}
const TH: React.FC<{ column: column, text: string }> = ({ column, text }) => {
    const disp = useDisp()
    const click = (header: column) => () => disp(clickHeader(header))
    const columnSort = useSel(x => x.columnSort)
    const sort = useSel(x => x.sort)

    return (
        <th className={(columnSort === column && (sort === "ascending" ? `bg-secondary` : "bg-accent")) + " cursor-pointer rounded text-center"} onClick={click(column)}>{text}</th>

    )
}
const TodosTable: React.FC<{ todos: Todo[] }> = ({ todos }) => {
    const columnSort = useSel(x => x.columnSort)
    const sort = useSel(x => x.sort)
    // debugger;
    const sortedTodos = todos.sort((a, b) =>
        columnSort === "categories" ? a.categories.join("").localeCompare(b.categories.join(""))
            : columnSort === "done" ? Number(a.completed) - Number(b.completed)
                : columnSort === "importance" ? a.importance - b.importance
                    : columnSort === "name" ? a.name.localeCompare(b.name)
                        : (a.time !== "" && b.time !== "" ?
                            next(new Date(), parse(a.time)).getTime() - next(new Date(), parse(b.time)).getTime()
                            : 1
                        )
    )
    const reveresed = sort === "descending" ? sortedTodos.reverse() : sortedTodos


    return <div>
        <table className="w-full mx-auto text-sm text-left text-primary-500 dark:text-primary-400" >
            <thead className="w-full text-sm text-left text-primary-500 dark:text-primary-400">
                <tr>
                    <TH column="number" text="Number" />
                    <TH column="name" text="Name" />
                    <TH column="done" text="Done?" />
                    <TH column="categories" text="Categories" />
                    <TH column="importance" text="Importance" />
                    <TH column="time" text="Time" />
                </tr>
            </thead>
            <tbody>
                {reveresed.map((todo, index) => <Row key={todo.id} todo={todo} index={index} />)}
            </tbody>
        </table>
    </div>
}
const Row: React.FC<{ todo: Todo, index: number }> = ({ todo, index }) => {
    const [subTodos, setSubTodos] = useState(todo.subTodos)
    useEffect(() => { setSubTodos(todo.subTodos) }, [todo.subTodos])
    const click: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
        const checked = e.target.checked;
        if (todo.time === "") {
            await db.checkTodo(todo.id, checked)
        } else {
            await db.checkTodo(todo.id, checked, next(new Date(), parse(todo.time)))
        }
    }
    const defaultChecked: boolean = todo.time !== ""
        ? useLive(() => db.completedReccurences.where({
            "todoId": todo.id,
            "time": next(new Date(), parse(todo.time)),
        }).toArray(), [], [todo]).length > 0 : todo.completed;
    const dragStart: React.DragEventHandler<HTMLTableRowElement> = (event) => {
        event.dataTransfer.setData("todoId", todo.id.toString());
    }
    const dragOver: React.DragEventHandler<HTMLTableRowElement> = (event) => {
        event.preventDefault();
        const id = Number(event.dataTransfer.getData("todoId"))
        if (id !== todo.id) {
            setSubTodos([...subTodos.filter(st => st !== id), id])
        }
    }
    const dragLeave: React.DragEventHandler<HTMLTableRowElement> = (event) => {
        const id = Number(event.dataTransfer.getData("todoId"))
        setSubTodos(subTodos.filter(st => st !== id))
    }
    const drop: React.DragEventHandler<HTMLTableRowElement> = (event) => {

    }
    return <tr
        key={index}
        className="even:bg-primary-100 odd:bg-primary-200 rounded"
        draggable="true"
        onDragStart={dragStart}
        onDragOver={dragOver}
        onDragLeave={dragLeave}
        onDrop={drop}
    >
        <td>{index + 1}</td>
        <td>{todo.name}</td>
        <td><CheckBox onChange={click} defaultChecked={defaultChecked} /></td>
        <td>{todo.categories.map(c => <CategoryChip category={c} key={c} />)}</td>
        <td>{todo.importance}</td>
        <td>{todo.time ? next(new Date(), parse(todo.time)).toLocaleString("en-US") : 'no time'}</td>
        <div>{subTodos.join(",")}</div>
    </tr>
}
export default TodosTable