import React from "react";
import theme from "theme";
import { Theme, Link, Button, Text } from "@quarkly/widgets";
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
		<Components.Tabs defaultTab="two" orientation="Vertical" align="start" height="300px">
			<Components.TabList>
				<Components.Tab tabId="one">
					<Override slot="Selected Tab" background="#2e2b2b" />
					<Button width="100%" height="100%" border-radius="0" focus-box-shadow="none">
						One
					</Button>
				</Components.Tab>
				<Components.Tab tabId="two">
					<Button width="100%" height="100%">
						Two
					</Button>
				</Components.Tab>
				<Components.Tab tabId="three">
					<Button width="100%" height="100%">
						Three
					</Button>
				</Components.Tab>
				<Components.Tab tabId="four">
					<Button width="100%" height="100%">
						Four
					</Button>
				</Components.Tab>
				<Components.Tab tabId="five">
					<Button width="100%" height="100%">
						Five
					</Button>
				</Components.Tab>
				<Components.Tab tabId="six">
					<Button width="100%" height="100%">
						Six
					</Button>
				</Components.Tab>
				<Components.Tab tabId="seven">
					<Button width="100%" height="100%">
						Seven
					</Button>
				</Components.Tab>
				<Components.Tab tabId="eight">
					<Button width="100%" height="100%">
						Eight
					</Button>
				</Components.Tab>
				<Components.Tab tabId="nine">
					<Button width="100%" height="100%">
						Nine
					</Button>
				</Components.Tab>
				<Components.Tab tabId="ten">
					<Button width="100%" height="100%">
						Ten
					</Button>
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
				<Components.TabPanel tabId="eight">
					<Text>
						8
					</Text>
				</Components.TabPanel>
				<Components.TabPanel tabId="nine">
					<Text>
						9
					</Text>
				</Components.TabPanel>
				<Components.TabPanel tabId="ten">
					<Text>
						10
					</Text>
				</Components.TabPanel>
			</Components.TabPanels>
		</Components.Tabs>
		<Components.SimpleTabs>
			<Components.SimpleTab tabId="1234444" />
			<Components.SimpleTab />
			<Components.SimpleTab />
			<Components.SimpleTab />
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