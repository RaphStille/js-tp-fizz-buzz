// Retirer le msg si le JS est actif.
const removeMessage = document.querySelector('.no-js__message');
removeMessage.remove();

// FizzBuzz code
const olElement = document.querySelector('ol');

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    olElement.insertAdjacentHTML(
      'beforeend',
      ` <li class="fizzbuzz">FI<i>zz</i>BU<i>zz</i></li>`
    );
  } else if (i % 5 === 0) {
    olElement.insertAdjacentHTML(
      'beforeend',
      ` <li class="buzz">BU<i>zz</i></li>`
    );
  } else if (i % 3 === 0) {
    olElement.insertAdjacentHTML(
      'beforeend',
      ` <li class="fizz">FI<i>zz</i></li>`
    );
  } else {
    olElement.insertAdjacentHTML('beforeend', `<li>${i}</li>`);
  }
}

// Défilement infini
let currentIndex = 101;
function checkScroll() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    for (let i = currentIndex; i < currentIndex + 20; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        olElement.insertAdjacentHTML(
          'beforeend',
          ` <li class="fizzbuzz">FI<i>zz</i>BU<i>zz</i></li>`
        );
      } else if (i % 5 === 0) {
        olElement.insertAdjacentHTML(
          'beforeend',
          ` <li class="buzz">BU<i>zz</i></li>`
        );
      } else if (i % 3 === 0) {
        olElement.insertAdjacentHTML(
          'beforeend',
          ` <li class="fizz">FI<i>zz</i></li>`
        );
      } else {
        olElement.insertAdjacentHTML('beforeend', `<li>${i}</li>`);
      }
    }
    currentIndex += 20;
  }
}

window.addEventListener('scroll', checkScroll);
