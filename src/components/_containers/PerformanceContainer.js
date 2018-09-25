import { connect } from "react-redux";
import Performance from "../Performance";
import { slideDirection } from "../_actions/header";

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
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Performance);
