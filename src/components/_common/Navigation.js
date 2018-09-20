import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import { FormattedMessage } from "react-intl";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import NavigationIcon from "@material-ui/icons/Navigation";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
    button: {
        margin: theme.spacing.unit
    },
    extendedIcon: {
        marginRight: theme.spacing.unit
    },
    navigationRoot: {
        display: "flex",
        alignItems: "center"
    }
});

class Navigation extends Component {

    handleGoBack = () => {
        this.props.history.goBack();
    }

    render() {
        const { classes, pathname } = this.props;
        console.log(pathname);
        // const showButton
        return (
            <div className={classes.navigationRoot}>
                <Button mini variant="fab" color="primary" className={classes.button} onClick={this.handleGoBack}>
                    <KeyboardArrowLeftIcon />
                </Button>
                <FormattedMessage id={`navigation.title`}>
                    {(name) => {
                        return <span style={{ fontWeight: "bold", fontSize: "24px" }}>{name}</span>;
                    }}
                </FormattedMessage>
            </div>
        );
    }
}

Navigation.PropTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navigation);
