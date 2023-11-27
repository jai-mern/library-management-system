// BookForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbn: Yup.string().required('ISBN is required'),
    publicationDate: Yup.string().required('Publication Date is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label htmlFor="title">Title:</label>
          <Field type="text" id="title" name="title" />
          <ErrorMessage name="title" component="div" />
        </div>

        <div>
          <label htmlFor="author">Author:</label>
          <Field type="text" id="author" name="author" />
          <ErrorMessage name="author" component="div" />
        </div>

        <div>
          <label htmlFor="isbn">ISBN:</label>
          <Field type="text" id="isbn" name="isbn" />
          <ErrorMessage name="isbn" component="div" />
        </div>

        <div>
          <label htmlFor="publicationDate">Publication Date:</label>
          <Field type="text" id="publicationDate" name="publicationDate" />
          <ErrorMessage name="publicationDate" component="div" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default BookForm;
