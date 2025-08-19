
import { Link, Outlet } from "react-router-dom"
import RDHero from "../../components/RDHero/RDHero"
import FAQ from "../../components/MmFAQ/FAQ"

const Home = () => {

    return (
        <>
            <RDHero
                title={"A Digital Product Studio that will Work"}
                description={<>For <span> Startups </span> , <span> Enterprise leaders </span> , <span> Enterprise leaders </span> and <span> Social Good</span></>}
                btn1={{ Link: "/Work_page", text: "Our Works" }}
                btn2={{ Link: "/ContactUs_page", text: "Contact Us" }}
            />

            <Outlet />
            <FAQ />
        </>
    )
}

export default Home