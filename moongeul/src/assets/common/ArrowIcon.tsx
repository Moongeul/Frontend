import * as React from "react";
import type { SVGProps } from "react";

interface BackIconProps extends SVGProps<SVGSVGElement> {
    direction?: "left" | "right"; // 방향을 정의
}

const ArrowIcon = ({ direction = "left", ...props }: BackIconProps) => {
    // 방향에 따라 회전값 설정
    const rotation = direction === "right" ? "rotate(180)" : "rotate(0)";

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={11}
            height={20}
            fill="none"
            transform={rotation} // 방향에 따라 회전 적용
            {...props}
        >
            <path stroke="#000" d="m10.5 1-9 9 9 9" />
        </svg>
    );
};

export default ArrowIcon;

