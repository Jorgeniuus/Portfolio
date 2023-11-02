let typeProjectsName = ['Home', 'Mobile', 'PC', 'Multiplayer', 'About Me',]
let typeTecnology = ['unity', 'frontend']
let typeContentSelected = 'Home'
let activeButtonsMenu = true

const unityDeveloperTimeExperience = new Date(2022, 1, 1)
const frontEndDeveloperTimeExperience = new Date(2023, 9, 28)
let currentDate = new Date()
let currentDay = currentDate.getDay()
let currentMonth = currentDate.getMonth()
let currentYear = currentDate.getFullYear()

//variables experience translated
let yearExp;
let yearMonthExp;
let monthExp;
let moreAMonthExp;
let lessAMonthExp;

MenuSelect()

function MenuSelect(itemMenuSelected = 0, classContent = 'Home'){
    let buttonSelect = document.getElementsByClassName("itemmenu")
    let initialIframe = document.getElementById("iframeContentGame")
    initialIframe.style.display = 'none';

    if (window.matchMedia("(max-width: 1024px)").matches) {
        for(let i = 0; i < buttonSelect.length; i++){ 
            if(i == itemMenuSelected){
                buttonSelect[i].style.color =  'rgb(255, 123, 0)';
                buttonSelect[i].style.fontSize = '12px';
                buttonSelect[i].style.transform = 'scale(1.5)';    
            }else{
                buttonSelect[i].style.backgroundColor =  '';
                buttonSelect[i].style.color =  'rgb(255, 255, 255)';
                buttonSelect[i].style.fontSize = '12px';
                buttonSelect[i].style.transform = 'scale(1.2)';
            }
        }
    } else {
        for(let i = 0; i < buttonSelect.length; i++){
            if(i == itemMenuSelected){
                buttonSelect[i].style.backgroundColor =  'rgb(231, 231, 231)';
                buttonSelect[i].style.color =  'rgb(0, 0, 0)';
                buttonSelect[i].style.padding = '15% 30%'
                buttonSelect[i].style.fontSize = '12px';
                buttonSelect[i].style.transform = 'scale(1.2)';
            }else{
                buttonSelect[i].style.backgroundColor =  '';
                buttonSelect[i].style.color =  'rgb(255, 255, 255)';
                buttonSelect[i].style.padding = '15% 15%'
                buttonSelect[i].style.fontSize = '12px';
                buttonSelect[i].style.transform = 'scale(1.2)';
            }
        }
    }
    SelectTypeContent(classContent)
}
function SelectTypeContent(classContent){
    for(let i = 0; i < typeProjectsName.length; i++){
        let hidePreviewContents = document.getElementsByClassName(typeProjectsName[i])

        if(typeProjectsName[i] === classContent){
            for(let j = 0; j < hidePreviewContents.length; j++){
                hidePreviewContents[j].style.display = 'inline-block';
            }
            if(typeProjectsName[i] === 'About Me'){
                let iframeAboutMe = document.getElementById('iframeContentGame');
                iframeAboutMe.style.display = 'inline-block';
                iframeAboutMe.src = "aboutme.html";

                ResponsiveIframePageLoaded()
            }
        }else{
            if(typeProjectsName[i] !== classContent && typeProjectsName[i] === 'Home')
            for(let j = 0; j < hidePreviewContents.length; j++){
                hidePreviewContents[j].style.display = 'none';
           }
        }
    }
    typeContentSelected = classContent
}

function OnClickPreviewToChangeToPageGame(){
    let initialIframe = document.getElementById("iframeContentGame")
    initialIframe.style.display = 'inline-block';

    for(let i = 0; i < typeProjectsName.length; i++){
        let hidePreviewContents = document.getElementsByClassName(typeProjectsName[i])

        for(let j = 0; j < hidePreviewContents.length; j++){
            hidePreviewContents[j].style.display = 'none';
        }
    }
    ResponsiveIframePageLoaded()
}
function ResponsiveIframePageLoaded(){
    const iframe = document.getElementById('iframeContentGame');
    iframe.onload = function() {
        const body = iframe.contentDocument.body;
        const height = body.scrollHeight;
        iframe.style.height = height + 'px';
    }
}

//ANOS DE EXPERIÊNCIA
function TecnologiesTimeExperience(whichTecnologyIs){
    let returnExperienceUnity;
    let returnExperienceFront;

    if(whichTecnologyIs == typeTecnology[0]){
        let finalDate = new Date(currentYear, currentMonth+1, currentDay+1); 
        
        let monthsDifference = (finalDate.getFullYear() - unityDeveloperTimeExperience.getFullYear()) * 12;
        monthsDifference -= unityDeveloperTimeExperience.getMonth();
        monthsDifference += finalDate.getMonth();
        
        let yearsDifference = Math.floor(monthsDifference / 12);
        monthsDifference = monthsDifference % 12;
        
        if(yearsDifference >= 1){
            if(monthsDifference == 0){
                returnExperienceUnity = `${yearsDifference} ${yearExp}`//ano de experiêcia` 
            }else {
                returnExperienceUnity = `${yearsDifference}.${monthsDifference} ${yearMonthExp}`//anos de experiêcia`
            }  
        }else if(monthsDifference >= 1){
            returnExperienceUnity = `${monthsDifference} ${monthExp}`//mês de experiêcia` 
        }else if(monthsDifference > 1){
            returnExperienceUnity = `${monthsDifference} ${moreAMonthExp}`//meses de experiêcia` 
        }else {
            returnExperienceUnity = `${lessAMonthExp}`//Menos de 1 mês de experiêcia`
        }
        return returnExperienceUnity
    }else{
        let finalDate = new Date(currentYear, currentMonth+1, currentDay+1); 
        
        let monthsDifference = (finalDate.getFullYear() - frontEndDeveloperTimeExperience.getFullYear()) * 12;
        monthsDifference -= frontEndDeveloperTimeExperience.getMonth();
        monthsDifference += finalDate.getMonth();
        
        let yearsDifference = Math.floor(monthsDifference / 12);
        monthsDifference = monthsDifference % 12;
        
        if(yearsDifference >= 1){
            if(monthsDifference == 0){
                returnExperienceFront = `${yearsDifference} ${yearExp}`//ano de experiêcia` 
            }else {
                returnExperienceFront = `${yearsDifference}.${monthsDifference} ${yearMonthExp}`//anos de experiêcia`
            }  
        }else if(monthsDifference == 1){
            returnExperienceFront = `${monthsDifference} ${monthExp}`//mês de experiêcia` 
        }else if(monthsDifference > 1){
            returnExperienceFront = `${monthsDifference} ${moreAMonthExp}`//meses de experiêcia` 
        }else {
            returnExperienceFront = `${lessAMonthExp}`//Menos de 1 mês de experiêcia`
        }
        return returnExperienceFront
    }
}
// TecnologiesTimeExperience(typeTecnology[0])

//===================================== TRANSLATE ========================
//menu
let projects = document.querySelector('h1#titleprojects'); 
let home = document.querySelector('li#home');
let multiplayer = document.querySelector('li#multiplayer');
let aboutme = document.querySelector('li#aboutme');
// //resume
let resumeFront = document.querySelector('.resume');
let contactmeAboutFront = document.querySelector('h2.contactme')
//game descriptions
let iframeContentGames = document.getElementById('iframeContentGame');

let currentTranslate;
let nameGameContentIframe;

let flagTranaslateElements = document.querySelectorAll('.translateElement');

$(".translateElement").on('touchstart click', function(event) {
    if(event.type == "click"){
        flagTranaslateElements.forEach(element => {
            let value = this.getAttribute('data-value');
            if(element.getAttribute('data-value') == value){
                TranslateConversion(value);
            }
        });
    }else if(event.type == "touchstart"){
        flagTranaslateElements.forEach(element => {
            let value = this.getAttribute('data-value');
            if(element.getAttribute('data-value') == value){
                TranslateConversion(value);
            }
        });
    }
});

// let flagTranaslateElements = document.querySelectorAll('.translateElement');
// flagTranaslateElements.forEach(element => {
//     element.addEventListener('touchstart', function() {
//         let value = this.getAttribute('data-value');
//         TranslateConversion(value);
//     });
// });

TranslateConversion()
function TranslateConversion(idLanguage = 0){ 

    fetch('TranslateData.json')
    .then(response => response.json())
    .then(data => {
        //'data' representa o JSON convertido em JavaScript
        Translation(data[idLanguage]) 
    })
    .catch(error => {
        // Tratamento de erro, caso a requisição falhe
        console.error('Erro ao buscar o arquivo JSON:', error);
    });
}
function Translation(languageSelected){
    projects.innerHTML = languageSelected.projects
    home.innerHTML = languageSelected.home
    multiplayer.innerHTML = languageSelected.multiplayer
    aboutme.innerHTML = languageSelected.aboutme
    resumeFront.innerHTML = languageSelected.resume

    yearExp = languageSelected.year
    yearMonthExp = languageSelected.yearAndMonth
    monthExp = languageSelected.amonth
    moreAMonthExp = languageSelected.moreMonths
    lessAMonthExp = languageSelected.lessAMonth
    contactmeAboutFront.innerHTML = languageSelected.contactme

    currentTranslate = languageSelected
    setInterval(TranslateGameContentsInIframes, 3000);
}
function TranslateGameContentsInIframes(whichGameContentIframeIs = nameGameContentIframe){
    let innerDoc = iframeContentGames.contentDocument || iframeContentGames.contentWindow.document;
    let innertextP = innerDoc.querySelector('body section div p')
    let innertextH1 = innerDoc.querySelector('body section div h1')
    let resumeAboutMe = innerDoc.querySelector('body section div a.resume')
    let contactmePhone = innerDoc.querySelector('body section div h2.contactme')
    //tecnology descriptions
    let udityFrontDescription = innerDoc.querySelectorAll('body section div.barTec p'); 

    innerDoc.onload = function() {
        const body = iframe.contentDocument.body;
        const height = body.scrollHeight;
        iframe.style.height = height + 'px';
    }
    
    nameGameContentIframe = whichGameContentIframeIs

    if(whichGameContentIframeIs == "shipdestroyer"){
        innertextP.innerHTML = currentTranslate.descriptionShipDestroyer
    }
    else if(whichGameContentIframeIs == "abeastoutside"){
        innertextP.innerHTML = currentTranslate.descriptionABeastOutside
    }else if(whichGameContentIframeIs ==  "aboutme"){
        innertextH1.innerHTML = currentTranslate.aboutmedescriptionH1
        innertextP.innerHTML = currentTranslate.aboutmedescriptionP
        contactmePhone.innerHTML = currentTranslate.contactme
        resumeAboutMe.innerHTML = currentTranslate.resume

        udityFrontDescription.forEach(tec =>{
            if(tec.getAttribute('data-value') == 'unity'){
                tec.innerHTML = TecnologiesTimeExperience(typeTecnology[0])
            }else{
                tec.innerHTML = TecnologiesTimeExperience(typeTecnology[1])
            }
        })
    }else{
        innertextP.innerHTML = currentTranslate.descriptionFPSMultiplayer
    }
}
