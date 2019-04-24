import React, {Component} from 'react';
import axios from 'axios';

class PetForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            pet:{
                type: "",
                name: "",
                description: "",
                skill: "",
                likes:0
               

            },
            errors: {}
        }
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

    create=(e)=> {
        e.preventDefault();
        axios.post('/pets', this.state.pet)
            .then(res =>{
                if(res.data.errors){
                    this.setState({errors: res.data.errors.errors});
                    console.log(this.state);
                }else{
                    this.props.history.push("/");
                }
            }).catch(err => { 
                console.log(err);

            });
    }
    render(){
        return(
       
            <fieldset>
                <legend>Know of a pet needing a home??!!! </legend>
                <form onSubmit={this.create}>
                <p>
                    Pet name: &nbsp;
                    <input type="text" onChange={this.changeName }/>
                    {
                        (this.state.errors.name) ?
                        <span className="error">&nbsp;{this.state.errors.name.message}</span> :
                        <span></span>
                    }
                </p>
                <p>
                    Pet type: &nbsp;
                    <input type="text" onChange={this.changeType}/>
                    {
                        (this.state.errors.type) ?
                        <span className="error">&nbsp;{this.state.errors.type.message}</span> :
                        <span></span>
                    }
                </p>
                <p>
                    Description: &nbsp;
                    <input type="text" onChange={this.changeDescription}/>
                    {   
                        (this.state.errors.description) ?
                        <span className="error">&nbsp;{this.state.errors.description.message}</span> :
                        <span></span>
                    }
                </p>
                
                    Skills: &nbsp;

                        <p>
                            Skill:
                            <input type="text" onChange={this.changeSkill}/>
                        </p>
                       
               
               
               
                    <button type="submit" className="btn btn-success">Add pet</button>
                    <button type="submit" className="btn btn-success">Cancel</button>
                </form>


            </fieldset>
         
          
    );
}
}
export default PetForm;