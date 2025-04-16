import useSWR from "swr";

import {swrGetFetcher} from "../axios";
import {ResponseType} from "../../types/common";
import {FollowType} from "../../types/mypage";

const useFollow = () => {
    const { data, error } = useSWR<ResponseType<FollowType[]>>("/api/v1/member/follow", swrGetFetcher);

    return {
        followData: data ? data.data : null,
        isLoading: !error && !data,
        isError: error,
    };
};
export default useFollow;
