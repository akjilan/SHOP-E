import { getShoppingCart } from "../assets/utilities/fakedb";

const cardProductLoader = async()=>{
    const loadedProducts = await fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json");
    const products = await loadedProducts.json();
    // console.log(products)

    const storedCart = getShoppingCart();
    const savedCart =[];

    for (const id in storedCart){
       const addedProduct=  products.find(product=>product.id===id);
       if(addedProduct){
        const quanity = storedCart.id;
        addedProduct.quanity=quanity;
        savedCart.push(addedProduct);

       }



    }


    return savedCart;
    


}
export default cardProductLoader;