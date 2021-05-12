import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"sdasd3"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"описание какие либо"} />
			<meta property={"og:title"} content={"выфвфы"} />
			<meta property={"og:description"} content={"вфывф"} />
			<meta property={"og:image"} content={"https://images.unsplash.com/photo-1620736214006-6b0ad171bf48?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"} />
			<link rel={"shortcut icon"} href={"https://images.unsplash.com/photo-1620736214006-6b0ad171bf48?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://images.unsplash.com/photo-1620736214006-6b0ad171bf48?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://images.unsplash.com/photo-1620736214006-6b0ad171bf48?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://images.unsplash.com/photo-1620736214006-6b0ad171bf48?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"} />
			<link rel={"apple-touch-startup-image"} href={"https://images.unsplash.com/photo-1620736214006-6b0ad171bf48?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"} />
			<meta name={"msapplication-TileImage"} content={"https://images.unsplash.com/photo-1620736214006-6b0ad171bf48?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"} />
			<meta name={"msapplication-TileColor"} content={"#722a2a"} />
		</Helmet>
		<Section text-align="center" padding="100px 0" sm-padding="40px 0">
			<Text as="h1" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				About Us
			</Text>
			<Text as="p" font="--lead" margin="20px 0 0 0">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.{" "}
			</Text>
			<Box display="flex" margin="40px 0 20px 0" justify-content="space-around" sm-flex-direction="column">
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1501870190084-cdf29f15ef87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" width="320px" max-width="100%" />
				</Box>
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1503341960582-b45751874cf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" width="320px" max-width="100%" />
				</Box>
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" width="320px" max-width="100%" />
				</Box>
			</Box>
		</Section>
		<Components.QuarklycommunityKitCardFlip />
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
		<RawHtml>
			<script place={"endOfHead"} rawKey={"609bbeb265930936b6f663d7"}>
				{"alert(\"привет\")"}
			</script>
			<meta
				charset={"utf-8"}
				name={"keywords"}
				content={"(\"index, follow,some\")"}
				place={"endOfHead"}
				rawKey={"609bbececa5393d9bcf2cdc4"}
			/>
		</RawHtml>
	</Theme>;
});