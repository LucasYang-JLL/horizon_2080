import { createMuiTheme } from "@material-ui/core/styles";

const MuiTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#212121"
        },
        secondary: {
            main: "#E30613"
        }
    },
    overrides: {
        MuiListItemText: {
            root: {
                color: "#808080",
                padding: "0 8px",
            }
        }
    }
});

export default MuiTheme;
