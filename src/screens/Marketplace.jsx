import Navbar from "../components/Navbar"
import Cards from "../components/Cards"

export default function MarketPlace() {

    return (
        <div>
            <Navbar />
            <img src="https://images.olx.com.pk/thumbnails/437508562-800x600.webp" alt="" className="w-full h-40 object-contain" />


            <div className=" flex  flex-wrap mb-32">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>




        </div >

    )
}