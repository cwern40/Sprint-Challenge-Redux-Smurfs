import React from 'react';

class AddSmurf extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            height: '',
        }
    }

    onChange(event) {
        event.preventDefault()
        this.setState({ [event.target.name]: event.target.value})
    }

    render() {
        return(
            <form>
                <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.onChange} />
                <input type="text" name="age" placeholder="Age" value={this.state.age} onChange={this.onChange} />
                <input type="text" name="height" placeholder="Height" value={this.state.height} onChange={this.onChange} />
                <button type="submit">Add Smurf</button>
            </form>
        )
    }
}

export default AddSmurf