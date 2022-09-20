import { Component } from "react";
import check from "./bagpic.png";

export class GroceryList extends Component {

state = {
userInput:"",
GroceryList: []
}
onChangeEvent(e) {
    this.setState({userInput: e});
    //console.log (e)
}

addItem (input) {
    if (input === "") {
       alert ("Please enter an item!")
    } else {
    let listArray = this.state.GroceryList;
    listArray.push (input);
    this.setState ({groceryList:listArray, userInput:""})
    //console.log (listArray);
}
}
deleteItem() {
    let listArray = this.state.GroceryList;
    listArray=[];
    //2nd variant ! listArray.length=0;
    this.setState({GroceryList: listArray})
}

crossedWord (event) {
    const li=event.target;
    li.classList.toggle("crossed");
}
onFormSubmit(e) {
    e.preventDefault();
}

render() {

    return (
        <div> 
            <form onSubmit={this.onFormSubmit}> 
        <div className="container"> 
            <input type="text" 
            placeholder="What do you want to buy today...?"
            onChange ={(e) => {this.onChangeEvent (e.target.value)}}
            value={this.state.userInput}/>
        </div>
        <div className="container">
            <button onClick={()=> this.addItem(this.state.userInput)} className="btn btn-add"> ADD</button>
        </div>

        
            <ul>
                {this.state.GroceryList.map((item, index) => (
                    <li onClick = {this.crossedWord} key={index}> 
                    <img src={check} width="40px" alt="bagpic"/>
                    {item}</li>
                ))}
            </ul>
<div className="container">
            <button onClick ={() => this.deleteItem()} className="btn btn-delete"> DELETE</button>
            </div>
            </form>
        </div>
    )
}

}