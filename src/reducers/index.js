import {ADD_REMINDER} from '../types'


const reminders = (state=[], action)=>{
    let reminders=null;
    if(action.type===ADD_REMINDER){
        reminders=[...state,{text:action.text, date:action.date,time:action.time, id:Math.random()}];
        console.log("from reducers index",reminders);
        return reminders;
    }
    return state
}
export default reminders;
