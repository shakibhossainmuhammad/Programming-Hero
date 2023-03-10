// 5 Explore meal db api and create card for each meal
const loadMeals = () => {
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};
loadMeals();
const displayMeals = (meals) => {
  const mealsContaiener = document.getElementById('meals-container');

  meals.forEach((meal) => {
    // console.log(meal);
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('col');
    mealDiv.innerHTML = `
    <div class="card h-100">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
    `;
    mealsContaiener.appendChild(mealDiv);
  });
};
