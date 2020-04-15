//import react and react dom
import React from 'react';
import ReactDOM from 'react-dom';
import TileContainer from './components/TileContainer';

//create a react component
const App = () => {
    return <div>hi there
        <TileContainer/>
    </div>;
};

ReactDOM.render(
    <App/>, document.querySelector('#root')
);
//take the component and show to screen