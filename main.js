const arrayProducts = [
   
   {name: 'blusa', price: 20000, size: 8, quantiy: 4 },
   {name: 'pantalon', price: 20000, size: 8, quantiy: 4 },
   {name: 'camisa', price: 20000, size: 8, quantiy: 4 },
   {name: 'jeans', price: 20000, size: 8, quantiy: 4 },
   

];

function product(name, price, size, quantiy) {
   this.name = name;
   this.price = price;
   this.size = size;
   this.quantiy = quantiy;

}

 function addProduct() {
   const productName = prompt("que producto deseas?");
   const productPrice = parseInt(prompt("de que precio? "));
   const productSize = parseInt(prompt("que talla quieres"));
   const ProductQuantity = parseInt(prompt("que cantidad deseas"));


   const newProduct = new product(productName, productPrice, productSize, ProductQuantity);

   arrayProducts.push(newProduct);
   return arrayProducts;
}
 
 function sumarProductos() {
  return arrayProducts.reduce(function(acumu,pro){ 
  return acumu + pro.price;
  },0)
  
 }
 