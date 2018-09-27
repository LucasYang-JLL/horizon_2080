import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const styles = (theme) => ({
    summaryRoot: {
        padding: theme.spacing.unit * 2
    },
    fieldRoot: {
        maxWidth: "375px"
    },
    fieldInput: {
        // margin: `8px`
    },
    disabledInput: {
        color: "#212121",
        opacity: 1
    }
});

const inputFields = [
    {
        type: "input",
        label: "Target Name",
        name: "target_name",
        value: "Hello World Project"
    },
    {
        type: "textarea",
        label: "Target Description",
        name: "Description",
        value: "This is a hello world project for horizon 2080",
        props: {
            multiline: true,
            rows: 4
        }
    },
    {
        type: "input",
        label: "Start Date",
        name: "Start_Date",
        value: "09/03/2018"
    },
    {
        type: "input",
        label: "Expire Date",
        name: "Expire_Date",
        value: "09/19/2018"
    },
    {
        type: "input",
        label: "Created By",
        name: "Created_By",
        value: "Lucas Yang"
    }
];

class Summary extends Component {
    state = {
        fields: {
            target_name: "213213",
            Description: "This is a hello world project for horizon 2080",
            Created_By: "Lucas Yang",
            Start_Date: "09/03/2018",
            Expire_Date: "09/19/2018"
        }
    };

    handleChange = (name) => (event) => {
        this.setState({
            ...this.state,
            fields: {
                ...this.state.fields,
                [name]: event.target.value
            }
        });
    };

    Fields = () => {
        const { classes, editContent } = this.props;
        return inputFields.map(({ type, label, name, value, props }) => (
            <TextField
                className={classes.fieldInput}
                key={name}
                id="standard-read-only-input"
                label={label}
                disabled={!editContent}
                value={this.state.fields[name] || ""}
                onChange={this.handleChange(name)}
                InputProps={{
                    ...props,
                    disableUnderline: !editContent,
                    classes: {
                        disabled: classes.disabledInput
                    }
                }}
            />
        ));
    };

    render() {
        const { classes } = this.props;
        // const { slideState } = this.props.reduxState;
        // const { path } = this.props.match;
        return (
            <div className={classes.summaryRoot}>
                <div className={classes.fieldRoot}>
                    <this.Fields />
                </div>
            </div>
        );
    }
}

Summary.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Summary);
