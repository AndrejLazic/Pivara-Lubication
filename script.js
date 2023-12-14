const object = {
  code1: '',
  code2: '',
  code3: '',
  code4: '',
  code5: '',
};

let fillColor = "";
let strokeColor = "";

let objArray = [];

document.getElementById('param3').addEventListener('change', function() {

  const selectedValue = this.value;

  let upperHalf = document.querySelector('.upperHalf');
  upperHalf.style.display = 'block';
  upperHalf.style.borderBottom = '3px solid black';

  let textColor = document.querySelector("#propertiesText");

  if (selectedValue === 'MO') {
    upperHalf.style.background = 'linear-gradient(to bottom, lightblue 100%, transparent 50%)';
    textColor.style.color = "black";
    strokeColor = "black";
  } 
  else if (selectedValue === 'PFPE') {
    upperHalf.style.background = 'linear-gradient(to bottom, gold 100%, transparent 50%)';
    textColor.style.color = "black";
    strokeColor = "black";
  } 
  else if (selectedValue === 'SHC') {
    upperHalf.style.background = 'linear-gradient(to bottom, blue 100%, transparent 50%)';
    textColor.style.color = "white";
    strokeColor = "black";
  } 
  else if (selectedValue === 'SI') {
    upperHalf.style.background = 'linear-gradient(to bottom, grey 100%, transparent 50%)';
    textColor.style.color = "black";
    strokeColor = "black";
  } 
  else if (selectedValue === 'SPO') {
    upperHalf.style.background = 'linear-gradient(to bottom, black 100%, transparent 50%)';
    textColor.style.color = "white";
    strokeColor = "white";
  } 
  else if (selectedValue === 'WO') {
    upperHalf.style.background = 'linear-gradient(to bottom, white 100%, transparent 50%)';
    textColor.style.color = "black";
    strokeColor = "black";
  }

  const param5Event = new Event('change');
  document.getElementById('param5').dispatchEvent(param5Event);
});

document.getElementById('param5').addEventListener('change', function(){

  const selectedValue = this.value;
   let sign = document.querySelector('.sign');

  sign.innerHTML = '';

  switch (selectedValue) {
    case '00':
      svgElement = ` <!--TROUGAO-->
      <svg fill=${fillColor} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-2.4 -2.4 124.80 124.80" enable-background="new 0 0 120 120" xml:space="preserve" stroke=${strokeColor} stroke-width="3">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> 
          <polygon points="0.233,106.52 60,3 119.768,106.52 "></polygon> 
        </g>
      </svg>`;
      break;
    case '0':
      svgElement = ` <!--SESTOUGAO-->
      <svg viewBox="-0.64 -0.64 17.28 17.28" xmlns="http://www.w3.org/2000/svg" fill=${fillColor} class="bi bi-hexagon-fill" transform="rotate(90)" stroke=${strokeColor} stroke-width="0.5">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> 
          <path fill-rule="evenodd" d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"></path> 
        </g>
      </svg>`;
      break;
    case '1':
      svgElement = ` <!--STIT-->
      <svg viewBox="0 0 24.00 24.00" fill="red" xmlns="http://www.w3.org/2000/svg" stroke=${strokeColor} stroke-width="0.7">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> 
          <path d="M12.6966 1.28263C12.6966 1.28263 12.6972 1.28313 12.6989 1.28483L12.6978 1.28374L12.7105 1.29508C12.7281 1.31064 12.763 1.34044 12.8171 1.38252C12.9252 1.46665 13.1107 1.60023 13.3895 1.76751C13.9469 2.10195 14.8797 2.57246 16.3162 3.05132C17.7858 3.54118 18.7451 3.77921 19.3211 3.89442C19.6087 3.95194 19.7987 3.97843 19.9073 3.99049C19.9615 3.99651 19.995 3.9989 20.0099 3.99977L20.0166 4.00014C20.5613 4.00902 21 4.45327 21 5V12C21 15.4464 18.7183 18.2003 16.6585 20.0026C15.6076 20.9221 14.5615 21.6408 13.78 22.1292C13.3882 22.3741 13.0603 22.5627 12.8281 22.6913C12.6303 22.8008 12.4417 22.8738 12.2373 22.935C12.0825 22.9814 11.9171 22.983 11.7622 22.9369C11.5576 22.8761 11.3695 22.8007 11.1719 22.6913C10.9397 22.5627 10.6118 22.3741 10.22 22.1292C9.43854 21.6408 8.39238 20.9221 7.3415 20.0026C5.28175 18.2003 3 15.4464 3 12V5C3 4.45328 3.43875 4.00903 3.98335 4.00014L3.99011 3.99977C4.00499 3.9989 4.0385 3.99651 4.09269 3.99049C4.20126 3.97843 4.39127 3.95194 4.67888 3.89442C5.25494 3.77921 6.21419 3.54118 7.68377 3.05132C9.12034 2.57246 10.0531 2.10195 10.6105 1.76751C10.8893 1.60023 11.0748 1.46665 11.1829 1.38252C11.237 1.34044 11.2719 1.31064 11.2896 1.29508L11.3022 1.28374C11.6903 0.905419 12.3097 0.905419 12.6978 1.28374L12.6966 1.28263Z" 
          fill=${fillColor}></path> 
        </g>
      </svg>`;
      break;
    case '2':
      svgElement = ` <!--PRAVOUGAONIK-->
      <svg fill=${fillColor} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-1.47 -1.47 23.91 23.91" xml:space="preserve" stroke=${strokeColor} stroke-width="0.7">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> 
          <g> 
            <g id="c112_-"> 
              <rect x="0" y="6.504" width="20.969" height="7.961"></rect> 
            </g> 
            <g id="Capa_1_45_"> </g> 
          </g> 
        </g>
      </svg>`;
      break;
    case '3':
      svgElement = ` <!--SUNCE-->
      <svg fill=${fillColor} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-19.56 -19.56 528.16 528.16" xml:space="preserve" stroke=${strokeColor} stroke-width="13">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> 
          <g> 
            <g> 
              <circle cx="244.52" cy="244.52" r="155.782"></circle> 
              <polygon points="244.52,0 200.759,68.495 288.282,68.495 "></polygon> 
              <polygon points="420.547,200.759 420.547,288.282 489.039,244.52 "></polygon> 
              <polygon points="244.52,489.039 288.282,420.547 200.759,420.547 "></polygon> 
              <polygon points="68.495,200.759 0,244.52 68.495,288.282 "></polygon> 
              <polygon points="417.422,71.618 338.045,89.108 399.934,150.995 "></polygon> 
              <polygon points="417.422,417.422 399.934,338.045 338.045,399.934 "></polygon> 
              <polygon points="89.108,338.045 71.618,417.422 150.995,399.934 "></polygon> 
              <polygon points="150.995,89.108 71.618,71.618 89.108,150.995 "></polygon> 
            </g> 
          </g> 
        </g>
      </svg>`;
      break;
    case '4':
      svgElement = ` <!--BLOK-->
      <svg fill=${fillColor} viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" transform="rotate(90)" stroke=${strokeColor} stroke-width="30">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M500 930q-117 0-217-59-97-57-154-154-59-100-59-217t59-217q57-97 154-154 100-59 217-59t217 59q97 57 154 154 59 100 59 217t-59 217q-57 97-154 154-100 59-217 59zM320 760q39 28 85.5 42.5T500 817q86 0 160-44 71-42 113-113 44-74 44-160 0-48-14.5-94.5T760 320zm180-577q-86 0-160 44-71 42-113 113-44 74-44 160 0 48 14.5 94.5T240 680l440-440q-39-28-85.5-42.5T500 183z"></path>
        </g>
      </svg>`;
      break;
    case '5':
      svgElement = ` <!--ELIPSA-->
      <svg viewBox="0 0 72.00 72.00" id="emoji" xmlns="http://www.w3.org/2000/svg" fill=${fillColor} transform="rotate(90)">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.144"></g>
        <g id="SVGRepo_iconCarrier"> 
        <g id="color"></g> 
        <g id="line"> 
          <path d="M56,36 C56,52.016 47.046,65 36,65 C24.954,65 16,52.016 16,36 C16,19.984 24.954,7 36,7 C47.046,7 56,19.984 56,36 z"></path> 
          <path stroke=${strokeColor} stroke-width="2" d="M56,35.957 C56.035,51.973 47.109,64.977 36.063,65.001 C25.017,65.025 16.034,52.06 16,36.043 C15.965,20.027 24.891,7.023 35.937,6.999 C46.983,6.975 55.966,19.94 56,35.957 z"></path> 
        </g> 
      </g>
      </svg>`;
      break;
    default:
      svgElement = '';
      break;
  }

  sign.innerHTML = svgElement;

})

document.getElementById('param4').addEventListener('change', function(){
  const selectedValue = this.value;

  switch (selectedValue) {
    case 'FGG':
      fillColor = "grey";
      break;
    case 'AXG':
      fillColor = "black";
      break;
    case 'CAG':
      fillColor = "brown";
      break;
    case 'CXG':
      fillColor = "orange";
      break;
    case 'CSG':
      fillColor = "beige";
      break;
    case 'LIG':
      fillColor = "lightblue";
      break;
    case 'CLG':
      fillColor = "mediumseagreen";
      break;
    case 'PUG':
      fillColor = "purple";
      break;
    case 'LCG':
      fillColor = "blue";
      break;
    case 'BXG':
      fillColor = "yellow";
      break;
    case 'PTFEG':
      fillColor = "darkgreen";
      break;
    case 'CSXG':
      fillColor = "white";
      break;
  }

  const param5Event = new Event('change');
  document.getElementById('param5').dispatchEvent(param5Event);
});

function updateObject() {
  object.code1 = document.getElementById('param1').value;
  object.code2 = document.getElementById('param2').value;
  object.code3 = document.getElementById('param3').value;
  object.code4 = document.getElementById('param4').value;
  object.code5 = document.getElementById('param5').value;

  console.log(object);
}

document.getElementById('param1').addEventListener('change', updateObject);
document.getElementById('param2').addEventListener('change', updateObject);
document.getElementById('param3').addEventListener('change', updateObject);
document.getElementById('param4').addEventListener('change', updateObject);
document.getElementById('param5').addEventListener('change', updateObject);

function displayProperties() {

  const propertiesString = Object.values(object).join('-');

  const propertiesDiv = document.getElementById('propertiesText');
  
  propertiesDiv.textContent = propertiesString;
}

document.getElementById('param1').addEventListener('change', displayProperties);
document.getElementById('param2').addEventListener('change', displayProperties);
document.getElementById('param3').addEventListener('change', displayProperties);
document.getElementById('param4').addEventListener('change', displayProperties);
document.getElementById('param5').addEventListener('change', displayProperties);

function add(obj){
 objArray.push(obj);
}

function downloadLogo() {
  const logoContainer = document.querySelector('.logoContainer');

  const propertiesString = Object.values(object).join('-');

  html2canvas(logoContainer).then(function (canvas) {
    const link = document.createElement('a');
    link.download = propertiesString;
    link.href = canvas.toDataURL();
    link.click();
  });
}
