let products = {
    data: [
        {
            productName: "Minty Dress",
            price: "$110.00",
            image: "./public/image/product-1.jpg",
            sale: "none-product-sale",
            stockout: "none-product-stockout",
            href: "",
        },
        {
            productName: "Variable Product",
            price: "$70.00 - $80.000",
            image: "./public/image/product-2.jpg",
            sale: "product-sale",
            stockout: "none-product-stockout",
            href: "",
        },
        {
            productName: "Rose Pink Dress",
            price: "$95.00",
            image: "./public/image/product-3.jpg",
            sale: "none-product-sale",
            stockout: "none-product-stockout",
            href: "",
        },
        {
            productName: "Gray California Dress",
            price: "$200.00",
            image: "./public/image/product-4.jpg",
            sale: "product-sale",
            stockout: "none-product-stockout",
            href: "",
        },
        {
            productName: "Elegent White Dress",
            price: "$150.00",
            image: "./public/image/product-5.jpg",
            sale: "none-product-sale",
            stockout: "product-stockout",
            href: "",
        },
        {
            productName: "Sexy White Derss",
            price: "$119.00",
            image: "./public/image/product-6.jpg",
            sale: "none-product-sale",
            stockout: "none-product-stockout",
            href: "",
        },
        {
            productName: "Jacket and Dress",
            price: "$79.00",
            image: "./public/image/product-7.jpg",
            sale: "none-product-sale",
            stockout: "none-product-stockout",
            href: "",
        },
        {
            productName: "Summer Dress",
            price: "$100.00",
            image: "./public/image/product-8.jpg",
            sale: "product-sale",
            stockout: "none-product-stockout",
            href: "",
        },
    ]
};

for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
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




















//Tạo nút Back To Top
let mybutton = document.getElementById("btn-back-to-top");

// Cuộn chuột xuống 20px => hiển thị nút
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// Click nút => cuộn chuột lên đầu trang
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}