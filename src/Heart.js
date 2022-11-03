import { Component } from "react";
import heartone from "./heartone.jpg";
import hearttwo from "./hearttwo.jpg";

export class Heart extends Component {
    state = {
        CTA:"LIKE US!",
        image: heartone
       } 

       heartClicked = () => {
        this.setState({
            CTA: "Thank You! We love you, too!",
            image: hearttwo
        })
       }

    render () {
        return <div> 
            <div className="container"> 
          <h3 >{this.state.CTA} </h3>
          </div> 
          <div className="container"> 
          <img onClick={this.heartClicked}src={this.state.image} width="100px"alt="heartone"/>
        </div>
        </div>
    }
}