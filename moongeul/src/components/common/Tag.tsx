import * as React from "react";
import BookMarkIcon from "../../assets/common/BoolMarkIcon";

interface Props {
    selectedTagList: string[];
    setSelectedTagList: React.Dispatch<React.SetStateAction<string[]>>;
    children: string
}

const Tag = (props: Props) => {
    const { selectedTagList, setSelectedTagList, children } = props;

    const addToList = (list: string[], value: string) => {
        // 중복된 값이 있는지 확인
        if (list.includes(value)) {
            const newList = list.filter(item => item !== value);
            setSelectedTagList(newList);
            return list;
        }

        // 리스트의 길이가 5개를 초과하지 않도록 제한
        if (list.length >= 5) {
            return list;
        }

        // 값 추가
        setSelectedTagList([...list, value]);
        return list;
    }


    return (
        <div
            onClick={() => {
                addToList(selectedTagList, children);
            }}
            className={selectedTagList.includes(children)
                ? "relative flex items-center justify-center w-[76px] h-[76px] rounded-[8px] button text-lightGray bg-deepDarkGray"
                : "flex items-center justify-center w-[76px] h-[76px] text-darkGray button border border-lightGray rounded-[8px] bg-white"}>
            {selectedTagList.includes(children) ? <BookMarkIcon className={"absolute top-0 right-2"}/> : null}
            {children}
        </div>
    )
}
export default Tag;
