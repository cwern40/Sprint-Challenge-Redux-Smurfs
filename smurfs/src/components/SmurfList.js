import React from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';

class SmurfList extends React.Component {
    
    render() {
        return (
            <div className="smurf-list">
                <h1>Smurf List</h1>
                {this.props.smurfs.map((smurf) => (
                    <Smurf smurf={smurf} key={smurf.id} />
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps)(SmurfList);