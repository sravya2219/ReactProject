import {Component} from "react"
import "./App.css";
class App extends Component{
    constructor(){
        super();
        this.state={todoInput:"", todos:[],isEdit:false,updateIndex:null}
    }
    handleInput= (e)=>{
        this.setState({todoInput:e.target.value})

    }
    handleAddTodo= ()=>{
        const newtodo=[...this.state.todos,this.state.todoInput]
          this.setState({todos:newtodo,todoInput:""})
    }
    handleDelete =(index)=>{
      const todosdelete=this.state.todos.filter((ele,i)=>  i !==index)
      this.setState({todos:todosdelete})
    }
    handleEdit = (index)=>{
        const findTodoById=this.state.todos.find((ele,i)=> i ==index)
        this.setState({todoInput:findTodoById,isEdit:true,updateIndex:index})

    }
    handleUpdate = ()=>{
        this.state.todos.splice(this.state.updateIndex,1,this.state.todoInput)
        this.setState({todoInput:"",todos:this.state.todos,isEdit:false,updateIndex:null})
    }
 render(){
   
    return (
    <div className="main">
      <h1>Todo Application</h1>
        <div className="add">
        <input type="text" onChange={(e)=>this.handleInput(e)} placeholder="Enter todo Tasks" value={this.state.todoInput}/>  
        {this.state.isEdit === true ? <button onClick={()=>this.handleUpdate()}>Update</button>: <button onClick={()=>this.handleAddTodo()}>Add</button>} 
        

    </div>
    <div className="second">
    {this.state.todos.map((ele,index)=> <div key={index}> 
        <p>{ele}</p>
        <button onClick={()=>this.handleEdit(index)}>Edit</button>
        <button onClick={()=>this.handleDelete(index)}>Delete</button>
    </div>)}
    </div>
    </div>
    );
 }
}
export default App;