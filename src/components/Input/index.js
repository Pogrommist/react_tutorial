import React, { Component } from 'react';

class Input extends Component {
	state = {
		message: ''
	}


	handleInputChange = e => this.setState({ message: e.target.value })

	handleFormSubmit = e => {
		e.preventDefault()
		console.log('message', this.state.message)
	}

  render() {
    return (
			<div className="Input">
			<form>
				<input 
				type='text'
				onChange={this.handleInputChange}
			/>
			<button type='button' onClick={this.handleFormSubmit}>Отправить</button>
			</form>
				
				<p>{this.state.message}</p>
      </div>
    );
  }
}

export default Input;
