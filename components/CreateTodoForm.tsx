// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray, ErrorMessageProps, FormikErrors, FormikProps, useFormik, useFormikContext } from 'formik';
import { Category, db, useLive } from '../db';
import Button from './Button';
import { next, parse, timeValid } from '../time/time';
import Header from './Header';
import MyField from "./Field"
import { stringToColor } from '../utils';
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
const CategorySuggestion: React.FC<{ category: Category }> = ({ category }) => {
    const { setFieldValue, values } = useFormikContext<FormikValues>();
    return <div
        className="rounded bg-primary-300 w-full cursor-pointer hover:bg-primary-200"
        onClick={() => {
            setFieldValue("categories", [...values.categories, category.id])
        }}
    >
        {category.name}
    </div>
}
const CategoryShow: React.FC<{ category: number }> = ({ category }) => {
    const { setFieldValue, values } = useFormikContext<FormikValues>();
    const cat = useLive(() => db.categories.get(category), { name: "loading...", id: 12 })
    return <div className="rounded inline-block " style={{ backgroundColor: stringToColor(cat.name) }}>
        {cat.name}
        <button onClick={() => setFieldValue("categories", values.categories.filter(x => x !== category))} className="text-primary-400 bg-transparent hover:bg-parimary-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd">
                </path>
            </svg>
        </button>
    </div>
}
const FormElement: React.FC<FormikProps<FormikValues>> = ({ errors, values, isSubmitting }) => {
    const cats = useLive(() => db
        .categories
        .where("name")
        .startsWith(values.categoryString)
        .limit(5)
        .filter(c => !values.categories.includes(c.id))
        .toArray(), [], [values.categoryString, values.categories])
    return <Form className="justify-items-center  flex flex-col items-center justify-center .">
        <div className="flex flex-col">
            <label htmlFor="todo">Todo Name</label>
            <MyField name="todo" />
            <Error name="todo" />
            <label htmlFor="importance">Level of Importance</label>
            <MyField name="importance" type="number" />
            <Error name="importance" />
            <label htmlFor="categories">Categories</label>
            <MyField name="categoryString" />
            <div>
                {cats.map((c) => <CategorySuggestion key={c.id} category={c} />)}
            </div>
            <div>
                {values.categories.map(c => <CategoryShow key={c} category={c} />)}
            </div>
            <Error name="categoryString" />
            <label htmlFor="deadline">time (optional)</label>
            <div>{timeValid(values.time) && `Time is ${next(new Date(), parse(values.time)).toLocaleString("en-US")}`}</div>
            <MyField name="time" />
            <Error name="time" />
        </div>

        <div>
            <Button type="submit" className="mx-auto m-lg " disabled={isSubmitting} >
                Submit
            </Button>
        </div>
        {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
        {/* <pre>{JSON.stringify(errors, null, 2)}</pre> */}

    </Form>
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
                {FormElement}
            </Formik>

        </div >
    )
};

export default CreateTodoForm;