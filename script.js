const items = [
  { name: "COKE", required: 10 },
  { name: "COKE 0", required: 11 },
  { name: "FANTA", required: 4 },
  { name: "7UP", required: 4 },
  { name: "7UP FREE", required: 4 },
  { name: "Fever tree TONIC", required: 1 },
  { name: "Fever tree GINGER ALE", required: 1 },
  { name: "COFFEE", required: 7 },
  { name: "CHOCOLATE", required: 1 },
  { name: "BLUE PAPER", required: 4 },
  { name: "MINT", required: 6 },
  { name: "PASSION FRUIT", required: 6 },
  { name: "COORS LIGHT 330ml", required: 2 },
  { name: "CORONA 330ml", required: 4 },
  { name: "GINGER BEER", required: 4 },
  { name: "HEINEKEN 330ml", required: 4 },
  { name: "HEINEKEN ZERO 330ml", required: 3 },
  { name: "PERONI 330ml", required: 2 },
  { name: "[COCKTAIL] - Aperol", required: 4 },
  { name: "[COCKTAIL] - Cosmo", required: 4 },
  { name: "[COCKTAIL] - Espresso", required: 4 },
  { name: "[COCKTAIL] - French m", required: 4 },
  { name: "[COCKTAIL] - Frizzante", required: 4 },
  { name: "[COCKTAIL] - Gin bramble", required: 4 },
  { name: "[COCKTAIL] - Margartina", required: 4 },
  { name: "[COCKTAIL] - Mojito", required: 4 },
  { name: "[COCKTAIL] - Pornstar", required: 5 },
  { name: "[COCKTAIL] - Sex on the beach", required: 4 },
  { name: "[COCKTAIL] - Whisky sour", required: 5 },
  { name: "Heineken - [30L]", required: 8 },
  { name: "Lagunitas - [30L]", required: 4 },
  { name: "Moretti - [30L]", required: 8 },
  { name: "Murphys - [30L]", required: 4 },
  { name: "Orchard thieves - [30L]", required: 5 },
  { name: "sauv blanc - [ WHITE WINE]", required: 14 },
  { name: "elisabeth - [ WHITE WINE]", required: 4 },
  { name: "picpoul - [ WHITE WINE]", required: 2 },
  { name: "sancerre - [ WHITE WINE]", required: 1 },
  { name: "chardonnay - [ WHITE WINE]", required: 3 },
  { name: "rose", required: 5 },
  { name: "proseco", required: 3 },
  { name: "Merlot - [ RED WINE]", required: 14 },
  { name: "Costieres - [ RED WINE]", required: 2 },
  { name: "Malbec - [ RED WINE]", required: 7 },
  { name: "Pinot Noir - [ RED WINE]", required: 2 },
  { name: "Chateu Amanieu - [ RED WINE]", required: 1 },
  { name: "Fleurie - [ RED WINE]", required: 1 },
  { name: "Sirus - [ RED WINE]", required: 1 },
  { name: "Gigondas - [ RED WINE]", required: 1 },
  { name: "Chateu DU PAPE - [ RED WINE]", required: 1 },
  { name: "Pomerol - [ RED WINE]", required: 1 },
  { name: "Phelan Segur - [ RED WINE]", required: 1 },
];

window.onload = function () {
  const stockItems = document.getElementById("stock-items");
  items.forEach((item) => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
        <label>${item.name}</label>
        <input type="number" id="${item.name}-required" value="${item.required}" placeholder="Necessary" min="0">
        <input type="number" id="${item.name}-current" placeholder="In stock" min="0">
        <input type="number" id="${item.name}-sold" placeholder="Sold" min="0">
      `;
    stockItems.appendChild(div);
  });
};

function calculateRestock() {
  const results = document.getElementById("results");
  results.innerHTML = "";
  let cocktailMessage = "HELLO\nCAN I PLEASE GET:\n";

  items.forEach((item) => {
    const required =
      parseInt(document.getElementById(`${item.name}-required`).value) ||
      item.required;
    const current =
      parseInt(document.getElementById(`${item.name}-current`).value) || 0;
    const sold =
      parseInt(document.getElementById(`${item.name}-sold`).value) || 0;

    const remaining = current - sold;
    const restock = required - remaining > 0 ? required - remaining : 0;

    const resultDiv = document.createElement("div");
    resultDiv.innerText = `${item.name}: needed ${restock}`;
    results.appendChild(resultDiv);

    if (item.name.includes("[COCKTAIL]")) {
      cocktailMessage += `${restock} ${item.name.replace(
        "[COCKTAIL] - ",
        ""
      )}\n`;
    }
  });

  const cocktailResultDiv = document.createElement("div");
  cocktailResultDiv.innerHTML = `<br/><br/>Send this message via WhatsApp:<br/><pre>${cocktailMessage}</pre>`;
  results.appendChild(cocktailResultDiv);
}
