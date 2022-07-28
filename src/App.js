// MUI
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Routes from "./components/Routes/Routes";

export default function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Roboto Slab',
    },
    palette: {
      primary: {
        main: "#F37A1F",
      },
      secondary: {
        main: "#393939"
      },
      info: {
        main: "#393939"
      },
    },
  });

  return (
    <div >
      <ThemeProvider theme={theme}>
          <Routes />
      </ThemeProvider>
    </div>
  );
}
