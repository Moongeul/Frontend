import * as React from "react";
import type { SVGProps } from "react";
const SelectedSearchIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        fill="none"
        {...props}
    >
        <path
            fill="#fff"
            d="M27.818 29.278 17.12 18.579a9 9 0 0 1-2.892 1.67 10 10 0 0 1-3.408.59q-4.254 0-7.2-2.944t-2.947-7.16 2.945-7.163T10.785.624q4.22 0 7.168 2.946 2.946 2.945 2.947 7.162 0 1.763-.6 3.41a9.7 9.7 0 0 1-1.689 2.945l10.716 10.671zM10.803 18.746q3.35 0 5.677-2.332 2.325-2.332 2.325-5.682T16.48 5.05t-5.677-2.332q-3.364 0-5.7 2.332t-2.336 5.682 2.336 5.682 5.7 2.332"
        />
    </svg>
);
export default SelectedSearchIcon;
