import React from 'React';
import ReactDOM from 'react-dom';
import App from './components/App';

class Homepage extends React.Component {
    render(){
        return(
        <div>Homepage update</div>
        );
    }
    
}

ReactDOM.render(<App />,
    document.querySelector('#root'));

