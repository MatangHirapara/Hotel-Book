import change from './adults/change';
import child from "./child/child";
import notify from './notify/notify';
import room from './room/room';
import email from '../component/pages/toorTravel/email';
import {combineReducers}from 'redux';


const rootReducer = combineReducers({change,child,room,notify,email});


export default rootReducer;