import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import 'typeface-roboto';

import { addClickCount } from '../../../../../background/src/actions/countActions';

class App extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        document.addEventListener('click', ()=> {
            this.props.addClickCount();
        });
    };

    render() {
        return (
            <div id="appName">
                <p>Hey it's me, your chrome extension</p>
                <p><label>The click count is: </label>{this.props.count.clicks}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addClickCount
    }, dispatch);
};

App.propTypes = {
    count: PropTypes.object.isRequired,
    addClickCount: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
