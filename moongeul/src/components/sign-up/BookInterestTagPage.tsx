import Header from "../common/Header";
import Title from "./Title";
import {tagList} from "../../utils/common/tagList";
import Tag from "../common/Tag";
import Button from "../common/Button";

interface Props {
    setStep: React.Dispatch<React.SetStateAction<string>>
}

const BookInterestTagPage = (props: Props) => {
    const { setStep } = props;

    const onBack = () => {
        setStep("TermsOfUse")
    };

    const onNext = () => {
        setStep("ProfileSetting")
    }

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
                            <Tag>{tag.tagName}</Tag>
                        </div>
                    )
                })}
            </div>

            <div className={"fixed bottom-0 w-full px-5 py-2 bg-backGround"}>
                <Button className={"deepDarkGray-bottom-button"}>5개 선택하기</Button>
            </div>
        </div>
    );
}
export default BookInterestTagPage;
