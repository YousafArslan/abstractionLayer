import { combineReducers } from "redux";
import { AllReducer } from "./AbstractReducer";
import permissionsReducer from "./permissions";

export const rootReducer = combineReducers({
  all: AllReducer,
  permissions: permissionsReducer,
});
