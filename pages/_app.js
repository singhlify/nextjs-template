import Theme from "../styles/theme";
import MainWrapper from "../components/MainWrapper/MainWrapper";

function MyApp({ Component, pageProps }) {
	return (
		<Theme>
			<MainWrapper>
				<Component {...pageProps} />
			</MainWrapper>
		</Theme>
	);
}

export default MyApp;
