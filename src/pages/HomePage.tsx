
'use client'
import AllProductsSection from "../components/AllProductsSection";
import AnnouncedBar from "../components/AnnouncedBar";
import BannerSection from "../components/BannerSection";
import CategorySection from "../components/CategorySection";
import DesktopNav from "../components/DesktopNav";
import FlashSaleSection from "../components/FlashSaleSection";
import FooterSection from "../components/FooterSection";
import ForYouSection from "../components/ForYouSection";
import MobileNav from "../components/MobileNav";
import NewArrivalSection from "../components/NewArrivalSection";
import RecentlyViewed from "../components/Recentlyviewed";


export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <DesktopNav />
            <MobileNav />
            <div className="bg-white">
                <AnnouncedBar />
            </div>

            <BannerSection/>
            <CategorySection/>
            <FlashSaleSection/>
            <NewArrivalSection/>
            <AllProductsSection/>
            <ForYouSection/>
            <RecentlyViewed/>
            <FooterSection/>
        </div>
    );
}