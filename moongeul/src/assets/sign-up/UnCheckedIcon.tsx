import * as React from "react";
import type { SVGProps } from "react";
const UnCheckedIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={17}
        height={12}
        fill="none"
        {...props}
    >
        <path
            fill="#CACACA"
            d="M6.05 9.15 14.525.675q.3-.3.7-.3t.7.3.3.712q0 .414-.3.713L6.75 11.3q-.3.3-.7.3a.96.96 0 0 1-.7-.3L1.05 7a.93.93 0 0 1-.287-.713 1.02 1.02 0 0 1 .312-.712q.3-.3.713-.3.412 0 .712.3z"
        />
    </svg>
);
export default UnCheckedIcon;
