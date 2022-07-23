const homesContainer = document.querySelector('.homes__container');
export const homesFlexContainer = homesContainer.querySelector(
  '.places__flex-container',
);

const bubbleSort = (data) => {
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data.length - 1 - i; j++) {
      if (data[j].name > data[j + 1].name) {
        const tmp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = tmp;
      }
    }
  }
  return data;
};

const formHomesElements = (data_) => {
  data_.forEach((element, index) => {
    homesFlexContainer.innerHTML += `
    <div class="places__element col-3">
        <img
                src=${element.imageUrl}
                id="homes_${index + 1}"
                class="places__image"
                alt="home-img-${index + 1}"
        />
        <div class="places__home-description">
            <p class="places__label">${element.name}</p>
            <p class="homes__destination">${element.city}, ${element.country}
            </p>
         </div>

          </div>
  `;

    if (index >= 2) {
      const placesElement =
        homesFlexContainer.querySelectorAll('.places__element')[index];
      placesElement.classList.add('hidden');
    }
    if (index >= 4) {
      const placesElement =
        homesFlexContainer.querySelectorAll('.places__element')[index];
      placesElement.classList.add('temporarily-hidden');
    }
  });
};

export { bubbleSort, formHomesElements };
