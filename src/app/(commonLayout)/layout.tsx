import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import PageLoader from "@/components/PageLoader";

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {

    return (
        <PageLoader>
            <div className="min-h-screen max-w-[1440px] mx-auto px-2 md:px-4">
                <Navbar/>
                {children}
                <Footer/>
            </div>
        </PageLoader>
    );
};

export default CommonLayout