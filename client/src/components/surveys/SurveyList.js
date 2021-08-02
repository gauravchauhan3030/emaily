import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSurvey } from "../../actions";

const SurveyList = ({ fetchSurvey, surveys }) => {
  useEffect(() => {
    fetchSurvey();
  }, []);

  const renderSurveys = () => {
    return surveys.reverse().map((survey) => {
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
            <div className="card-action">
              <a>Yes: {survey.yes}</a>
              <a>No: {survey.no}</a>
            </div>
          </div>
        </div>
      );
    });
  };
  return <div>{renderSurveys()}</div>;
};

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurvey })(SurveyList);
