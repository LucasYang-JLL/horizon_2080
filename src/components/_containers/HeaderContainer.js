import { connect } from "react-redux";
import { selectLanguage } from "../_actions/header";
import Header from "../Header";

// redux provided wrapper to map state to props
const mapStateToProps = (state) => {
    return {
        state: state
    };
};

// redux provided wrapper to map dispatch to props
const mapDispatchToProps = (dispatch) => {
    return {
        selectLanguage: (value) => {
            dispatch(selectLanguage(value));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
