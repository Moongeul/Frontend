import {IonPage, useIonRouter} from "@ionic/react";
import TermsOfUse from "../components/onboarding/TermsOfUse";
import {useEffect, useState} from "react";
import BookInterestTagPage from "../components/sign-up/BookInterestTagPage";
import ProfileSetting from "../components/sign-up/ProfileSetting";
import {getJWTToken, getKaKaoAccessToken} from "../lib/api/onboarding";
import {useLocation} from "react-router";
import Cookies from "js-cookie";

const SignUp = () => {
    const [step, setStep] = useState("TermsOfUse");
    const params = useLocation()
    const [isTrigger, setIsTrigger] = useState(false);
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
        if (code && Cookies.get("accessToken") === undefined){
            getKaKaoAccessToken(code).then((r) => {
                console.log("r", r.access_token)
                Cookies.set("kakaoAccessToken", r.access_token, { expires: Date.now() + 604800000 });
                getJWTToken(r.access_token).then((res) => {
                    console.log("res", res)
                    Cookies.set("accessToken", res.data.tokens.accessToken, { expires: Date.now() + 604800000 });
                    Cookies.set("refreshToken", res.data.tokens.refreshToken, { expires: Date.now() + 604800000 });
                    Cookies.set("role", res.data.role, { expires: Date.now() + 604800000 });
                    setIsTrigger(true);
                })
            })
        }
    }, [])


    useEffect(() => {
        const role = Cookies.get("role");
        if (Cookies.get("role") !== undefined && isTrigger) {
            if (role === "USER" || role === "ADMIN") {
                console.log("통과되는데");
                setIsTrigger(false);
                router.push("/home");
            } else {
                setIsTrigger(false);
                router.push("/sign-up");
            }
        }
    }, [Cookies.get("role"), isTrigger]);

    return (
        <IonPage className={"bg-backGround"}>
            {step === "TermsOfUse" && (<TermsOfUse />)}
            {step === "BookInterestTagPage" && (<BookInterestTagPage setStep={setStep}/>)}
            {step === "ProfileSetting" && (<ProfileSetting setStep={setStep}/>)}
        </IonPage>
    )
}
export default SignUp;
