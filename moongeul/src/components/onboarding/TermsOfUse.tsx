import {useAtomValue} from "jotai";

import Title from "../sign-up/Title";
import Header from "../common/Header";
import TermsOfUseCheckbox from "./TermsOfUseCheckbox";
import Button from "../common/Button";
import {SignUpStepType} from "../../types/sign-up";
import {getApproveMarketingMessage} from "../../lib/api/sign-up";
import {
marketingInformationAtom,
personalInformationAtom,
termsOfServiceOptionsAtom
} from "../../store/sign-up/atom";

interface Props {
    setStep: React.Dispatch<React.SetStateAction<SignUpStepType>>
}

const TermsOfUse = (props: Props) => {
    const { setStep } = props;
    const termsOfServiceOptions = useAtomValue(termsOfServiceOptionsAtom);
    const personalInformation = useAtomValue(personalInformationAtom);
    const marketingInformation = useAtomValue(marketingInformationAtom);

    const onClick = () => {
        getApproveMarketingMessage(marketingInformation? "ok" : "no").then((r) => {
            setStep("BookInterestTagPage")
        })
    }

    return (
        <div>
            <Header headerType={"dynamic"} title={"이용 약관동의"} disableBackIcon={true}/>
            <div className={"h-[48px]"}/>
            <Title title={"약관동의가 필요해요."}>
                <div className={"body1 text-darkGray"}>
                    Moongle 서비스 시작 및 가입을 위해 <br/>먼저 정보제공 및 필수 약관에 동의해주세요.
                </div>
            </Title>
            <TermsOfUseCheckbox />
            <div className={"fixed bottom-0 py-2 px-5 w-full"}>
                <Button
                    onClick={onClick}
                    className={termsOfServiceOptions && personalInformation ? "deepDarkGray-bottom-button" : "lightGray-bottom-button"}
                    disabled={!(termsOfServiceOptions && personalInformation)}>
                    동의하고 가입하기
                </Button>
            </div>x
        </div>
    )
}
export default TermsOfUse;
