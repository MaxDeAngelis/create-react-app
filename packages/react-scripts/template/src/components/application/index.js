import React, { Component } from 'react';
import { connect } from 'react-redux';

class Application extends Component {
    render() {
        return (
        <div>
            <header>
                <h2>Welcome to Max App!</h2>
            </header>
            <main>
                <p>Please enjoy</p>
            </main>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps)(Application);
