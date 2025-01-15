import {ReactElement, ReactNode} from "react";

interface Props {
    title: string;
    children: ReactElement;
}

const Title = (props: Props) => {
    const { title, children } = props;
    return (
        <div className={"flex flex-col py-3 px-5 gap-y-1"}>
            <div className={"head"}>{title}</div>
            {children}
        </div>
    );
}
export default Title;
