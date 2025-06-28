import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

class CharacterCounter extends Component {
  state = {characters: '', isAdded: false, charactersList: []}

  onChangeUserInput = event => {
    this.setState({characters: event.target.value})
  }

  onAddCharacters = () => {
    const {characters, charactersList} = this.state
    this.setState(prevState => ({
      charactersList: [...charactersList, characters],
      isAdded: true,
      characters: '',
    }))
  }

  renderCharacterCounter = () => {
    const {characters, isAdded} = this.state
    return (
      <>
        <div className="CharacterCounterContainer">
          <h1 className="heading">Character Counter</h1>
          <div className="userInputContainer">
            <form>
              <input
                type="text"
                className="counterUserinput"
                value={characters}
                onChange={this.onChangeUserInput}
                placeholder="Enter the Characters here"
              />
              <button
                className="addButton"
                type="button"
                onClick={this.onAddCharacters}
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </>
    )
  }

  renderYellowContainer = () => {
    const {charactersList, isAdded} = this.state
    return (
      <div className="yellowContainer">
        <div className="headingContainer">
          <h1 className="heading">Count the characters like a Boss...</h1>
        </div>
        {isAdded ? (
          <ul className="charactersList">
            {charactersList.map(eachItem => (
              <li className="characterItems" key={uuidv4()}>
                <p>{`${eachItem}: ${eachItem.length}`}</p>
              </li>
            ))}
          </ul>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
            alt="no user inputs"
            className="noUserInputImage"
          />
        )}
      </div>
    )
  }

  render() {
    return (
      <>
        <div className="displayContainer">
          {this.renderYellowContainer()}

          {this.renderCharacterCounter()}
        </div>
      </>
    )
  }
}

export default CharacterCounter
