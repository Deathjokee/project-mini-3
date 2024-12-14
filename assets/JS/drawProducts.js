import { fetchApi } from "./helpers/fetchApi.js";
import { params } from "./variables.js";
import { PATH } from "./contants.js";

export const drawProducts = async () => {
  const products = document.querySelector("#products");

  let api = `${PATH}`;

  const queryParams = new URLSearchParams({
    sortBy: params.sortby,
    order: params.order,
    limit: params.limit,
    skip: params.skip,
  });

  if (params.category) {
    api += `category/${params.category}?${queryParams.toString()}`;
  } else {
    api += `search?q=${params.search}&${queryParams.toString()}`;
  }

  let data = await fetchApi(api);
  let htmls = data.products.map((item) => {
    return `
        <div class="products__item">
          <div class="products__item__img">
            <img class="products__item__img--img" src="${item.thumbnail}" alt="${item.title}">
            <span class="products__item__img--disCount">
              ${item.discountPercentage}%
            </span>
          </div>
          <div class="products__item__information">
            <div class="products__item__information--name">
              ${item.brand}
            </div>
            <span class="products__item__information--price">
              ${item.price}$
            </span>
            <span class="products__item__information--quantity">
              Còn lại: ${item.minimumOrderQuantity} sp
            </span>
          </div>
      </div>
    `;
  });
  products.innerHTML = htmls.join("");
  params.total = data.total;
};
