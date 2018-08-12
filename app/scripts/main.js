//onst sideNavContainer = document.querySelector('.sidenav-container');
const udemyMockup = document.querySelector('.udemy-mockup');
const udemyBackgrounds = ['udemy-mockup--home','udemy-mockup--clp','udemy-mockup--player', 'udemy-mockup--instructor' ]

const protoBackground = document.querySelector('.proto-button-bg');
const protoCompact = document.querySelector('.proto-button-compact');
const protoCreate = document.querySelector('.proto-button-create');
const protoShowAll = document.querySelector('.proto-button-show');

const cookieClose = document.querySelector('.cookie-message-close');
const cookieMessage = document.querySelector('.cookie-message');
const toastList = [...document.getElementsByClassName('toast')];
const toastContainer = document.querySelector('.toast-container');


//====== Prototype settings and toggles

//Initiate prototype by revealing toast
toastList[0].classList.remove('toast--removed');
setTimeout(function() {
  toastList[0].classList.toggle('toast--hidden');
}, 400);


// Toggle compact mode

protoCompact.addEventListener('click', function() {
  toastContainer.classList.toggle('toast-variant--compact');
});

// Cycle prototype background
let bgCount = 0;
protoBackground.addEventListener('click', function() {
  udemyMockup.classList.remove(udemyBackgrounds[bgCount]);
  bgCount++;
  udemyMockup.classList.add(udemyBackgrounds[bgCount]);
  if (bgCount === udemyBackgrounds.length) {
    bgCount = 0;
    console.log('true');
  }
});

// Show / hide first toast into page

protoCreate.addEventListener('click', function() {
  toastList[0].classList.remove('toast--removed');
  setTimeout(function() {
    toastList[0].classList.toggle('toast--hidden');
  }, 10);
});

// Show all toasts
protoShowAll.addEventListener('click', function() {
  toastList.forEach(function(e, i) {
    setTimeout(function() {
      e.classList.remove('toast--removed');
      setTimeout(function() {
        e.classList.remove('toast--hidden');
      }, 40);
      i++;
    }, i * 50);
  });
});


//====== Product Component Scripts

// Dismiss toast

toastList.forEach(function(e) {
  e.addEventListener('click', function() {
    // Add class for animation
    e.classList.add('toast--hidden');
    setTimeout(function() {
      // Wait 400ms, then remove toast from UI
      e.classList.add('toast--removed');
    }, 400);
  });
});

// Close cookie message
cookieClose.addEventListener('click', function() {
  cookieMessage.classList.add('cookie-message--hidden');
});
