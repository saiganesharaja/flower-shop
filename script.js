const flowers = [
    {
        image: " img/img 6.png",
        name: "Snowfall",
        price: 1000,
    },
    {
        image: "",
        name: "img/img7.pngt",
        price: 50,
    },
    {
        image: "img/img8 (1).png",
        name: "RusticCharm",
        price: 80,
    },
    {
        image: "img/img8 (2).png",
        name: "AutumnSymphony",
        price: 43,
    },
    {
        image: "img/img8 (3).png",
        name: "RosyDelight",
        price: 76,
    },
    {
        image: "img/img8 (4).png",
        name: "Serenity",
        price: 45,
    },
    {
        image: "img/img8 (5).png",
        name: "Serenity",
        price: 65,
    },
    {
        image: "img/img8 (6).png",
        name: "BlueHarmony",
        price: 34,
    },
    {
        image: "img/img8 (7).png",
        name: "MysticalMajesty",
        price: 23,
    },


];



function createimage(flower, i) {
    const root = document.querySelector("#root");
    const div = document.createElement("div");

    const anchor = document.createElement("a");
    anchor.setAttribute("href", `/productpage.html?id=${i}`);
    div.appendChild(anchor);

    const img = document.createElement("img");
    img.setAttribute("src", flower.image);

    const price = document.createElement("p");
    price.innerHTML = flower.price;

    const name = document.createElement("p");
    name.innerHTML = flower.name;

    div.append(anchor, img, price, name);

    // root.appendChild(div);
    return div;
}

// addimages();

function displayImages(flower) {
    const wrap = document.createElement("div");

    const flowersImages = document.createElement("div");

    const fimage = document.createElement("img");
    fimage.setAttribute("src", flower.image);
    const name = document.createElement("p");
    name.innerHTML = flower.name;
    const price = document.createElement("p");
    price.innerHTML = price.price;
    flowersImages.append(fimage, name, price);
    wrap.appendChild(flowersImages);
    return wrap;
}





//




// function addToCart(item) {
//     cart.push({
//         ...item,
//         quantity: counter
//     });

//     console.log({ cart });

//     localStorage.setItem('cart', JSON.stringify(cart));
// }

// function creatCartItem(flower, i) {
//     const div = document.createElement("div");

//     const anchor = document.createElement("a");
//     anchor.setAttribute("href", `/productpage.html?id=${i}`);
//     div.appendChild(anchor);

//     const img = document.createElement("img");
//     img.setAttribute("src", flower.image);

//     const price = document.createElement("p");
//     price.innerHTML = flower.price;

//     const name = document.createElement("p");
//     name.innerHTML = flower.name;

//     div.append(img, price, name);

//     // root.appendChild(div);
//     return div;
// }

// // addimages();

// function displayImages(flower) {
//     const wrap = document.createElement("div");

//     const flowersImages = document.createElement("div");

//     const fimage = document.createElement("img");
//     fimage.setAttribute("src", flower.image);
//     const name = document.createElement("p");
//     name.innerHTML = flower.name;
//     const price = document.createElement("p");
//     price.innerHTML = price.price;
//     flowersImages.append(fimage, name, price);
//     wrap.appendChild(flowersImages);
//     return wrap;
// }
// function createCart() {
//     const cart = JSON.parse(localStorage.getItem('cart') ?? '[]');
//     const cartRoot = document.querySelector('#root');
//     cart.forEach((product, i) => {
//         const cartItemEl = createCartItem(item, i);
//         cartRoot.appendChild(cartItemEl);
//     });

//     if (cart.length === 0) {
//         cartRoot.innerHTML = '<h2>Cart is empty</h2>';
//     }
// }