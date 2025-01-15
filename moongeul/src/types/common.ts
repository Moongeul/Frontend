import {SVGProps} from "react";

export interface NavbarContentType {
    path: string;
    pathName: string;
    selectedIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    unSelectedIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}
