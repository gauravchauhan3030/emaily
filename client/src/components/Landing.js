import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
const Landing = (props) => {
  // useEffect(() => {
  //   if (props.auth) {
  //     console.log("here", props);
  //     props.history.push("/surveys");
  //   }
  // }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Emaily</h1>
      Collect feedback from your users.
    </div>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(withRouter(Landing));
