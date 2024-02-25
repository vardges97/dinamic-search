let products = {
  data: [
    {
      productName: "Eco-friendly Water Bottle",
      category: "Home",
      price: "30",
      image: "white-tshirt.jpg",
    },
    {
      productName: "Organic Cotton T-shirt",
      category: "Apparel",
      price: "49",
      image: "short-skirt.jpg",
    },
    {
      productName: "Wireless Headphones",
      category: "Electronics",
      price: "99",
      image: "sporty-smartwatch.jpg",
    },
    {
      productName: "cast iron pan",
      category: "Home",
      price: "35",
      image: "white-tshirt.jpg",
      tags: "new", 
    },    
    
  ],
};
for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //tags messes up everything
  let description = document.createElement("h6");
  description.classList.add("product-description");
  description.innerText = i.tags.toUpperCase();
  container.appendChild(description);
  //price
  let price = document.createElement("h7");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  //tag stuff cant figure out
  let descs = document.querySelectorAll(".product-description");
  //
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};