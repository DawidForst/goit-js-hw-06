const cat = document.querySelectorAll("#categories > li");
console.log(`Number of categories: ${cat.length}`);
cat.forEach((e) => {
  console.log(`Category: ${e.querySelector("h2").textContent}`);
  console.log(`Elements: ${e.querySelectorAll("li").length}`);
});
