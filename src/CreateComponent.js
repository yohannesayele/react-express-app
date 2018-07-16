import React, {Component} from 'react';
export default class CreateComponent extends Component{
    render(){
        return (
           <div style={{marginTop: 50}}>
                <h3>Add your info</h3>
                <form>
                    <div className="form-group">
                        <label>Add your Name:  </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Add father name: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Node server" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}