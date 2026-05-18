import { useLocation } from "react-router-dom";
import ProductCard from "../componets/ProductCard";
function Sepetim() {
    const location = useLocation();
    const product = location.state;

  return (
    <div> <ProductCard product={product}
     showButton={false}/>
    </div>
  );
}
export default Sepetim;
