import * as React from "react";
import type { SVGProps } from "react";
const UnSelectedSearchIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={28}
        fill="none"
        {...props}
    >
        <path
            fill="#CACACA"
            d="M26.637 27.583 16.045 16.991a8.7 8.7 0 0 1-2.883 1.686 9.8 9.8 0 0 1-3.299.586q-3.99 0-6.753-2.758T.346 9.775t2.758-6.736Q5.864.276 9.833.276t6.746 2.76q2.776 2.76 2.776 6.73 0 1.723-.616 3.365-.615 1.643-1.684 2.85l10.599 10.564zm-16.78-9.73q3.402 0 5.745-2.338t2.343-5.746-2.343-5.746-5.745-2.337q-3.408 0-5.754 2.337Q1.756 6.36 1.756 9.769t2.347 5.746 5.754 2.337"
        />
    </svg>
);
export default UnSelectedSearchIcon;
