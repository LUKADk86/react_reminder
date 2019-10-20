import React, {Component} from 'react';
import { connect } from 'react-redux'
import { add_Reminder } from '../actions';
class App extends Component{
    state={
        text: '',
        date: new Date(),
        time: ''
        
    }
    render(){
        return(
            <div className='App'>
                
                <h1>Agenda du Rappel</h1>
                <label htmlFor="text">Nom de l'évènement</label><br/>
                <input
                 type='text' placeholder="quel évenement ?" className="form-control"
                 onChange={(e)=>this.setState({text:e.target.value})}
                 /><br/>
                 <label htmlFor="date"> Date du l'évènement</label><br/>
                <input 
                type="date" className="form-control" name="date"
                onChange={(e)=>this.setState({date:e.target.value})}
                /><br/>
                <label htmlFor="time">Heure du l'évènement</label><br/>
                <input 
                type="time" className="form-control" name="time"
                onChange={(e)=>this.setState({time:e.target.value})}
                /><br/>
                <button className="btn btn-primary btn-block" onClick={()=>add_Reminder(this.state.text, this.state.date, this.state.time)}>Ajouter</button>
                <button className="btn btn-danger btn-block">Supprimer</button>
            </div>
        )
    }
}
/*function mapDispatchToProps(dispatch){
    return {
        addreminder: ()=>dispatch(add_Reminder())
    }

}*/
export default connect(null, {add_Reminder})(App);