const cardProductLoader = async()=>{
    const loadedProducts = await fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json");
    const products = await loadedProducts.json();
    


}
export default cardProductLoader;