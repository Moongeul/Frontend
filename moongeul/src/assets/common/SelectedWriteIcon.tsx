import * as React from "react";
import type { SVGProps } from "react";
const SelectedWriteIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            fill="#fff"
            d="M11.366 18.75h1.268v-6.116h6.116v-1.268h-6.116V5.25h-1.268v6.116H5.25v1.268h6.116zM2.192 24a2.12 2.12 0 0 1-1.557-.635A2.12 2.12 0 0 1 0 21.808V2.192Q0 1.271.635.635A2.12 2.12 0 0 1 2.192 0h19.616q.921 0 1.557.635.635.636.635 1.557v19.616q0 .921-.635 1.557a2.12 2.12 0 0 1-1.557.635z"
        />
    </svg>
);
export default SelectedWriteIcon;
