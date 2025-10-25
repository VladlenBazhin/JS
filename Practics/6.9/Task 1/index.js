const products = ["Мышка", "Клавиатура", "Наушники"];
const newProducts = ["Монитор", "Принтер", "Флешка"];

for (let i = 0; i < newProducts.length; i++) {
      products.push(newProducts[i]);
}

    const list = document.querySelector(".products");

for (let i = 0; i < products.length; i++) {
      const li = document.createElement("li");
      const text = document.createTextNode(products[i]);
      
      li.append(text);
      list.append(li);
}