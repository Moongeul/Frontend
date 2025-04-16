interface Props {
    selectedMenu: "팔로워" | "팔로잉"
    setSelectedMenu: React.Dispatch<React.SetStateAction<"팔로워" | "팔로잉">>
}
const FollowMenu = (props: Props) => {
    const {selectedMenu, setSelectedMenu} = props;
    return (
        <div className={"flex"}>
            <div
                onClick={() => {
                    setSelectedMenu("팔로워")
                }}
                className={selectedMenu === "팔로워"
                    ? "flex py-[13px] w-full items-center justify-center border-b-[2px] border-brandColor"
                    : "flex py-[13px] w-full items-center justify-center"}>
                <div
                    className={selectedMenu === "팔로워"
                        ? "button"
                        : "title5 text-darkGray"}>
                    팔로워 7
                </div>
            </div>
            <div
                onClick={() => {
                    setSelectedMenu("팔로잉")
                }}
                className={selectedMenu === "팔로잉"
                    ? "flex py-[13px] w-full items-center justify-center border-b-[2px] border-brandColor"
                    : "flex py-[13px] w-full items-center justify-center"}>
                <div
                    className={selectedMenu === "팔로잉"
                        ? "button"
                        : "title5 text-darkGray"}>
                    팔로잉 7
                </div>
            </div>
        </div>
    )
}
export default FollowMenu;
