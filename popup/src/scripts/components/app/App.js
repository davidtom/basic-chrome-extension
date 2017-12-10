import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addClickCount } from '../../../../../background/src/actions/countActions'

class App extends Component{
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        console.log('Pop up!')
    };

    render() {
        return (
            <div>
                <p><label>The click count is: </label>{this.props.count.clicks}</p>
                <button onClick={this.props.addClickCount}>Click me!</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addClickCount
    }, dispatch);
};

App.propTypes = {
    count: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
