
import { useNavigate } from "react-router-dom";
function ProductCard({ product, showButton }) {
    const navigate = useNavigate();
    const ürünEkle = async () => {

        const response = await fetch("http://localhost:3000/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });

        const data = await response.json();
        console.log(data);

    }
    return (
        <div className='w-72 rounded-2xl overflow-hidden shadow-lg bg-white'>
            <img src={product?.image} alt={product?.title} loading='lazy' className='object-cover w-full h-72' />
            <div className='p-4'>
                <h1 className='text-lg font-blod'>{product?.title}</h1>
                <div className='flex justify-between'>
                    <p className='font-blod'>{product?.category}</p>
                    <p>{product?.price} TL</p>
                </div>
                {showButton &&
                    // (<button onClick={() => navigate("/sepetim", { state: product })}>Sepete Ekle</button>)}
                    (<button onClick={() => ürünEkle()}>Sepete Ekle</button>)}
            </div>
        </div>
    )
}
export default ProductCard;