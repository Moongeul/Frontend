import Title from "../sign-up/Title";
import Header from "../common/Header";
import TermsOfUseCheckbox from "./TermsOfUseCheckbox";
import Button from "../common/Button";

const TermsOfUse = () => {
    return (
        <div>
            <Header headerType={"dynamic"} title={"이용 약관동의"} disableBackIcon={true}/>
            <div className={"h-[48px]"}/>
            <Title title={"약관동의가 필요해요."}>
                <div className={"body1 text-darkGray"}>
                    Moongle 서비스 시작 및 가입을 위해 <br/>먼저 정보제공 및 필수 약관에 동의해주세요.
                </div>
            </Title>
            <TermsOfUseCheckbox/>
            <div className={"fixed bottom-0 py-2 px-5 w-full"}>
                <Button className={"deepDarkGray-bottom-button"}>동의하고 가입하기</Button>
            </div>
        </div>
    )
}
export default TermsOfUse;
