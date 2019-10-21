import {ADD_REMINDER, REMOVE_REMINDER, CLEAR_REMINDERS} from '../types';



export const add_Reminder=(text, date, time)=>{
    const action ={
        type: ADD_REMINDER,
        text,
        date,
        time
    }
    console.log('add', action)
    return action;
}
export const remove_Reminder=(id)=>{
    const action ={
        type: REMOVE_REMINDER,
        id
    }
   console.log('remove', action)
    return action;
}
export const clear_Reminders=()=>{
    const action ={
        type: CLEAR_REMINDERS,
    }
   console.log('clear', action)
    return action;
}