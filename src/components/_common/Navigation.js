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
        this.props.slideFunc("left");
        this.props.history.goBack();
    };

    render() {
        let { classes, depth, component } = this.props;
        const showButton = depth > 1 ? true : false;
        console.log(this.props);
        return (
            <div className={classes.navigationRoot}>
                {showButton ? (
                    <Button mini variant="fab" color="primary" className={classes.button} onClick={this.handleGoBack}>
                        <KeyboardArrowLeftIcon />
                    </Button>
                ) : null}
                <FormattedMessage id={`navigation.${component}.title`}>
                    {(title) => {
                        console.log(depth);
                        let titleArr = title.split(",");
                        depth = depth <= 1 ? 0 : depth;
                        if (depth >= titleArr.length) {
                            depth = titleArr.length - 1;
                        }
                        return <span style={{ fontWeight: "bold", fontSize: "24px" }}>{titleArr[depth]}</span>;
                    }}
                </FormattedMessage>
            </div>
        );
    }
}

export default withStyles(styles)(Navigation);
