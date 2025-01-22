import {IonPage} from "@ionic/react";
import KakaoIcon from "../assets/common/KakaoIcon";

const Onboarding = () => {
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_REACT_APP_REST_API_KEY}&redirect_uri=${import.meta.env.VITE_REACT_APP_REDIRECT_URI}&response_type=code`;

    return (
        <IonPage className={"flex items-center justify-center bg-deepDarkGray"}>
            {/*TODO: LOGO 변경되면 바뀔 예정*/}
            <div className={"heading text-white"}>LOGO</div>
            <div className={"fixed bottom-0 px-5 py-2 bg-deepDarkGray w-full"}>
                <a
                    href={kakaoAuthUrl}
                    className={"white-bottom-button gap-x-2"}
                >
                    <KakaoIcon/>
                    카카오로 시작하기
                </a>
            </div>
        </IonPage>
    );
}
export default Onboarding;
