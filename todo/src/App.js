import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Plan from './Plan'
class App extends React.Component{
  state={
    items:[],
    text:""
  }
  handler = (e)=>{
    this.setState({text : e.target.value})
  }
  adder=()=>{
    if(this.state.text){
      const items=[...this.state.items,this.state.text]
      this.setState({items:items,text:""})
    }
  }
  handleDelete=(id)=>{
    const items = this.state.items.filter((elemnent,i)=>{
      return i !== id
    })
    this.setState({items:items})
  }
  render(){
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white">
            <div className="text-center shadow p-3">
              <h1>Today's Plan</h1>
              <div className="row">
                <div className="col-9">
                  <input type="text" name="" id="" className="form-control" placeholder="Write Plan Here" value={this.state.text} onChange={this.handler} />
                </div>
                <div className="col-2">
                  <button className="btn btn-warning px-5 font-weight-bold" onClick={this.adder}>Add</button>
                </div>
                <div className="container-fluid">
                  <ul className="list-unstyled row m-5">
                    {
                      this.state.items.map((value,i)=>{
                        return <Plan handleDelete={this.handleDelete} value={value} id={i} key={i}/>
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
