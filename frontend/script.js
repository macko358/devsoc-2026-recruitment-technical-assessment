const grid = document.getElementById("card-grid");
const logoButton = document.querySelector(".logo");
const logoImage = logoButton?.querySelector("img");

const normalizePath = (path) => {
  if (!path) return "";
  const trimmed = path.replace(/^\.\//, "");
  return `assets/${trimmed}`;
};

const renderCards = (items) => {
  grid.innerHTML = "";
  items.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "card";
    card.style.setProperty("--i", index);

    const image = document.createElement("img");
    const imagePath = normalizePath(item.building_file || item.building_picture);
    image.src = imagePath;
    image.alt = item.name;

    const badge = document.createElement("div");
    badge.className = "card-badge";
    badge.innerHTML = `<span class="dot"></span>${item.rooms_available} rooms available`;

    const title = document.createElement("div");
    title.className = "card-title";
    title.textContent = item.name;

    card.append(image, badge, title);
    grid.appendChild(card);
  });
};

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => renderCards(data))
  .catch(() => {
    const embedded = document.getElementById("freerooms-data");
    if (embedded?.textContent) {
      renderCards(JSON.parse(embedded.textContent));
      return;
    }
    renderCards([]);
  });

if (logoButton && logoImage) {
  logoButton.addEventListener("click", () => {
    const open = logoImage.dataset.logoOpen;
    const closed = logoImage.dataset.logoClosed;
    const next = logoImage.src.includes("freeroomsDoorClosed") ? open : closed;
    logoImage.src = next;
  });
}
