import { drawProducts } from "./drawProducts.js";
import { fetchApi } from "./helpers/fetchApi.js";
import { params, number } from "./variables.js";

export const drawCategory = async () => {
  const category = document.querySelector("#category");
  let data = await fetchApi("https://dummyjson.com/products/category-list");
  let htmls = data.map((item) => {
    return `
                <div class="category__item" data-category="${item}">
                    ${item}
                </div>
            `;
  });
  category.innerHTML = htmls.join("");

  category.addEventListener("click", (event) => {
    const categoryItem = event.target.closest(".category__item");
    if (categoryItem) {
      params.category = categoryItem.getAttribute("data-category");
      params.page = 1;
      params.skip = 0;
      number.innerHTML = params.page;
      drawProducts();
    }
  });
};
