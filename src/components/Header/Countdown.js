import React, { Component } from 'react'
import Slide from 'react-reveal/Slide';

class Countdown extends Component {
    state = {
        Date: 'Apr, 28, 2019',
        Days:'10',
        Hrs:'20',
        Min:'30',
        Sec:'40'
    }
    timeUntil () { 
        const time = Date.parse(this.state.Date) - Date.parse(new Date());
        if (time < 0) {
            //day has passed
        } else {
            const Sec = Math.floor((time/1000)%60);
            const Min = Math.floor((time/1000/60)%60);
            const Hrs = Math.floor((time/(1000*60*60))%24);
            const Days = Math.floor(time/(1000*60*60*24));

            this.setState({
                Days,
                Hrs,
                Min,
                Sec
            })
        }
    }

    componentDidMount() {
        setInterval(()=>this.timeUntil(),1000)
    }
  
    timers = ["Days","Hrs","Min","Sec"]

    render() {
    return (
        <Slide left delay={1000}>
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    Available for hire in:
                </div>
                <div className="countdown_bottom">
                    {
                        this.timers.map((el, i) => {
                            return (
                                <div key = {el} className="countdown_item">
                                    <div className="countdown_time">
                                        {this.state[el]}
                                    </div>
                                    <div className="countdown_tag">
                                        {el}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Slide>
    )
  }
}
export default Countdown;