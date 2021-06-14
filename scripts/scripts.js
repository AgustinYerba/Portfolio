jQuery(document).ready(function($){  
  /* ~~~~~~~~~~~~~~~~ GLOBALES ~~~~~~~~~~~~~~~~ */
    randomizeColour = [
      'filter: drop-shadow(0 0px 1.0vw rgb(255, 0, 0));',
      'filter: drop-shadow(0 0px 1.0vw rgb(255, 94, 0));',
      'filter: drop-shadow(0 0px 1.0vw rgb(255, 136, 0));', 
      'filter: drop-shadow(0 0px 1.0vw rgb(255, 208, 0));', 
      'filter: drop-shadow(0 0px 1.0vw rgb(208, 255, 0));', 
      'filter: drop-shadow(0 0px 1.0vw rgb(94, 255, 0));',
      'filter: drop-shadow(0 0px 1.0vw rgb(0, 255, 128));',  
      'filter: drop-shadow(0 0px 1.0vw rgb(0, 255, 234));',
      'filter: drop-shadow(0 0px 1.0vw rgb(0, 195, 255));',
      'filter: drop-shadow(0 0px 1.0vw rgb(0, 89, 255));',
      'filter: drop-shadow(0 0px 1.0vw rgb(68, 0, 255));',
    ]; 

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


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



    /* Controlador para el zindex de la fila de abajo (hace que vaya en regresiva) */
      /* DESACTIVAR PARA USAR INDEX */  
         let controlIndexB;
          for (idSkill in skillName) {
            controlIndexB = idSkill;
          }   


    /* Creacion de elementos del menú */
      for (idSkill in skillName) {
        /* Saltea el indefinido del indice 0 */
            if (skillName[idSkill] == undefined){
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

    /* ~~~~~ Globales de la seccion de experiencia ~~~~~ */
      var previewState = false; /* Controlador de apertura/cierre del preview */
      var latestButton; /* Almacena el ultimo boton que fue tocado */
      var photoPreview; /* Almacena el nombre indice del array asosiativo con la ruta de la imagen del preview */
      var sliderPreviewController = 1; /* Indice numerico que Controla el slider de las fotos del preview */
      var previewOpened; /* almacena cual es el preview que esta abierto para manejar el slider */

    /* NOMBRE */
      var experienceName = [undefined,
        /* LT House----------- */'LT House',
      ]

    /* LOGO */
      var experienceLogos = [undefined,
        /* LT House----------- */'./img/ltPreviews/ltLogo.png',
      ]

    /* DESCRIPCION */
      var experienceDescription = [undefined,
        /* LT House----------- */"",
      ]

    /* FOTOS PREVIEW */
      var allPreviewPhotos = {/* NO USA CAMELCASE */
        /* LT House existe?----------- */ lthouse: 'exist',
        /* LT House Photo 1----------- */ lthouse1:"./img/ltPreviews/ltScreen1.png",
        /* LT House Photo 2----------- */ lthouse2:"./img/ltPreviews/ltScreen2.png",
        /* LT House Photo 3----------- */ lthouse3:"./img/ltPreviews/ltScreen3.png",
        /* LT House Photo 4----------- */ lthouse4:"./img/ltPreviews/ltScreen4.png",
        /* LT House Photo 5----------- */ lthouse5:"./img/ltPreviews/ltScreen5.png",
        
      }

    /* LINKS DIRECTOS */
      var experienceLinks = [undefined,
        /* LT House Photo ------------ */ 'https://agustinyerba.github.io/pruebalt/'
      ]  

        /* Creacion de GRID con logos */
          for (idExperience in experienceName) {
            /* Saltea el indefinido del indice 0 */
                if (idExperience == 0){
                    continue;
                } 

                /* Crea el grid con los logos de las experiencias */
                  let menu = document.getElementById('experienceGridLogo');

                  let idNameCorrect = experienceName[idExperience];
                  idNameCorrect = idNameCorrect.toLowerCase();
                  idNameCorrect = idNameCorrect.replace(' ', '');

                  menu.innerHTML += `<button class="experienceGridLogo" id="${idNameCorrect+idExperience}"(this) title="Ver más sobre ${experienceName[idExperience]}" style="background-image: url(${experienceLogos[idExperience]});"></button>`;            
          }     


        $("button").click(function() {
          let id = this.id;

          var idName = id.replaceAll(/\d/g,"");
          let idNumber = id.replaceAll(/[^\d\+]/g,"");

          let existOnPreviewArray = allPreviewPhotos[idName];

          
          if (idNumber > 0) { /* Solo se activa si el id del boton tocado tiene un numero */

            photoPreview = idName + sliderPreviewController;

            /* Si tocaste el mismo boton que tocaste antes y el preview esta ABIERTO entonces: */
              if (latestButton == id && previewState == true) {
                  setTimeout(() => {
                    document.getElementById('experienceItemContainer').className = 'experienceItemContainerCLOSE';
                    previewState = false;
                  }, 200);
              }

            /* SI existe el preview y el preview esta CERRADO entonces: */
              else if (existOnPreviewArray == 'exist' && previewState == false){

                /* Contenedor del preview */
                  document.getElementById('experienceItemContainer').className = 'experienceItemContainerOPEN';
                  previewState = true;

                /* Logo de la experiencia en el preview */
                  document.getElementById('experienceLogo').src = experienceLogos[idNumber];

                /* Reseña del cliente de la experiencia */
                  if (experienceDescription[idNumber] == undefined || experienceDescription[idNumber] == "") {
                    document.getElementById('experienceDescriptionText').innerHTML = 'No se ha realizado una reseña aún.';
                  } else if (experienceDescription[idNumber] != undefined){
                    document.getElementById('experienceDescriptionText').innerHTML = experienceDescription[idNumber];
                  }
              
                /* Establece el link en el botón de "vicitar pagina" */
                  document.getElementById('vicitePagButton').action = experienceLinks[idNumber];
                  
                /* Pone la primera imagen del preview */
                  document.getElementById('experiencePreviewImages').src = allPreviewPhotos[photoPreview];
                  sliderPreviewController = 1
              } 

            /* SI existe el preview y el preview esta ABIERTO entonces: */
              else if (existOnPreviewArray == 'exist' && previewState == true){
                document.getElementById('experienceItemContainer').className = 'experienceItemContainerCLOSE';
                previewState = false;

                setTimeout(() => {
        
                  /* Contenedor del preview */
                    document.getElementById('experienceItemContainer').className = 'experienceItemContainerOPEN';
                    previewState = true;

                  /* Logo de la experiencia en el preview */
                    document.getElementById('experienceLogo').src = experienceLogos[idNumber];

                  /* Reseña del cliente de la experiencia */
                    if (experienceDescription[idNumber] == undefined || experienceDescription[idNumber] == "") {
                      document.getElementById('experienceDescriptionText').innerHTML = 'No se ha realizado una reseña aún.';
                    } else if (experienceDescription[idNumber] != undefined){
                      document.getElementById('experienceDescriptionText').innerHTML = experienceDescription[idNumber];
                    }
                
                  /* Establece el link en el botón de "vicitar pagina" */
                    document.getElementById('vicitePagButton').action = experienceLinks[idNumber];

                  /* Pone la primera imagen del preview */
                    document.getElementById('experiencePreviewImages').src = allPreviewPhotos[photoPreview];
                    sliderPreviewController = 1

                }, 510);
              }

            /* Si NO existe el preview: */
              else if (existOnPreviewArray == undefined) {

                if (previewState == true){
                  document.getElementById('experienceItemContainer').className = 'experienceItemContainerCLOSE';
                  previewState = false;
                } 

                /* Como no existe el preview,
                verifica si puede redireccionar a la pagina */

              }

              latestButton = id;

          }

          /* preview SIGUIENTE */
            else if (id == 'previewNEXT'){

              setTimeout(() => {

                previewOpened = latestButton.replaceAll(/\d/g,"");

                sliderPreviewController++;

                if (sliderPreviewController >= 6) {

                  sliderPreviewController = 1;
                  photoPreview = previewOpened + sliderPreviewController;

                  document.getElementById('experiencePreviewImages').src = allPreviewPhotos[photoPreview];
    
                } else if (sliderPreviewController <= 5){
                  photoPreview = previewOpened + sliderPreviewController;

                  document.getElementById('experiencePreviewImages').src = allPreviewPhotos[photoPreview];
                }

                sliderNextGestion()

              }, 10);

            }  

          /* preview ANTERIOR */
            else if (id == 'previewPREVIOUS'){
              setTimeout(() => {

                previewOpened = latestButton.replaceAll(/\d/g,"");

                sliderPreviewController--;

                if (sliderPreviewController < 1) {

                  sliderPreviewController = 5;
                  photoPreview = previewOpened + sliderPreviewController;

                  document.getElementById('experiencePreviewImages').src = allPreviewPhotos[photoPreview];
    
                } else if (sliderPreviewController >= 1){
                  photoPreview = previewOpened + sliderPreviewController;

                  document.getElementById('experiencePreviewImages').src = allPreviewPhotos[photoPreview];
                }

                sliderPrevGestion()

              }, 10);

            } 

          function sliderNextGestion() {
            if (sliderPreviewController == 1){
              document.getElementById('sliderVisualizer1').className = "sliderVisualizerON";
              document.getElementById('sliderVisualizer2').className = "sliderVisualizerDEAD";
              document.getElementById('sliderVisualizer3').className = "sliderVisualizerDEAD";
              document.getElementById('sliderVisualizer4').className = "sliderVisualizerDEAD";
              document.getElementById('sliderVisualizer5').className = "sliderVisualizerOFF";
            } else if (sliderPreviewController == 2){
                document.getElementById('sliderVisualizer1').className = "sliderVisualizerOFF";
                document.getElementById('sliderVisualizer2').className = "sliderVisualizerON";
                document.getElementById('sliderVisualizer3').className = "sliderVisualizerDEAD";
                document.getElementById('sliderVisualizer4').className = "sliderVisualizerDEAD";
                document.getElementById('sliderVisualizer5').className = "sliderVisualizerDEAD";
            } else if (sliderPreviewController == 3){
                document.getElementById('sliderVisualizer1').className = "sliderVisualizerDEAD";
                document.getElementById('sliderVisualizer2').className = "sliderVisualizerOFF";
                document.getElementById('sliderVisualizer3').className = "sliderVisualizerON";
                document.getElementById('sliderVisualizer4').className = "sliderVisualizerDEAD";
                document.getElementById('sliderVisualizer5').className = "sliderVisualizerDEAD";
            } else if (sliderPreviewController == 4){
                document.getElementById('sliderVisualizer1').className = "sliderVisualizerDEAD";
                document.getElementById('sliderVisualizer2').className = "sliderVisualizerDEAD";
                document.getElementById('sliderVisualizer3').className = "sliderVisualizerOFF";
                document.getElementById('sliderVisualizer4').className = "sliderVisualizerON";
                document.getElementById('sliderVisualizer5').className = "sliderVisualizerDEAD";
            } else if (sliderPreviewController == 5){
                document.getElementById('sliderVisualizer1').className = "sliderVisualizerDEAD";
                document.getElementById('sliderVisualizer2').className = "sliderVisualizerDEAD";
                document.getElementById('sliderVisualizer3').className = "sliderVisualizerDEAD";
                document.getElementById('sliderVisualizer4').className = "sliderVisualizerOFF";
                document.getElementById('sliderVisualizer5').className = "sliderVisualizerON";
            } 
          }

          function sliderPrevGestion() {
            if (sliderPreviewController == 1){
              document.getElementById('sliderVisualizer1').className = "sliderVisualizerON";
              document.getElementById('sliderVisualizer2').className = "sliderVisualizerOFF";
              document.getElementById('sliderVisualizer3').className = "sliderVisualizerDEAD";
              document.getElementById('sliderVisualizer4').className = "sliderVisualizerDEAD";
              document.getElementById('sliderVisualizer5').className = "sliderVisualizerDEAD";
          } else if (sliderPreviewController == 2){
              document.getElementById('sliderVisualizer1').className = "sliderVisualizerDEAD";
              document.getElementById('sliderVisualizer2').className = "sliderVisualizerON";
              document.getElementById('sliderVisualizer3').className = "sliderVisualizerOFF";
              document.getElementById('sliderVisualizer4').className = "sliderVisualizerDEAD";
              document.getElementById('sliderVisualizer5').className = "sliderVisualizerDEAD";
          } else if (sliderPreviewController == 3){
              document.getElementById('sliderVisualizer1').className = "sliderVisualizerDEAD";
              document.getElementById('sliderVisualizer2').className = "sliderVisualizerDEAD";
              document.getElementById('sliderVisualizer3').className = "sliderVisualizerON";
              document.getElementById('sliderVisualizer4').className = "sliderVisualizerOFF";
              document.getElementById('sliderVisualizer5').className = "sliderVisualizerDEAD";
          } else if (sliderPreviewController == 4){
              document.getElementById('sliderVisualizer1').className = "sliderVisualizerDEAD";
              document.getElementById('sliderVisualizer2').className = "sliderVisualizerDEAD";
              document.getElementById('sliderVisualizer3').className = "sliderVisualizerDEAD";
              document.getElementById('sliderVisualizer4').className = "sliderVisualizerON";
              document.getElementById('sliderVisualizer5').className = "sliderVisualizerOFF";
          } else if (sliderPreviewController == 5){
              document.getElementById('sliderVisualizer1').className = "sliderVisualizerOFF";
              document.getElementById('sliderVisualizer2').className = "sliderVisualizerDEAD";
              document.getElementById('sliderVisualizer3').className = "sliderVisualizerDEAD";
              document.getElementById('sliderVisualizer4').className = "sliderVisualizerDEAD";
              document.getElementById('sliderVisualizer5').className = "sliderVisualizerON";
          } 
          }

        });

});
