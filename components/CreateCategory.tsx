import { Field, Form, Formik, FormikErrors } from "formik"
import next from "next"
import { parse } from "path"
import React from "react"
import { timeValid } from "../time/time"
import Button from "./Button"
import Header from "./Header"
import { Error } from "./CreateTodoForm"
import MyField from "./Field"
import { db } from "../db"
type CategoryFormikValues = {
    name: string
}

const CreateCategory: React.FC<{}> = () => {
    return <div className="w-8/12 mx-auto">
        <Header>Create new Category</Header>
        <Formik<CategoryFormikValues>
            initialValues={{
                name: ""
            }}
            validate={async (values) => {
                let errors: FormikErrors<CategoryFormikValues> = {}
                if (values.name === "") {
                    errors.name = "category name cannot be empty"
                }
                return errors;
            }}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
                console.log("submitting form")
                await db.createCategory(values)
                setSubmitting(false)
                resetForm();
            }}
        >
            {({ errors, values, isSubmitting }) => (
                <Form className="justify-items-center	">
                    <div className="flex flex-col">
                        <label htmlFor="name">Category Name</label>
                        <MyField name="name" />
                        <Error name="name" />

                    </div>
                    <Button type="submit" disabled={isSubmitting} >
                        Submit
                    </Button>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                    <pre>{JSON.stringify(errors, null, 2)}</pre>

                </Form>

            )}
        </Formik>
    </div>
}
export default CreateCategory