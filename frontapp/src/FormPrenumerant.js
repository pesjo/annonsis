import React, { Component } from 'react'


class FormPrenumerant extends Component {
	constructor(props) {
		super(props)

		this.state = {
			fornamn: ""
		}
	}

	handleChangeFornamn = event => {
		this.setState({
			fornamn: event.target.value
		})
	}


	handleSubmitPrenumerantInfo = event => {
        
        event.preventDefault()

        const data = {fornamn : this.state.fornamn}

        const response = fetch(`http://localhost:5000/api/post`, {
          method: "post",
          headers: { 'Content-Type': 'application/json'}, 
          body: JSON.stringify(data) 
		});
		alert(response);
	}

	render() {
		const { godisNamn} = this.state
		return (
			<form onSubmit={this.handleSubmitDelete}>
                <h3>HEJ PRENUMERANT</h3>
				<div>
					<label> <h3>Namn på godis att ta bort: </h3></label>
					<input className = "namn"
						type="text"
						value={godisNamn}
						onChange={this.handleDeleteCandyname}
					/>
				</div>
				<button type="submit">Ta bort godis</button>
			</form>
		)
	}
}

export default FormPrenumerant