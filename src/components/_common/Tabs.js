import React from "react";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import color from "../../MuiTheme/color";

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 0 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
};

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
    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes, msgID, fullWidth } = this.props;
        const { value } = this.state;
        return (
            <div className={classes.root}>
                {/* <AppBar position="static"> */}
                <FormattedMessage id={msgID}>
                    {(tabName) => (
                        <Tabs fullWidth={fullWidth} value={value} onChange={this.handleChange}>
                            {tabName.split(",").map((value, index) => (
                                <Tab key={index} className={classes.tabRoot} label={value} />
                            ))}
                        </Tabs>
                    )}
                </FormattedMessage>
                {/* </AppBar> */}
                {/* {value === 0 && <TabContainer>Item One</TabContainer>}
                {value === 1 && <TabContainer>Item Two</TabContainer>} */}
            </div>
        );
    }
}

SimpleTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    msgID: PropTypes.string.isRequired,
    fullWidth: PropTypes.bool.isRequired
};

SimpleTabs.defaultProps = {
    msgID: "",
    fullWidth: true
};

export default withStyles(styles)(SimpleTabs);
