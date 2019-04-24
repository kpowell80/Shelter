import React, { Component } from 'react';
import axios from 'axios';

//  {Router, Route} from 'react-router';

class DetailPet extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0,
            // updated=true
           
            pet: {
                type: "",
                name:"",
                description: "",
                skill: "",
                likes: 0,
            },
            errors: {}
        }
    }
    

    componentDidMount = () => {
        axios.get(`/pets/${this.props.match.params._id}`)
            .then(res => {
                console.log(res)
                this.setState({pet: res.data.pet});
            }).catch(err => {
                console.log(err);
            })
    }
    delete = (e) => {
        axios.delete(`/pets/${this.props.match.params._id}`)
            .then(res => {
                this.props.history.push('/');
            }).catch(err => {
                console.log(err);
            });
    }


  incrementMe=(e)=>{
    console.log(e)
    document.getElementById("likes").disabled = true;
    let newCount = this.state.count +1
        e.likes ++
      this.setState({
          count:newCount
      })
     
        axios.put(`/pets/${this.props.match.params._id}`, e)
      console.log("like the animal")
  
}

    render() {
        return (
            
           <div>
                <h3>Pet name: {this.state.pet.name}</h3>
                <h4>Pet type: {this.state.pet.type}</h4>
                <h4>Description: {this.state.pet.description}</h4>
                <h4>Skill:{this.state.pet.skill} </h4>
                <h4>Likes:{this.state.pet.likes}</h4>
                <hr />

               <p><button onClick={this.delete} class="btn btn-danger">ADOPT!</button></p>
                <p><button id="likes" onClick={this.incrementMe.bind(this, this.state.pet)} >Likes</button></p>
                
           
               
            </div>

                
            
        )
    }
}

export default DetailPet;
