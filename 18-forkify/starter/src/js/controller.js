const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
// API key: 62b48df8-9be6-4fdd-b194-9cd52363a29a

const showRecipe = async () => {
  try {
    const result = await fetch(
      'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
    );

    const data = await result.json();
    if (!result.ok) throw new Error(`${data.message} (${result.status})`);

    let {recipe} = data.data;

    recipe = {
      
    }

    console.log(recipe);
    console.log(data);

  } catch (err) {
    alert(err);
  }
};

showRecipe();
