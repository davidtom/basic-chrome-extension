import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from 'material-ui/styles';
import { Paper } from 'material-ui';

// import 'typeface-roboto';

import { addClickCount } from '../../../../../background/src/actions/countActions';

const styles = theme => ({
    container: {
        background: 'black!important'
    },
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    })
});

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

        const { classes } = this.props;

        return (
            <div className={ classes.container }>
                <Paper elevation = { 4 } className={ classes.root }>
                    <p><label>The click count is: </label>{this.props.count.clicks}</p>
                </Paper>
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
    classes: PropTypes.object.isRequired,
    count: PropTypes.object.isRequired,
    addClickCount: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
