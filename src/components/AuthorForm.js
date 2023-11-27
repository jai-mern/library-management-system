// AuthorForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AuthorForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    birthDate: Yup.string().required('Birth Date is required'),
    biography: Yup.string().required('Biography is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label htmlFor="birthDate">Birth Date:</label>
          <Field type="text" id="birthDate" name="birthDate" />
          <ErrorMessage name="birthDate" component="div" />
        </div>

        <div>
          <label htmlFor="biography">Biography:</label>
          <Field as="textarea" id="biography" name="biography" />
          <ErrorMessage name="biography" component="div" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default AuthorForm;
