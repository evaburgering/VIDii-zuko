// JavaScript Document


// element knoppen voor de text - vuurnatie
var vuurnatieButton = document.querySelector(".nations button:nth-of-type(1)");


//dit zijn de p elementen
var vuurnatieText = document.querySelector("article:nth-of-type(1) > p:nth-of-type(1)");
var vuurnatieTextOutfit = document.querySelector("article:nth-of-type(1) > p:nth-of-type(2)");
var vuurnatieTextMoments = document.querySelector("article:nth-of-type(1) > ul > li:nth-of-type(1)");
var vuurnatieTextTechnieken = document.querySelector("article:nth-of-type(1) > p:nth-of-type(3)");

//dit zijn de h3 elementen
var vuurnatieTextEpisode = document.querySelector("article:nth-of-type(1) > ul > li:nth-of-type(1)");
var vuurnatieTextEpisode1 = document.querySelector("article:nth-of-type(1) > h3:nth-of-type(1)");


vuurnatieButton.onclick = function () {
    //dit is de achtergrond
    document.body.style.backgroundImage = "url('images/fire-gif.gif')";

    //dit zijn de p elementen
    displayText(vuurnatieText, "At the beginning of the series, Zuko has a distinctive tail known as a <strong>'sikha.'</strong> The sikha represents the spiritual connection and obedience of firebenders to the Fire Lord and their national identity. Zuko's sikha is an important symbol of his loyalty to the Fire Nation and his desire to find the Avatar, Aang, in order to restore honor to his family and himself.");
    displayText(vuurnatieTextOutfit, "Tijdens zijn ballingschap in de Aardekoninkrijk-stad Ba Sing Se draagt Zuko een eenvoudiger en casual outfit, zonder zijn topknoop. Deze outfit vertegenwoordigt zijn tijdelijke breuk met de Vuurnatie en zijn zoektocht naar een nieuw leven.");
    displayText(vuurnatieTextMoments, "Andere tekst voor zijn momenten");
    displayText(vuurnatieTextTechnieken, "Zuko learned the technique <strong>'Generating Lightning'</strong> from his uncle Iroh, a master of firebending and lightning control. This advanced technique requires not only powerful firebending skills but also an understanding of inner balance and control over chi. Zuko was one of the few who successfully mastered this technique. It later became a significant weapon in his arsenal and played a crucial role in the series.");


    //dit zijn de h3 elementen
    displayText(vuurnatieTextEpisode, "episode 7,13,and 20, season 2 and 3");
    displayText(vuurnatieTextEpisode1, "episode 16,19 and 21 season 3");
};

function displayText(paragraafElement, tekst) {
    paragraafElement.innerHTML = tekst;
}
  









// element knoppen voor de text - water-natie
var waterButton = document.querySelector(".nations button:nth-of-type(2)");

//dit zijn de p elementen
var waterText = document.querySelector("article:nth-of-type(1) > p:nth-of-type(1)");
var waterTextOutfit = document.querySelector("article:nth-of-type(1) > p:nth-of-type(2)");
var waterTextMoments = document.querySelector("article:nth-of-type(1)  ul > li:nth-of-type(1)");
var waterTextTechnieken = document.querySelector("article:nth-of-type(1) > p:nth-of-type(4)");

//dit zijn de h3 elementen
var waterTextEpisode = document.querySelector("article:nth-of-type(1) > h3:nth-of-type(1)");
var waterTextEpisode1 = document.querySelector("article:nth-of-type(1) > h3:nth-of-type(1)");


waterButton.onclick = function () {
    //dit is de achtergrond
    document.body.style.backgroundImage = "url('images/water1-giphy.gif')";

    //dit zijn de p elementen
    displayText(waterText, "Tekst van de aardenrijk");
    displayText(waterTextOutfit, "Andere te");
    displayText(waterTextMoments, "<strong>Zuko learns waterbending from Katara:</strong> After Zuko is injured and cared for by Katara, he learns some basic principles of waterbending. This is a significant turning point as it's the first time he attempts to master bending techniques from another nation.<strong>Confrontation with his past:</strong> In the Water Tribe, Zuko confronts his family's history and the complexity of his relationship with his father, the Fire Nation, and his quest for honor.<strong>Collaboration with Katara:</strong> During their time in the Water Tribe, Zuko and Katara work together on various occasions. This leads to moments of understanding and growth in their relationship, sowing the seeds of a possible alliance.<strong>The abduction of Appa:</strong> In Book 2, Episode 17, ''Lake Laogai,' Zuko plays a key role in the abduction of Appa. While this event largely takes place in Ba Sing Se of the Earth Kingdom, it has significant consequences for Team Avatar's journey and dynamics with Zuko. <strong>Zuko's confrontation with Zhao:</strong> Zuko has a confrontation with Commander Zhao in the Southern Water Tribe. This marks one of the early confrontations with important characters in the series.);");
    displayText(waterTextTechnieken, "In the Water Tribe, Zuko learns the 'Breath of Fire,' a technique he later applies to his firebending. This involves bending fire by controlling his breath, enhancing his firebending techniques and allowing for more precision and power.");

    //dit zijn de h3 elementen
    displayText(waterTextEpisode, "dit is sode");
    displayText(waterTextEpisode1, "dit sode1");
};







// element knoppen voor de text - aarden-natie
var aardenButton = document.querySelector(".nations button:nth-of-type(3)");

//dit zijn de p elementen
var aardenText = document.querySelector("article:nth-of-type(1) > p:nth-of-type(1)");
var aardenTextOutfit = document.querySelector("article:nth-of-type(1) > p:nth-of-type(2)");
var aardenTextMoments = document.querySelector("article:nth-of-type(1)  ul > li:nth-of-type(1)");
var aardenTextTechnieken = document.querySelector("article:nth-of-type(1) > p:nth-of-type(4)");

//dit zijn de h3 elementen
var aardenTextEpisode = document.querySelector("article:nth-of-type(1) > h3:nth-of-type(1)");
var aardenTextEpisode1 = document.querySelector("article:nth-of-type(1) >  h3:nth-of-type(1)");


aardenButton.onclick = function () {
//dit is de achtergrond
document.body.style.backgroundImage = "url('images/dirt.gif')";

    //dit zijn de p elementen
    displayText(aardenText, "Tekst van de aardenrijk");
    displayText(aardenTextOutfit, "Zuko's green outfit, which he wore during his exile in the Earth Kingdom, symbolized a break from his old life in the Fire Nation and his quest for a new identity and purpose. This clothing style was more in line with the simple attire of Earth Kingdom residents, which starkly contrasted with the striking red Fire Nation mantle. During his exile, Zuko often used the alias 'Lee' to conceal his true identity and blend in, especially due to the hostility toward the Fire Nation in the Earth Kingdom.");
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
var luchtTextMoments = document.querySelector("article:nth-of-type(1)  ul > li:nth-of-type(1)");
var luchtTextTechnieken = document.querySelector("article:nth-of-type(1) > p:nth-of-type(4)");

//dit zijn de h3 elementen
var luchtTextEpisode = document.querySelector("article:nth-of-type(1) > h3:nth-of-type(1)");
var luchtTextEpisode1 = document.querySelector("article:nth-of-type(1) > h3:nth-of-type(1)");


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

