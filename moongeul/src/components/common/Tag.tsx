import * as React from "react";
import BookMarkIcon from "../../assets/common/BoolMarkIcon";

interface Props {
    children: string
}

const Tag = (props: Props) => {
    const { children } = props;
    return (
        //클릭하지 않은 태그 : "flex items-center justify-center w-[76px] h-[76px] text-darkGray button border border-lightGray rounded-[8px] bg-white"
        <div className={"relative flex items-center justify-center w-[76px] h-[76px] rounded-[8px] button text-lightGray bg-deepDarkGray"}>
            <BookMarkIcon className={"absolute top-0 right-2"}/>
            {children}
        </div>
    )
}
export default Tag;
