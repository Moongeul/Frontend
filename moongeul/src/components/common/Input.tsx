import Button from "./Button";
import CancelIcon from "../../assets/sign-up/CancelIcon";

interface Props {
    title?: string;
    maxLength?: number;
    inputClassName?: string;
    inputValue: string;
    setInputValue:  React.Dispatch<React.SetStateAction<string>>;
    LeftIcon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    duplicateCheckButton?: () => JSX.Element;
    nicknameIsAvailable?: boolean | undefined;
    setNicknameIsAvailable?: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

const Input = (props: Props) => {
    const { title, maxLength, inputClassName, inputValue, setInputValue, LeftIcon, duplicateCheckButton, nicknameIsAvailable, setNicknameIsAvailable } =  props;

    return (
        <div className={"flex flex-col gap-y-1 w-full"}>
            {/* label */}
            <div className={"flex justify-between"}>
                {title && (<div className={"title2"}>{title}</div>)}
                {maxLength && (<div className={"text-lightGray title5"}>{`${inputValue.length}/${maxLength}`}</div>)}
            </div>

            <div className={"flex gap-x-1"}>
                <div className={"flex gap-x-1 p-4 rounded-full border border-lightGray title3 bg-backGround w-[72%]"}>
                    {LeftIcon ? <LeftIcon /> : null}
                    <input
                        onChange={(e) => {
                            setNicknameIsAvailable ? setNicknameIsAvailable(undefined) : null; //중복체크를 했는데, 닉네임을 바꾼 경우
                            setInputValue(e.target.value);
                        }}
                        maxLength={maxLength}
                        className={"w-full bg-backGround outline-none"}
                    />
                    <Button LeftIcon={CancelIcon} />
                </div>
                {duplicateCheckButton? duplicateCheckButton() : null}
            </div>
            {nicknameIsAvailable === undefined
                ? null
                : nicknameIsAvailable
                    ? <li className={"text-darkGray body2"}>사용 가능한 닉네임 입니다.</li>
                    : <li className={"text-brandColor body2"}>사용할 수 없는 닉네임 입니다.</li>}
        </div>
    )
}
export default Input;
