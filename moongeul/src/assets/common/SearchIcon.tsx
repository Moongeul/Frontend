import * as React from "react";
import type { SVGProps } from "react";
const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={17}
        fill="none"
        {...props}
    >
        <path
            fill="#141414"
            d="m16.485 16.654-6.262-6.262a5.5 5.5 0 0 1-1.725.989q-.975.35-1.96.35-2.402 0-4.066-1.663T.808 6.003 2.47 1.936Q4.135.269 6.535.269q2.402 0 4.068 1.664T12.27 6q0 1.042-.369 2.017a5.5 5.5 0 0 1-.97 1.668l6.262 6.261zM6.539 10.73q1.99 0 3.36-1.37T11.27 6 9.9 2.64 6.54 1.27t-3.36 1.37T1.807 6t1.37 3.36 3.36 1.37"
        />
    </svg>
);
export default SearchIcon;
