import * as React from "react";
import type { SVGProps } from "react";
const SelectedHomeIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={27}
        fill="none"
        {...props}
    >
        <path
            fill="#fff"
            d="M.333 26.334v-17.5L12 .018l11.667 8.814v17.5h-8.654v-10.64H8.987v10.64z"
        />
    </svg>
);
export default SelectedHomeIcon;
