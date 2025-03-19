// import React, { Component } from 'react'

// class Study extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//           first:1,
//           second:2
//         };
//         this.handleclick=this.handleclick.bind(this);
//     }
//     handleclick(){
//       this.setState({first:this.state.first+ 1});
//     }
//     componentDidMount(){
//       console.log("data received")
//     }
//     componentDidUpdate(prevprops,prevState){
//       if(prevState.first !== this.state.first){
//         console.log("First value changed");
//       }
//     }
//   render() {
//     return (
//       <div className='class'>
//         <h2>First:{this.state.first}</h2>
//         <h2>Second:{this.state.second}</h2>
//         <button onClick={this.handleclick}>add name</button>  


//           <button onClick={()=>this.setState({second:this.state.second + 1})}
//           >add name</button>
//           <div className='form'>
//             <form>

//             </form>

//           </div>

//       </div>
//     )
//   }
// }

// export default Study;


import React, { Component } from 'react';

class Study extends Component {
  render() {
    return (
      <div>
        <h1>Form with Like Button</h1>
        <Form />
      </div>
    );
  }
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCount: 0,  
      name: '',
      email: ''
    };
  }
  componentDidMount() {
    console.log("Component mounted successfully.");
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.likeCount !== this.state.likeCount) {
      console.log("Like count has been updated:", this.state.likeCount);
    }
    if (prevState.name !== this.state.name) {
      console.log("Name has been updated:", this.state.name);
    }
    if (prevState.email !== this.state.email) {
      console.log("Email has been updated:", this.state.email);
    }
  }

  handleLikeClick = () => {
    this.setState((prevState) => ({
      likeCount: prevState.likeCount + 1,
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    console.log("Name:", this.state.name);
    console.log("Email:", this.state.email);
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className='post'>
        <form onSubmit={this.handleSubmit} method="POST">
          <label>Name:<input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} /></label>
          <br />
          <label>Email:<input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} /></label>
          <br />
          <button type="submit">Submit</button>
        </form>
        <br />
        <button onClick={this.handleLikeClick}>Like </button>
        <span> {this.state.likeCount}</span>
      </div>
    );
  }
} 

export default Study;
