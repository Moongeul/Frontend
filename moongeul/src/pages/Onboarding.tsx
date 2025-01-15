import {IonPage} from "@ionic/react";
import KakaoIcon from "../assets/common/KakaoIcon";
import Button from "../components/common/Button";

const Onboarding = () => {
    return (
        <IonPage className={"flex items-center justify-center bg-deepDarkGray"}>
            {/*TODO: LOGO 변경되면 바뀔 예정*/}
            <div className={"heading text-white"}>LOGO</div>
            <div className={"fixed bottom-0 px-5 py-2 bg-deepDarkGray w-full"}>
                <Button className={"white-black-bottom-button"} secondClassName={"gap-x-2"} LeftIcon={KakaoIcon}>카카오로 시작하기</Button>
            </div>
        </IonPage>
    );
}
export default Onboarding;
