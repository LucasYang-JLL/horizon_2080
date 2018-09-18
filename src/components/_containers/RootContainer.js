import React, { Fragment, Component } from "react";
import App from "../../App";
import CssBaseline from "@material-ui/core/CssBaseline";
import { injectIntl, IntlProvider, FormattedRelative } from "react-intl";
import { connect } from "react-redux";
import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import fr from "react-intl/locale-data/fr";
import es from "react-intl/locale-data/es";
import zh from "react-intl/locale-data/zh";

const mapStateToProps = (state) => {
    return {
        state: state
    };
};

addLocaleData([...en, ...fr, ...es, ...zh]);

const translationConfig = {
    locale: "en-US",
    messages: {
        en: {
            "header.drawers": `Performance, Events, Comments / Reply, Actions, Settings`
        },
        zh: {
            "header.drawers": "性能, 活动, 留言 / 回复, 执行, 设置"
        }
    }
};

class RootContainer extends Component {
    render() {
        let { language } = this.props.state;
        return (
            <IntlProvider locale={translationConfig.locale} messages={translationConfig.messages[language]}>
                <Fragment>
                    <CssBaseline />
                    <App />
                </Fragment>
            </IntlProvider>
        );
    }
}
export default connect(mapStateToProps)(RootContainer);
