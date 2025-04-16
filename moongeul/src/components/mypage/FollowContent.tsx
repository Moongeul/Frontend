interface Props {
    imageUrl: string;
    nickname: string;
    isFollow: boolean;
}
const FollowContent = (props: Props) => {
    const {imageUrl, nickname, isFollow} = props;

    const renderButton = () => {
        switch (isFollow) {
            case true:
                return (
                    <button className={"brand-bottom-button py-[7px] w-[92px]"}>팔로우</button>
                )
            case false:
                return (
                    <button className={"border-lightGray-text-darkGray-bottom-button py-[7px] w-[92px]"}>팔로우취소</button>
                )
        }
    }
    return (
        <div className={"flex justify-between items-center py-4"}>
            <div className={"flex gap-x-2 items-center"}>
                <img src={imageUrl} alt={imageUrl} className={"w-[52px] h-[52px] rounded-full"} />
                <div className={"title2"}>{nickname}</div>
            </div>
            <div>
                {renderButton()}
            </div>
        </div>
    )
}
export default FollowContent;
