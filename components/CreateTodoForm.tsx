// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray, ErrorMessageProps } from 'formik';
import { db } from '../db';
import Button from './Button';
import { timeValid } from '../time/time';

export interface FormikValues {
    todo: string,
    importance: number,
    categories: number[],
    time?: string,
    // recurrences: { startTime: string, timeInterval: number }[],
}
export interface FormikPayload {
    todo: string,
    importance: number,
    categories: number[],
    time?: string,
    // recurrences: { startTime: Date, timeInterval: number }[],

}
const Error: React.FC<ErrorMessageProps> = (props) => {
    //@ts-ignore
    return <ErrorMessage {...props} component={msg => (<div className="text-accent font-bold text-lg">{msg.children}</div>)} />

}
const CreateTodoForm = () => (
    <div className="w-7/12 mx-auto">
        <h1 className="font-bold text-3xl p-lg text-center">Todo Form!</h1>
        <Formik<FormikValues>
            initialValues={{
                todo: "",
                importance: 5,
                categories: [],
                time: "",
                // deadline: undefined,
                // recurrences: [],
            }}
            validate={async (values) => {
                return {
                    time: timeValid(values.time) ? "" : "invalid time"
                }
            }}
            onSubmit={async (values, { setSubmitting }) => {
                await db.insertTodo(values)
                setSubmitting(false)
            }}
        >
            {({ errors, values, isSubmitting }) => (
                <Form className="justify-items-center	">
                    <div className="flex flex-col">
                        <label htmlFor="todo">Todo Name</label>
                        <Field name="todo" />
                        <Error name="todo" />
                        <label htmlFor="importance">Level of Importance</label>
                        <Field name="importance" type="number" />
                        <Error name="importance" />
                        <label htmlFor="categories">Categories</label>
                        <Field name="categories" />
                        <Error name="categories" />
                        <label htmlFor="deadline">time (optional)</label>
                        <Field name="time" />
                        <Error name="time" />
                    </div>

                    {/* <FieldArray name="recurrences">
                        {arrayHelpers => (
                            <div className="flex flex-col">
                                <Button
                                    className="w-7/12"
                                    onClick={() =>
                                        arrayHelpers.push({
                                            startTime: new Date().toISOString().slice(0, 10),
                                            timeInterval: 1e6,
                                        })
                                    }
                                    type='button'
                                >
                                    (+) add new recurrence
                                </Button>
                                {values.recurrences.map((recurrence, index) => {
                                    return (
                                        <div key={index}>
                                            <Field

                                                value={recurrence.startTime}
                                                placeholder="recurrence start time"
                                                type="date"
                                                name={`recurrences.${index}.startTime`}
                                            />

                                            <Field
                                                placeholder="time interval"
                                                name={`recurrences.${index}.timeInterval`}
                                            />

                                            <Button className="bg-accent" type='button' onClick={() => arrayHelpers.remove(index)}>
                                                (x) delete recurrence
                                            </Button>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </FieldArray> */}
                    <Button type="submit" disabled={isSubmitting}>
                        Submit
                    </Button>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                </Form>

            )}
        </Formik>

    </div >
);

export default CreateTodoForm;