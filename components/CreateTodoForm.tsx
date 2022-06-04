// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray, ErrorMessageProps, FormikErrors } from 'formik';
import { db } from '../db';
import Button from './Button';
import { next, parse, timeValid } from '../time/time';
import Header from './Header';
import MyField from "./Field"
export interface FormikValues {
    todo: string,
    importance: number,
    categories: number[],
    time?: string,
    categoryString: string,
    // recurrences: { startTime: string, timeInterval: number }[],
}
export interface FormikPayload {
    todo: string,
    importance: number,
    categories: number[],
    time?: string,
    // recurrences: { startTime: Date, timeInterval: number }[],

}
export const Error: React.FC<ErrorMessageProps> = (props) => {
    //@ts-ignore
    return <ErrorMessage {...props} component={msg => (<div className="text-accent font-bold text-lg">{msg.children}</div>)} />

}
const CreateTodoForm = () => {
    // const cats = useLive(()=>db.categories.where("name").startsWith(values.categoryString).toArray(), [])
    return (
        <div className="w-7/12 mx-auto">
            <Header>Create New Todo</Header>
            <Formik<FormikValues>
                initialValues={{
                    todo: "",
                    importance: 5,
                    categories: [],
                    time: "",
                    categoryString: ""
                    // deadline: undefined,
                    // recurrences: [],
                }}
                validate={async (values) => {
                    let errors: FormikErrors<FormikValues> = {}
                    if (!timeValid(values.time) && values.time !== "") {
                        errors.time = "invalid time"
                    }
                    if (values.todo === "") {
                        errors.todo = "todo name cannot be blank"
                    }
                    return errors;
                }}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    console.log("submitting form")
                    await db.insertTodo(values)
                    setSubmitting(false)
                    resetForm();
                }}
            >
                {({ errors, values, isSubmitting }) => (
                    <Form className="justify-items-center	">
                        <div className="flex flex-col">
                            <label htmlFor="todo">Todo Name</label>
                            <MyField name="todo" />
                            <Error name="todo" />
                            <label htmlFor="importance">Level of Importance</label>
                            <MyField name="importance" type="number" />
                            <Error name="importance" />
                            <label htmlFor="categories">Categories</label>
                            {.map((c) => <div>{c.name}</div>)}
                            <MyField name="categoryString" />
                            <Error name="categoryString" />
                            <label htmlFor="deadline">time (optional)</label>
                            <pre>{timeValid(values.time) && next(new Date(), parse(values.time)).toISOString()}</pre>
                            <MyField name="time" />
                            <Error name="time" />
                        </div>


                        <Button type="submit" disabled={isSubmitting} >
                            Submit
                        </Button>
                        <pre>{JSON.stringify(values, null, 2)}</pre>
                        <pre>{JSON.stringify(errors, null, 2)}</pre>

                    </Form>

                )}
            </Formik>

        </div >
    )
};

export default CreateTodoForm;