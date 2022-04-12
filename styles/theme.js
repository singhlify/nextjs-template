import { ThemeProvider } from "styled-components";
import { lightTheme } from "../themes";
import GlobalStyles from "./globals";

const Theme = ({ children }) => {
	return (
		<ThemeProvider theme={lightTheme}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	);
};

export default Theme;
