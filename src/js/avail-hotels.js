export const availHotelsFlexContainer = document.getElementById(
  'available-hotels__flex-container',
);

const formAvailableHotelsElements = (data) => {
  availHotelsFlexContainer.innerHTML = `<button class="places__arrow" id="places-avail-hotels__arrow-prev">
                 <img src="./src/images/svg/Arrow.svg" alt="->" />
                 </button>
                 <button class="places__arrow" id="places-avail-hotels__arrow-next">
                 <img src="./src/images/svg/Arrow.svg" alt="->" />
                 </button>`;
  data.forEach((element, index) => {
    availHotelsFlexContainer.innerHTML += `
      <div class="places__element col-3">
        <img
                src=${element.imageUrl}
                id="avai-hotels_${index + 1}"
                class="places__image"
                alt="available-hotels-img-${index + 1}"
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
        availHotelsFlexContainer.querySelectorAll('.places__element')[index];
      placesElement.classList.add('hidden');
    }
    if (index >= 4) {
      const placesElement =
        availHotelsFlexContainer.querySelectorAll('.places__element')[index];
      placesElement.classList.add('temporarily-hidden');
    }
  });
};

const toggleAvailableHotelsContainer = (data) => {
  if (data === null || data.length === 0) {
    document
      .querySelector('.available-hotels')
      .classList.add('available-hotels__hidden__');
  } else {
    document
      .querySelector('.available-hotels')
      .classList.remove('available-hotels__hidden__');
  }
};

export {formAvailableHotelsElements, toggleAvailableHotelsContainer};