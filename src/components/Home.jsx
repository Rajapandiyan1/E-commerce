import Carousel from "./Carousel";
import MemoProduct from "./MemoProduct";
import NavbarH from "./NavbarH";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Offer from "./Offer";
import Footer from "./Footer";
export default function Home (){
    return (<>
<NavbarH/>
    <Carousel/>
    <MemoProduct/>
    <Offer/>
    <Footer/>
    </>)
}