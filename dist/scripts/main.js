"use strict";function _toConsumableArray(o){if(Array.isArray(o)){for(var t=0,e=Array(o.length);t<o.length;t++)e[t]=o[t];return e}return Array.from(o)}function toggleToast(o,t){t.addEventListener("click",function(){o.classList.contains("toast--removed")&&(o.classList.remove("toast--removed"),setTimeout(function(){o.classList.toggle("toast--hidden")},10))})}var udemyMockup=document.querySelector(".udemy-mockup"),udemyBackgrounds=["udemy-mockup--home","udemy-mockup--clp","udemy-mockup--player","udemy-mockup--instructor"],protoBackground=document.querySelector(".proto-button--bg"),protoClearAll=document.querySelector(".proto-button--clear"),protoDanger=document.querySelector(".proto-button--danger"),protoLearn=document.querySelector(".proto-button--learn"),protoLegal=document.querySelector(".proto-button--legal"),protoLoc=document.querySelector(".proto-button--location"),protoMobile=document.querySelector(".proto-button--mobile"),protoShowAll=document.querySelector(".proto-button--show"),protoShowCookies=document.querySelector(".proto-button--cookies"),protoSuccess=document.querySelector(".proto-button--success"),cookieClose=document.querySelector(".cookie-message-close"),cookieMessage=document.querySelector(".cookie-message"),toastList=[].concat(_toConsumableArray(document.getElementsByClassName("toast"))),dangerToast=document.querySelector(".toast--danger"),learnToast=document.querySelector(".toast--learn"),legalToast=document.querySelector(".toast--legal"),successToast=document.querySelector(".toast--success");legalToast.classList.remove("toast--removed"),setTimeout(function(){legalToast.classList.toggle("toast--hidden")},500),protoMobile.addEventListener("click",function(){udemyMockup.classList.toggle("udemy-mockup--mobile")}),toggleToast(dangerToast,protoDanger),toggleToast(learnToast,protoLearn),toggleToast(legalToast,protoLegal),toggleToast(successToast,protoSuccess),protoSuccess.addEventListener("click",function(){setTimeout(function(){successToast.classList.add("toast--hidden"),setTimeout(function(){successToast.classList.add("toast--removed")},400)},2e3)}),protoLearn.addEventListener("click",function(){setTimeout(function(){learnToast.classList.add("toast--hidden"),setTimeout(function(){learnToast.classList.add("toast--removed")},400)},3500)}),protoLoc.addEventListener("click",function(){udemyMockup.classList.toggle("toast-variant--bottom")});var bgCount=0;protoBackground.addEventListener("click",function(){udemyMockup.classList.remove(udemyBackgrounds[bgCount]),bgCount++,bgCount===udemyBackgrounds.length&&(bgCount=0),udemyMockup.classList.add(udemyBackgrounds[bgCount])}),protoShowAll.addEventListener("click",function(){toastList.forEach(function(o,t){setTimeout(function(){o.classList.remove("toast--removed"),setTimeout(function(){o.classList.remove("toast--hidden")},40),t++},50*t)})}),protoClearAll.addEventListener("click",function(){toastList.forEach(function(o,t){setTimeout(function(){o.classList.add("toast--hidden"),setTimeout(function(){o.classList.add("toast--removed")},400),t++},50*t)})}),protoShowCookies.addEventListener("click",function(){cookieMessage.classList.remove("cookie-message--removed"),cookieMessage.classList.remove("cookie-message--hidden")}),toastList.forEach(function(o){o.addEventListener("click",function(){o.classList.add("toast--hidden"),setTimeout(function(){o.classList.add("toast--removed")},400)})}),cookieClose.addEventListener("click",function(){cookieMessage.classList.add("cookie-message--hidden"),setTimeout(function(){cookieMessage.classList.add("cookie-message--removed")},400)});
//# sourceMappingURL=./main.js.map