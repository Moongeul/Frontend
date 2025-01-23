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

/**
 * 프로필 이미지 수정하는 api
 * @param profileData formData
 */
export const patchProfileImage = async (profileData: FormData) => {
    try {
        const response = await sendRequest({
            headers: {
                Authorization: `Bearer ${Cookies.get("accessToken")}`,
                'Content-Type': 'multipart/form-data',
            },
            method: "PATCH",
            data: profileData,
            url: `/api/v1/member/change-profile-image`,
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("프로필 이미지 수정시 에러:", error);
    }
};

/**
 * 닉네임 중복체크
 * @param nickname 변경하고자 하는 닉네임
 */
export const checkNicknameAvailability = async (nickname: string) => {
    const response = await sendRequest({
        headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
        method: "POST",
        url: `/api/v1/member/check-nickname?nickname=${nickname}`,
    });
    console.log(response.data);
    return response.data;
};

/**
 * 닉네임을 변경하는 api
 * @param nickname 변경하고자 하는 닉네임
 */
export const changeNickname = async (nickname: string) => {
    try {
        const response = await sendRequest({
            headers: {
                Authorization: `Bearer ${Cookies.get("accessToken")}`,
            },
            method: "PATCH",
            url: `/api/v1/member/change-nickname?nickname=${nickname}`,
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("닉네임 수정시 에러:", error);
    }
};
