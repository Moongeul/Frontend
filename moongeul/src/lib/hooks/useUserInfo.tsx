import useSWR from "swr";

import {swrGetFetcher} from "../axios";
import {ResponseType} from "../../types/common";
import {UserInfoType} from "../../types/mypage";

const useUserInfo = () => {
    const { data, error } = useSWR<ResponseType<UserInfoType>>("/api/v1/member/user-info", swrGetFetcher);

    return {
        userInfo: data ? data.data : null,
        isLoading: !error && !data,
        isError: error,
    };
};
export default useUserInfo;
