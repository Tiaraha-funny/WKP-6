//Copy paste the array

const foods = [
  {
    id: 'ravitoto',
    price: 5000,
    title: 'Ravitoto',
    spicy: true,
    vegetarian: false,
  },
  {
    id: 'pasta',
    price: 4000,
    title: 'Pasta',
    spicy: true,
    vegetarian: true,
  },
  {
    id: 'burger',
    price: 5000,
    title: 'Burger',
    spicy: false,
    vegetarian: false,
  },
  {
    id: 'rice',
    price: 2000,
    title: 'Rice and Leaves',
    spicy: false,
    vegetarian: true,
  },
  {
    id: 'mofogasy',
    price: 500,
    title: 'Mofogasy',
    spicy: false,
    vegetarian: false,
  },
];
console.log('work');
// To generate any list of element (for example, the list of food), Map is really useful.

//Drag all the elements needed

const spicyFood = document.querySelector('.spicy');
const vegetarianFood = document.querySelector('.vegetarian');
const containsTheListOfFoods = document.querySelector('.container');
const orderWhichAddedBtn = document.querySelector('.orderAdded');

const submitModalBtn = document.querySelector('#submit');
const outerModal = document.querySelector('.outer__modal');
const innerModal = document.querySelector('.inner__modal');

// Create HTML to hold the lists from the array of foods

const mapSpicyFoods = e => {
  const spicyHTML = foods.map(food => `
    <div id="ravitoto">
        <ul class="spicy__lists">
          <li class="spicy__lists--items" id="${food.id}">
            <div>${food.title}</li>
            <div>${food.price}</li>
            <button class="submit">Add</button>
          </li>
        </ul>
      </div>
    `).join(' ');
  containsTheListOfFoods.innerHTML = spicyHTML;
}

// calling the function
mapSpicyFoods();

//create the html for the spicy food when the checkbox is checked

const handleCheckboxSpicy = e => {
  console.log('spicy');
  if (spicyFood.checked) {
    const filterSpicyFood = foods.filter(spicie => spicie.spicy === true);
    console.log(filterSpicyFood);
    const mappingSpicyHTML = filterSpicyFood.map(spicie =>
      `<div id="${spicie.id}">
        <ul class="spicy__lists">
          <li class="spicy__lists--items" id="${spicie.id}">
            <div>${spicie.title}</li>
            <div>${spicie.price}</li>
            <button class="submit">Add</button>
          </li>
        </ul>
      </div>
      `
    ).join(' ');
    containsTheListOfFoods.innerHTML = mappingSpicyHTML;
  } else {
    return mapSpicyFoods();
  }
}

// create the html for the vegetarian food

const handleCheckboxVegetarian = e => {
  console.log('veges');
  if (vegetarianFood.checked) {
    const filterVegetarianFood = foods.filter(veges => veges.vegetarian === true);
    console.log(filterVegetarianFood);
    const mappingVegHTML = filterVegetarianFood.map(veget =>
      `<div id="${veget.id}">
        <ul class="vegetarian__lists">
          <li class="vegetarian__lists--items" id="${veget.id}">
            <div>${veget.title}</li>
            <div>${veget.price}</li>
            <button class="submit">Add</button>
          </li>
        </ul>
      </div>
      `
    ).join(' ');
    containsTheListOfFoods.innerHTML = mappingVegHTML;
  } else {
    return mapSpicyFoods();
  }
}

// To add the order lists, create the html for that order

const addBtn = document.querySelectorAll('.submit');

const handleAddOrderLists = e => {
  console.log('sumbmit');
  if (e.target.matches('button.submit')) {
    e.preventDefault();
    const orderFoodsAddedHTML = foods.map(order => `
      <ul class="order__lists">
        <li class="order__lists--items" id="">
          <div>${order.title}</div>
          <div>* 2</div>
          <div>${order.price}</div>
        </li>
      </ul>`).join(" ");
    orderWhichAddedBtn.insertAdjacentHTML("beforeend", orderFoodsAddedHTML);
    orderWhichAddedBtn.classList.add('flex');

    const totalPriceOfTheOrderFoods = foods.reduce(total, order => {
      `<div>
          <label>Total :</label>
          <button>${total.price + order.price}</button>
        </div>
      `
      orderWhichAddedBtn.insertAdjacentHTML("beforeend", totalPriceOfTheOrderFoods);
    });

  }
}


// For the modal form

//open the modal form

const handleConfirmingBtn = e => {
  outerModal.classList.add('open');
  const modalHTML = `
  <h2>Thank You !!</h2>
  <p>Your order is confirmed !!<br>We will prepare your food order and deliver it to you when it is ready</p>
  <p>The total amount is <strong>50000 Ariary</strong><p>
  <button class="close">Close</button>
  `
  innerModal.innerHTML = modalHTML;
}

// handle the close button

const handleCloseBtn = e => {
  if (e.target.matches('button.close')) {
    outerModal.classList.remove('open');
  }
}

//To handle all the changes or clicks button

window.addEventListener('click', handleAddOrderLists);
vegetarianFood.addEventListener('change', handleCheckboxVegetarian);
spicyFood.addEventListener('change', handleCheckboxSpicy);
submitModalBtn.addEventListener('click', handleConfirmingBtn);
document.addEventListener('click', handleCloseBtn);