import { connect } from "react-redux";
import { slideDirection } from "../_actions/header";
import Details from "../_common/Details";

// redux provided wrapper to map state to props
const mapStateToProps = (state) => {
    return {
        reduxState: state
    };
};

// redux provided wrapper to map dispatch to props
const mapDispatchToProps = (dispatch) => {
    return {
        slideDirection: (value) => {
            dispatch(slideDirection(value));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Details);
