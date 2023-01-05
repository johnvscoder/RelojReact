const rootDOM = document.querySelector(".root");
const root = ReactDOM.createRoot(rootDOM);

function Clock(props) {
    function action(e) {
        e.preventDefault();
        alert("You have pressed the time");
        console.log(e);
    }

    let date = new Date();
    return (
        <p onClick={action}>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</p>
    );
}

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {pressed: false};
        this.action = this.action.bind(this);
    }

    action() {
        this.setState(prevState => {
            alert("Pressed?: " + !prevState.pressed);

            return {
                pressed: !prevState.pressed
            }});
        
    }

    render() {
        return (<p onClick={this.action}>Hola, {this.props.name}. Presionado? {this.state.pressed ? "true" : "false"}</p>);
    }
}

class Copy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ""};
    }

    action = e => {
        let text = e.target.value;
        this.setState({text});
    }

    render() {
        return (
            <div>
                <input onChange={this.action}/>
                <p>{this.state.text}</p>
            </div>
        );
    }
}


// root.render(<Clock />);
// root.render(<Button name="John" />);

root.render(<Copy />);