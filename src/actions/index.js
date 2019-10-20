import {ADD_REMINDER} from '../types';

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