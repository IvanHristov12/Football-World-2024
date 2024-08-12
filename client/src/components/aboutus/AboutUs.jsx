import ContactUs from "./ContactUs";
import FAQ from "./FAQ";
import OurTeam from "./OurTeam";
import { useAuthContext } from "../../contexts/AuthContext";

export default function AboutUs() {
    const { isAuthenticated } = useAuthContext()

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