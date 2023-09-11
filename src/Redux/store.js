import { legacy_createStore } from "redux";
import { basicReducer } from "./reducer";

const mystore = legacy_createStore(basicReducer)

export default mystore