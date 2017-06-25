import React from 'react';
import './App.css';
import uuid from 'uuid'; //generates a random unique key

class Todo extends React.Component{
render(){
  return(
    <li className="oneItem" key={this.props.id} >
      <input type="checkbox" style={{fontSize: "x-large"}}  onChange={e=>{this.props.isDone(this.props.id)}}
            checked={this.props.done ? "checked" : ""}></input>
      <label style={{paddingLeft: "2%"}} className={this.props.done ? "done" : ""}> {this.props.text}</label><button className="btn btn-default trash"><span><i className="fa fa-trash" onClick={this.props.handleDelete}/></span></button>
    </li>
  )
}}

class AddTodo extends React.Component{
  constructor(){
    super();

this.handleSubmit = this.handleSubmit.bind(this);
  }

handleSubmit(e){
  e.preventDefault();
  let newItem = { text: this.refs.text.value, done: false, id: uuid.v4() }
    if (this.refs.text.value === ""){
      alert("Your entry was blank! Please enter your next item...");
    } else {
      this.props.handleSubmit(newItem)
    }
}

render(){

  return(
    <div>
    <h2 className="things">Things I Want to Do...</h2>
    <div className="input-group input-group-lg">
      <form className="newText" onSubmit={(e)=>{this.handleSubmit(e)}}>
      <span className="input-group-addon input-field newTextField" id="sizing-addon2">
      <input className="newItemText form-control" ref="text" placeholder="New item..." value={this.props.newInput} onChange={e=>{this.props.handleChange(e)}} type="text" />
      <button className="add btn btn-default-lg"><i className="fa fa-pencil fa-lg"></i>Add</button>
      </span>
      </form>
    </div>
    </div>
  )
}
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
          { text: 'Learn React', done: false, id: uuid.v4()},
          { text: 'Adopt all the doggies', done: false, id: uuid.v4()},
          { text: 'Bike to Niagara', done: false, id: uuid.v4()},
          { text: 'Finally knit that scarf', done: false, id: uuid.v4()},
        ],
      filter: "all",
    };

//bindings
    this.handleChange = this.handleChange.bind(this);
    this.isDone = this.isDone.bind(this);
    this.clearComplete = this.clearComplete.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.getTodos = this.getTodos.bind(this);
  }

// getTodos(){
//   let newtodos = JSON.parse(localStorage.getItem("todos"));
// console.log(newtodos)
//   this.setState({todos: newtodos});
// }

componentWillMount(){
    // this.getTodos();

    if (localStorage.todos) {
    let test = localStorage.getItem("todos")
    console.log(test)

    let newtodos = JSON.parse(test);
console.log(newtodos)
  this.setState({todos: newtodos});
}
  }

clearComplete(){
  let newTodos = this.state.todos.filter((todo)=> {
  return !todo.done;
  });
  this.setState({
    todos: newTodos,
  })
}

handleChange(e) {
    let newInput = e.target.value
    console.log(newInput)
    e.preventDefault();
    this.setState({
      newInput: newInput,
    })
  }

handleSubmit(newItem) {
    let newArray = this.state.todos;
    newArray.push(newItem)
    this.setState({todos: newArray,
                          newInput: ""}
    )}

handleDelete(index){
  alert("Are you sure you want to remove this task?");
  let newTodosArray = this.state.todos.slice();
  newTodosArray.splice(index, 1);
  this.setState({
    todos: newTodosArray});
}

handleFilter(e){
this.setState({
  filter: e.target.value
})
}

componentDidUpdate(){
  localStorage.setItem("todos", JSON.stringify(this.state.todos))
}

afterListUpdate(text, done, id){
  localStorage.setItem("todos", JSON.stringify(this.state.todos))
}

text={
  mode: "submit",
  afterListUpdate: this.afterListUpdate
};

isDone(index) {
  console.log(index)
    let newTodos = this.state.todos;
for (let j = 0; j < newTodos.length; j++ ){
    if (newTodos[j].id === index) {
    newTodos[j].done = !newTodos[j].done;
  }}

 this.setState({
      todos: newTodos,
    })
  }

render() {
  let newTodos = this.state.todos.filter((todo)=>{
    if (this.state.filter === "all") return true
    else if (this.state.filter === "pending") return !todo.done
    else return todo.done
    }).map((todo, i) => {
    return <Todo text={todo.text} done={todo.done} id={todo.id} isDone={this.isDone} handleDelete={this.handleDelete} key={i}/>
    })

  return (
    <div className="App">
      <div className="container">
        <div className="main-well well offset4 span4">
        <div className="row">
          <ul className="todoList col-xs-11">
              <AddTodo handleChange={this.handleChange} newInput={this.state.newInput} handleSubmit={this.handleSubmit}/>
                <div className="well offset2 span2 counter" style={{border: "1px solid transparent", color: "goldenrod" }}>
              Left to Complete:  {this.state.todos.reduce((acc,todo)=>{return !todo.done ? acc+1 : acc},0)}     Completed:  {this.state.todos.reduce((acc,todo)=>{return todo.done ? acc+1 : acc},0)}     Total: {this.state.todos.length} </div>
             {newTodos}
            <select className="options" onChange={this.handleFilter}>
              <option value="all" >All</option>
              <option value="pending" >Pending</option>
              <option value="complete" >Completed</option>
            </select>
            <button className="clear" onClick={this.clearComplete} disabled={this.state.todos.reduce((acc,todo)=>{return todo.done ? acc+1 : acc},0) === 0 ? "true" : ""}  >Clear Completed</button>
          </ul>
        </div>
      </div>
      </div>

      </div>

    )
  }
}

export default App;
