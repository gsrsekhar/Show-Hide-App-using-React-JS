// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: true, lastName: true}

  firstNameButton = () => {
    const {firstName} = this.state
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  lastNameButton = () => {
    const {lastName} = this.state
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="btn-container">
          <div className="btn-element">
            <button
              className="button"
              type="button"
              onClick={this.firstNameButton}
            >
              Show/Hide Firstname
            </button>
            {firstName ? (
              ''
            ) : (
              <div className="text-container">
                <p className="head">Joe</p>
              </div>
            )}
          </div>
          <div className="btn-element">
            <button
              className="button"
              type="button"
              onClick={this.lastNameButton}
            >
              Show/Hide lastname
            </button>
            {lastName ? (
              ''
            ) : (
              <div className="text-container">
                <p className="head">Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
