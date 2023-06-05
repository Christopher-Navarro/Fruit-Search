const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");
input.addEventListener("input", function (e) {
  const userInput = e.target.value;
  const filteredFruits = search(userInput);
  useSuggestion(filteredFruits);
});

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  let results = [];
  if (str === "") {
    return results;
  }
  return fruit.filter((value) =>
    value.toLowerCase().includes(str.toLowerCase())
  );
}

function useSuggestion(filteredFruits) {
  suggestions.innerHTML = "";

  if (filteredFruits.length === 0) {
    suggestions.style.display = "none";
    return;
  }

  suggestions.style.display = "block";

  filteredFruits.forEach(function (fruit) {
    const listItem = document.createElement("li");
    listItem.textContent = fruit;
    suggestions.appendChild(listItem);
    listItem.addEventListener("click", function () {
      input.value = fruit;
      suggestions.style.display = "none";
    });
  });
}
