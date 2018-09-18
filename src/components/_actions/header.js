// takes an action and map it to redux Store
const selectLanguage = (value) => ({
    type: "LANGUAGE_OPTION",
    value: value,
});

export { selectLanguage };