import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {addClickCount} from '../../../../../background/src/actions/clickActions';

class App extends Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        document.addEventListener('click', ()=> {
            this.props.addClickCount();
        });
    };

    render() {
        console.log(this.props)
        return (
            <div>
                <p>Hey it's me, your chrome extension</p>
                <p><label>The count is: </label>{this.props.count.clicks}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
