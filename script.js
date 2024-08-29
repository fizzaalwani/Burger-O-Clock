const burgers = [
    {
        name: "Beef Cheese",
        img: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1637903363-1632165012-CLASSIC-BURGERS-Beef-Chese-min.jpg%3Fq%3D10&w=640&q=75",
        detail: "5 oz. juicy smash beef patty, BO'C secret sauce, cheese slice, mayonnaise, and ketchup.",
        price:699 ,
        type:"beef",
        // type2:"none",
        discounted: false
    },
    {
        name: "Beef Old School",
        img: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1720527659-WhatsApp%20Image%202024-07-09%20at%202.40.42%20PM.jpeg%3Fq%3D10&w=640&q=75",
        detail: "Taste the essence of nostalgia with 5 oz. juicy smash beef double patty, BO'C secret sauce, cheese slices, tomato slices, onions, pickled cucumber, and iceberg lettuce.",
        price:699 ,
        type:"beef",
        // type2:"none",
        discounted: false
    },
    {
        name: "Beef Smoky Tang",
        img: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1646339131-EXTREME-Smoky-Tank-Beef.jpg%3Fq%3D10&w=640&q=75",
        detail: "Juicy smash beef patty, BO'C secret sauce, cheese slice, beef pepperoni, sautéed onions, BBQ sauce, BBQ mayo sauce, and iceberg lettuce.",
        price:749 ,
        type:"beef",
        // type2:"none",
        discounted: false
    },
    {
        name: "Belt Buster-Triple Patty",
        img: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1720479230-3-Petty-Belt-Buster.jpg%3Fq%3D10&w=640&q=75",
        detail: "3 juicy smash beef patties, 3 cheese slices, jalapenos, pickled cucumber, BO'C secret sauce, BBQ mayo sauce, chipotle mayo sauce, crispy onion rings, and iceberg lettuce.",
        price:1399 ,
        type:"beef",
        // type2:"none",
        discounted: false
    },
    {
        name: "Belt Buster-Four Patty",
        img: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1637903879-1632163605-Stack-Belt-Buster-Burger-min.jpg%3Fq%3D10&w=640&q=75",
        detail: "4 juicy smash beef patties, 4 cheese slices, jalapenos, pickled cucumber, BO'C secret sauce, BBQ mayo sauce, chipotle mayo sauce, crispy onion rings, and iceberg lettuce.",
        price:1699 ,
        type:"beef",
        // type2:"none",
        discounted: false
    },
    {
        name: "Messy Meat Burger",
        img: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1637903525-1632163800-Premium--Messy-Meat-min.jpg%3Fq%3D10&w=640&q=75",
        detail: "7 oz. juicy smash beef patty, warm nacho cheese, chili in a tomato-based sauce, onion rings, jalapenos, pickles, Dijon mayo sauce, and iceberg lettuce.",
        price: 949,
        // type:"beef",
        type:"premium",
        discounted: false
    },
    {
        name: "Beef Crunchos",
        img: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1637903500-1632163773-Premium-Crounches-Burger-min.jpg%3Fq%3D10&w=640&q=75",
        detail: "5 oz. juicy smash beef patty, accompanied by a 2 oz. mozzarella cheese patty, cucumber pickles, jalapenos, nachos, chipotle mayo sauce, and iceberg lettuce.",
        price:949 ,
        // type:"beef",
        type:"premium",
        discounted: false
    },
    {
        name: "Grilled Chicken Crunchos",
        img: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1722994442-WhatsApp%20Image%202024-08-07%20at%206.30.28%20AM%20(2).jpeg%3Fq%3D10&w=640&q=75",
        detail: "5 oz. juicy grilled chicken fillet, accompanied by a 2 oz. mozzarella cheese patty, cucumber pickles, jalapenos, nachos, chipotle mayo sauce, and iceberg lettuce.",
        price: 949,
        // type:"chicken",
        type:"premium",
        discounted: false
    },
    {
        name: "Chicken n Crisp",
        img: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1637903308-1632165060-CLASSIC-BURGERS-Chick-%E2%80%98n%E2%80%99-Crisp-min.jpg%3Fq%3D10&w=640&q=75",
        detail: "Crispy chicken patty, BO’C secret sauce, mayonnaise, chili garlic sauce, and iceberg lettuce.",
        price: 649,
        // type:"chicken",
        type:"crispy chicken",
        discounted: false
    },
    {
        name: "Fire Bird",
        img: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1637903707-1632165324-EXTREME-Fire-Bird-Burger-min.jpg%3Fq%3D10&w=640&q=75",
        detail: "Crisp up your meal with a hint of spice! Description: Crispy chicken patty, chipotle mayo sauce, and iceberg lettuce.",
        price: 699,
        type:"crispyChicken",
        discounted: false
    },
    {
        name: "Chick n Crisp Smoky Tang",
        img: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1646339027-WhatsApp-Image-2021-09-21-at-3.38.07-PM-(1).jpeg%3Fq%3D10&w=640&q=75",
        detail: "Crispy chicken patty, BO'C secret sauce, cheese slice, chicken pepperoni, sautéed onions, BBQ sauce, BBQ mayo sauce, and iceberg lettuce.Crispy chicken patty, BO'C secret sauce, cheese slice, chicken pepperoni, sautéed onions, BBQ sauce, BBQ mayo sauce, and iceberg lettuce.",
        price:699 ,
        type:"crispyChicken",
        discounted: false
    },
    {
        name: "Chick n Crisp Jalapeno Spark",
        img: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1646339194-EXTREME-Jalapeno-Spark.jpg%3Fq%3D10&w=640&q=75",
        detail: "Crispy chicken patty, BO'C secret sauce, jalapenos, jalapeno mayo sauce and, iceberg lettuce.",
        price:699 ,
        type:"crispyChicken",
        discounted: false
    },
    {
        name: "Gigantic Burger",
        img: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1637903866-1632163641-Stack--Gigantic-Burger-min.jpg%3Fq%3D10&w=640&q=75",
        detail: "Crispy chicken double patties, cheese slice, mayo and chili garlic sauce, BO'C secret sauce, and iceberg lettuce.",
        price: 949,
        type:"crispyChicken",
        discounted: false
    },
    {
        name: "Fiery Gigantic",
        img: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1637903893-1632163572-Stack--Fiery-Gigantic-min.jpg%3Fq%3D10&w=640&q=75",
        detail: "Crispy chicken double patties, cheese slice, chipotle mayo sauce, jalapenos, pickled cucumber, and iceberg lettuce.",
        price: 999,
        type:"crispyChicken",
        discounted: false
    },
    {
        name: " Grilled Chicken-CLassic",
        img: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1637903377-1632164972-CLASSIC-BURGERS-Grilled-Chicken-min.jpg%3Fq%3D10&w=640&q=75",
        detail: "Juicy grilled chicken fillet, BO'C secret sauce, cheese slice, tomato slices, sautéed onions, chili garlic sauce, pickled cucumber, and iceberg lettuce.",
        price:649 ,
        type:"grilledChicken",
        // type2:"grilled",
        discounted: false
    },
    {
        name: "Grilled Chicken Smoky Tang",
        img: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1646339183-EXTREME-Smoky-Tang-Grilled-chicken.jpg%3Fq%3D10&w=640&q=75",
        detail: "Juicy grilled chicken fillet, BO'C secret sauce, cheese slice, chicken pepperoni, sautéed onions, BBQ sauce, BBQ mayo sauce, and iceberg lettuce.",
        price:699 ,
        type:"grilledChicken",
        discounted: false
    },
    {
        name: "Grilled Chicken Jalapeno Spark",
        img: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1646339420-EXTREME-Grilled-Chicken-Jalape%C3%B1o-Spark.jpg%3Fq%3D10&w=640&q=75",
        detail: "Juicy grilled chicken fillet, BO'C secret sauce, cheese slice, jalapenos, jalapeno mayo sauce and, iceberg lettuce.",
        price: 699,
        type:"grilledChicken",
        discounted: false
    },
    {
        name: "Crispy Chicken Burger",
        img: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1637903586-crispy-chicken-value-burger-min.jpg%3Fq%3D10&w=640&q=75",
        detail: "Crispy chicken patty, BO’C secret sauce, mayonnaise, chili garlic sauce, and iceberg lettuce.",
        price:549 ,
        type:"chickenValue",
        // type2:"value",
        discounted: false
    },
    {
        name: "Fiery Chicken Burger",
        img: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1637903678-1622211226-Fiery-Chicken-Value-Burger-min.jpg%3Fq%3D10&w=640&q=75",
        detail: "Crispy chicken patty, chipotle mayo sauce, and iceberg lettuce.",
        price:549 ,
        type:"chickenValue",
        discounted: false
    },
    {
        name: "Smoky BBQ Burger",
        img: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1637903654-1622211268-Smoky-Tang-Value-Burger-min.jpg%3Fq%3D10&w=640&q=75",
        detail: "Crispy chicken fillet, BO'C secret sauce, chicken pepperoni, sautéed onions, BBQ sauce, BBQ mayo sauce, and iceberg lettuce.",
        price:549 ,
        type:"chickenvalue",
        discounted: false
    },
    {
        name: "Jalapeno Crispy Burger",
        img: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1637903669-1622211313-Jalapeno-Spark-Value-Burger-min.jpg%3Fq%3D10&w=640&q=75",
        detail: "Crispy chicken patty, BO'C secret sauce, jalapenos, jalapeno mayo sauce and, iceberg lettuce.",
        price:549 ,
        type:"chickenValue",
        discounted: false
    }

];
const wraps=[
    {
        name:"Creamy Wrap",
        img:"https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1678304741-creamy%20wrap.jpg%3Fq%3D10&w=640&q=75",
        detail:"Wrap up your cravings with creamy perfection! Crispy chicken chunks wrapped in a soft, warm tortilla, with juicy tomato and crunchy iceberg lettuce.",
        price: 549,
        discounted:false
    },
    {
        name:"Fiery Wrap",
        img:"https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1678304763-spicy%20wrap.jpg%3Fq%3D10&w=640&q=75",
        detail:"Crispy chicken chunks wrapped in a soft, warm tortilla, jalapenos, blend of zesty sauce and crunchy iceberg lettuce.",
        price: 549,
        discounted:false
    },
    {
        name:"Smoky Wrap",
        img:"https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1678304773-smoky%20wrap.jpg%3Fq%3D10&w=640&q=75",
        detail:"Crispy chicken chunks wrapped in a soft, warm tortilla, sautéed onions, chicken pepperoni, hickory smoky BBQ sauce and crunchy iceberg lettuce.",
        price:549 ,
        discounted:false
    }

];

const fries=[
    {
        name:"Sriracha Loaded Fries",
        img:"https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1720972919-sriracha%20loaded%20fries.jpeg%3Fq%3D10&w=640&q=75",
        detail:"Fries topped with crispy chicken chunks tossed in Sriracha sauce, lines of ranch sauce and Sriracha mayo, with a sprinkle of parsley.",
        price: 699,
        type:"loaded"
    },
    {
        name:"Cheese Burger Fries",
        img:"https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1720972899-cheese%20burger%20fries.jpeg%3Fq%3D10&w=640&q=75",
        detail:"The delicious mashup you didn't know you needed! Description: Fries topped with beef patty, cheese slice, lettuce, onions, tomato, jalapeno, lines of BOC secret sauce, and a sprinkle of parsley.",
        price: 699,
        type:"loaded"
    },
    {
        name:"Wild Fries",
        img:"https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1637903923-1632062736-Gourmet-Wild-Fries-min.png%3Fq%3D10&w=640&q=75",
        detail:"Take a bite on the wild side with our Fries with chipotle seasoning topped with spicy chipotle sauce, jalapenos, and a sprinkle of parsley.",
        price: 399,
        type:"gourment"
    },
    {
        name:"Mayo Garlic Fries",
        img:"https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1637903930-1632062276-Gourmet-Mayo-Garlic-Fries-min.png%3Fq%3D10&w=640&q=75",
        detail:"Unleash the garlic mayo magic on your fries seasoned with salt, topped with garlic mayo sauce, and a sprinkle of parsley.",
        price:399 ,
        type:"gourment"
    },
    {
        name:"Zesty BBQ Fries",
        img:"https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1637903914-1632062771-Gourmet-Zesty-BBQ-Fries-min.png%3Fq%3D10&w=640&q=75",
        detail:"Feel the crunch with a smoky kick, Fries seasoned with black pepper, chicken pepperoni, topped with smoky bbq mayo sauce, and a sprinkle of parsley.",
        price:399 ,
        type:"gourment"
    },
    {
        name:"Plain Fries",
        img:"https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1720527958-WhatsApp%20Image%202024-07-09%20at%202.40.42%20PM%20(1).jpeg%3Fq%3D10&w=640&q=75",
        detail:"Crispy and crunchy perfection, straight from the Deep-fried crispy and golden french fries seasoned with salt.",
        price:249,
        type:"gourment"
    }
];

const appetizers=[
    {
        name:"Nuggets",
        img:"https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1662405470-Images%20for%20Web-06.jpg%3Fq%3D10&w=640&q=75",
        detail:"6 pcs nuggets, crispy and golden on the outside, juicy on the inside.",
        price:449
    },
    {
        name:"Peri Bites",
        img:"https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1637904767-1632160768-Peri-Bites-min.png%3Fq%3D10&w=640&q=75",
        detail:"5 pieces of peri bites: spicy chicken pieces filled in a chili, coated in crispy breading, served with a dipping sauce.",
        price:649
    },
    {
        name:"Finger Chicken",
        img:"https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1637903057-1632061039-Finger-Chicken-min.png%3Fq%3D10&w=640&q=75",
        detail:"5 pcs of crispy chicken delight, with a juicy surprise inside.",
        price:599
    },
    {
        name:"Crispy Wings",
        img:"https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1637903077-1632055287-Wings-Crispy-min.png%3Fq%3D10&w=640&q=75",
        detail:"Chicken wings infused with our unique in-house flavors, served with a delectable sauce.",
        price:549
    },
    {
        name:"Buffalo Wings",
        img:"https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1637903087-1632055343-Wings-Buffalo-min.png%3Fq%3D10&w=640&q=75",
        detail:"6 pieces of wings tossed in Buffalo sauce.",
        price:549
    },
    {
        name:"Smoky BBQ Wings",
        img:"https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1637903094-1632055411-Wings-Smoky-BBQ-min.png%3Fq%3D10&w=640&q=75",
        detail:"6 pieces of wings tossed in smoky BBQ sauce.",
        price:549
    },
    {
        name:"Honey Mustard Wings",
        img:"https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1637903153-1632163884-Wings-Honey-Mustard-min.jpg%3Fq%3D10&w=640&q=75",
        detail:"6 pieces of wings tossed in honey mustard sauce.",
        price:549
    },
];

// Attach event listener to the Clear Cart button
document.addEventListener('DOMContentLoaded', () => {
    const clearCartButton = document.querySelector('.clear-cart');
    if (clearCartButton) {
        clearCartButton.addEventListener('click', clearCart);
    }
});

function addBurgers(parent,type,child){
    let section=document.querySelector(`.${parent}`);
    section.innerHTML= ''
    burgers.forEach((burger,index)=>{
        if(burger.type==type){
        let burgerHTML=` <div class=${child}>
        <div class="img"><img src="${burger.img}" alt=""></div>
        <div class="burger-info">
            <h4>${burger.name}</h4>
            <p>${burger.detail}</p>
            <p class="rs">Rs${burger.price}</p>
        </div>
        <button class="addToCart" onclick="addToCart(${index}, 'burger')">+</button>
     </div>`
     section.innerHTML+=burgerHTML;
        }
    });   
   
}
addBurgers("beef-burger-menu", "beef", "beef-menu");
addBurgers("premium-burger-menu", "premium", "premium-menu");
addBurgers("crispyChicken-burger-menu", "crispyChicken", "crispyChicken-menu");
addBurgers("grilledChicken-burger-menu", "grilledChicken", "grilledChicken-menu");
addBurgers("valueChicken-burger-menu", "chickenValue", "valueChicken-menu");
function addWraps(){
    let wraps_section=document.querySelector('.chickenWraps-menu');
   wraps_section.innerHTML= ''
    wraps.forEach((wrap,index)=>{
        let wrapHTML=` <div class="wrap-menu">
        <div class="img"><img src="${wrap.img}" alt=""></div>
        <div class="burger-info">
            <h4>${wrap.name}</h4>
            <p>${wrap.detail}</p>
            <p class="rs">Rs${wrap.price}</p>
        </div>
  <button class="addToCart" onclick="addToCart(${index}, 'wrap')">+</button>
     </div>`
     wraps_section.innerHTML+=wrapHTML;
    });
     
}

function addFries(){
    let loadedFries_section=document.querySelector('.loadedFries-fries-menu');
    let gourmentFries_section=document.querySelector('.gourmentFries-fries-menu');
    loadedFries_section.innerHTML= ''
    gourmentFries_section.innerHTML= ''
    fries.forEach((fries,index)=>{
        if(fries.type=="loaded"){
        let friesHTML=` <div class="loadedFries-menu">
        <div class="img"><img src="${fries.img}" alt=""></div>
        <div class="burger-info">
            <h4>${fries.name}</h4>
            <p>${fries.detail}</p>
            <p class="rs">Rs${fries.price}</p>
        </div>
       <button class="addToCart" onclick="addToCart(${index}, 'fries')">+</button>
     </div>`
     loadedFries_section.innerHTML+=friesHTML;
        }else{
            let friesHTML=` <div class="gourmentFries-menu">
        <div class="img"><img src="${fries.img}" alt=""></div>
        <div class="burger-info">
            <h4>${fries.name}</h4>
            <p>${fries.detail}</p>
            <p class="rs">Rs${fries.price}</p>
        </div>
      <button class="addToCart" onclick="addToCart(${index}, 'fries')">+</button>
     </div>`
            gourmentFries_section.innerHTML+=friesHTML;
        }
    });
     
}

function addAppetizers(){
    let appetizers_section=document.querySelector('.appetizers-wrapper');
   appetizers_section.innerHTML= ''
   appetizers.forEach((appetizer,index)=>{
        let appetizerHTML=` <div class="appetizer-menu">
        <div class="img"><img src="${appetizer.img}" alt=""></div>
        <div class="burger-info">
            <h4>${appetizer.name}</h4>
            <p>${appetizer.detail}</p>
            <p class="rs">Rs${appetizer.price}</p>
        </div>
       <button class="addToCart" onclick="addToCart(${index}, 'appetizers')">+</button>
     </div>`
     appetizers_section.innerHTML+=appetizerHTML;
    });
     
}

let cart = []; 

function addToCart(index, type) {
    let item;
    switch (type) {
        case 'burger':
            item = burgers[index];
            break;
        case 'wrap':
            item = wraps[index];
            break;
        case 'fries':
            item = fries[index];
            break;
        case 'appetizer':
            item = appetizers[index];
            break;
        default:
            console.error("Invalid type provided.");
            return;
    }

    // Check if item already exists in the cart and update quantity
    let cartItem = cart.find(cartItem => cartItem.name === item.name);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        // Add new item to cart
        cart.push({ ...item, quantity: 1 });
    }
    // Render cart items
    renderCart();

    // Recalculate totals
    updateCheckoutTotals();
    showSlider();
    showCart();
}
function showSlider(){
    console.log('showCart function called'); 
    let footer=document.querySelector('.orderFooter');
    if(cart.length==0){
        footer.style.display="none";
    }
    else{
        footer.style.display="block";
    }
    showCart();

}

function renderCart() {
    let empty = document.querySelector('.empty');
    let cartList = document.querySelector('.order');
    let checkout = document.querySelector('.totalCheckout');
    let cart_header = document.querySelector('.cart nav');

    if (empty && cartList && checkout && cart_header) {
        if (cart.length === 0) {
            empty.style.display = "flex";
            cartList.style.display = "none";
            checkout.style.display = "none";
            cart_header.style.display = "none";
        } else {
            empty.style.display = "none";
            cartList.style.display = "block";
            cartList.style.flexDirection = "column";
            checkout.style.display = "block";
            cart_header.style.display = "flex";

            cartList.innerHTML = ''; // Clear current cart items

            cart.forEach((cartItem, index) => {
                let cartHTML = `
                    <div class="order-wrapper">
                        <div class="info">
                            <img src="${cartItem.img}" alt="">
                            <div>${cartItem.name}</div>
                        </div>
                        <div class="pricing">
                            <div>Rs ${cartItem.price}</div>
                            <div class="delete">
                                <i class="fa-solid fa-trash" data-index="${index}"></i>
                                <div class="quantity" data-index="${index}">${cartItem.quantity}</div>
                                <i class="fa-solid fa-plus increment" data-index="${index}"></i>
                            </div>
                        </div>
                    </div>
                    <div class="separation"></div>`;
                cartList.innerHTML += cartHTML;
            });

            // Attach event listeners after rendering
            deleteFromCart();
            incrementQuantity();
        }
    } else {
        console.error("Element with class 'empty', '.order', '.totalCheckout', or '.cart nav' not found.");
    }
}

function updateCheckoutTotals() {
    let food_price = document.querySelector('.food-price');
    let food_tax = document.querySelector('.food-tax');
    let food_delivery = document.querySelector('.food-delivery');
    let food_total = document.querySelector('.food-total');

    if (food_price && food_tax && food_delivery && food_total) {
        let totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
        let tax = totalPrice * 0.15;
        let total = totalPrice + tax + 90;

        food_price.innerHTML = `Rs ${totalPrice.toFixed(2)}`;
        food_tax.innerHTML = `Rs ${tax.toFixed(2)}`;
        food_delivery.innerHTML = `Rs 90`;
        food_total.innerHTML = `Rs ${total.toFixed(2)}`;
    } else {
        console.error("Element with class '.food-price', '.food-tax', '.food-delivery', or '.food-total' not found.");
    }
}

function deleteFromCart() {
    let trashIcons = document.querySelectorAll('.fa-solid.fa-trash');

    trashIcons.forEach(trash => {
        trash.addEventListener("click", (event) => {
            let index = event.target.getAttribute("data-index"); // Get the index of the cart item
            if (index !== null) {
                cart.splice(index, 1); // Remove the item from the cart array
                renderCart(); // Re-render the cart
                updateCheckoutTotals(); // Update totals
                showSlider();
            } else {
                console.error("Index not found.");
            }
        });
    });
}

function incrementQuantity() {
    let incrementIcons = document.querySelectorAll('.fa-solid.fa-plus.increment');

    incrementIcons.forEach(increment => {
        increment.addEventListener("click", (event) => {
            let index = event.target.getAttribute("data-index"); // Get the index of the cart item
            if (index !== null) {
                index = parseInt(index); // Convert to integer
                let cartItem = cart[index];
                if (cartItem) {
                    cartItem.quantity++; // Increment quantity
                    renderCart(); // Re-render the cart
                    updateCheckoutTotals(); // Update totals
                } else {
                    console.error("Cart item not found.");
                }
            } else {
                console.error("Index not found.");
            }
        });
    });
}// Function to toggle the cart display
function toggleCart() {
    let cart = document.querySelector('.cart');

    // Check if the cart is currently visible
    if (cart.style.display === "none" || cart.style.display === "") {
        cart.style.display = "block";
        cart.style.height = "100%";
    } else {
        // Check if the cart is empty
        let cartItems = cart.querySelectorAll('.cart-item'); // Assuming items have the class 'cart-item'
        if (cartItems.length === 0) {
            cart.style.display = "none";
        } else {
            cart.style.display = "none";
        }
    }
}

// Ensure the cart is hidden on smaller screens initially
document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth <= 750) {
        document.querySelector('.cart').style.display = "none";
    }
    if (window.innerWidth <= 750 && cart.length==0){
        document.querySelector('.cart').style.display = "none";
    }
});

// Attach the toggleCart function to the slideshow button click event
let slideshowButton = document.querySelector('.orderFooter');
slideshowButton.addEventListener('click', toggleCart);


addBurgers("beef-burger-menu", "beef", "beef-menu");
addBurgers("premium-burger-menu", "premium", "premium-menu");
addBurgers("crispyChicken-burger-menu", "crispyChicken", "crispyChicken-menu");
addBurgers("grilledChicken-burger-menu", "grilledChicken", "grilledChicken-menu");
addBurgers("valueChicken-burger-menu", "chickenValue", "valueChicken-menu");
addWraps();
addFries();
addAppetizers();




