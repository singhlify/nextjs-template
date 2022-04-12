import MetaTags from "../components/MicroComponents/MetaTags";
import logo from "../assets/images/vercel.svg";

export default function Home() {
	return (
		<>
			<MetaTags
				title={"Page Title"}
				description={"Page Description"}
				img={logo.src}
			/>
			<div>
				<h1>
					Don't forget to start with the latest version of your dependencies:
				</h1>

				<br />
				<br />

				<h2>
					<code>
						npm install axios@latest styled-components@latest
						@mui/material@latest @emotion/react@latest @emotion/styled@latest
					</code>

					<br />
					<br />
					<span>OR</span>
					<br />
					<br />

					<code>
						yarn add axios@latest styled-components@latest @mui/material@latest
						@emotion/react@latest @emotion/styled@latest
					</code>
				</h2>
			</div>
		</>
	);
}
