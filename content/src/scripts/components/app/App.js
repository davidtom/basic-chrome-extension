import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        document.addEventListener('click', ()=> {
            this.props.dispatch({
                type:'ADD_CLICK_COUNT'
            });
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

export default connect(mapStateToProps, null)(App);
