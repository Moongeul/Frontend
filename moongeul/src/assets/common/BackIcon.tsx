import * as React from "react";
import type { SVGProps } from "react";
const BackIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={11}
        height={20}
        fill="none"
        {...props}
    >
        <path stroke="#000" d="m10.5 1-9 9 9 9" />
    </svg>
);
export default BackIcon;
