import React from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import validateEmail from "../../utils/validateEmails";

import SurveyField from "./SurveyField";
import formFields from "./formFields";

const SurveyForm = ({ handleSubmit, onSurveySubmit }) => {
  const renderFields = () => {
    return formFields.map(({ label, name }) => {
      return (
        <div key={name}>
          <Field
            label={label}
            type="text"
            name={name}
            component={SurveyField}
          />
        </div>
      );
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSurveySubmit)}>
        {/* <Field component="input" name="surveyTitle" type="text" /> */}
        {renderFields()}
        <Link to="/surveys" className="red btn-flat white-text">
          Cancel
        </Link>
        <button className="teal btn-flat right white-text" type="submit">
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
  );
};

function validate(values) {
  const errors = {};
  errors.recipients = validateEmail(values.emails || "");
  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide value";
    }
  });
  return errors;
}

export default reduxForm({
  form: "surveyForm",
  validate: validate,
  destroyOnUnmount: false,
})(SurveyForm);
