import useUserInfo from "../../lib/hooks/useUserInfo";
import ArrowIcon from "../../assets/common/ArrowIcon";
import Book2Icon from "../../assets/mypage/Book2Icon";

const MyPageHeader = () => {
    const { userInfo } = useUserInfo();

    if (!userInfo) return ;

    return (
        <div className={"fixed top-[56px] bg-black p-5 w-full"}>
            <section className={"flex flex-col gap-y-[28px]"}>
                <div className={"flex gap-x-3 items-center"}>
                    <img src={userInfo.imageUrl} className={"w-[72px] h-[72px] rounded-full"}/>
                    <div className={"flex flex-col gap-y-1"}>
                        <div className={"flex gap-x-2 items-center"}>
                            <div className={"text-white title2"}>{userInfo.nickname}</div>
                            <div className={"p-2"}>
                                <ArrowIcon width={5} height={10} direction={"right"} color={"#CACACA"} strokeWidth={2}/>
                            </div>
                        </div>
                        <div className={"flex items-center gap-x-3"}>
                            <div className={"flex gap-x-1 title3 text-white"}><span className={"text-brandColor"}>{userInfo.followerCount}</span>팔로워</div>
                            <div className={"text-darkGray body2"}> |</div>
                            <div className={"flex gap-x-1 title3 text-white"}><span className={"text-brandColor"}>{userInfo.followedCount}</span>팔로잉</div>
                        </div>
                    </div>
                </div>
                <section className={"flex flex-col gap-y-1"}>
                    <div className={"text-white title2"}>나의 책장</div>
                    <div className={"flex justify-between"}>
                        <div className={"flex gap-x-[2px] items-center py-3 pl-[6px] pr-3 border-b border-darkGray"}>
                            <div className={"flex w-[40px] h-[40px] items-center justify-center"}>
                                <Book2Icon/>
                            </div>
                            <div className={"text-white title3"}>내가 읽은 책 <span className={"text-brandColor"}>{userInfo.readBooksCount}권</span></div>
                        </div>
                        <div className={"flex gap-x-[2px] items-center py-3 pl-[6px] pr-3 border-b border-darkGray"}>
                            <div className={"flex w-[40px] h-[40px] items-center justify-center"}>
                                <Book2Icon/>
                            </div>
                            <div className={"text-white title3"}>읽고 싶은 책 <span className={"text-brandColor"}>{userInfo.wishBooksCount}권</span></div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}
export default MyPageHeader;
