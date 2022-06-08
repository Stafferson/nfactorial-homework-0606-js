import "./styles.css";
import * as storage from "./storage.js";

document.getElementById("app").innerHTML = `
<div class="Storage">
<h1>Storage:</h1>
<table class=""Storage_table">
  <tr>
    <th>Product name</th>
    <th>Price per item</th>
    <th>Average weight of 1 item (kg)</th>
    <th>Quantity left:</th>
  </tr>
  <tr>
    <td>${storage.apples.name}</td>
    <td>${storage.apples.price}</td>
    <td>${storage.apples.weight}</td>
    <td>${storage.apples.quantity_left}</td>
  </tr>
  <tr>
  <td>${storage.cucumbers.name}</td>
  <td>${storage.cucumbers.price}</td>
  <td>${storage.cucumbers.weight}</td>
  <td>${storage.cucumbers.quantity_left}</td>
  </tr>
  <tr>
    <td>${storage.tomatoes.name}</td>
    <td>${storage.tomatoes.price}</td>
    <td>${storage.tomatoes.weight}</td>
    <td>${storage.tomatoes.quantity_left}</td>
  </tr>
  <tr>
    <td>${storage.pineapples.name}</td>
    <td>${storage.pineapples.price}</td>
    <td>${storage.pineapples.weight}</td>
    <td>${storage.pineapples.quantity_left}</td>
  </tr>
</table>
</div>

<div>
  <p>
    <input type="button" id="bt_print_all" value="Вывести все" onclick="bt_print_all()" />
  </p>
  <p>
    <input type="button" id="bt_hello" value="I wanna be welcomed" onclick="hello()" />
  </p>

</div>`;

const table = document.querySelector("table");
const arr = [...table.rows].map((r) =>
  [...r.querySelectorAll("td, th")].map((td) => td.textContent)
);

let bt_print_all = () => {
  let i = 0;
  while (i < 16) {
    console.log(arr[i]);
  }
};

function hello() {
  alert("Hello!!");
}
