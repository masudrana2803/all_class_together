// let fruits = ["banana","orange","pear","apple"]

// let vegetables = ["carrot","broccoli","spinach","potato"]






// ...existing code...

// Constructor function for Dish
function Dish(fruit, vegetable) {
    this.fruit = fruit;
    this.vegetable = vegetable;
}

// Reference to the dish container
const dishDiv = document.getElementById('dish');
const addBtn = document.getElementById('add');

addBtn.addEventListener('click', function() {
    const fruit = document.getElementById('fruits').value.trim();
    const vegetable = document.getElementById('vegetables').value.trim();

    if (fruit && vegetable) {
        const newDish = new Dish(fruit, vegetable);

        // Create a new element to show the dish
        const p = document.createElement('p');
        p.textContent = `Fruit: ${newDish.fruit}, Vegetable: ${newDish.vegetable}`;
        dishDiv.appendChild(p);

        // Optionally clear inputs
        document.getElementById('fruits').value = '';
        document.getElementById('vegetables').value = '';
    }
});