// takes in a previous state, and an action, then returns the next state
const language = (state = "en", action) => {
    switch (action.type) {
        case "LANGUAGE_OPTION":
            // since everything is immutable, you need to pass in new object everytime
            return action.value;
        default:
            return state;
    }
};

export { language };
