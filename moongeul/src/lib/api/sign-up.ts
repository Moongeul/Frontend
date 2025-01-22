import {sendRequest} from "../axios";
import Cookies from "js-cookie";
import {InitialTagType} from "../../types/sign-up";

/**
 * 마케팅 수신 동의 api
 * @param approve 승인시 ok, 거절시 no
 */
export const getApproveMarketingMessage = async (approve: "ok" | "no") => {
    try {
        const response = await sendRequest({
            headers: {
                Authorization: `Bearer ${Cookies.get("accessToken")}`,
            },
            method: "GET",
            url: `/api/v1/member/initial-marketing?approve=${approve}`,
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("마케팅 수신 동의:", error);
    }
};

/**
 * 처음 사용자용 tag 등록 API
 * @param tags 관심있는 태그 5개
 */
export const createUserTags = async (tags: InitialTagType) => {
    try {
        const response = await sendRequest({
            headers: {
                Authorization: `Bearer ${Cookies.get("accessToken")}`,
            },
            method: "POST",
            data: tags,
            url: `/api/v1/member/initial-tags`,
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("처음 태그 등록시 에러:", error);
    }
};
