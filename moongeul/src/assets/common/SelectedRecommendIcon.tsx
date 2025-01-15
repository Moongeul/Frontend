import * as React from "react";
import type { SVGProps } from "react";
const SelectedRecommendIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={27}
        fill="none"
        {...props}
    >
        <path
            fill="#fff"
            d="M3.808 27q-1.585 0-2.696-1.111Q0 24.777 0 23.192V4.385Q0 2.56 1.28 1.28T4.385 0H21v20.654q-1.02 0-1.722.753a2.53 2.53 0 0 0-.701 1.785q0 1.032.701 1.785a2.26 2.26 0 0 0 1.722.754V27zm1.269-7.616h1.27V1.27h-1.27zm-1.27 6.347h14.465a3.6 3.6 0 0 1-.714-1.153 3.8 3.8 0 0 1-.25-1.386q0-.729.249-1.382a3.5 3.5 0 0 1 .72-1.156H3.808q-1.068 0-1.803.74a2.46 2.46 0 0 0-.735 1.798q0 1.07.735 1.804.735.735 1.804.735"
        />
    </svg>
);
export default SelectedRecommendIcon;
