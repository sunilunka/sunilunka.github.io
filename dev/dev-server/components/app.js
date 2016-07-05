import React from 'react';
import ReactDOM from 'react-dom';
import Styling from 'style-loader!css-loader!sass-loader!../styles/main.scss'
// class App extends Component {
//   render() {
//     return <h1>Hello!</h1>
//   }
// }
var mountNode = document.getElementById('app-container');

const App = () => {
  return <h1 className="app-title">Hi!</h1>
}

console.log("MOUNT NODE: ", mountNode);

ReactDOM.render(<App />, mountNode);
