import {IonPage, useIonRouter} from "@ionic/react";
import TermsOfUse from "../components/onboarding/TermsOfUse";
import {useEffect, useState} from "react";
import BookInterestTagPage from "../components/sign-up/BookInterestTagPage";
import ProfileSetting from "../components/sign-up/ProfileSetting";
import {getJWTToken, getKaKaoAccessToken} from "../lib/api/onboarding";
import {useLocation} from "react-router";
import Cookies from "js-cookie";
import {SignUpStepType} from "../types/sign-up";

const SignUp = () => {
    const [step, setStep] = useState<SignUpStepType>("TermsOfUse");
    const params = useLocation()
    const [isTrigger, setIsTrigger] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const router = useIonRouter();


    function getQueryValue(queryString: string) {
        const index = queryString.indexOf('=');
        if (index !== -1) {
            return queryString.substring(index + 1);
        }
        return null; // `=`가 없을 경우
    }

    useEffect(() => {
        const code = getQueryValue(params.search)
        if (code && !isFetching && !Cookies.get("accessToken") && !Cookies.get("kakaoAccessToken")){
            setIsFetching(true); // 요청 시작
            getKaKaoAccessToken(code).then((r) => {
                Cookies.set("kakaoAccessToken", r.access_token, { expires: Date.now() + 604800000 });
                console.log("r.access_token", r.access_token)
                getJWTToken(r.access_token).then((res) => {
                    Cookies.set("accessToken", res.data.tokens.accessToken, { expires: Date.now() + 604800000 });
                    Cookies.set("refreshToken", res.data.tokens.refreshToken, { expires: Date.now() + 604800000 });
                    Cookies.set("role", res.data.role, { expires: Date.now() + 604800000 });
                    setIsTrigger(true);
                    setIsFetching(false); // 요청 완료
                })
            }).catch(() => {
                setIsFetching(false); // 오류 발생 시 플래그 초기화
            });
        }
    }, [params.search])

    useEffect(() => {
        const role = Cookies.get("role");
        if (role && isTrigger) {
            if (role === "USER" || role === "ADMIN") {
                setIsTrigger(false);
                router.push("/home");
            } else {
                setIsTrigger(false);
                router.push("/sign-up");
            }
        }
    }, [isTrigger]);

    return (
        <IonPage className={"bg-backGround"}>
            {step === "TermsOfUse" && (<TermsOfUse setStep={setStep}/>)}
            {step === "BookInterestTagPage" && (<BookInterestTagPage setStep={setStep}/>)}
            {step === "ProfileSetting" && (<ProfileSetting setStep={setStep}/>)}
        </IonPage>
    )
}
export default SignUp;
