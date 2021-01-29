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
		<Components.Tabs defaultTab="one" align="start">
			<Components.TabList>
				<Components.Tab tabId="one">
					<Override slot="Tab text" disabled>
						One
					</Override>
				</Components.Tab>
				<Components.Tab tabId="two">
					<Override slot="Tab text" disabled={false}>
						Tab two
					</Override>
				</Components.Tab>
				<Components.Tab tabId="three">
					<Override slot="Tab text" disabled>
						Three
					</Override>
				</Components.Tab>
				<Components.Tab tabId="four">
					<Override slot="Tab text" disabled={false}>
						Four
					</Override>
				</Components.Tab>
				<Components.Tab tabId="five">
					<Override slot="Tab text" disabled={false} active-background="#000000">
						Five
					</Override>
				</Components.Tab>
				<Components.Tab tabId="six">
					<Override slot="Tab text" disabled={false}>
						Six
					</Override>
				</Components.Tab>
				<Components.Tab tabId="seven">
					<Override slot="Tab text" disabled>
						Seven
					</Override>
				</Components.Tab>
			</Components.TabList>
			<Components.TabPanels>
				<Components.TabPanel tabId="one">
					<Text>
						1
					</Text>
				</Components.TabPanel>
				<Components.TabPanel tabId="two">
					<Text>
						2
					</Text>
				</Components.TabPanel>
				<Components.TabPanel tabId="three">
					<Text>
						3
					</Text>
				</Components.TabPanel>
				<Components.TabPanel tabId="four">
					<Text>
						4
					</Text>
				</Components.TabPanel>
				<Components.TabPanel tabId="five">
					<Text>
						5
					</Text>
				</Components.TabPanel>
				<Components.TabPanel tabId="six">
					<Text>
						6
					</Text>
				</Components.TabPanel>
				<Components.TabPanel tabId="seven">
					<Text>
						7
					</Text>
				</Components.TabPanel>
			</Components.TabPanels>
		</Components.Tabs>
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