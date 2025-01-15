import {HeaderType} from "../../types/common";
import {ReactNode} from "react";
import BackIcon from "../../assets/common/BackIcon";
import LOGOIcon from "../../assets/common/LOGOIcon";
import AlarmIcon from "../../assets/common/AlarmIcon";

interface Props {
    headerType?: HeaderType;
    title?: string;
    rightElement?: ReactNode;
    onBack?: () => void;
}
const Header = (props: Props) => {
    const { headerType = "static", onBack, rightElement, title } = props;
    const renderHeader = () => {
        switch (headerType) {
            case "static":
                return (
                    <div className={"flex justify-between py-[12.5px] px-5  w-full bg-black"}>
                        <div className={"flex items-center justify-center"}>
                            <LOGOIcon/>
                        </div>
                        <div className={"flex justify-center items-center w-[32px] h-[32px]"}>
                            <AlarmIcon />
                        </div>
                    </div>
                )
            case "title":
                return (
                    <div className={"flex py-[11.5px] px-5 bg-backGround"}>
                        <div className={"heading"}>{title}</div>
                    </div>
                )
            case "dynamic":
                return (
                    <div className={"flex justify-between py-2 px-5 bg-backGround items-center"}>
                        <div
                            onClick={ onBack }
                            className={"flex w-[32px] h-[32px] items-center justify-center"}>
                            <BackIcon />
                        </div>
                        <div className={"title5"}>{title}</div>
                        {rightElement ? rightElement : <div className={"w-[32px] h-[32px]"}/>}
                    </div>
                )
        }
    }

    return (
        <div className={"fixed top-0 w-full"}>
            {renderHeader()}
        </div>
    )
}
export default Header;
