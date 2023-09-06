let cart = [];
(() => {


    const serializedCart = localStorage.getItem('cart') ?? "[]";
    cart = JSON.parse(serializedCart);
})();
function addToCart(item) {
    const existingitemindex = cart.findIndex(
        (cartitem) => cartitem.name === item.name
    );
    if (existingitemindex > -1) {
        cart[existingitemindex].quantity += 1;

    }
    else {

        cart.push({
            ...item,
            quantity: counter
        });
    }

    console.log({ cart });

    localStorage.setItem('cart', JSON.stringify(cart));

}

function createCartItem(item, i) {
    const div = document.createElement("div");

    const anchor = document.createElement("a");
    anchor.setAttribute("href", `/product.html?id=${i}`);
    div.appendChild(anchor);

    const img = document.createElement("img");
    img.setAttribute("src", item.image);

    const price = document.createElement("p");
    price.innerHTML = item.price;

    const name = document.createElement("p");
    name.innerHTML = item.name;

    const quantity = document.createElement("p");
    quantity.innerHTML = item.quantity;



    const inc = document.createElement("button");
    inc.innerHTML = "+";

    const dic = document.createElement("button");
    dic.innerHTML = "-";

    const totalEl = document.createElement("p");
    // totalEl.innerHTML = "total price";

    let counter = item.quantity;

    inc.addEventListener("click", function () {
        if (counter < 10) {
            counter = counter + 1;
            quantity.innerHTML = counter;
            cart[i].quantity = counter;
        }
        localStorage.setItem("cart", JSON.stringify(cart));


    });

    dic.addEventListener("click", function () {
        if (counter > 0) {
            counter = counter - 1;
            quantity.innerHTML = counter;
            cart[i].quantity = counter;
        }
        if (cart[i].quantity <= 0) {
            cart.splice(i, 1);

        }
        localStorage.setItem("cart", JSON.stringify(cart));

    });

    // let sumofnum = 0;
    // cart.forEach((flowers) => {
    //     const total = flowers.price * flowers.quantity
    //     sumofnum += total;
    //     totalEl.innerHTML = "total" + " " + sumofnum;
    // });


    div.append(img, name, price, inc, quantity, dic);


    return div;
}
function total() {


    const divTotal = document.createElement("div");
    divTotal.classList.add("total");
    const p = document.createElement("p");
    p.innerHTML = "Total";


    const total = document.createElement("p");
    let sumofnum = 0;

    cart.forEach((flowers) => {
        const subTotal = flowers.price * flowers.quantity;
        sumofnum += subTotal;
    });
    total.innerHTML = sumofnum;
    divTotal.append(p, total);
    return divTotal;
}



function createCart() {
    const cart = JSON.parse(localStorage.getItem('cart') ?? '[]');
    const cartRoot = document.querySelector('#root2');
    cart.forEach((item, i) => {
        const cartItemEl = createCartItem(item, i);
        cartRoot.appendChild(cartItemEl);
    });
    const cartTotal = total();
    cartRoot.append(cartTotal);

    if (cart.length === 0) {
        cartRoot.innerHTML = '<h2>Cart is empty</h2>';
    }
}
