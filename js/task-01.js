const ListOfCategories = document.querySelectorAll("#categories .item");

console.log("Number of categories:", ListOfCategories.length);

ListOfCategories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryEl = category.querySelectorAll("li");

  console.log("Category:", categoryName);
  console.log("Elements", categoryEl.length);
});
