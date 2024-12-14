import { drawProducts } from "./drawProducts.js";
import {
  buttonSearch,
  dropdown,
  inputSearch,
  next,
  number,
  params,
  prev,
} from "./variables.js";
import { drawCategory } from "./drawCategory.js";

drawCategory();
drawProducts();
// search

const search = () => {
  params.search = inputSearch.value;
  params.category = "";
  params.skip = 0;
  params.page = 1;
  drawProducts();
};

buttonSearch.addEventListener("click", () => {
  search();
});

inputSearch.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    search();
  }
});
// end search

// sort

dropdown.addEventListener("change", () => {
  let value = dropdown.value;
  switch (value) {
    case "def":
      params.sortby = "";
      params.order = "";
      break;

    case "asc":
      params.sortby = "price";
      params.order = "asc";
      break;

    case "desc-price":
      params.sortby = "price";
      params.order = "desc";
      break;

    case "desc-disCount":
      params.sortby = "discountPercentage";
      params.order = "desc";
      break;

    default:
      break;
  }

  drawProducts();
});
// end sort

// pagination

prev.addEventListener("click", async () => {
  if (params.page > 1) {
    params.skip -= params.limit;
    params.page -= 1;
    number.innerHTML = params.page;
    drawProducts();
  }
});

next.addEventListener("click", async () => {
  if (params.page < Math.ceil(params.total / params.limit)) {
    params.skip += params.limit;
    params.page += 1;
    number.innerHTML = params.page;
    drawProducts();
  }
});
// end pagination
