import Dexie, { Table } from 'dexie';
import { useLiveQuery } from 'dexie-react-hooks';
import { FormikPayload, FormikValues } from './components/CreateTodoForm';

export type Todo = {
    id?: number,
    name: string,
    importance: number,
    completed: boolean,
    deadline?: Date,
    categories: number[],
    subTodos: number[],
    startTime?: Date,
    timeInterval?: number,
}
export class TodoDB extends Dexie {
    todos!: Table<Todo, number>;
    categories!: Table<{
        id?: number,
        name: string,
    }, number>
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
        this.version(2).stores({
            todos: "++id,name,importance,completed,deadline,*categories, *subTodos, startTime, timeInterval",
            categories: "++id, name",
            // subTodo: "parentId,childId",
            // todoCategory: "todoId,categoryId",
            // recurrences: "todoId, startTime,timeInterval",
            completedReccurences: "todoId,time"
        });
    }
    async insertTodo(todoPayload: FormikPayload): Promise<void> {
        const todo = await this.todos.add({
            name: todoPayload.todo,
            importance: todoPayload.importance,
            completed: false,
            deadline: new Date(todoPayload.deadline),
            categories: todoPayload.categories,
            subTodos: [],

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
            .where('deadline').equals(undefined)
            .or('startTime').equals(undefined)
            .distinct()
            .toArray();
    }
}
const populate = async () => {
    //todo
}
export const db = new TodoDB();

db.on('populate', populate);

export function resetDatabase() {
    //todo
}
export const useLive = <T>(func: () => (T | Promise<T>), defaultValue: T): T => {
    return useLiveQuery(() => {
        try {
            return func();
        } catch {
            return defaultValue
        }
    }) || defaultValue
}