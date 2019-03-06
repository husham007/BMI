/**/

function setInitials(){
    let divOne = document.querySelector('#one');
    let divTwo = document.querySelector('#two');
    let divThree = document.querySelector('#three');
    let divFour = document.querySelector('#four');

    let underWeight = document.createTextNode('Under weight BMI is less than 18.5 ');
    let normalWeight = document.createTextNode('Normal weight BMI is 18.5 to 24.9 ');
    let obese = document.createTextNode('Obese weight BMI is 30 or over');
    let overWeight = document.createTextNode('Over weight BMI is 25 to 29.9');

    divOne.style.color = 'yellow';
    divOne.style.fontWeight = 'bold';    
    divTwo.style.color = 'Green';
    divTwo.style.fontWeight = 'bold';  
    divThree.style.color = 'Brown';
    divThree.style.fontWeight = 'bold';  
    divFour.style.color = 'Red';
    divFour.style.fontWeight = 'bold';  

    

    

    divOne.appendChild(underWeight);
    divTwo.appendChild(normalWeight);
    divThree.appendChild(overWeight);
    divFour.appendChild(obese);

}
function calculateBMI(){
let weight = Number(document.querySelector('#weight').value);
let height = Number(document.querySelector('#height').value);
console.log(weight);
console.log(height);

displayResult (BMI(weight, height));
}

function displayResult(bmi){
let content = document.querySelector('.bmi-result');
let image = document.querySelector('.image');
console.log(content);
//content.setAttribute('text-content', bmi.bmi);


content.textContent = `Your BMI is ${bmi.bmi}, ${bmi.message}.`;
image.src = `assets/images/${bmi.image}.jpg`;
content.style.color = bmi.color;
content.style.fontWeight= 'bold';
console.log(image.src);
clearFields();
}

function clearFields(){
    document.querySelector('#weight').value = null;
    document.querySelector('#height').value = null;
}

function BMI(weight, height) {
    let bmi = weight / (height * height);
    
    let text = "";
    let image='';
    let color = '';
    //console.log(bmi);
    switch (true) {
      case bmi < 18.5:
        text = "Under weight BMI is less than 18.5 ";
        image = 'underweight';
        color = 'yellow';

        break;

      case 18.5 <= bmi && bmi <= 24.9:
        text = "Normal weight BMI is 18.5 to 24.9";
        image = 'normal';
        color = 'green';
        break;

      case 25 <= bmi && bmi <= 29.9:
        text = "Over weight BMI is 25 to 29.9";
        image = 'overweight';
        color = 'brown';
        break;

      case 30 <= bmi:
        text = "Obese weight BMI is 30 or over";
        image = 'obese';
        color = 'red';
        break;

      default:
        text = "default";
        break;
    }

    //console.log(bmi.toFixed(2));
    //console.log(text);
    return {bmi: bmi.toFixed(2), message: text, image: image, color: color};
  }