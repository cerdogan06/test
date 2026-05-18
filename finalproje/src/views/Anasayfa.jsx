import { useEffect, useState } from "react"
import ProductCard from "../componets/ProductCard";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
function Anasayfa() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function ürünleriAl() {
            const response = await fetch("http://localhost:3000/products");
            const data = await response.json();
            console.log(data, "ürünler alındı");
            setProducts(data);
        }
        ürünleriAl()
    }, [])

    return (

        <div className="h-screen grid justify-center items-center max-w-7xl mx-auto ">
            {
                products.length === 0 && <AiOutlineLoading3Quarters className="animate-spin " /> ||
                <div>
                    <p>toplam ürün sayısı:{products?.length}</p>
                    <div className="grid grid-cols-4 gap-8 " >
                        {products.map((item) => (
                            <ProductCard key={item.id} product={item} showButton={true} />
                        ))}
                    </div>
                </div>

            }
        </div>
    )
}
export default Anasayfa;