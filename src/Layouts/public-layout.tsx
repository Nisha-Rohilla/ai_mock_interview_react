import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header"
import { Outlet } from "react-router-dom";


function PublicLayout() {
    return (
        <div className="w-full">
            {/* Handler to store the user data */}
            <Header />


            <Outlet />


            <Footer />

        </div>
    )
}

export default PublicLayout;
