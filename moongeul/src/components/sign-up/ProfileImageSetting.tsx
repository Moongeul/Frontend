import PhotoCameraIcon from "../../assets/sign-up/PhotoCameraIcon";

interface Props {
    imgRef: React.RefObject<HTMLInputElement>;
    uploadImage: string | ArrayBuffer | null | undefined;
    setUploadImage: React.Dispatch<React.SetStateAction<string | ArrayBuffer | null | undefined>>;
}
const ProfileImageSetting = (props: Props) => {
    const {imgRef, uploadImage, setUploadImage} = props;

    // 이미지 미리보기 설정
    const handleImagePreview = async () => {
        const files = imgRef.current?.files;
        let reader = new FileReader();
        if (files) {
            reader.readAsDataURL(files[0]);
            reader.onloadend = () => {
                setUploadImage(reader.result);
            };
        }
    };

    return (
        <div className="relative w-fit">
            <img
                alt={uploadImage ? uploadImage.toString() : "/Ellipse 14.png"}
                src={
                    typeof uploadImage === 'string'
                        ? uploadImage
                        : "/Ellipse 14.png"
                }
                className={"w-[80px] h-[80px] rounded-full"}/>
            <label htmlFor="input-file">
                <div
                    className={"absolute bottom-0 right-0 flex items-center justify-center w-8 h-8 rounded-full border border-lightGray bg-darkGray"}>
                    <PhotoCameraIcon/>
                </div>
            </label>

            <input
                type="file"
                id={'input-file'}
                ref={imgRef}
                name="input-file"
                onChange={handleImagePreview}
                className="hidden"></input>
        </div>
    )
}
export default ProfileImageSetting;
