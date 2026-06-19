import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {

    return (
        <div className="min-h-screen max-w-[1440px] mx-auto px-2 md:px-4">
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default CommonLayout