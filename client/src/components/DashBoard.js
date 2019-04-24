import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';





class DashBoard extends Component{
    constructor(props){
        super(props);
        this.state = {
            pets: []
        }
    }
    componentDidMount = () =>{
        axios.get("/pets")
            .then(res =>{
                this.setState({pets: res.data.pets}, ()=>{
                    
                });
            }).catch(err =>{
                console.log(err);
            });
    }

    render(){
        return(
       
            <fieldset>
                <legend>These pets are looking for a home!</legend>
                
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.pets.map(pet =>
                                <tr key={pet._id}>
                                    <td>{pet.name}</td>
                                    <td>{pet.type}</td>

                                    <td>
                                        <Link
                                            to={'/pet/' + pet._id + "/edit"}>
                                            <button className="btn btn-info">Edit</button>
                                        </Link>
                                        <Link
                                            to={'/pet/' + pet._id + "/detail"}>
                                            <button className="btn btn-secondary">Detail</button>
                                        </Link>
                                    </td>
                                </tr>
                                )
                            }
                    </tbody>
                </table>
            </fieldset>
  
            );
        }
     
    }
          
export default DashBoard;