import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
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