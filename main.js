



let boton = document.getElementById("btn")
console.log(boton);



const arrayProducts = [

  { name: 'blusa', price: 20000, size: 8, },
  { name: 'zapatos', price: 80000, size: 8, },
  { name: 'pulsera', price: 20000, size: 8, },
  { name: 'jeans', price: 70000, size: 8, },


];

//function product(name, price, size, quantiy) {
//  this.name = name;
//  this.price = price;
//  this.size = size;
// this.quantiy = quantiy;

//}

// function addProduct() {
//  const productName = prompt("que producto deseas?");
//  const productPrice = parseInt(prompt("de que precio? "));
//  const productSize = parseInt(prompt("que talla quieres"));
//  const ProductQuantity = parseInt(prompt("que cantidad deseas"));


//const newProduct = new product(productName, productPrice, productSize, ProductQuantity);

// arrayProducts.push(newProduct);
// return arrayProducts;
// }

function sumarProductos() {
  return arrayProducts.reduce(function (acumu, pro) {
    return acumu + pro.price;
  }, 0)

}


// por clase nos da un array//


let flexcontainer = document.getElementsByClassName("flex-container");
console.log(flexcontainer);

// por objeto//



class product {
  constructor(categoria, price, size,) {
    this.categoria = categoria;
    this.price = price;
    this.size = size;
  }
}


const productosAgregdos = [];

const crearProducto = (e) => { 
  e.preventDefault();
  let categoria = document.querySelector("#categoria").value;
  let price = parseInt(document.querySelector("#price").value);
  let size = document.querySelector("#size").value;

  let newProducto = new product(categoria, price, size);
  productosAgregdos.push(newProducto);
  localStorage.setItem("productos", productosAgregdos);
}

 const escribir = () => {
  let texto = alert(" producto agregado");

}

boton.addEventListener("click", crearProducto);







