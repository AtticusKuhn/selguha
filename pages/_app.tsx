import Head from 'next/head'
import React from 'react'
import { Provider } from 'react-redux'
import Startup from '../components/Startup'
import { store } from '../redux'
// import Dexie, { Table } from 'dexie'

import '../styles/globals.css'


// export const db = new Dexie('todos');
// const version = db.version(2).stores(

// )
// export const todoTable: = db.todos;
// export const categoriesTable: Table<{
//     id?: number,
//     name: string,
//     //@ts-ignore
// }, number> = db.categories;
// export const subTodoTable: Table<{
//     parentId: number,
//     childId: number,
//     //@ts-ignore
// }, number> = db.subTodo;
// export const todoCategoryTable: Table<{
//     todoId: number,
//     categoryId: number,
//     //@ts-ignore
// }, number> = db.todoCategory;
// export const deadlinesTable: Table<{
//     todoId: number,
//     start: Date,
//     //@ts-ignore
// }, number> = db.deadlines;
// export const recurrencesTable: Table<{
//     todoId: number,
//     startTime: Date,
//     timeInterval: number,
//     //@ts-ignore
// }, number> = db.recurrences;
// export const completedReccurencesTable: Table<{
//     todoId: number,
//     time: Date,
//     //@ts-ignore
// }, number> = db.completedReccurences;




export default function MyApp({ Component, pageProps }) {
    return <>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width" />
            <meta name="description" content="A simple todo app" />
            <meta name="keywords" content="a todo app" />
            <meta name="author" content="Atticus Kuhn" />
            <meta property="og:title" content="Selguha - a todo app" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="./images/peel.jpg" />
            <meta property="og:url" content="https://atticuskuhn.github.io/selguha/" />
            <link rel="icon" type="image/x-icon" href="./images/peel.jpg" />

            <title>Selguha</title>
        </Head>
        <Provider store={store}>
            <Startup>
                <Component {...pageProps} />
            </Startup>
        </Provider>
    </>
}