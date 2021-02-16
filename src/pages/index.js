import React from "react";
import theme from "theme";
import { Theme, Link, Box, Text, Image, Button } from "@quarkly/widgets";
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
		<Box left="0px" right="874px" width="100%" height="100px">
			<Components.SvgShape
				stroke="#000000"
				fill="#cfd0da"
				strokeWidth="0.3"
				type="Ellipse"
				bottom="auto"
				left="auto"
				right="-864px"
				top="-273px"
			>
				<Override slot="Rect" width="60px" height="60px" color="#0b0b0b" />
			</Components.SvgShape>
		</Box>
		<Components.SimpleTabs defaultTab="1">
			<Override slot="Tab 1">
				Tab 1
			</Override>
			<Override slot="Tab 2">
				Tab 2
			</Override>
			<Override slot="Tab 3">
				Tab 3
			</Override>
			<Override slot="Tab 4">
				Tab 4
			</Override>
			<Override slot="Tab 5">
				Tab 5
			</Override>
			<Override slot="Tab :active" disabled={false}>
				Tab 1
			</Override>
			<Override slot="Tablist" background="#b8b8b8" />
			<Components.SimpleTab tabId="1" quarkly-title="1">
				<Text>
					Tab 1
				</Text>
			</Components.SimpleTab>
			<Components.SimpleTab tabId="2" quarkly-title="2">
				<Text>
					Tab 2
				</Text>
			</Components.SimpleTab>
			<Components.SimpleTab tabId="3" quarkly-title="3">
				<Text>
					Tab 3
				</Text>
			</Components.SimpleTab>
			<Components.SimpleTab tabId="4" quarkly-title="4">
				<Text>
					Tab 4
				</Text>
			</Components.SimpleTab>
			<Components.SimpleTab tabId="5" quarkly-title="5">
				<Text>
					Tab 5
				</Text>
			</Components.SimpleTab>
		</Components.SimpleTabs>
		<Components.SimpleTabs defaultTab="1">
			<Override slot="Tab 1">
				Tab 1
			</Override>
			<Override slot="Tab 2">
				Samsung
			</Override>
			<Override slot="Tab 3">
				Xiaomi
			</Override>
			<Override slot="Tab 4">
				Heawei
			</Override>
			<Override slot="Tab 5">
				Others
			</Override>
			<Override slot="Tab :active" disabled={false}>
				Apple
			</Override>
			<Override slot="Tablist" background="#b8b8b8" />
			<Components.SimpleTab tabId="1" quarkly-title="1">
				<Text>
					Tab 1
				</Text>
			</Components.SimpleTab>
			<Components.SimpleTab tabId="2" quarkly-title="2">
				<Text>
					Tab 2
				</Text>
			</Components.SimpleTab>
			<Components.SimpleTab tabId="3" quarkly-title="3">
				<Text>
					Tab 3
				</Text>
			</Components.SimpleTab>
			<Components.SimpleTab tabId="4" quarkly-title="4">
				<Text>
					Tab 4
				</Text>
			</Components.SimpleTab>
			<Components.SimpleTab tabId="5" quarkly-title="5">
				<Text>
					Tab 5
				</Text>
			</Components.SimpleTab>
		</Components.SimpleTabs>
		<Components.SimpleTabs defaultTab="1">
			<Override slot="Tab 1">
				Соки
			</Override>
			<Override slot="Tab 2">
				Рыба
			</Override>
			<Override slot="Tab 3">
				Мясо
			</Override>
			<Override slot="Tab 4">
				Алкоголь
			</Override>
			<Override slot="Tab 5">
				Табако
			</Override>
			<Override
				slot="Tab :active"
				disabled={false}
				background="--color-primary"
				color="--light"
				focus-box-shadow="0 0 0 2px --color-dark"
			>
				Соки1ф фывф
				<br />
				фывфвы
				<br />
				фыв
			</Override>
			<Override slot="Tablist" background="#b8b8b8" />
			<Override slot="Tab" background="--color-lightD2" color="--dark" />
			<Components.SimpleTab tabId="1" quarkly-title="Juice">
				<Image width="364px" height="364px" src="https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
				<Text>
					Tab 1
				</Text>
			</Components.SimpleTab>
			<Components.SimpleTab tabId="2" quarkly-title="Fish">
				<Image width="364px" height="364px" src="https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
				<Text>
					Tab 2
				</Text>
			</Components.SimpleTab>
			<Components.SimpleTab tabId="3" quarkly-title="Meat">
				<Image width="364px" height="364px" src="https://images.unsplash.com/photo-1592686092916-672fa9e86866?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" />
				<Text>
					Tab 3
				</Text>
			</Components.SimpleTab>
			<Components.SimpleTab tabId="4" quarkly-title="Alcohol">
				<Image width="364px" height="364px" src="https://images.unsplash.com/photo-1561150169-371f366b828a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
				<Text>
					Tab 4
				</Text>
			</Components.SimpleTab>
			<Components.SimpleTab tabId="5" quarkly-title="tobacco">
				<Image width="364px" height="364px" src="https://images.unsplash.com/photo-1584825093714-f5d917af9317?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" />
				<Text>
					Tab 5
				</Text>
			</Components.SimpleTab>
		</Components.SimpleTabs>
		<Button>
			Button
		</Button>
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