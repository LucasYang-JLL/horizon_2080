import React, { Component } from "react";
import Slide from "@material-ui/core/Slide";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Navigation from "../Navigation";

const styles = (theme) => ({
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0 // So the Typography noWrap works
    },
    root: {
        width: "100%",
        marginTop: theme.spacing.unit * 3
    },
    table: {
        minWidth: 1020
    },
    tableCell: {
        width: "150px"
    },
    tableWrapper: {
        overflowX: "auto"
    },
    toolbar: theme.mixins.toolbar
});

class Details extends Component {
    render() {
        const { classes, history } = this.props;
        const { slideState } = this.props.reduxState;
        const { path } = this.props.match;
        console.log(this.props);
        return (
            <div className={classes.content}>
                Details/
                {this.props.match.params.id}
            </div>
        );
    }
}

Details.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Details);
