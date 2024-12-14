export const params = {
  search: "",
  sortby: "",
  order: "",
  page: 1,
  limit: 20,
  skip: 0,
  total: "",
  category: "",
};

export const inputSearch = document.querySelector(
  "#search .search__inputSearch"
);
export const buttonSearch = document.querySelector(
  "#search .search__buttonSearch"
);
export const dropdown = document.querySelector("#dropdown");

export const prev = document.querySelector("#pagination .pagination--prev");

export const number = document.querySelector("#pagination .pagination--number");

export const next = document.querySelector("#pagination .pagination--next");
