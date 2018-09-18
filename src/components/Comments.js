import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0 // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar
});

class Comments extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.content}>
                <div className={classes.toolbar} />
                Comments
            </div>
        );
    }
}

Comments.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Comments);
