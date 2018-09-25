import React, { Component, Fragment } from "react";
import Slide from "@material-ui/core/Slide";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import classNames from "classnames";
import CommentsContainer from "../_containers/CommentsContainer";

const styles = (theme) => ({
    content: {
        // flexGrow: 1,
        // backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0 // So the Typography noWrap works
    },
    root: {
        alignSelf: "flex-end",
        width: "60%",
        marginTop: theme.spacing.unit * 3,
        height: "80%",
    },
    rootMd: {
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            height: "300px",
            position: "relative"
        }
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
            <Fragment>
                <Slide direction={slideState} in mountOnEnter unmountOnExit>
                    <Paper className={classNames(classes.root, classes.rootMd)}>
                        <div className={classes.content}>
                            Details/
                            {this.props.match.params.id}
                        </div>
                    </Paper>
                </Slide>
                <CommentsContainer location={this.props.location} docked={true} />
            </Fragment>
        );
    }
}

Details.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Details);
