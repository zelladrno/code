const searchInput = document.getElementById("search");
searchInput.addEventListener("input", function () {
  const filter = searchInput.value.toLowerCase();
  const carItems = document.querySelectorAll(".car-item");

  let anyVisible = false;

  carItems.forEach(item => {
    const name = item.querySelector("p").textContent.toLowerCase();
    const match = name.includes(filter);

    item.style.display = match ? "block" : "none";

    if (match) {
      anyVisible = true;
    }
  });

  const noResults = document.getElementById("no-results");
  noResults.style.display = anyVisible ? "none" : "block";
});

const carItems = document.querySelectorAll(".car-item");

carItems.forEach((item) => {
  item.addEventListener("click", () => {
    const url = item.getAttribute("data-url");
    if (url) {
      window.open(url, "_blank");
    }
  });
});