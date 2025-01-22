import axios from "axios";
import {sendRequest} from "../axios";

export const getKaKaoAccessToken = async (code: string | null) => {
    try {
        const response = await axios.post(
            "https://kauth.kakao.com/oauth/token",
            {
                grant_type: "authorization_code",
                client_id: import.meta.env.VITE_REACT_APP_REST_API_KEY,
                redirect_uri: import.meta.env.VITE_REACT_APP_REDIRECT_URI,
                code: code,
                client_secret: import.meta.env.VITE_REACT_APP_CLIENT_SECRET,
            },
            {
                headers: {
                    "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
                },
            },
        );
        // 성공적인 응답 처리
        return response.data;
    } catch (error) {
        // 에러 처리
        console.error("카카오 엑세스토큰 가져오는데 에러 발생:", error);
    }
};

export const getJWTToken = async (accessToken: string) => {
    try {
        const response = await sendRequest({
            method: "POST",
            data: { accessToken: accessToken },
            url: "/api/v1/member/login",
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("JWT 에러 발생:", error);
    }
};
