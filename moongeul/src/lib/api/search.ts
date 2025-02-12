import {sendRequest} from "../axios";
import Cookies from "js-cookie";

/**
 * 책 검색 api
 * @param title 책 제목
 * @param page 페이지
 * @param size 갯수
 */
export const searchBook = async (title: string, page: number, size: number) => {
    try {
        const response = await sendRequest({
            headers: {
                Authorization: `Bearer ${Cookies.get("accessToken")}`,
            },
            method: "GET",
            url: `/api/v1/book?title=${title}&page=${page}&size=${size}`,
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("책 검색 에러:", error);
    }
};
