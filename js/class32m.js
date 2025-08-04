// Constructor function for Dish
function Dish(fruit, vegetable, fish) {
    this.fruit = fruit;
    this.vegetable = vegetable;
    this.fish = fish;
}

const dishDiv = document.getElementById('dish');
const addBtn = document.getElementById('add');
const fruitsInput = document.getElementById('fruits');
const vegetablesInput = document.getElementById('vegetables');
const fishInput = document.getElementById('fish');

let dishes = [];

function updateDishList() {
    // Remove all except the heading
    dishDiv.innerHTML = '<h1>Dishes: </h1>';

    dishes.forEach((dish, index) => {
        const p = document.createElement('p');
        // p.textContent = `Fruit: ${dish.fruit}, Vegetable: ${dish.vegetable} `;
        p.textContent = `Fruit: ${dish.fruit}, Vegetable: ${dish.vegetable}, Fish: ${dish.fish}`;
        // Edit button
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.id = 'editBtn';
        editBtn.onclick = function() {
            fruitsInput.value = dish.fruit;
            vegetablesInput.value = dish.vegetable;
            fishInput.value = dish.fish;
            addBtn.textContent = 'Update';
            addBtn.onclick = function() {
                dish.fruit = fruitsInput.value.trim();
                dish.vegetable = vegetablesInput.value.trim();
                dish.fish = fishInput.value.trim();
                updateDishList();
                addBtn.textContent = 'Add';
                addBtn.onclick = addDish;
                fruitsInput.value = '';
                vegetablesInput.value = '';
                fishInput.value = '';
            };
        };

        // Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.id = 'removeBtn';
        removeBtn.onclick = function() {
            dishes.splice(index, 1);
            updateDishList();
        };

        p.appendChild(editBtn);
        p.appendChild(removeBtn);
        dishDiv.appendChild(p);
    });

    // Show total number of dishes
    let total = document.getElementById('totalDishes');
    if (!total) {
        total = document.createElement('div');
        total.id = 'totalDishes';
        dishDiv.appendChild(total);
    }
    total.textContent = `Total Dishes: ${dishes.length}`;
}

function addDish() {
    const fruit = fruitsInput.value.trim();
    const vegetable = vegetablesInput.value.trim();
    const fish = fishInput.value.trim();
    if (fruit && vegetable && fish) {
        dishes.push(new Dish(fruit, vegetable, fish));
        updateDishList();
        fruitsInput.value = '';
        vegetablesInput.value = '';
        fishInput.value = '';
    }
}

addBtn.onclick = addDish;

updateDishList();


// store data
function loadDishes() {
    const saved = localStorage.getItem('dishes');
    if (saved) {
        dishes = JSON.parse(saved);
    }
}

// Save dishes to localStorage
function saveDishes() {
    localStorage.setItem('dishes', JSON.stringify(dishes));
}

function updateDishList() {
    dishDiv.innerHTML = '<h1>Dishes: </h1>';

    dishes.forEach((dish, index) => {
        const p = document.createElement('p');
        p.textContent = `Fruit: ${dish.fruit}, Vegetable: ${dish.vegetable}, Fish: ${dish.fish}`;
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.id = 'editBtn';
        editBtn.onclick = function() {
            fruitsInput.value = dish.fruit;
            vegetablesInput.value = dish.vegetable;
            fishInput.value = dish.fish;
            addBtn.textContent = 'Update';
            addBtn.onclick = function() {
                dish.fruit = fruitsInput.value.trim();
                dish.vegetable = vegetablesInput.value.trim();
                dish.fish = fishInput.value.trim();
                saveDishes();
                updateDishList();
                addBtn.textContent = 'Add';
                addBtn.onclick = addDish;
                fruitsInput.value = '';
                vegetablesInput.value = '';
                fishInput.value = '';
            };
        };

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.id = 'removeBtn';
        removeBtn.onclick = function() {
            dishes.splice(index, 1);
            saveDishes();
            updateDishList();
        };

        p.appendChild(editBtn);
        p.appendChild(removeBtn);
        dishDiv.appendChild(p);
    });

    let total = document.getElementById('totalDishes');
    if (!total) {
        total = document.createElement('div');
        total.id = 'totalDishes';
        dishDiv.appendChild(total);
    }
    total.textContent = `Total Dishes: ${dishes.length}`;
}

function addDish() {
    const fruit = fruitsInput.value.trim();
    const vegetable = vegetablesInput.value.trim();
    const fish = fishInput.value.trim();
    if (fruit && vegetable && fish) {
        dishes.push(new Dish(fruit, vegetable, fish));
        saveDishes();
        updateDishList();
        fruitsInput.value = '';
        vegetablesInput.value = '';
        fishInput.value = '';
    }
}

// Load dishes when page loads
loadDishes();
addBtn.onclick = addDish;
updateDishList();