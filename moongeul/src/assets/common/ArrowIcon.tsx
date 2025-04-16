import * as React from "react";
import type { SVGProps } from "react";

interface BackIconProps extends SVGProps<SVGSVGElement> {
    direction?: "left" | "right"; // 방향을 정의
    size?: number; // 크기 (비율을 유지하기 위해 width와 height를 동시에 설정)
    color?: string; // 경로의 색상
    strokeWidth?: number; // 선 두께
}

const ArrowIcon = ({
                       direction = "left",
                       size = 12, // 기본 크기
                       color = "#000", // 기본값
                       strokeWidth = 1,
                       ...props

    }: BackIconProps) => {
    // 방향에 따라 회전값 설정
    const rotation = direction === "right" ? "rotate(180)" : "rotate(0)";

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size * (20 / 11)}
            viewBox="0 0 11 20" // 원본 크기 설정
            fill="none"
            transform={rotation} // 방향에 따라 회전 적용
            {...props}
        >
            <path stroke={color} strokeWidth={strokeWidth} d="m10.5 1-9 9 9 9" />
        </svg>
    );
};

export default ArrowIcon;

