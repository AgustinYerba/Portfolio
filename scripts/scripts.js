jQuery(document).ready(function($){  

  var valueTheme = document.getElementById('themeButton').value;/* Obtiene el tema */
  var controlNavBar = undefined; /* Control OPEN/CLOSE de NavBar */

  navBarController();

  /* ============== Control OPEN/CLOSE de NavBar ============== */

    buttonToggleNavBar.onclick = function (valueTheme){
      if (controlNavBar == false){
        document.getElementById('navBarList').className = 'navBarListOPEN';
        
        document.getElementById('languageButton').className = 'languageButtonAnimOPEN'; /* languageButtonOPEN */
        document.getElementById('themeButton').className = 'themeButtonAnimOPEN'; /* themeButtonOPEN */ 

        navBarController();
      }else if (controlNavBar == true){
        document.getElementById('navBarList').className = 'navBarListCLOSE';
        
        document.getElementById('languageButton').className = 'languageButtonAnimCLOSE'; /* languageButtonOPEN */
        document.getElementById('themeButton').className = 'themeButtonAnimCLOSE'; /* themeButtonOPEN */ 

        navBarController();
      } 
    }

    function navBarController (){
      let theme = valueTheme;
  
      if (theme == 'dark' && controlNavBar == true){
        document.getElementById('buttonToggleNavBar').className = 'buttonDarkNavBarToggleCLOSE';
        $("#languageButton").css({"background-image": "url(../img/dk/menuNavDarkLanguage.png)",}); /* languageButton */
        $("#themeButton").css({"background-image": "url(../img/dk/solNavBar.png)",}); /* themeButton */
        document.getElementById('languageButton').className = 'languageButtonAnimCLOSE'; /* languageButtonOPEN */
        document.getElementById('themeButton').className = 'themeButtonAnimCLOSE'; /* themeButtonOPEN */ 
        controlNavBar = false;
      } else if (theme == 'light' && controlNavBar == true){
        document.getElementById('buttonToggleNavBar').className = 'buttonLightNavBarToggleCLOSE';
        $("#languageButton").css({"background-image": "url(../img/lgt/menuNavLightLanguage.png)",}); /* languageButton */
        $("#themeButton").css({"background-image": "url(../img/lgt/lunaNavBar.png)",}); /* themeButton */
        document.getElementById('languageButton').className = 'languageButtonAnimCLOSE'; /* languageButtonOPEN */
        document.getElementById('themeButton').className = 'themeButtonAnimCLOSE'; /* themeButtonOPEN */ 
        controlNavBar = false;
      } else if (theme == 'dark' && controlNavBar == false){
        document.getElementById('buttonToggleNavBar').className = 'buttonDarkNavBarToggleOPEN';
        $("#languageButton").css({"background-image": "url(../img/dk/menuNavDarkLanguage.png)",}); /* languageButton */
        $("#themeButton").css({"background-image": "url(../img/dk/solNavBar.png)",}); /* themeButton */
        document.getElementById('languageButton').className = 'languageButtonAnimOPEN'; /* languageButtonOPEN */
        document.getElementById('themeButton').className = 'themeButtonAnimOPEN'; /* themeButtonOPEN */ 
        controlNavBar = true;
      } else if (theme == 'light' && controlNavBar == false){
        document.getElementById('buttonToggleNavBar').className = 'buttonLightNavBarToggleOPEN';
        $("#languageButton").css({"background-image": "url(../img/lgt/menuNavLightLanguage.png)",}); /* languageButton */
        $("#themeButton").css({"background-image": "url(../img/lgt/lunaNavBar.png)",}); /* themeButton */
        document.getElementById('languageButton').className = 'languageButtonAnimOPEN'; /* languageButtonOPEN */
        document.getElementById('themeButton').className = 'themeButtonAnimOPEN'; /* themeButtonOPEN */ 
        controlNavBar = true;
      } else if (theme == 'dark' && controlNavBar == undefined){
        document.getElementById('buttonToggleNavBar').className = 'buttonDarkNavBarToggleCLOSE';
        $("#languageButton").css({"background-image": "url(../img/dk/menuNavDarkLanguage.png)",}); /* languageButton */
        $("#themeButton").css({"background-image": "url(../img/dk/solNavBar.png)",}); /* themeButton */
        document.getElementById('languageButton').className = 'languageButtonAnimCLOSE'; /* languageButtonOPEN */
        document.getElementById('themeButton').className = 'themeButtonAnimCLOSE'; /* themeButtonOPEN */ 
        controlNavBar = false;
      } else if (theme == 'light' && controlNavBar == undefined){
        document.getElementById('buttonToggleNavBar').className = 'buttonLightNavBarToggleCLOSE';
        $("#languageButton").css({"background-image": "url(../img/lgt/menuNavLightLanguage.png)",}); /* languageButton */
        $("#themeButton").css({"background-image": "url(../img/lgt/lunaNavBar.png)",}); /* themeButton */
        document.getElementById('languageButton').className = 'languageButtonAnimCLOSE'; /* languageButtonOPEN */
        document.getElementById('themeButton').className = 'themeButtonAnimCLOSE'; /* themeButtonOPEN */ 
        controlNavBar = false;
      } 
  
    }

  /* ============== Control OPEN/CLOSE de Presentation Card  ============== */
    let controlPresentationCard = false;

    buttonTogglePresentationCard.onclick = function (){

      if (controlPresentationCard == true){

        document.getElementById('presentationCard').className = 'presentationInfoCardCLOSE';
        document.getElementById('buttonTogglePresentationCard').innerHTML = '&#10097;';

        controlPresentationCard = false;

      } else if (controlPresentationCard == false){

        document.getElementById('presentationCard').className = 'presentationInfoCardOPEN';
        document.getElementById('buttonTogglePresentationCard').innerHTML = '&#10096;';

        controlPresentationCard = true;
      }

    }

  /* ============== Control Tema CLARO/OSCURO ============== */

    /* Imágenes (Tema Claro) */
      var lightTemeImg = [
        /* Luna (Light) ---------- */ '../img/lgt/lunaNavBar.png',
        /* Menu Abierto (Light)--- */ '../img/lgt/menuNavLightOpen.png',
        /* Menu Cerrado (Light)--- */ '../img/lgt/menuNavLightClose.png',
        /* Traducir (Light) ------ */ '../img/lgt/menuNavLightLanguage.png'
      ]

    /* Imágenes (Tema Oscuro) */
      var darkTemeImg = [
        /* Sol (Dark) ----------- */ '../img/dk/solNavBar.png',
        /* Menu Abierto (Dark)--- */ '../img/dk/menuNavDarkOpen.png',
        /* Menu Cerrado (Dark)--- */ '../img/dk/menuNavDarkClose.png',
        /* Traducir (Dark) ------ */ '../img/dk/menuNavDarkLanguage.png'
      ]  

      /* Función */
        themeButton.onclick = function (){
          if (valueTheme == 'dark') {

            detectTheme();

          } else if (valueTheme == 'light') {

            detectTheme();

          }
          

        }

        function detectTheme (){
          let theme = valueTheme;
      
          if (theme == 'light'){
            valueTheme = 'dark';
            document.getElementById('themeButton').value = valueTheme;/* Set el tema */
            
            document.getElementById('buttonToggleNavBar').className = 'buttonDarkNavBarToggleOPEN';
            $("#buttonToggleNavBar").css({"background-image": "url(./img/dk/)",}); /* languageButton */

            $("#languageButton").css({"background-image": "url(./img/dk/menuNavDarkLanguage.png)",}); /* languageButton DARK */
            $("#themeButton").css({"background-image": "url(./img/dk/solNavBar.png)",}); /* themeButton DARK */
        
          } else if (theme == 'dark'){
            valueTheme = 'light';
            document.getElementById('themeButton').value = valueTheme;/* Set el tema */

            document.getElementById('buttonToggleNavBar').className = 'buttonLightNavBarToggleOPEN';

            $("#languageButton").css({"background-image": "url(./img/lgt/menuNavLightLanguage.png)",}); /* languageButton LIGHT */
            $("#themeButton").css({"background-image": "url(./img/lgt/lunaNavBar.png)",}); /* themeButton LIGHT */
          } 
      
        }

  /* ============== Gestion y control de HABILIDADES ============== */

    var skillImage = [undefined,
    /* html5----------- */'./img/logos/html5Logo.png',
    /* css3------------ */'./img/logos/css3Logo.png',
    /* javascript------ */'./img/logos/jsLogo.png',
    /* mysql----------- */'./img/logos/mysqlLogo.png',
    /* firebase-------- */'./img/logos/firebaseLogo.png',
    /* react----------- */'./img/logos/reactLogo.png',
    /* angular--------- */'./img/logos/angularLogo.png',
    /* nodejs---------- */'./img/logos/nodejsLogo.png',
    /* express--------- */'./img/logos/expressjsLogo.png',
    /* mongodb--------- */'./img/logos/mongodb.png',
   ]

   var skillDescription = [undefined,
    /* html5----------- */'descripcion de ejemplo a ver que onda con esto',
    /* css3------------ */'descripcion de ejemplo a ver que onda con esto',
    /* javascript------ */'descripcion de ejemplo a ver que onda con esto',
    /* mysql----------- */'descripcion de ejemplo a ver que onda con esto',
    /* firebase-------- */'descripcion de ejemplo a ver que onda con esto',
    /* react----------- */'EN DESARROLLO...',
    /* angular--------- */'PROXIMAMENTE descripcion de ejemplo a ver que onda con esto',
    /* nodejs---------- */'descripcion de ejemplodescripcion de ejemplo a ver que onda con esto a ver que onda con esto',
    /* express--------- */'EXPRESS descripcion de ejemplo a ver que onda con estodescripcion de ejemplo a ver que onda con esto',
    /* mongodb--------- */'PROXIMAMENTEdescripcion de ejemplo a ver que onda con esto',
  ]

   var skillName = [undefined,
    /* html5----------- */'HTML5',
    /* css3------------ */'CSS3',
    /* javascript------ */'JavaScript',
    /* mysql----------- */'MySQL',
    /* firebase-------- */'Firebase',
    /* react----------- */'React',
    /* angular--------- */'Angular',
    /* nodejs---------- */'NodeJS',
    /* express--------- */'EXPRESS',
    /* mongodb--------- */'MongoDB',
  ]

    /* Controlador para el zindex de la fila de abajo (hace que vaya en regresiva) */
      /* DESACTIVAR PARA USAR INDEX */  
         let controlIndexB;
          for (idSkill in skillName) {
            controlIndexB = idSkill;
          }   


    /* Creacion de elementos del menú */
      for (idSkill in skillName) {
        /* Saltea el indefinido del indice 0 */
            if (idSkill == 0){
                continue;
            } else if (idSkill <= 5){ /* Agrega items a la primera fila */

              /* Crea la lista del menú de burgers */
              let menu = document.getElementById('skillsContainerA');

              let imgSkill = `<li class="skillImageContainer"><img class="skillImage" src="${skillImage[idSkill]}" alt="${skillName[idSkill]} logo png"></li>`;
              let divisoryLineSkill = `<hr class="skillDivisoryLine">`;
              let descriptionSkill = `<li class="skillTextContainer"><p class="skillText">${skillDescription[idSkill]}</p></li>`;
              let nameSkill = `<h1 class="skillTitle">${skillName[idSkill]}</h1>`;

              /* style="z-index:${idSkill};" en el segundo article de debajo */
              menu.innerHTML += `<article class="skillSpecificContainer" style="z-index:${idSkill}; id="${skillName[idSkill]+[idSkill]}><ul class="skillInfoContainer"> ${imgSkill + divisoryLineSkill + descriptionSkill + nameSkill} </ul></article>`;            
              
            } else if (idSkill >= 6){ /* Agrega items a la segunda fila */

              /* Crea la lista del menú de burgers */
              let menu = document.getElementById('skillsContainerB');

              let imgSkill = `<li class="skillImageContainer"><img class="skillImage" src="${skillImage[idSkill]}" alt="${skillName[idSkill]} logo png"></li>`;
              let divisoryLineSkill = `<hr class="skillDivisoryLine">`;
              let descriptionSkill = `<li class="skillTextContainer"><p class="skillText">${skillDescription[idSkill]}</p></li>`;
              let nameSkill = `<h1 class="skillTitle">${skillName[idSkill]}</h1>`;
              
              /* style="z-index:${controlIndexB};"  en el segundo article de debajo*/
              menu.innerHTML += `<article class="skillSpecificContainer" style="z-index:${controlIndexB}; id="${[idSkill]}"><ul class="skillInfoContainer"> ${imgSkill + divisoryLineSkill + descriptionSkill + nameSkill} </ul></article>`;            
              controlIndexB--;
              /* controlIndexB--; */
            } 

            

            
      }

  /* ============== Seccion de EXPERIENCIA ============== */
    
    /* GRID con los logos */
      var experienceLogos = [undefined,
        /* html5----------- */'./img/logos/html5Logo.png',
        /* css3------------ */'./img/logos/css3Logo.png',
        /* javascript------ */'./img/logos/jsLogo.png',
        /* mysql----------- */'./img/logos/mysqlLogo.png',
        /* firebase-------- */'./img/logos/firebaseLogo.png',
        /* react----------- */'./img/logos/reactLogo.png',
        /* angular--------- */'./img/logos/angularLogo.png',
        /* nodejs---------- */'./img/logos/nodejsLogo.png',
        /* express--------- */'./img/logos/expressjsLogo.png',
        /* mongodb--------- */'./img/logos/mongodb.png',
      ]

      var experienceName = [undefined,
        /* html5----------- */'HTML5',
        /* css3------------ */'CSS3',
        /* javascript------ */'JavaScript',
        /* mysql----------- */'MySQL',
        /* firebase-------- */'Firebase',
        /* react----------- */'React',
        /* angular--------- */'Angular',
        /* nodejs---------- */'NodeJS',
        /* express--------- */'EXPRESS',
        /* mongodb--------- */'MongoDB',
      ]
      
});
