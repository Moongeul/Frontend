import * as React from "react";
import type { SVGProps } from "react";
const UnSelectedHomeIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={27}
        fill="none"
        {...props}
    >
        <path
            fill="#CACACA"
            d="M1.744 24.923h6.538v-9.936h7.436v9.936h6.538V9.538L12 1.771 1.744 9.531zm-1.41 1.41v-17.5L12 .02l11.667 8.814v17.5h-9.36v-9.935H9.694v9.935z"
        />
    </svg>
);
export default UnSelectedHomeIcon;
