const checkInputs = document.getElementsByClassName("text__input-js");

const emptyAllElements = () => {
  let allInputs = Object.values(checkInputs);

  allInputs.forEach((input) => {
    input.value = "";
  })

  document.getElementById("checkbox__consent").checked = false;

  document.getElementById("radio__general").checked = false;
  document.getElementById("radio__support").checked = false;
}

const removeActiveClassFromStart = () => {
  document.getElementById("form__checkbox").classList.remove("active");
  document.getElementById("form__query").classList.remove("active");
}

const checkTextInputs = () => {
  let allInputs = Object.values(checkInputs);
  
  allInputs.forEach((input) => {

    input.parentElement.classList.remove("active");

    if (input.id == "email__address"
      && (/\w+/).test(input.value)
      && !(/\w+@gmail.com/).test(input.value)
    ) {
      input.parentElement.classList.add("active");
    }

    if (input.value == ""){
      input.parentElement.classList.add("active");
    }
  })

  const result = allInputs.some((input) => {
    return input.parentElement.classList.contains("active");
  })

  return !result;
}

const checkCheckBoxInput = () => {
  if (document.getElementById("checkbox__consent").checked == false){
    document.getElementById("form__checkbox").classList.add("active");

    return false;
  }
  return true;
}

const checkRadioInput = () => {
  if (!document.getElementById("radio__general").checked 
  && !document.getElementById("radio__support").checked) {
    document.getElementById("form__query").classList.add("active");

    return false;
  }
  return true;
}

const checkSuccess = () => {
  removeActiveClassFromStart();
  checkTextInputs();
  checkCheckBoxInput();
  checkRadioInput();

  if (checkTextInputs() && checkCheckBoxInput() && checkRadioInput()){
    
    document.getElementById("success__message").style.display = "flex";
    emptyAllElements();

    setTimeout(() => {
      document.getElementById("success__message").style.display = "none";
    }, 2000);

  } else {
    document.getElementById("success__message").style.display = "none";
  }
}