import FollowContent from "./FollowContent";

const FollowerList = () => {
    return (
        <div className={"flex flex-col px-5"}>
            <FollowContent isFollow={true} nickname={"유림"} imageUrl={"/Ellipse 14.png"}/>
            <FollowContent isFollow={true} nickname={"유림"} imageUrl={"/Ellipse 14.png"}/>
            <FollowContent isFollow={true} nickname={"유림"} imageUrl={"/Ellipse 14.png"}/>
            <FollowContent isFollow={false} nickname={"유림"} imageUrl={"/Ellipse 14.png"}/>
            <FollowContent isFollow={false} nickname={"유림"} imageUrl={"/Ellipse 14.png"}/>
            <FollowContent isFollow={false} nickname={"유림"} imageUrl={"/Ellipse 14.png"}/>
        </div>
    )
}
export default FollowerList
