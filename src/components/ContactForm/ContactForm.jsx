import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { useId } from "react";

export const ContactForm = ({ onAddContact }) => {
  const nameId = useId();
  const numberId = useId();
  const fieldsValue = {
    name: "",
    number: "",
  };

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short")
      .max(30, "Too long")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short")
      .max(30, "Too long")
      .required("Required"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact({
      id: nanoid(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    });
  };

  return (
    <Formik
      initialValues={fieldsValue}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
      }}
    >
      <Form className={css.searchForm} onSubmit={handleSubmit}>
        <div className={css.input}>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId} />
          <ErrorMessage name="name" component="p" className={css.info} />
        </div>
        <div className={css.input}>
          <label htmlFor={numberId}>Number</label>
          <Field type="text" name="number" id={numberId} />
          <ErrorMessage name="number" component="p" className={css.info} />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
