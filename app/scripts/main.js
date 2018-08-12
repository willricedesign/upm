const udemyMockup = document.querySelector('.udemy-mockup');
const udemyBackgrounds = ['udemy-mockup--home','udemy-mockup--clp','udemy-mockup--player', 'udemy-mockup--instructor' ]

const protoBackground = document.querySelector('.proto-button--bg');
//const protoCompact = document.querySelector('.proto-button--compact');
const protoClearAll = document.querySelector('.proto-button--clear');
const protoDanger = document.querySelector('.proto-button--danger');
const protoLearn = document.querySelector('.proto-button--learn');
const protoLegal = document.querySelector('.proto-button--legal');
const protoLoc = document.querySelector('.proto-button--location');
const protoMobile = document.querySelector('.proto-button--mobile');
const protoShowAll = document.querySelector('.proto-button--show');
const protoShowCookies = document.querySelector('.proto-button--cookies');
const protoSuccess = document.querySelector('.proto-button--success');

const cookieClose = document.querySelector('.cookie-message-close');
const cookieMessage = document.querySelector('.cookie-message');
const toastList = [...document.getElementsByClassName('toast')];
const dangerToast = document.querySelector('.toast--danger');
const learnToast = document.querySelector('.toast--learn');
const legalToast = document.querySelector('.toast--legal');
const successToast = document.querySelector('.toast--success');


//====== Setup

//Initiate prototype by revealing toast
legalToast.classList.remove('toast--removed');
setTimeout(function() {
  legalToast.classList.toggle('toast--hidden');
}, 500);

//====== Prototype settings and toggles

// Toggle mobile
protoMobile.addEventListener('click', function() {
  udemyMockup.classList.toggle('udemy-mockup--mobile');
});

// Load toast function
function toggleToast(t, b) {
  b.addEventListener('click', function() {
    if (t.classList.contains('toast--removed')){
      t.classList.remove('toast--removed');
      setTimeout(function() {
        t.classList.toggle('toast--hidden');
      }, 10);
    }
  });
}

toggleToast(dangerToast, protoDanger);
toggleToast(learnToast, protoLearn);
toggleToast(legalToast, protoLegal);
toggleToast(successToast, protoSuccess);

// Set timeout on temporary success message
protoSuccess.addEventListener('click', function() {
  setTimeout(function() {
    successToast.classList.add('toast--hidden');
    setTimeout(function() {
      successToast.classList.add('toast--removed');
    }, 400);
  }, 2000);
});

// Set timeout on temporary learning message
protoLearn.addEventListener('click', function() {
  setTimeout(function() {
    learnToast.classList.add('toast--hidden');
    setTimeout(function() {
      learnToast.classList.add('toast--removed');
    }, 400);
  }, 3500);
});


// // Toggle compact/large toast style
// protoCompact.addEventListener('click', function() {
//   udemyMockup.classList.toggle('toast-variant--compact');
// });

// Toggle toast container location
protoLoc.addEventListener('click', function() {
  udemyMockup.classList.toggle('toast-variant--bottom');
});

// Cycle prototype background
let bgCount = 0;

protoBackground.addEventListener('click', function() {
  udemyMockup.classList.remove(udemyBackgrounds[bgCount]);
  bgCount++;
  if (bgCount === udemyBackgrounds.length) {
    bgCount = 0;
  }
  udemyMockup.classList.add(udemyBackgrounds[bgCount]);
});

// Load all toasts
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

// Clear all toasts
protoClearAll.addEventListener('click', function() {
  toastList.forEach(function(e, i) {
    setTimeout(function() {
      e.classList.add('toast--hidden');
      setTimeout(function() {
        e.classList.add('toast--removed');
      }, 400);
      i++;
    }, i * 50);
  });
});

// Show Cookie Message
// Toggle toast container location
protoShowCookies.addEventListener('click', function() {
  cookieMessage.classList.remove('cookie-message--removed');
  cookieMessage.classList.remove('cookie-message--hidden');

});

//====== Product Component Scripts

// Dismiss toast

toastList.forEach(function(e) {
  e.addEventListener('click',function() {
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
  setTimeout(function() {
    // Wait 400ms, then remove toast from UI
    cookieMessage.classList.add('cookie-message--removed');
  }, 400);
});
