import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from 'material-ui/styles';
import { Chip, Avatar } from 'material-ui';

// import 'typeface-roboto';

import { addClickCount } from '../../../../../background/src/actions/countActions';

const styles = theme => ({
    container: {
        width: '200px',
        height: '50px'
    },
    chip: {
        margin: theme.spacing.unit,
        background: 'green'
    }
});

class App extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        console.log('Pop up!');
    };

    render() {

        const { classes } = this.props;

        return (
            <div className={ classes.container }>
                <Chip
                    avatar={ <Avatar>{this.props.count.clicks || '0'}</Avatar> }
                    label="Click count"
                    onClick={ this.props.addClickCount }
                    className={ classes.chip }
                />
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
    classes: PropTypes.object.isRequired,
    count: PropTypes.object.isRequired,
    addClickCount: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
