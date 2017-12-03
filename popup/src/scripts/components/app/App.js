import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component{
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <div>
                The count is: {this.props.count.clicks}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

export default connect(mapStateToProps, null)(App);
