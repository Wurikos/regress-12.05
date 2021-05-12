import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "background": "#b31919"
    },
    "index": {
        "background": "#b31919"
    },
    "sdasd": {
        "background": "#b31919"
    },
    "sdasd/dasda": {
        "background": "#b31919"
    },
    "sdasd/dasda/dasda1": {
        "background": "#b31919"
    },
    "sdasd1": {
        "background": "#b31919"
    },
    "sdasd1/sdasd2": {
        "background": "#b31919"
    },
    "sdasd3": {
        "background": "#efdada"
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
