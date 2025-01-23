import {myPageContents} from "../../utils/mypage";
import ArrowIcon from "../../assets/common/ArrowIcon";
import {useIonRouter} from "@ionic/react";

interface Props {
    setIsOpenLogoutModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyPageContent = (props: Props) => {
    const router = useIonRouter();
    const { setIsOpenLogoutModal } = props;
    return (
        <div className={"flex flex-col gap-y-2 mt-[10px] px-[20px]"}>
            {myPageContents.map((myPageContent) => {
                return (
                    <div
                        onClick={() => {
                            router.push(myPageContent.path);
                        }}
                        className={"flex py-3 items-center justify-between border-b border-lightGray"}>
                        <div className={"title4"}>
                            {myPageContent.content}
                        </div>
                        <div className={"flex items-center justify-center w-[32px] h-[32px]"}>
                            <ArrowIcon direction={"right"} width={9} height={18}/>
                        </div>
                    </div>
                )
            })}
            <div
                onClick={() => {
                    setIsOpenLogoutModal(true);
                }}
                className={"flex py-3 items-center justify-between title4 border-b border-lightGray"}>
                로그아웃
                <div className={"flex items-center justify-center w-[32px] h-[32px]"}>
                    <ArrowIcon direction={"right"} width={9} height={18}/>
                </div>
            </div>
        </div>
    )
}
export default MyPageContent;
