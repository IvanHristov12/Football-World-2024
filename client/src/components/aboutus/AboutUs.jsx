import { useContext } from "react";
import ContactUs from "./ContactUs";
import FAQ from "./FAQ";
import OurTeam from "./OurTeam";
import { AuthContext } from "../../contexts/AuthContext";

export default function AboutUs() {
    const { isAuthenticated } = useContext(AuthContext)

    return (
    <>
        <OurTeam />
        {isAuthenticated &&
        <ContactUs /> 
        }
        <FAQ />
    </>
);
}