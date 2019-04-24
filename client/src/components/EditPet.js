import React, {Component} from 'react';
import axios from 'axios';


class EditPet extends Component{
    constructor(props){
        super(props);
        this.state = {
            pet:{
                type: "",
                name: "",
                description: "",
                skill:"",

            },
            errors: {}
        }
    }
    componentDidMount = () => {
        axios.get(`/pets/${this.props.match.params._id}`)
            .then(res => {
                this.setState({pet: res.data.pet});
            }).catch(err => {
                console.log(err);
            })
    }


    changeType= (e)=> {
        this.setState({pet: {...this.state.pet, type:e.target.value}});
    }
    changeName= (e)=> {
        this.setState({pet: {...this.state.pet, name:e.target.value}});
    }
    changeDescription= (e)=> {
        this.setState({pet: {...this.state.pet, description:e.target.value}});
    }
    changeSkill= (e)=> {
        this.setState({pet: {...this.state.pet, skill:e.target.value}});
    }
   
    update=(e)=> {
        e.preventDefault();
        console.log(this.state);
        axios.put(`/pets/${this.props.match.params._id}`, this.state.pet)
            .then(res => {
                if(res.data.errors){
                    this.setState({errors: res.data.errors.errors});
                } else {
                    this.props.history.push('/');
                }
            }).catch(err => {
                console.log(err);
            });
    }
    delete = (e) => {
        axios.delete(`/pets/${this.props.match.params._id}`)
            .then(res => {
                this.props.history.push('/');
            }).catch(err => {
                console.log(err);
            });
    }
    render(){

        
        return(
       
            <fieldset>
                <legend>Edit what we know about this pet... </legend>
                <form onSubmit={this.update}>
                <p>
                    Pet name: &nbsp;
                    <input type="text" onChange={this.changeName} value={this.state.pet.name}/>
                    {
                        (this.state.errors.name) ?
                        <span className="error">&nbsp;{this.state.errors.name.message}</span> :
                        <span></span>
                    }
                </p>
                <p>
                    Pet type: &nbsp;
                    <input type="text" onChange={this.changeType}value={this.state.pet.type}/>
                    {
                        (this.state.errors.type) ?
                        <span className="error">&nbsp;{this.state.errors.type.message}</span> :
                        <span></span>
                    }
                </p>
                <p>
                    Description: &nbsp;
                    <input type="text" onChange={this.changeDescription}value={this.state.pet.description}/>
                    {
                        (this.state.errors.description) ?
                        <span className="error">&nbsp;{this.state.errors.description.message}</span> :
                        <span></span>
                    }
                </p>
                <h5>Skill: &nbsp;
                    <input type="text" onChange={this.changeSkill}value={this.state.pet.skill}/>
                   
                </h5>
             
                                      
                   
                   <button type="submit" className="btn btn-success">Details</button>
                        <button className="btn btn-success">Cancel</button>
                       
                </form>


            </fieldset>
         
          
    );
}
}
export default EditPet;