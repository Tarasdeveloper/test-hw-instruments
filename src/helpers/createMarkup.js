function createMarkup(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({ id, img, name }) => `<li class="js-card" data-id="${id}">
        <img src="${img}" alt="${name}"  width="300"/>
        <h2>${name}</h2>
        <p><a class="js-info" href="#">More details</a></p>
        <div>
          <button class="js-favorite">Add to favorite</button>
          <button class="js-cart">Add to cart</button>
        </div>
      </li>`
      )
      .join('');
  } else {
    markup = `<li>
        <img src="https://i.pinimg.com/564x/88/dd/e4/88dde426d13cbd2fed941c4042babd6b.jpg" alt="not found"  width="600"/>
      </li>`;
  }

  list.innerHTML = markup;
}

export { createMarkup };
