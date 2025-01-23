import {AxiosError} from "axios";
import {useRef, useState} from "react";
import {useIonRouter} from "@ionic/react";

import Header from "../common/Header";
import Modal from "../common/Modal";
import ProfileImageSetting from "./ProfileImageSetting";
import Input from "../common/Input";
import Button from "../common/Button";
import {changeNickname, checkNicknameAvailability, patchProfileImage} from "../../lib/api/sign-up";
import {SignUpStepType} from "../../types/sign-up";

interface Props {
    setStep: React.Dispatch<React.SetStateAction<SignUpStepType>>
}

interface ErrorResponse {
    status: number;
    message: string;
}

const ProfileSetting = (props: Props) => {
    const { setStep } = props;
    const [inputValue, setInputValue] = useState<string>("");
    const imgRef = useRef<HTMLInputElement>(null);
    const [uploadImage, setUploadImage] = useState<string | ArrayBuffer | null>();
    const router = useIonRouter();
    const [nicknameIsAvailable, setNicknameIsAvailable] = useState<undefined | boolean>(undefined);
    //닉네임 중복 체크를 하지 않았다고 경고하는 컴포넌트
    const [isOpenDuplicateAlertModal, setIsOpenDuplicateAlertModal] = useState<boolean>(false);

    const onBack = () => {
        setStep("BookInterestTagPage")
    };

    const duplicationCheckButtonOnClick = async() => {
        try {
            const response = await checkNicknameAvailability(inputValue)
            console.log("response", response)
            if (response.status === 200 && response.message === "닉네임 사용 가능") {
                setNicknameIsAvailable(true);
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorResponse>; // AxiosError로 캐스팅
            if (axiosError.response?.data?.status === 400) {
                if (axiosError.response?.data?.message === "중복된 닉네임입니다.") {
                    setNicknameIsAvailable(false);
                }
            }
        }
    }

    const duplicateCheckButton = () => {
        return (
            <Button
                onClick={duplicationCheckButtonOnClick}
                className={inputValue.length === 0
                    ? "lightGray-bottom-button"
                    : "deepDarkGray-bottom-button"}
                secondClassName={"px-5 w-fit"}>
                중복확인
            </Button>
        )
    }

    const modalContent = () => {
        return (
            <div className={"flex flex-col gap-y-2 py-5"}>
                <div className={"text-white title1"}>
                    <span className={"text-brandColor"}>'닉네임 중복체크'</span>
                    를 하지 않았습니다.
                </div>
                <div className={"text-lightGray body2"}>'닉네임 중복체크'를 해주세요.</div>
            </div>
        )
    }

    const modalBottomButton = () => {
        return (
            <div className={"flex gap-x-3"}>
                <div className={"w-full"}></div>
                <Button
                    onClick={() => {
                        setIsOpenDuplicateAlertModal(false);
                    }}
                    className={"border-lightGray-text-darkGray-bottom-button"}>
                    닫기
                </Button>
            </div>
        )
    }

    // 폼 제출 핸들러
    const handleSubmit = async (e: any) => {
        e.preventDefault(); // 폼 제출 시 새로고침 방지
        if (nicknameIsAvailable === false) {
            setIsOpenDuplicateAlertModal(true);
            return;
        }

        const formData = new FormData();

        if (imgRef.current && imgRef.current.files && imgRef.current.files[0]) {
            formData.append('image', imgRef.current.files[0]); // 파일을 formData에 추가
        } else {
            console.error('파일이 선택되지 않았습니다.');
            return; // 파일이 없으면 제출하지 않음
        }
        try {
            await changeNickname(inputValue);
            await patchProfileImage(formData).then((r) => {
                router.push("/home")
            }); // API 호출
        } catch (error) {
            console.error('폼 제출 중 오류 발생:', error);
        }
    };

    return (
        <div>
            {isOpenDuplicateAlertModal && <Modal content={modalContent} bottomButton={modalBottomButton} setClose={setIsOpenDuplicateAlertModal} />}
            <form onSubmit={handleSubmit}>
                <Header headerType={"dynamic"} title={"내 정보 설정"} onBack={onBack}/>
                <div className={"h-[48px]"}/>

                <section className={"flex flex-col gap-y-8 items-center justify-center px-5"}>
                    <ProfileImageSetting imgRef={imgRef} uploadImage={uploadImage} setUploadImage={setUploadImage}/>
                    <Input
                        maxLength={10}
                        title={"닉네임"}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        duplicateCheckButton={duplicateCheckButton}
                        nicknameIsAvailable={nicknameIsAvailable}
                        setNicknameIsAvailable={setNicknameIsAvailable}/>
                </section>

                <div className={"fixed bottom-0 w-full px-5 py-2 bg-backGround"}>
                    <Button
                        type="submit"
                        disabled={!nicknameIsAvailable}
                        className={nicknameIsAvailable ? "deepDarkGray-bottom-button" : "lightGray-bottom-button"}>
                        서비스 시작하기
                    </Button>
                </div>
            </form>
        </div>
    )
}
export default ProfileSetting;
