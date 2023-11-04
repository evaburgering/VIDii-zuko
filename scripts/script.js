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
    //dit is de achtergrond
    document.body.style.backgroundImage = "url('images/fire-gif.gif')";

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
    //dit is de achtergrond
    document.body.style.backgroundImage = "url('images/water1-giphy.gif')";

    //dit zijn de p elementen
    displayText(aardenText, "Tekst van de aardenrijk");
    displayText(aardenTextOutfit, "Andere te");
    displayText(aardenTextMoments, "Andere teksenten");
    displayText(aardenTextTechnieken, "Andere chnieken");

    //dit zijn de h3 elementen
    displayText(aardenTextEpisode, "dit is sode");
    displayText(aardenTextEpisode1, "dit sode1");
};


// element knoppen voor de text - aarden-natie
var aardenButton = document.querySelector(".nations button:nth-of-type(3)");

//dit zijn de p elementen
var aardenText = document.querySelector("article:nth-of-type(1) > p:nth-of-type(1)");
var aardenTextOutfit = document.querySelector("article:nth-of-type(1) > p:nth-of-type(2)");
var aardenTextMoments = document.querySelector("article:nth-of-type(1) > p:nth-of-type(3)");
var aardenTextTechnieken = document.querySelector("article:nth-of-type(1) > p:nth-of-type(4)");

//dit zijn de h3 elementen
var aardenTextEpisode = document.querySelector("article:nth-of-type(1) > h3:nth-of-type(1)");
var aardenTextEpisode1 = document.querySelector("article:nth-of-type(1) > h3:nth-of-type(2)");


aardenButton.onclick = function () {
//dit is de achtergrond
document.body.style.backgroundImage = "url('images/water-giphy.gif')";

    //dit zijn de p elementen
    displayText(aardenText, "Tekst van de aardenrijk");
    displayText(aardenTextOutfit, "Andere te");
    displayText(aardenTextMoments, "Andere teksenten");
    displayText(aardenTextTechnieken, "Andere chnieken");


    //dit zijn de h3 elementen
    displayText(aardenTextEpisode, "dit is sode");
    displayText(aardenTextEpisode1, "dit sode1");

};


// element knoppen voor de text - lucht-natie
var luchtButton = document.querySelector(".nations button:nth-of-type(4)");

//dit zijn de p elementen
var luchtText = document.querySelector("article:nth-of-type(1) > p:nth-of-type(1)");
var luchtTextOutfit = document.querySelector("article:nth-of-type(1) > p:nth-of-type(2)");
var luchtTextMoments = document.querySelector("article:nth-of-type(1) > p:nth-of-type(3)");
var luchtTextTechnieken = document.querySelector("article:nth-of-type(1) > p:nth-of-type(4)");

//dit zijn de h3 elementen
var luchtTextEpisode = document.querySelector("article:nth-of-type(1) > h3:nth-of-type(1)");
var luchtTextEpisode1 = document.querySelector("article:nth-of-type(1) > h3:nth-of-type(2)");


luchtButton.onclick = function () {
    //dit is de achtergrond
    document.body.style.backgroundImage = "url('images/water-giphy.gif')";

    //dit zijn de p elementen
    displayText(luchtText, "Tekst van de luchtrijk");
    displayText(luchtTextOutfit, "Andere tekst dan hiervoor");
    displayText(luchtTextMoments, "Andere teksenten dan die andere");
    displayText(luchtTextTechnieken, "Andere technieken duhu");


    //dit zijn de h3 elementen
    displayText(luchtTextEpisode, "dit is sode");
    displayText(luchtTextEpisode1, "dit sode1");

};

    //hier onder komt de code voor de verandere zuko fotos die bij de verschillende naties passen
    var zukoAfbeelding = document.querySelector("img[src='images/zuko-vuur.png']");

    zukoAfbeelding.style.transition = "opacity 0.3s ease"

    vuurnatieButton.addEventListener("click", function () {
    // Verandert de Zuko-afbeelding voor de vuur-natie met een trasitie
        zukoAfbeelding.style.opacity = 0; // vervagen van de afbeelding
        setTimeout(function () {
          zukoAfbeelding.src = "images/zuko-vuur.png";
          zukoAfbeelding.style.opacity = 1; //  verschijnen met vervagen
        }, 200); //overgang in milliseconden
      });
      
      waterButton.addEventListener("click", function () {
     // Verandert de Zuko-afbeelding voor de water-natie met een trasitie
        zukoAfbeelding.style.opacity = 0; // vervagen van de afbeelding
        setTimeout(function () {
          zukoAfbeelding.src = "images/zuko-water.png";
          zukoAfbeelding.style.opacity = 1; //verschijnen met vervagen
        }, 200); //overgang in milliseconden
      });
      
      aardenButton.addEventListener("click", function () {
        // Verandert de Zuko-afbeelding voor de aarden-natie met een trasitie
        zukoAfbeelding.style.opacity = 0; // vervagen van de afbeelding
        setTimeout(function () {
          zukoAfbeelding.src = "images/zuko-aarde.png";
          zukoAfbeelding.style.opacity = 1; //  verschijnen met vervagen
        }, 200); // overgang in milliseconden
      });
      
      
      luchtButton.addEventListener("click", function () {
        // Verandert de Zuko-afbeelding voor de lucht-natie met een trasitie
        zukoAfbeelding.style.opacity = 0; // Begin met het vervagen van de afbeelding
        setTimeout(function () {
          zukoAfbeelding.src = "images/zuko-lucht.png";
          zukoAfbeelding.style.opacity = 1; // Laat de nieuwe afbeelding verschijnen met vervagen
        }, 200); // Overeenkomstig met de duur van de overgang in milliseconden
      });

