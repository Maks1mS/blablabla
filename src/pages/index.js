import React from "react";
import theme from "theme";
import { Theme, Link, Text } from "@quarkly/widgets";
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
		<Components.SimpleTabs defaultTab="2">
			<Override slot="Tab 3">
				Tab3
			</Override>
			<Override slot="Tab 2">
				Tab2
			</Override>
			<Override slot="Tab 1">
				Tab1
			</Override>
			<Override slot="Tab 601d26cb43f0020a83e05df7">
				Tab
			</Override>
			<Override slot="Tab :active" background="#cc0003" />
			<Components.SimpleTab tabId="1">
				<Text>
					Aaa
				</Text>
			</Components.SimpleTab>
			<Components.SimpleTab tabId="2">
				<Text>
					Bbbb
				</Text>
			</Components.SimpleTab>
			<Components.SimpleTab tabId="3">
				<Text>
					Ccc
				</Text>
			</Components.SimpleTab>
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