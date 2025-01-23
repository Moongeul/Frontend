import {useEffect, useState} from "react";

import {TagType, SignUpStepType} from "../../types/sign-up";
import {tagList} from "../../utils/common/tagList";
import {createUserTags} from "../../lib/api/sign-up";
import Header from "../common/Header";
import Title from "./Title";
import Tag from "../common/Tag";
import Button from "../common/Button";

interface Props {
    setStep: React.Dispatch<React.SetStateAction<SignUpStepType>>
}

const BookInterestTagPage = (props: Props) => {
    const { setStep } = props;
    const [initialTag, setInitialTag] = useState<TagType>({
        tag1: "",
        tag2: "",
        tag3: "",
        tag4: "",
        tag5: "",
    });
    const [selectedTagList, setSelectedTagList] = useState<string[]>([]);
    const [isTrigger, setIsTrigger] = useState(false);

    const onBack = () => {
        setStep("TermsOfUse")
    };

    const mapSelectedTagsToInitialTag = () => {
        // selectedTagList를 tag1, tag2, ... tag5에 매핑
        const newTags: TagType = selectedTagList.reduce((acc, tag, index) => {
            const tagKey = `tag${index + 1}` as keyof TagType; // tag1, tag2, ...
            acc[tagKey] = tag; // 해당 키에 값을 할당
            return acc;
        }, {
            tag1: "",
            tag2: "",
            tag3: "",
            tag4: "",
            tag5: "",
        });

        // 상태 업데이트
        setIsTrigger(true);
        setInitialTag(newTags);
    };

    useEffect(() => {
        if (initialTag.tag1 !== "" && isTrigger) {
            createUserTags(initialTag).then((r) => {
                setInitialTag((prevState) => ({...prevState, tag1: "", tag2: "", tag3: "", tag4: "", tag5: ""}))
                setStep("ProfileSetting")
                setIsTrigger(false);
            })
        }
    }, [initialTag]);

    return (
        <div>
            <Header headerType={"dynamic"} title={"책 취향 선택"} onBack={onBack}/>
            <div className={"h-[48px]"}/>

            <Title title={"어떤 책을 좋아하시나요?"}>
                <div className={"body2 text-darkGray"}>좋아하는 책 취향을 선택하고 추천받아보세요. <br/> (5개 선택 필수)</div>
            </Title>

            {/* 책 취향 태그 선택 */}
            <div className={"grid grid-cols-4 gap-y-3 gap-x-3 px-5 py-3"}>
                {tagList.map((tag) => {
                    return (
                        <div key={tag.id}>
                            <Tag selectedTagList={selectedTagList} setSelectedTagList={setSelectedTagList}>{tag.tagName}</Tag>
                        </div>
                    )
                })}
            </div>

            <div className={"fixed bottom-0 w-full px-5 py-2 bg-backGround"}>
                <Button
                    onClick={() => mapSelectedTagsToInitialTag()}
                    className={selectedTagList.length !== 5 ? "lightGray-bottom-button" : "deepDarkGray-bottom-button"}
                    disabled={selectedTagList.length !== 5}>
                    5개 선택하기
                </Button>
            </div>
        </div>
    );
}
export default BookInterestTagPage;
