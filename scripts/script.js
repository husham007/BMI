/**/

class Person {
  constructor(weight, height) {
    this.weight = weight;
    this.height = height;
    this.bmi = this.calBMI();
    console.log("constructor called");
  }

  calBMI() {
    return BMI(this.weight, this.height);
  }
  showBMI() {
    displayResult(this.bmi);
  }
}

function setInitials() {
  let divOne = document.querySelector("#one");
  let divTwo = document.querySelector("#two");
  let divThree = document.querySelector("#three");
  let divFour = document.querySelector("#four");

  let underWeight = document.createTextNode(
    "Under weight BMI is less than 18.5 "
  );
  let normalWeight = document.createTextNode(
    "Normal weight BMI is 18.5 to 24.9 "
  );
  let obese = document.createTextNode("Obese weight BMI is 30 or over");
  let overWeight = document.createTextNode("Over weight BMI is 25 to 29.9");

  divOne.style.color = "#F7C501";
  divOne.style.fontWeight = "bold";
  divTwo.style.color = "Green";
  divTwo.style.fontWeight = "bold";
  divThree.style.color = "Brown";
  divThree.style.fontWeight = "bold";
  divFour.style.color = "Red";
  divFour.style.fontWeight = "bold";

  divOne.appendChild(underWeight);
  divTwo.appendChild(normalWeight);
  divThree.appendChild(overWeight);
  divFour.appendChild(obese);

  document
    .querySelector("#calculate")
    .addEventListener("click", function(e) {
    let weight = document.querySelector("#weight").value;
    let height = document.querySelector("#height").value;

    validateAndCreatePerson(weight, height);      
    });
}


function validateAndCreatePerson(weight, height) {  
  let pattern = /^\d*[\.]?\d+$/g;  
  if (weight.match(pattern) && height.match(pattern)) {
    let person = new Person(Number(weight), Number(height));
    clearErrors();
    person.calBMI();
    person.showBMI();
  } else {
    if (!weight.match(pattern)) {
      clearErrors();
      showError("weight");
    }
     if (!height.match(pattern)) {
      console.log("height error");
      showError("height");
    }

  }
  
}

function showError(err) {
  let div = document.createElement("div");
  div.style.color = "red";
  div.style.padding = "1vw";
  div.style.margin = "1vw 0";
  div.style.border = "2px solid red";
  div.style.borderRadius = "10px";
  let errorMsg = document.createTextNode("Wrong Input " + err);
  let errorsDiv = document.querySelector(".errors");
  div.append(errorMsg);
  errorsDiv.append(div);
}

function displayResult(bmi) {
  let content = document.querySelector(".bmi-result");
  let image = document.querySelector(".image");
  console.log(content);
  //content.setAttribute('text-content', bmi.bmi);

  content.textContent = `Your BMI is ${bmi.bmi}, ${bmi.message}.`;
  image.src = `assets/images/${bmi.image}.jpg`;
  content.style.color = bmi.color;
  content.style.fontWeight = "bold";
  console.log(image.src);
  clearFields();
}

function clearFields() {
  document.querySelector("#weight").value = null;
  document.querySelector("#height").value = null;
}

function clearErrors() {
  /*while (document.querySelector(".errors").firstChild) {
    document
      .querySelector(".errors")
      .removeChild(document.querySelector(".errors").firstChild);
  }*/
  document.querySelector('.errors').innerHTML='';
}

function BMI(weight, height) {
  let bmi = weight / (height * height);

  let text = "";
  let image = "";
  let color = "";
  //console.log(bmi);
  switch (true) {
    case bmi < 18.5:
      text = "Under weight BMI is less than 18.5 ";
      image = "underweight";
      color = "#F7C501";

      break;

    case 18.5 <= bmi && bmi <= 24.9:
      text = "Normal weight BMI is 18.5 to 24.9";
      image = "normal";
      color = "green";
      break;

    case 25 <= bmi && bmi <= 29.9:
      text = "Over weight BMI is 25 to 29.9";
      image = "overweight";
      color = "brown";
      break;

    case 30 <= bmi:
      text = "Obese weight BMI is 30 or over";
      image = "obese";
      color = "red";
      break;

    default:
      text = "default";
      break;
  }

  //console.log(bmi.toFixed(2));
  //console.log(text);
  return { bmi: bmi.toFixed(2), message: text, image: image, color: color };
}
