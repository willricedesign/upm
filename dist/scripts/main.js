"use strict";function _toConsumableArray(t){if(Array.isArray(t)){for(var o=0,e=Array(t.length);o<t.length;o++)e[o]=t[o];return e}return Array.from(t)}var udemyMockup=document.querySelector(".udemy-mockup"),udemyBackgrounds=["udemy-mockup--home","udemy-mockup--clp","udemy-mockup--player","udemy-mockup--instructor"],protoBackground=document.querySelector(".proto-button-bg"),protoCompact=document.querySelector(".proto-button-compact"),protoCreate=document.querySelector(".proto-button-create"),protoShowAll=document.querySelector(".proto-button-show"),cookieClose=document.querySelector(".cookie-message-close"),cookieMessage=document.querySelector(".cookie-message"),toastList=[].concat(_toConsumableArray(document.getElementsByClassName("toast"))),toastContainer=document.querySelector(".toast-container");toastList[0].classList.remove("toast--removed"),setTimeout(function(){toastList[0].classList.toggle("toast--hidden")},400),protoCompact.addEventListener("click",function(){toastContainer.classList.toggle("toast-variant--compact")});var bgCount=0;protoBackground.addEventListener("click",function(){udemyMockup.classList.remove(udemyBackgrounds[bgCount]),bgCount++,udemyMockup.classList.add(udemyBackgrounds[bgCount]),bgCount===udemyBackgrounds.length&&(bgCount=0,console.log("true"))}),protoCreate.addEventListener("click",function(){toastList[0].classList.remove("toast--removed"),setTimeout(function(){toastList[0].classList.toggle("toast--hidden")},10)}),protoShowAll.addEventListener("click",function(){toastList.forEach(function(t,o){setTimeout(function(){t.classList.remove("toast--removed"),setTimeout(function(){t.classList.remove("toast--hidden")},40),o++},50*o)})}),toastList.forEach(function(t){t.addEventListener("click",function(){t.classList.add("toast--hidden"),setTimeout(function(){t.classList.add("toast--removed")},400)})}),cookieClose.addEventListener("click",function(){cookieMessage.classList.add("cookie-message--hidden")});
//# sourceMappingURL=./main.js.map