import React from "react";
import { useOverrides } from "@quarkly/components";
import { Input } from "@quarkly/widgets";
const defaultProps = {};
const overrides = {};

const Sadasdasd = props => {
	const {
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Input {...rest} />;
};

Object.assign(Sadasdasd, { ...Input,
	defaultProps,
	overrides
});
export default Sadasdasd;