'use strict';

function biggerDecorations() {
  const element = document.getElementById('textArea');
  const style = window.getComputedStyle(element, null).getPropertyValue('font-size');
  const fontSize = parseFloat(style); 
  element.style.fontSize = (fontSize + 2) + 'px';
  setInterval(function() { biggerDecorations() }, 500);
}

function bling() {
  const isChecked = document.getElementById("blingCheckBox").checked;
  
  if(isChecked) {
    changeTextDecoration();
  }
  else {
    resetTextDecoration();
  }
}

function changeTextDecoration() {
  const element = document.getElementById("textArea");
  element.style.fontWeight = "bold";
  element.style.color = "green";
  element.style.textDecoration = "underline";
  document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
}

function resetTextDecoration() {
  const element = document.getElementById("textArea");
  element.style.fontWeight = "normal";
  element.style.color = "black";
  element.style.textDecoration = "none";
  document.body.style.backgroundImage = "none";
}

function malkovitch() {
  const textStr = document.getElementById('textArea').textContent;
  let textArr = textStr.split("\n");

  textArr = textArr.map(element => {
    let lineTextArr = element.split(" ");

    lineTextArr = lineTextArr.map(subElement => {
      if(subElement.length > 5) {
        return "Malkovich";
      }
  
      return subElement;
    });

    return lineTextArr.join(" ");
  });
  
  document.getElementById('textArea').textContent = textArr.join('\n');
}

function igpayAtinlay () {
  let textStr = document.getElementById('textArea').textContent;
  let textArr = textStr.split("\n");
  const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

  textArr = textArr.map(element => {
    let lineTextArr = element.split(" ");
    lineTextArr = lineTextArr.map(subElement => {
      if(!isNaN(parseFloat(subElement))) return subElement;

      const firstChar = subElement.charAt(0);
      if(vowels.indexOf(firstChar) !== -1) {
        return subElement + '-ay';
      }

      return subElement.substring(1, subElement.length -1) + firstChar + '-ay';
    });

    return lineTextArr.join(" ");
  });
  
  document.getElementById('textArea').textContent = textArr.join('\n');
}