// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import { db } from '../db';
import Button from './Button';

export interface FormikValues {
    todo: string,
    importance: number,
    categories: number[],
    deadline?: string,
    recurrences: { startTime: string, timeInterval: number }[],
}
export interface FormikPayload {
    todo: string,
    importance: number,
    categories: number[],
    deadline?: Date,
    recurrences: { startTime: Date, timeInterval: number }[],

}
const CreateTodoForm = () => (
    <div className="w-7/12 mx-auto">
        <h1 className="font-bold text-3xl p-lg text-center">Todo Form!</h1>
        <Formik<FormikValues>
            initialValues={{
                todo: "",
                importance: 5,
                categories: [],
                deadline: undefined,
                recurrences: [],
            }}
            validate={values => {
                return {}
            }}
            onSubmit={async (values, { setSubmitting }) => {
                await db.insertTodo({
                    categories: values.categories,
                    importance: values.importance,
                    recurrences: values.recurrences.map(r => ({
                        startTime: new Date(r.startTime),
                        timeInterval: r.timeInterval
                    })),
                    todo: values.todo,
                    deadline: values.deadline ? new Date(values.deadline) : undefined,
                })
                setSubmitting(false)
            }}
        >
            {({ values, isSubmitting }) => (
                <Form className="justify-items-center	">
                    <div className="flex flex-col">
                        <label htmlFor="todo">Todo Name</label>
                        <Field name="todo" />
                        <ErrorMessage name="todo" component="div" />
                        <label htmlFor="importance">Level of Importance</label>
                        <Field name="importance" type="number" />
                        <ErrorMessage name="importance" component="div" />
                        <label htmlFor="categories">Categories</label>
                        <Field name="categories" />
                        <ErrorMessage name="categories" component="div" />
                        <label htmlFor="deadline">Deadline (optional)</label>
                        <Field value={values.deadline ?? ""} name="deadline" type="date" />
                        <ErrorMessage name="deadline" component="div" />
                    </div>

                    <FieldArray name="recurrences">
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
                    </FieldArray>
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