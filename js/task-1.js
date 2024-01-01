const categoryItems = document.querySelectorAll("ul#categories > li.item");
categoryItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  console.log(`Категорія: ${categoryTitle}`);
  const categoryItemsCount = item.querySelectorAll("ul > li").length;
  console.log(`Кількість елементів у категорії: ${categoryItemsCount}`);
  console.log("----------------------");
});
