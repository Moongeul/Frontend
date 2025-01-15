import * as React from "react";
import type { SVGProps } from "react";
const AlarmIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={25}
        fill="none"
        {...props}
    >
        <path
            fill="#fff"
            d="M.667 21.026v-1.129H2.82V9.091q0-2.615 1.642-4.628 1.644-2.011 4.204-2.475v-.655q0-.555.388-.944.388-.39.942-.389.555 0 .945.389.391.39.391.944v.664q2.561.454 4.204 2.466t1.642 4.628v10.806h2.154v1.129zm9.328 3.487q-.89 0-1.52-.633a2.08 2.08 0 0 1-.629-1.521h4.308q0 .896-.634 1.524-.634.63-1.525.63M3.95 19.897H16.05V9.091q0-2.512-1.77-4.282t-4.28-1.77-4.282 1.77-1.77 4.282z"
        />
    </svg>
);
export default AlarmIcon;
