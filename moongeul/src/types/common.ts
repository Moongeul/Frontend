import {SVGProps} from "react";

export interface NavbarContentType {
    path: string;
    pathName: string;
    selectedIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    unSelectedIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

export type HeaderType = "static" | "dynamic" | "title";

export interface TagType {
    id: number;
    tagName: string;
}

export interface ResponseType<T = any> {
    status: number;
    success: true,
    message: "string",
    data: T
}
