// JavaScript Document


// element knoppen voor de text - vuurnatie
var vuurnatieButton = document.querySelector(".nations button:nth-of-type(1)");


//dit zijn de p elementen
var vuurnatieText = document.querySelector("article:nth-of-type(1) > p:nth-of-type(1)");
var vuurnatieTextOutfit = document.querySelector("article:nth-of-type(1) > p:nth-of-type(2)");
var vuurnatieTextMoments1 = document.querySelector("article:nth-of-type(1) > ul > li:nth-of-type(2)");
var vuurnatieTextMoments2 = document.querySelector("article:nth-of-type(1) > ul > li:nth-of-type(3)");
var vuurnatieTextMoments3 = document.querySelector("article:nth-of-type(1) > ul > li:nth-of-type(4)");
var vuurnatieTextMoments4 = document.querySelector("article:nth-of-type(1) > ul > li:nth-of-type(5)");
var vuurnatieTextMoments5 = document.querySelector("article:nth-of-type(1) > ul > li:nth-of-type(6)");
var vuurnatieTextTechnieken = document.querySelector("article:nth-of-type(1) > p:nth-of-type(3)");

//dit zijn de h3 elementen
var vuurnatieTextEpisode = document.querySelector("article:nth-of-type(1) > ul > li:nth-of-type(1)");
var vuurnatieTextEpisode1 = document.querySelector("h3");


vuurnatieButton.onclick = function () {
    //dit is de achtergrond
    document.body.style.backgroundImage = "url('images/fire-gif.gif')";

    //dit zijn de p elementen
    displayText(vuurnatieText, "At the beginning of the series, Zuko has a distinctive tail known as a <strong>'sikha.'</strong> The sikha represents the spiritual connection and obedience of firebenders to the Fire Lord and their national identity. Zuko's sikha is an important symbol of his loyalty to the Fire Nation and his desire to find the Avatar, Aang, in order to restore honor to his family and himself.");
    displayText(vuurnatieTextOutfit, "During his exile in the Earth Kingdom city of Ba Sing Se, Zuko wears a simpler and more casual outfit, without his topknot. This attire represents his temporary separation from the Fire Nation and his quest for a new life.");
    displayText(vuurnatieTextMoments1, "<strong>New Friendships:</strong> Zuko formed meaningful Earth Kingdom friendships, experiencing their kindness and broadening his perspective.");
    displayText(vuurnatieTextMoments2, "<strong>The Blue Spirit:</strong> Operating as the Blue Spirit, Zuko fought injustice discreetly while wrestling with his inner conflict.");
    displayText(vuurnatieTextMoments3, "<strong>Greater Understanding of Injustice:</strong> Zuko confronted the war's consequences and the Fire Nation's cruelty, heightening his awareness of its injustices.");
    displayText(vuurnatieTextMoments4, "<strong>Search for Inner Peace:</strong> During his exile, Zuko pursued meditation and inner tranquility.");
    displayText(vuurnatieTextMoments5, "<strong>Encounters with the Avatar Group:</strong>Zuko met Avatar group members, Aang, Katara, Sokka, and Toph, reshaping his beliefs and inspiring his decision to join them in the quest for peace.");
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
var waterTextMoments1 = document.querySelector("article:nth-of-type(1)  ul > li:nth-of-type(2)");
var waterTextMoments2 = document.querySelector("article:nth-of-type(1)  ul > li:nth-of-type(3)");
var waterTextMoments3 = document.querySelector("article:nth-of-type(1)  ul > li:nth-of-type(4)");
var waterTextMoments4 = document.querySelector("article:nth-of-type(1)  ul > li:nth-of-type(5)");
var waterTextMoments5 = document.querySelector("article:nth-of-type(1)  ul > li:nth-of-type(6)");
var waterTextTechnieken = document.querySelector("article:nth-of-type(1) > p:nth-of-type(3)");

//dit zijn de h3 elementen
var waterTextEpisode = document.querySelector("article:nth-of-type(1) > ul > li:nth-of-type(1)");
var waterTextEpisode1 = document.querySelector("h3");


waterButton.onclick = function () {
    //dit is de achtergrond
    document.body.style.backgroundImage = "url('images/water1-giphy.gif')";

    //dit zijn de p elementen
    displayText(waterText, "When Zuko arrives at the Water Tribe, his hair becomes looser and longer, covering his face. This change is a symbol of his willingness to change and leave his past behind to pursue a better future. This alteration in his appearance highlights his inner transformation and his quest for redemption and reconciliation.");
    displayText(waterTextOutfit, "Zuko's Fire Nation attire initially causes tension in the Water Tribe due to historical animosities. Recognized as a Fire Nation representative, it fosters distrust. Over time, he realizes its hindrance to pursuing peace and cooperation, leading him to adopt Water Tribe clothing, symbolizing his personal transformation and quest for reconciliation.");
    displayText(waterTextMoments1, "<strong>Zuko learns waterbending from Katara:</strong> When Zuko is injured and tended to by Katara, he begins learning waterbending, marking his first attempt to master bending from a different nation.);");
    displayText(waterTextMoments2, "<strong>Confrontation with his past:</strong> In the Water Tribe, Zuko confronts his family's history and the complexity of his relationship with his father, the Fire Nation, and his quest for honor.");
    displayText(waterTextMoments3, "<strong>Collaboration with Katara:</strong> In the Water Tribe, Zuko and Katara collaborate on several occasions, fostering mutual understanding and relationship growth, hinting at a potential alliance.");
    displayText(waterTextMoments4, "<strong>The abduction of Appa:</strong> Zuko plays a pivotal role in Appa's abduction, impacting Team Avatar's journey and dynamics.");
    displayText(waterTextMoments5, "<strong>Zuko's confrontation with Zhao:</strong> Zuko has a confrontation with Commander Zhao in the Southern Water Tribe. This marks one of the early confrontations with important characters in the series.);    ");
    displayText(waterTextTechnieken, "In the Water Tribe, Zuko learns the <strong>'Breath of Fire,'</strong> a technique he later applies to his firebending. This involves bending fire by controlling his breath, enhancing his firebending techniques and allowing for more precision and power.");

    //dit zijn de h3 elementen
    displayText(waterTextEpisode, "In the beginning of season 2 until mid season 3");
    displayText(waterTextEpisode1, "Season 2");
};











// element knoppen voor de text - aarden-natie
var aardenButton = document.querySelector(".nations button:nth-of-type(3)");

//dit zijn de p elementen
var aardenText = document.querySelector("article:nth-of-type(1) > p:nth-of-type(1)");
var aardenTextOutfit = document.querySelector("article:nth-of-type(1) > p:nth-of-type(2)");
var aardenTextMoments1 = document.querySelector("article:nth-of-type(1)  ul > li:nth-of-type(2)");
var aardenTextMoments2 = document.querySelector("article:nth-of-type(1)  ul > li:nth-of-type(3)");
var aardenTextMoments3 = document.querySelector("article:nth-of-type(1)  ul > li:nth-of-type(4)");
var aardenTextMoments4 = document.querySelector("article:nth-of-type(1)  ul > li:nth-of-type(5)");
var aardenTextMoments5 = document.querySelector("article:nth-of-type(1)  ul > li:nth-of-type(6)");
var aardenTextTechnieken = document.querySelector("article:nth-of-type(1) > p:nth-of-type(3)");

//dit zijn de h3 elementen
var aardenTextEpisode = document.querySelector("article:nth-of-type(1) > ul > li:nth-of-type(1)");
var aardenTextEpisode1 = document.querySelector("h3");


aardenButton.onclick = function () {
//dit is de achtergrond
document.body.style.backgroundImage = "url('images/dirt.gif')";

    //dit zijn de p elementen
    displayText(aardenText, "During his time in the Earth Kingdom, Zuko's change in hairstyle, letting go of his topknot for a more casual and loose look, symbolizes his character growth and temporary detachment from the Fire Nation. It visually represents his pursuit of a new life and purpose beyond chasing the Avatar.");
    displayText(aardenTextOutfit, "Zuko's Earth Kingdom attire symbolized his departure from the Fire Nation. It differed from the red Fire Nation clothing, and he often used the alias 'Lee' to hide his identity while fitting in with Earth Kingdom residents due to their hostility toward the Fire Nation.");
    displayText(aardenTextMoments1, "<strong>Meeting Jet and rejection of violence:</strong> Zuko briefly joins the Freedom Fighter Jet, but after a confrontation over innocent villagers, he chooses non-violence and leaves the group.");
    displayText(aardenTextMoments2, "<strong>Meeting Toph Beifong:</strong> In season 2, Zuko briefly joins the Avatar's group, where he meets Toph. Her fearless and independent attitude helps Zuko become more self-confident and resilient.");
    displayText(aardenTextMoments3, "<strong>Decision to help the Avatar:</strong> Zuko chooses to assist the Avatar instead of capturing him in 'The Crossroads of Destiny,' a crucial decision in his character development as he reconsiders his relationship with his father and his desire for honor.");
    displayText(aardenTextMoments4, "<strong>Compassion towards Katara:</strong> Zuko's offer to help Katara find Appa in 'Lake Laogai' shows his compassion and growth, paving the way for further character development.");
    displayText(aardenTextMoments5, "<strong>Friendship with Iroh and tea sessions:</strong> During his stay in Ba Sing Se, Zuko develops a deeper bond with his uncle Iroh. Iroh's calm and peaceful nature positively influences Zuko.");
    displayText(aardenTextTechnieken, "During his time in the Earth Kingdom, Zuko learned new firebending techniques, chose non-violence after a conflict with Jet, gained confidence through meeting Toph, and showed compassion, especially towards Katara. Tea sessions with Uncle Iroh promoted inner growth and character development.");


    //dit zijn de h3 elementen
    displayText(aardenTextEpisode, "Episode 10,13,20 of season 2 ");
    displayText(aardenTextEpisode1, "Seizoen 2 and 3");

};







// element knoppen voor de text - lucht-natie
var luchtButton = document.querySelector(".nations button:nth-of-type(4)");

//dit zijn de p elementen
var luchtText = document.querySelector("article:nth-of-type(1) > p:nth-of-type(1)");
var luchtTextOutfit = document.querySelector("article:nth-of-type(1) > p:nth-of-type(2)");
var luchtTextMoments1 = document.querySelector("article:nth-of-type(1)  ul > li:nth-of-type(2)");
var luchtTextMoments2 = document.querySelector("article:nth-of-type(1)  ul > li:nth-of-type(3)");
var luchtTextMoments3 = document.querySelector("article:nth-of-type(1)  ul > li:nth-of-type(4)");
var luchtTextMoments4 = document.querySelector("article:nth-of-type(1)  ul > li:nth-of-type(5)");
var luchtTextMoments5 = document.querySelector("article:nth-of-type(1)  ul > li:nth-of-type(6)");
var luchtTextTechnieken = document.querySelector("article:nth-of-type(1) > p:nth-of-type(3)");

//dit zijn de h3 elementen
var luchtTextEpisode = document.querySelector("article:nth-of-type(1) > ul > li:nth-of-type(1)");
var luchtTextEpisode1 = document.querySelector("h3");


luchtButton.onclick = function () {
    //dit is de achtergrond
    document.body.style.backgroundImage = "url('images/water-giphy.gif')";

    //dit zijn de p elementen
    displayText(luchtText, "Zuko begins to grow his hair longer, and this change in his hairstyle symbolizes his growth and transformation as a character. The longer, loose hair represents a more relaxed and open demeanor, indicating that Zuko is becoming increasingly comfortable in his new role as an ally of Aang and is deeply committed to becoming a better person.");
    displayText(luchtTextOutfit, "Zuko's retention of his Fire Nation attire in the Western Air Temple while collaborating with Team Avatar reflects his inner conflicts and desire to leave his past behind, all the while symbolizing his heritage and former loyalty. It portrays his complex character and inner struggle.");
    displayText(luchtTextMoments1, "<strong>Quest for His Inner Fire</strong>Zuko's symbolic journey to discover his true identity and purpose occurred during his time in the Air Nomad temples.");
    displayText(luchtTextMoments2, "<strong>Meeting Guru Pathik</strong>In the Air Nomad temples, Zuko encountered Guru Pathik, who taught him about inner balance and emotional control.");
    displayText(luchtTextMoments3, "<strong>Meeting the Sun Warriors:</strong>Zuko met the Sun Warriors in the Air Nomad temples, where he confronted the consequences of Fire Nation actions and desired reconciliation.");
    displayText(luchtTextMoments4, "<strong>Understanding of Peace and Responsibility</strong>During his time in the Air Nomad temples, Zuko developed a deeper comprehension of peace and his responsibility to restore balance in the world.");
    displayText(luchtTextMoments5, "<strong>Reconnecting with Uncle Iroh:</strong>While staying in the Western Air Temple, Zuko reunited with his beloved Uncle Iroh, who had been imprisoned by the Fire Nation. This reconnection marked a significant moment in Zuko's journey as he sought guidance and redemption from Iroh, who had become a source of wisdom and support in his life.");
    displayText(luchtTextTechnieken, "In the Air Temples, Zuko learned crucial life lessons, including inner balance, self-discovery, responsibility, and empathy, all of which played a vital role in his character development.");


    //dit zijn de h3 elementen
    displayText(luchtTextEpisode, "Episode 19 season two, 6 and 3 from season 3");
    displayText(luchtTextEpisode1, "In the end of season two");

};








    //hier onder komt de code voor de verandere zuko fotos die bij de verschillende naties passen
    var zukoAfbeelding = document.querySelector("img[src='images/zuko-vuur.png']");

    zukoAfbeelding.style.transition = "opacity 0.3s ease"

    vuurnatieButton.addEventListener("click", function () {
    // Verandert de Zuko-afbeelding voor de vuur-natie met een trasitie
        zukoAfbeelding.style.opacity = 0; // vervagen van de afbeelding
        setTimeout(function () {
          zukoAfbeelding.src = "images/zuko-vuur.png"; //  bron:https://ugokawaii.com/en/others/burning-flame/
          zukoAfbeelding.style.opacity = 1; //  verschijnen met vervagen bron:ChatGpt
        }, 200); //overgang in milliseconden
      });
      
      waterButton.addEventListener("click", function () {
     // Verandert de Zuko-afbeelding voor de water-natie met een trasitie
        zukoAfbeelding.style.opacity = 0; // vervagen van de afbeelding
        setTimeout(function () {
          zukoAfbeelding.src = "images/zuko-water.png"; //bron: https://giphy.com/stickers/zouksingapore-transparent-qHzA41vPQ4NPybwe6X
          zukoAfbeelding.style.opacity = 1; //verschijnen met vervagen bron:ChatGpt
        }, 200); //overgang in milliseconden
      });
      
      aardenButton.addEventListener("click", function () {
        // Verandert de Zuko-afbeelding voor de aarden-natie met een trasitie
        zukoAfbeelding.style.opacity = 0; // vervagen van de afbeelding
        setTimeout(function () {
          zukoAfbeelding.src = "images/zuko-aarde.png"; //bron:https://koby.games/2d-animations
          zukoAfbeelding.style.opacity = 1; //  verschijnen met vervagen bron:ChatGpt
        }, 200); // overgang in milliseconden
      });
      
      
      luchtButton.addEventListener("click", function () {
        // Verandert de Zuko-afbeelding voor de lucht-natie met een trasitie
        zukoAfbeelding.style.opacity = 0; // vervagen van de afbeelding
        setTimeout(function () {
          zukoAfbeelding.src = "images/zuko-lucht.png"; //bron:https://giphy.com/stickers/avatar-elementi-4-sIw0RS82ZT32uZ9OER
          zukoAfbeelding.style.opacity = 1; //  verschijnen met vervagen bron:ChatGpt
        }, 200); //  overgang in milliseconden
      });








      
      
//  easter egg code, bron: Chat GPT
//  Bron van bliksem:https://openprocessing.org/sketch/872004/
      const gif = document.createElement('img');
      gif.src = 'images/bliksem.gif';
      gif.alt = 'Bliksem GIF';
      gif.style.cssText = 'position:fixed;top:0;left:0;width:80%;height:100%;display:none';
      document.body.appendChild(gif); //Hierdoor wordt het element aan de pagina toegevoegd, maar het blijft verborgen.
      
      const zukoHeading = document.getElementById('zuko-bliksem');
      
      zukoHeading.addEventListener('click', function() {
        gif.style.display = 'block';
        setTimeout(() => gif.style.display = 'none', 3000);
      });
      