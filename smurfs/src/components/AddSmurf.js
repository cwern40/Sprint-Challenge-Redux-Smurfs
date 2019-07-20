import React from 'react';
import { addSmurf } from '../actions/index';
import { connect } from 'react-redux';

class AddSmurf extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            height: '',
        }
    }

    onChange = (event) => {
        event.preventDefault()
        this.setState({ [event.target.name]: event.target.value})
    }

    submitHandler = (event) => {
        event.preventDefault()
        const smurf = {
            name: this.state.name,
            age: parseInt(this.state.age),
            height: this.state.height
        }
        this.props.addSmurf(smurf)
        this.setState({ name: '', age: '', height: '',})
    }

    render() {
        return(
            <form onSubmit={this.submitHandler}>
                <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.onChange} />
                <input type="text" name="age" placeholder="Age" value={this.state.age} onChange={this.onChange} />
                <input type="text" name="height" placeholder="Height" value={this.state.height} onChange={this.onChange} />
                <button type="submit">Add Smurf</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    addSmurf
}

export default connect(null, mapDispatchToProps)(AddSmurf)