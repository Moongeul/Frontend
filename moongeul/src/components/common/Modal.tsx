interface Props {
    content: () => JSX.Element;
    bottomButton: () => JSX.Element;
    setClose: React.Dispatch<React.SetStateAction<boolean>>;
}
const Modal = (props: Props) => {
    const {content, bottomButton, setClose} = props;
    return (
        <div
            onClick={() => {
                setClose(false);
            }}
            className={
                "absolute left-0 right-0 z-40 flex flex-col  items-center justify-center bg-[rgba(0,0,0,0.6)] min-h-screen"
            }>
            <section className={"flex flex-col gap-y-[12px] bg-deepDarkGray mx-[28px] rounded-[20px] p-5 w-[90%]"}>
                {content()}
                {bottomButton()}
            </section>
        </div>
    )
}
export default Modal;
