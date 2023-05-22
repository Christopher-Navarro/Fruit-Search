const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
input.addEventListener('input', function(e) {
	const userInput = e.target.value;
	const filteredFruits = search(userInput);
	renderDropdown(filteredFruits);
});

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	// TODO
	const searchTerm = str.toLowerCase();

	for (let i = 0; i < fruit.length; i++) {
	  const fruits = fruit[i].toLowerCase();
	  if (fruits.includes(searchTerm)) {
		results.push(fruit[i]);
	  }
	}
	return results
}

function searchHandler(e) {
	// TODO
}

function showSuggestions(results, inputVal) {

	// TODO
}

function useSuggestion(e) {
	// TODO
	input.value = e;
}


function renderDropdown(filteredFruits) {
	suggestions.innerHTML = '';
  
	if (filteredFruits.length === 0) {
	  suggestions.style.display = 'none';
	  return;
	}
  
	suggestions.style.display = 'block';
  
	const dropdownList = document.createElement('ul');
  
	filteredFruits.forEach(function(fruit) {
	  const listItem = document.createElement('li');
	  listItem.textContent = fruit;
	  dropdownList.appendChild(listItem);
	  listItem.addEventListener('click', function(){useSuggestion(fruit)
	  suggestions.style.display = "none";});
	});
  
	suggestions.appendChild(dropdownList);
  }

  input.addEventListener('keyup', searchHandler);
