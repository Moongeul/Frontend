import * as React from "react";
import type { SVGProps } from "react";
const UnSelectedWriteIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            fill="#CACACA"
            d="M11.366 18.75h1.268v-6.116h6.116v-1.268h-6.116V5.25h-1.268v6.116H5.25v1.268h6.116zM2.192 24a2.12 2.12 0 0 1-1.557-.635A2.12 2.12 0 0 1 0 21.808V2.192Q0 1.271.635.635A2.12 2.12 0 0 1 2.192 0h19.616q.921 0 1.557.635.635.636.635 1.557v19.616q0 .921-.635 1.557a2.12 2.12 0 0 1-1.557.635zm0-1.27h19.616q.346 0 .634-.288t.289-.634V2.192q0-.345-.289-.634-.288-.29-.634-.289H2.192q-.345 0-.634.289-.29.288-.289.634v19.616q0 .346.289.634.288.288.634.289"
        />
    </svg>
);
export default UnSelectedWriteIcon;
