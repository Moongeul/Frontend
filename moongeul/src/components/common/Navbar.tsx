"use client";

import {navbarContents} from "../../utils/common/navbar";
import {useLocation} from "react-router";
import {useIonRouter} from "@ionic/react";

const Navbar = ()=> {
    const location = useLocation()
    const router = useIonRouter();

    return (
        <div className={"fixed bottom-0 flex justify-between bg-black w-full pt-1 pb-[27px] px-6"}>
            {navbarContents.map((navbarContent) => {
                return (
                    <div
                        onClick={() => {
                            router.push(navbarContent.path)
                        }}
                        className={"flex flex-col items-center justify-center"}>
                        <div className={"flex w-[40px] h-[40px] items-center justify-center"}>
                            {location.pathname === navbarContent.path ? <navbarContent.selectedIcon /> : <navbarContent.unSelectedIcon /> }
                        </div>
                        <div className={location.pathname === navbarContent.path ? "caption2 text-white" : "caption2 text-lightGray"}>{`${navbarContent.pathName}`}</div>
                    </div>
                )
            })}
        </div>
    );
}
export default Navbar;
