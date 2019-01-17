import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

class Skill extends Component {
  constructor(props) {
    super(props)
    this.state = {
      percentStart: 50,
      percentEnd: props.percent
    }
    this.props = props;
  }

  startPercent = () => {
    if (this.state.percentStart < this.state.percentEnd) {
      this.setState({ percentStart: this.state.percentStart + 1 })
    }
  }
  

  componentDidUpdate () {
    setTimeout (() => this.startPercent(),30)
  }
 
  render() {
    return (
      <div className="center_wrapper">
        <div className="skill_wrapper">
          <Fade onReveal={() => this.startPercent()}>
            <div className="skill_percentage">
              <span>
                {this.state.percentStart}%
              </span>
            </div>
          </Fade>

          <Slide right>
            <div className="skill_description">
              <h3>{this.props.skill}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, aut.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, aut.</p>

            </div>
          </Slide>
        </div>
      </div>
    )
  }
}

export default Skill
