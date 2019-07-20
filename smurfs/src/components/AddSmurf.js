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

    render() {
        return(
            <form>
                <input type="text" name="name" placeholder="Name" value={this.state.name} />
                <input type="text" name="age" placeholder="Age" value={this.state.age} />
                <input type="text" name="height" placeholder="Height" value={this.state.height} />
                <button type="submit">Add Smurf</button>
            </form>
        )
    }
}

export default AddSmurf