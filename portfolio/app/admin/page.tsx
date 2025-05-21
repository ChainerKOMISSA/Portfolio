import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import MainContent from "./ui/MainContent";
import Sidebar from "./ui/Sidebar";

export default function AdminPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-1">
                <Sidebar />
                <MainContent />
            </div>
            <Footer />
        </div>
    );
}