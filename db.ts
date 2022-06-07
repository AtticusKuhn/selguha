import Dexie, { Table } from 'dexie';
import { useLiveQuery } from 'dexie-react-hooks';
import { useEffect, useState } from 'react';
import { FormikPayload, FormikValues } from './components/CreateTodoForm';
import { next, parse } from './time/time';

export type Todo = {
    id?: number,
    name: string,
    importance: number,
    completed: boolean,
    // deadline?: Date,
    categories: number[],
    subTodos: number[],
    time: string,
    // startTime?: Date,
    // timeInterval?: number,
}
export type Category = {
    id?: number,
    name: string,
}
export class TodoDB extends Dexie {
    todos!: Table<Todo, number>;
    categories!: Table<Category, number>
    // subTodo!: Table<{
    //     parentId: number,
    //     childId: number,
    // }, number>
    // todoCategory!: Table<{
    //     todoId: number,
    //     categoryId: number,
    // }, number>
    // deadlines!: Table<{
    //     todoId: number,
    //     deadline: Date,
    // }, number>
    // recurrences!: Table<{
    //     todoId: number,
    //     startTime: Date,
    //     timeInterval: number,
    // }, number>
    completedReccurences!: Table<{
        todoId: number,
        time: Date,
    }, number>


    constructor() {
        super('TodoDB');
        this.version(3).stores({
            todos: "++id,name,importance,completed,deadline,*categories, *subTodos, time",
            categories: "++id, name",
            // subTodo: "parentId,childId",
            // todoCategory: "todoId,categoryId",
            // recurrences: "todoId, startTime,timeInterval",
            completedReccurences: "todoId,time"
        });
    }
    async insertTodo(todoPayload: FormikPayload): Promise<number> {
        console.log("inserting new todo")
        return await this.todos.add({
            name: todoPayload.todo,
            importance: todoPayload.importance,
            completed: false,
            time: todoPayload.time,
            categories: todoPayload.categories,
            subTodos: [],
            // time: todoPayload.
        })
        // this.todoCategory.bulkAdd(todoPayload.categories.map(t => ({
        //     categoryId: t,
        //     todoId: todo,
        // })))
        // this.recurrences.bulkAdd(todoPayload.recurrences.map(r => ({
        //     startTime: r.startTime,
        //     timeInterval: r.timeInterval,
        //     todoId: todo,
        // })))
    }
    async untimedTodos(): Promise<Todo[]> {
        return this
            .todos
            .where({
                time: ""
            })
            //         .where('deadline').equals(undefined)
            //         .or('startTime').equals(undefined)
            //         .distinct()
            .toArray();
    }
    async todaysTodos(today: Date): Promise<Todo[]> {
        const todos = await this
            .todos
            .where("time")
            .notEqual("")
            .filter((todo) => next(today, parse(todo.time)).getTime() - today.getTime() < 1000 * 60 * 60 * 24).toArray()
        return todos;
        // todos.filter
    }
    async upcomingTodos(today: Date, limit: number): Promise<Todo[]> {
        const todos = (await this
            .todos
            .where("time")
            .notEqual("")
            .filter((todo) => {
                console.log("next(today, parse(todo.time)).getTime(),", next(today, parse(todo.time)).getTime(), "today.getTime()", today.getTime())
                return next(today, parse(todo.time)).getTime() >= today.getTime()
            })
            .toArray()).sort((a, b) => next(new Date(), parse(a.time)).getTime()
                - next(new Date(), parse(b.time)).getTime()
            )

        return todos;
        // todos.filter
    }
    async createCategory(category: Category): Promise<number> {
        return this.categories.add(category)
    }
    async checkTodo(todoId: number, check: boolean, time?: Date): Promise<void> {
        // const todo = await this.todos.get(todoId)
        console.log("checking")
        if (!time) {
            await this.todos.update(todoId, {
                "completed": check
            })
        } else {
            if (check) {
                await this.completedReccurences.add({
                    todoId,
                    time,
                })
            } else {
                await this.completedReccurences.delete(todoId);
            }
        }
    }
    async addSubTodo(todoId: number, subTodoId: number): Promise<void> {
        const todo = await this.todos.get(todoId)
        this.todos.update(todoId,
            {
                subTodos: [...(todo.subTodos.filter(st => st !== subTodoId)), subTodoId]
            })
    }
    async reset() {
        await this.delete();

    }
}
const populate = async () => {
    db.categories.bulkAdd([
        { name: "School", id: 0 },
        { name: "Extra-Curriculars", id: 1 },
        { name: "Family", id: 2 },
        { name: "Fun", id: 3 },
    ])
    db.todos.bulkAdd([
        { name: "Do Your Homework", categories: [0], completed: false, importance: 5, subTodos: [5, 6], time: "10/1/22", id: 4 },
        { name: "English Homework", categories: [0], completed: false, importance: 2, subTodos: [], time: "9/21/22", id: 5 },
        { name: "Physics Homework", categories: [0], completed: false, importance: 2, subTodos: [], time: "10/1/22", id: 6 },
        { name: "Hang Out With Friends", categories: [3], completed: false, importance: 3, subTodos: [], time: "every monday", id: 7 },
        { name: "Play Basketball", categories: [1, 3], completed: false, importance: 2, subTodos: [], time: "every wednesday", id: 8 },
        { name: "Go Hiking With Family", categories: [2], completed: false, importance: 5, subTodos: [], time: "sunday", id: 9 },
        { name: "Go Shopping", categories: [], completed: false, importance: 1, subTodos: [], time: "", id: 10 },
        { name: "Respond to that email", categories: [], completed: false, importance: 3, subTodos: [], time: "", id: 11 },

    ])
}
export const db = new TodoDB();

db.on('populate', populate);

export function resetDatabase() {
    //todo
}
export const _useLive = <T>(func: () => (T | Promise<T>), defaultValue: T): T => {
    const [results, setResults] = useState<T>(defaultValue)
    useEffect(() => {
        setResults(useLiveQuery(() => {
            try {
                return func();
            } catch {
                return defaultValue
            }
        }) || defaultValue)
    }, [useLiveQuery(() => {
        try {
            return func();
        } catch {
            return defaultValue
        }
    }) || defaultValue])
    return results;
    // return useLiveQuery(() => {
    //     try {
    //         return func();
    //     } catch {
    //         return defaultValue
    //     }
    // }) || defaultValue
}
export function useLive<T>(func: () => T | Promise<T>, defaultValue: T, deps?: any[]) {
    const [results, setResults] = useState<T>(defaultValue);
    const e = useLiveQuery(() => {
        try {
            return func()
        } catch {
            return defaultValue
        }
    }, deps) || defaultValue;
    useEffect(() => {
        setResults(e)
    }, [e, results]);

    return results;
}
