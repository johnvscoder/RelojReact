const rootDOM = document.getElementById("root");
const root = ReactDOM.createRoot(rootDOM);

function update() {

}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        let fecha = new Date();
        this.state = {
            hour: fecha.getHours(),
            minutes: fecha.getMinutes(),
            seconds: fecha.getSeconds()
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            let fecha = new Date();
            this.setState({
                hour: fecha.getHours(),
                minutes: fecha.getMinutes(),
                seconds: fecha.getSeconds()
            });
        }, 1000);

        let seconds = this.state.seconds;
        let minutes = this.state.minutes + seconds / 60;
        let hour = this.state.hour + minutes / 60;

        document.querySelector(".seconds").animate([
            {transform: `rotate(${seconds * 6}deg)`},
            {transform: `rotate(${360 + seconds * 6}deg`}
        ], {
            duration: 60 * 1000,
            iterations: Infinity
        });

        document.querySelector(".minutes").animate([
            {transform: `rotate(${minutes * 6}deg)`},
            {transform: `rotate(${360 + minutes * 6}deg`}
        ], {
            duration: 60 * 60 * 1000,
            iterations: Infinity
        });

        document.querySelector(".hour").animate([
            {transform: `rotate(${hour * 30}deg)`},
            {transform: `rotate(${360 + hour * 30}deg`}
        ], {
            duration: 24 * 60 * 60 * 1000,
            iterations: Infinity
        });
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        let hour = (this.state.hour < 10 ? "0" : "") + this.state.hour;
        let minutes = (this.state.minutes < 10 ? "0" : "") + this.state.minutes;
        let seconds = (this.state.seconds < 10 ? "0" : "") + this.state.seconds;
        return (
            <div className="clock-container">
                <div className="clock">
                    <div className="h h-0">0</div>
                    <div className="h h-1">1</div>
                    <div className="h h-2">2</div>
                    <div className="h h-3">3</div>
                    <div className="h h-4">4</div>
                    <div className="h h-5">5</div>
                    <div className="h h-6">6</div>
                    <div className="h h-7">7</div>
                    <div className="h h-8">8</div>
                    <div className="h h-9">9</div>
                    <div className="h h-10">10</div>
                    <div className="h h-11">11</div>
                    <div className="clockwise hour"></div>
                    <div className="clockwise minutes"></div>
                    <div className="clockwise seconds"></div>
                </div>
                <h2 className="clock-text">{hour}:{minutes}:{seconds}</h2>
            </div>
        );
        // return (
        //     <h1>La hora es {(this.state.hour < 10 ? "0" : "") + this.state.hour}:{this.state.minutes}:{this.state.seconds}</h1>
        // );
    }
}

root.render(<Clock />);
