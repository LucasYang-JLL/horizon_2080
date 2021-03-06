import React from "react";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";
import color from "../../MuiTheme/color";

const styles = (theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: color.Concrete25,
        color: color.Black75
    },
    tabRoot: {
        minWidth: "100px"
    }
});

class SimpleTabs extends React.Component {
    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes, msgID, fullWidth, handleTabChange, activeTab } = this.props;
        return (
            <div className={classes.root}>
                {/* <AppBar position="static"> */}
                <FormattedMessage id={msgID}>
                    {(tabName) => (
                        <Tabs fullWidth={fullWidth} value={activeTab} onChange={handleTabChange}>
                            {tabName.split(",").map((name, index) => (
                                <Tab key={index} className={classes.tabRoot} label={name} />
                            ))}
                        </Tabs>
                    )}
                </FormattedMessage>
                {/* </AppBar> */}
            </div>
        );
    }
}

SimpleTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    msgID: PropTypes.string.isRequired,
    fullWidth: PropTypes.bool.isRequired,
    activeTab: PropTypes.number.isRequired,
    handleTabChange: PropTypes.func.isRequired
};

SimpleTabs.defaultProps = {
    msgID: "",
    fullWidth: true
};

export default withStyles(styles)(SimpleTabs);
