var slideIndex = 0;

showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
let carts=document.querySelectorAll('.add-cart');

let products=[
  {
    name:"Electric sandler",
    price:34,
    incart:0
  },
  {
    name:"Electronic Cutter",
    price:74,
    incart:0
  },
  {
    name:"Electro decomposer",
    price:64,
    incart:0
  },
  {
    name:"Electrical magneter",
    price:34,
    incart:0
  },
]

for (let i=0;i<carts.length;i++){
  carts[i].addEventListener("click",() =>{
            cartNumbers();
  })
}

function cartNumbers(){
  let productNumbers=localStorage.getItem('cartNumbers');
   
  productNumbers=parseInt(productNumbers);
 
  if(productNumbers){
    console.log(productNumbers);
    productNumbers=localStorage.setItem('cartNumbers',++productNumbers);
    console.log(productNumbers + 1);
  }else{
    localStorage.setItem('cartNumbers', 1);

  }
  localStorage.setItem('cartNumbers',1);
}