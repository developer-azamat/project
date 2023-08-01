import React, {FC} from "react";
import {IPage} from "../../interface/page";
import "./style.scss"

export const PageIndex: FC<IPage> = (props: IPage) => {
    const { title } = props;

    return (
        <>
            <div className="editable-text" contentEditable="true"></div>
        </>
    )
}