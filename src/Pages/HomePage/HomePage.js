import React from "react";
import { FooterPage } from "../../Components/HomePage-Components/FooterPage/FooterPage";
import { Section1 } from "../../Components/HomePage-Components/Section1/section1";
import { Section2 } from "../../Components/HomePage-Components/Section2/Section2";
import { Section3 } from "../../Components/HomePage-Components/Section3/Section3";

export function HomePage(){
    return(
        <>
            <Section1 />
            <Section2 />
            <Section3 />
            <FooterPage />
        </>
    )
}