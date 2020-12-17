import React from "react";
import { ContainerWrapper } from "../elements";

//Whatever is wrapped around Container will be wrapped in a ContainerWrapper
//question: why not just use ContainerWrapper directly?
export const Container = ({children}) => <ContainerWrapper>{children}</ContainerWrapper>
