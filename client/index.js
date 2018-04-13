import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);

// class TestClass1 extends React.Component {
//     render () {
//         return (
//             React.createElement("div",
//                 { className: "container" },
//                 React.createElement("h1", null, "React Component example")
//                 )
//         );
//     }
// }
//
// ReactDOM.render(React.createElement(TestClass1, null), document.getElementById('root'));

class TestClass2 extends React.Component {
    render () {
        return (
           <div className="container">
               <h1>Hello, {this.props.name}</h1>
           </div>
        );
    }
}

class TestClass3 extends React.PureComponent {
    render () {
        return (
            <div className="container">
                <h1>Hello, {this.props.name}</h1>
            </div>
        );
    }
}

// ReactDOM.render(<TestClass2 name="Noname"/>, document.getElementById('reactComponentTest'));

function App() { // functional one
    return (
        <div>
            <TestClass2 name="Component"/>
            <TestClass3 name="Pure Component"/>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);