import {homeMenuContents} from "../../utils/home/menu";

interface Props{
    homeMenuType: HomeMenuType;
    setHomeMenuType: React.Dispatch<React.SetStateAction<HomeMenuType>>;
}

const HomeMenu = (props: Props) => {
    const { homeMenuType, setHomeMenuType } = props;

    return (
        <div className={"fixed top-[57px] flex w-full"}>
            {homeMenuContents.map((homeMenuContent) => {
                return (
                    <button
                        onClick={() => {
                            setHomeMenuType(homeMenuContent)
                        }}
                        className={
                        homeMenuType === homeMenuContent
                            ? "text-black px-5 py-2 bg-backGround w-full items-start"
                            : "text-white px-5 py-2 bg-black w-full items-start"}>
                        {homeMenuContent}
                    </button>
                )
            })}
        </div>
    )
}
export default HomeMenu;
