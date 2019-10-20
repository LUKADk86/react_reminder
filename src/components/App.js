import React, {Component} from 'react';
class App extends Component{
    render(){
        return(
            <div className='App'>
                
                <h1>Agenda du Rappel</h1>
                <input
                 type='text' placeholder="quel évenement ?" className="form-control"/><br/>
                <input 
                type="date" className="form-control"
                /><br/>
                <input type="time" className="form-control"
                /><br/>
                <button className="btn btn-primary btn-block">Ajouter</button>
                <button className="btn btn-danger btn-block">Supprimer</button>
            </div>
        )
    }
}
export default App;