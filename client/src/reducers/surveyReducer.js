import { FETCH_SURVEY } from "../actions/types";

export default function surveyReducer(state = [], action) {
  switch (action.type) {
    case FETCH_SURVEY:
      return action.payload;
    default:
      return state;
  }
}
