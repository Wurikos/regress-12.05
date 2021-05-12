import React from "react";
import { useOverrides } from "@quarkly/components";
import { Button, Hr, Icon, Image, Input, Link, Text, List, Section, Box } from "@quarkly/widgets";
import EmbedHTML from "./EmbedHTML";
import EmbedJS from "./EmbedJS";
import QuarklycommunityKitTable from "./QuarklycommunityKitTable";
import Sadasdasd from "./Sadasdasd";
import QuarklycommunityKitPicture from "./QuarklycommunityKitPicture";
import QuarklycommunityKitTrack from "./QuarklycommunityKitTrack";
import QuarklycommunityKitFormspree from "./QuarklycommunityKitFormspree";
import QuarklycommunityKitAnimation from "./QuarklycommunityKitAnimation";
import QuarklycommunityKitBackToTop from "./QuarklycommunityKitBackToTop";
import QuarklycommunityKitGoogleMap from "./QuarklycommunityKitGoogleMap";
import { MdFace } from "react-icons/md";
const defaultProps = {};
const overrides = {
	"button": {
		"kind": "Button",
		"props": {
			"children": "Button"
		}
	},
	"hr": {
		"kind": "Hr",
		"props": {}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdFace
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "64px",
			"height": "64px"
		}
	},
	"input": {
		"kind": "Input",
		"props": {}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "#",
			"children": "Some text"
		}
	},
	"list": {
		"kind": "List",
		"props": {}
	},
	"text": {
		"kind": "Text",
		"props": {
			"children": "First item"
		}
	},
	"section": {
		"kind": "Section",
		"props": {}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"children": "Some text"
		}
	},
	"embedHtml": {
		"kind": "EmbedHTML",
		"props": {}
	},
	"embedJs": {
		"kind": "EmbedJS",
		"props": {}
	},
	"quarklycommunityKitTable": {
		"kind": "QuarklycommunityKitTable",
		"props": {}
	},
	"sadasdasd": {
		"kind": "Sadasdasd",
		"props": {}
	},
	"quarklycommunityKitPicture": {
		"kind": "QuarklycommunityKitPicture",
		"props": {}
	},
	"quarklycommunityKitTrack": {
		"kind": "QuarklycommunityKitTrack",
		"props": {}
	},
	"quarklycommunityKitFormspree": {
		"kind": "QuarklycommunityKitFormspree",
		"props": {}
	},
	"quarklycommunityKitAnimation": {
		"kind": "QuarklycommunityKitAnimation",
		"props": {}
	},
	"quarklycommunityKitBackToTop": {
		"kind": "QuarklycommunityKitBackToTop",
		"props": {}
	},
	"quarklycommunityKitGoogleMap": {
		"kind": "QuarklycommunityKitGoogleMap",
		"props": {}
	},
	"quarklycommunityKitAnimation1": {
		"kind": "QuarklycommunityKitAnimation",
		"props": {}
	},
	"quarklycommunityKitAnimation2": {
		"kind": "QuarklycommunityKitAnimation",
		"props": {}
	},
	"quarklycommunityKitFormspree1": {
		"kind": "QuarklycommunityKitFormspree",
		"props": {}
	},
	"quarklycommunityKitFormspree2": {
		"kind": "QuarklycommunityKitFormspree",
		"props": {}
	},
	"quarklycommunityKitFormspree3": {
		"kind": "QuarklycommunityKitFormspree",
		"props": {}
	},
	"quarklycommunityKitTrack1": {
		"kind": "QuarklycommunityKitTrack",
		"props": {}
	},
	"quarklycommunityKitTrack2": {
		"kind": "QuarklycommunityKitTrack",
		"props": {}
	},
	"quarklycommunityKitPicture1": {
		"kind": "QuarklycommunityKitPicture",
		"props": {}
	},
	"quarklycommunityKitPicture2": {
		"kind": "QuarklycommunityKitPicture",
		"props": {}
	},
	"sadasdasd1": {
		"kind": "Sadasdasd",
		"props": {}
	},
	"quarklycommunityKitTable1": {
		"kind": "QuarklycommunityKitTable",
		"props": {}
	},
	"quarklycommunityKitTable2": {
		"kind": "QuarklycommunityKitTable",
		"props": {}
	}
};

const Dkmaskdaskdas = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Button {...override("button")} />
		<Hr {...override("hr")} />
		<Icon {...override("icon")} />
		<Image {...override("image")} />
		<Input {...override("input")} />
		<Link {...override("link")} />
		<List {...override("list")}>
			<Text {...override("text")} />
		</List>
		<Section {...override("section")} />
		<Text {...override("text1")} />
		<EmbedHTML {...override("embedHtml")} />
		<EmbedJS {...override("embedJs")} />
		<QuarklycommunityKitTable {...override("quarklycommunityKitTable")} />
		<Sadasdasd {...override("sadasdasd")} />
		<QuarklycommunityKitPicture {...override("quarklycommunityKitPicture")} />
		<QuarklycommunityKitTrack {...override("quarklycommunityKitTrack")} />
		<QuarklycommunityKitFormspree {...override("quarklycommunityKitFormspree")} />
		<QuarklycommunityKitAnimation {...override("quarklycommunityKitAnimation")} />
		<QuarklycommunityKitBackToTop {...override("quarklycommunityKitBackToTop")} />
		<QuarklycommunityKitGoogleMap {...override("quarklycommunityKitGoogleMap")} />
		<QuarklycommunityKitAnimation {...override("quarklycommunityKitAnimation1")} />
		<QuarklycommunityKitAnimation {...override("quarklycommunityKitAnimation2")} />
		<QuarklycommunityKitFormspree {...override("quarklycommunityKitFormspree1")} />
		<QuarklycommunityKitFormspree {...override("quarklycommunityKitFormspree2")} />
		<QuarklycommunityKitFormspree {...override("quarklycommunityKitFormspree3")} />
		<QuarklycommunityKitTrack {...override("quarklycommunityKitTrack1")} />
		<QuarklycommunityKitTrack {...override("quarklycommunityKitTrack2")} />
		<QuarklycommunityKitPicture {...override("quarklycommunityKitPicture1")} />
		<QuarklycommunityKitPicture {...override("quarklycommunityKitPicture2")} />
		<Sadasdasd {...override("sadasdasd1")} />
		<QuarklycommunityKitTable {...override("quarklycommunityKitTable1")} />
		<QuarklycommunityKitTable {...override("quarklycommunityKitTable2")} />
		{children}
	</Box>;
};

Object.assign(Dkmaskdaskdas, { ...Box,
	defaultProps,
	overrides
});
export default Dkmaskdaskdas;