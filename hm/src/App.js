import React, { Component, Fragment } from "react";
import "./App.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       show: true
//     };
//     this.handleToggle = this.handleToggle.bind(this);
//   }
//   render() {
//     return (
//       <Fragment>
//         <CSSTransition
//           in={this.state.show}
//           timeout={1000}
//           unmountOnExit
//           onEntered={el => {
//             el.style.color = "blue";
//           }}
//           appear={true}
//           classNames="fade"
//         >
//           <div>hello</div>
//         </CSSTransition>
//         <button onClick={this.handleToggle}>toggle</button>
//       </Fragment>
//     );
//   }
//   handleToggle() {
//     this.setState({
//       show: this.state.show ? false : true
//     });
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.handleAddItem = this.handleAddItem.bind(this);
  }
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          {this.state.list.map((item, index) => {
            return (
              <CSSTransition
                key={index}
                in={this.state.show}
                timeout={1000}
                unmountOnExit
                onEntered={el => {
                  el.style.color = "blue";
                }}
                appear={true}
                classNames="fade"
              >
                <div>{item}</div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>

        <button onClick={this.handleAddItem}>toggle</button>
      </Fragment>
    );
  }
  handleAddItem() {
    this.setState(prevState => {
      return {
        list: [...prevState.list, "item"]
      };
    });
  }
}

export default App;
