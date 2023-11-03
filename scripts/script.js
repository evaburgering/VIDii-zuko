// JavaScript Document


// element knoppen voor de text - vuurnatie
var vuurnatieButton = document.querySelector(".nations button:nth-of-type(1)");

//dit zijn de p elementen
var vuurnatieText = document.querySelector("article:nth-of-type(1) > p:nth-of-type(1)");
var vuurnatieTextOutfit = document.querySelector("article:nth-of-type(1) > p:nth-of-type(2)");
var vuurnatieTextMoments = document.querySelector("article:nth-of-type(1) > p:nth-of-type(3)");
var vuurnatieTextTechnieken = document.querySelector("article:nth-of-type(1) > p:nth-of-type(4)");

//dit zijn de h3 elementen
var vuurnatieTextEpisode = document.querySelector("article:nth-of-type(1) > h3:nth-of-type(1)");
var vuurnatieTextEpisode1 = document.querySelector("article:nth-of-type(1) > h3:nth-of-type(2)");


vuurnatieButton.onclick = function () {
    //dit zijn de p elementen
    displayText(vuurnatieText, "Tekst van de vuurnatie");
    displayText(vuurnatieTextOutfit, "Andere tekst voor zijn outfits");
    displayText(vuurnatieTextMoments, "Andere tekst voor zijn momenten");
    displayText(vuurnatieTextTechnieken, "Andere tekst over ijn technieken");


    //dit zijn de h3 elementen
    displayText(vuurnatieTextEpisode, "dit is een episode");
    displayText(vuurnatieTextEpisode1, "dit is een episode1");
};

function displayText(paragraafElement, tekst) {
    paragraafElement.innerHTML = tekst;
}
  


// element knoppen voor de text - water-natie
var waterButton = document.querySelector(".nations button:nth-of-type(2)");

//dit zijn de p elementen
var waterText = document.querySelector("article:nth-of-type(1) > p:nth-of-type(1)");
var waterTextOutfit = document.querySelector("article:nth-of-type(1) > p:nth-of-type(2)");
var waterTextMoments = document.querySelector("article:nth-of-type(1) > p:nth-of-type(3)");
var waterTextTechnieken = document.querySelector("article:nth-of-type(1) > p:nth-of-type(4)");

//dit zijn de h3 elementen
var waterTextEpisode = document.querySelector("article:nth-of-type(1) > h3:nth-of-type(1)");
var waterTextEpisode1 = document.querySelector("article:nth-of-type(1) > h3:nth-of-type(2)");


waterButton.onclick = function () {
    //dit zijn de p elementen
    displayText(waterText, "Tekst van de vuurnatie");
    displayText(waterTextOutfit, "Andere te");
    displayText(waterTextMoments, "Andere teksenten");
    displayText(waterTextTechnieken, "Andere chnieken");


    //dit zijn de h3 elementen
    displayText(waterTextEpisode, "dit is sode");
    displayText(waterTextEpisode1, "dit sode1");

};

  