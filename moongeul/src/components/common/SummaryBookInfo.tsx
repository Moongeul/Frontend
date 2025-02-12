export interface Props {
    isbn: string;
    image: string;
    title: string;
    author: string;
    publisher: string;
    pubdate: string;
}

const SummaryBookInfo = (props: Props) => {
    const {title, image, isbn, pubdate, author, publisher} = props;

    return (
        <div className={"flex gap-x-2 py-4 border-b border-lightGray"}>
            <img src={image} alt={image} className={"w-[94px] h-[124px] px-[13px]"}/>
            <div className={"flex flex-col gap-y-5"}>
                <div className={"title2"}>{title}</div>
                <div className={"body2 text-darkGray"}>
                    <div>{author}</div>
                    <div>{publisher}</div>
                    <div>{pubdate}</div>
                </div>
            </div>
        </div>
    )
}
export default SummaryBookInfo;
