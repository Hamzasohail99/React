class Header extends React.Component{
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>put your life</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    render(){
        return (
            <div>
                <button> what should i do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    render(){
        return (
            <div>
                options component here
            </div>
        );
    }
}
class Addoption extends React.Component{
    render(){
        return(
            <div>
                Add option component here
            </div>
        );
    }
}

const jsx = (
    <div>
        <h1>title</h1>
        <Header/>
        <Action/>
        <Options/>
        <Addoption/>
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));