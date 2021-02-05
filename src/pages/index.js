import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.SimpleTabs>
			<Override slot="Tab 1">
				Tab 1
			</Override>
			<Override slot="Tab 2">
				Tab 2
			</Override>
			<Override slot="Tab 3">
				Tab 3
			</Override>
			<Override slot="Tab 5" disabled>
				Tab 5
			</Override>
			<Override slot="Tab 4">
				Tab 4
			</Override>
			<Override slot="Tab :active" background="#ffffff" color="#000000" />
			<Override slot="Tab" disabled={false} />
			<Components.SimpleTab tabId="1" />
			<Components.SimpleTab tabId="2" />
			<Components.SimpleTab tabId="3" />
			<Components.SimpleTab tabId="4" />
		</Components.SimpleTabs>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});