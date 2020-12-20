import React from "react";
import {ButtonWrapper} from "../elements";

export const Button = ({children, to}) => 
{
    return <ButtonWrapper to={to}>{children}</ButtonWrapper>;
}