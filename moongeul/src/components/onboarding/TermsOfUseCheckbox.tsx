"use client";

import {useEffect} from "react";

import TermsOfService from "../sign-up/TermsOfService";
import PersonalInformation from "../sign-up/PersonalInformation";
import MarketingInformation from "../sign-up/MarketingInformation";
import UnCheckedIcon from "../../assets/sign-up/UnCheckedIcon";
import CheckedIcon from "../../assets/sign-up/CheckedIcon";
import ArrowIcon from "../../assets/common/ArrowIcon";
import { useAtom } from "jotai";
import {
    allOptionsAtom,
    marketingInformationAtom,
    personalInformationAtom,
    termsOfServiceOptionsAtom
} from "../../store/sign-up/atom";

const TermsOfUseCheckbox = () => {
    const [allOptions, setAllOptions] = useAtom(allOptionsAtom);
    const [termsOfServiceOptions, setTermsOfServiceOptions] = useAtom(termsOfServiceOptionsAtom);
    const [personalInformation, setPersonalInformation] = useAtom(personalInformationAtom);
    const [marketingInformation, setMarketingInformation] = useAtom(marketingInformationAtom);

    const termsOfUseContents = [
        {content: "서비스 이용약관 동의(필수)", component: TermsOfService, state: termsOfServiceOptions, setState: setTermsOfServiceOptions},
        {content: "개인 정보 수집 및 이용 동의(필수)", component: PersonalInformation, state: personalInformation, setState: setPersonalInformation},
        {content: "마케팅 정보 수신 동의(선택)", component: MarketingInformation, state: marketingInformation, setState: setMarketingInformation}
    ]

    // 개별 상태가 하나라도 false이면 allOptions를 false로 설정
    useEffect(() => {
        if (termsOfServiceOptions && personalInformation && marketingInformation) {
            setAllOptions(true); // 모두 true일 경우 allOptions도 true
        } else {
            setAllOptions(false); // 하나라도 false면 allOptions는 false
        }
    }, [termsOfServiceOptions, personalInformation, marketingInformation]);

    const handleAllOptionsClick = () => {
        const newAllOptions = !allOptions;
        setAllOptions(newAllOptions);
        setTermsOfServiceOptions(newAllOptions);
        setPersonalInformation(newAllOptions);
        setMarketingInformation(newAllOptions);
    };

    const handleIndividualOptionClick = (setState:  React.Dispatch<React.SetStateAction<boolean>>, currentState: boolean) => {
        setState(!currentState);
    };

    return (
        <div className={"absolute w-full bottom-16 py-2 px-5 flex flex-col gap-y-3"}>
            {/* 전체 동의 */}
            <div className={"flex gap-x-1 items-center"}
                 onClick={() => {
                     handleAllOptionsClick()
                 }}>
                <div className={"flex w-[24px] h-[24px] items-center"}>{allOptions ? <CheckedIcon/> : <UnCheckedIcon/>}</div>
                <div className={allOptions ? "title2 text-black" : "title2 text-darkGray"}>전체 동의</div>
            </div>

            {/* 부분 동의 */}
            <div className={"flex flex-col gap-y-1 border-t pt-2"}>
                {termsOfUseContents.map((termsOfUseContent) => {
                    return (
                        <div
                            className={"flex justify-between py-3"}
                            onClick={() => {
                                handleIndividualOptionClick(termsOfUseContent.setState, termsOfUseContent.state)
                            }}>
                            <div className={"flex gap-x-1 items-center"}>
                                <div className={"flex w-[24px] h-[24px] items-center"}>{termsOfUseContent.state ? <CheckedIcon/> : <UnCheckedIcon/>}</div>
                                <div className={termsOfUseContent.state ? "body1 text-black" : "body1 text-darkGray"}>{termsOfUseContent.content}</div>
                            </div>
                            <div className={"flex items-center w-[32px] h-[32px]"}>
                                <ArrowIcon direction="right"/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
export default TermsOfUseCheckbox;
