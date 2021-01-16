const getResource = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Couldnt fetch");
  }

  return await res.json();
};

class MenuCard {
  constructor(img, name, price, parentSelector) {
    this.img = img;
    this.name = name;
    this.price = price;
    this.parent = document.querySelector(parentSelector);
  }
}

//! Формирует верстку с помощью шаблонов и json(backend)

getResource("http://localhost:3000/product").then((data) => createCard(data));

function createCard(data) {
  data.forEach(({ img, name, price }) => {
    const element = document.createElement("div");

    element.classList.add("flex__container");
    element.innerHTML = `
        <img src="${img}" width="125px" height="166px">
         <h3 class="menu__item-subtitle">${name}</h3>
         <div class="menu__item-price">
            <div class="menu__item-total"><span>${price}</span>&#8381;</div>
         </div>
         <button data-modal class="buy__item">Купить</button>
    `;

    document.querySelector(".menu .container").append(element);
  });
}
// fetch("product.json")
//   .then((data) => data.json())
//   .then((res) => console.log(res));
