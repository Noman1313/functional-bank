function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString)
    inputField.value = '';
    return inputFieldValue;
}

function getTextElementValueById(elementID){
    const element = document.getElementById(elementID);
    const elementValueString = element.innerText;
    const value = parseFloat(elementValueString);
    return value;
}

function setTextElementValueById(elementID, newValue){
    const textElement = document.getElementById(elementID);
    textElement.innerText = newValue;
}