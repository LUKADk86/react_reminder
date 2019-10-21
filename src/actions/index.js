import {ADD_REMINDER} from '../types';
import {REMOVE_REMINDER} from '../types'


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