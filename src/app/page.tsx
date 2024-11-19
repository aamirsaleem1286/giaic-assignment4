import Newsletter from "@/app/components/newletter/index"
import Navbar from "@/app/components/navbar/index"
import HeroSection from "@/app/components/herosection/index"
import Cartsection from "@/app/components/cartsection/index"
import ArrivalSection from "@/app/components/arrivalSection/index"
import CustomerReview from "@/app/components/customerReview/index"
import Subscription from "@/app/components/subscription/index"
import Footer from "@/app/components/footer/index"

export default function Home() {
  return (
  <>
  <Newsletter/>
  <Navbar/>
  <HeroSection/>
<Cartsection/>
<ArrivalSection/>
<CustomerReview/>
<Subscription/>
  <Footer/>
  
  </>
  );
}
