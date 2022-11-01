window.addEventListener('load', (event) => {

var inputField = document.getElementById("array")
var errorLabel = document.querySelector(".error")
    errorLabel.style.display = "none"

var outputField = document.querySelector(".output_result")
var inputButton = window.document.querySelector("#button")


 const findIndex = (arr = []) => {
    if (!arr || arr.length < 3) {
        return "Not possible"
    }
          
    let left = 0
    let right = arr.length - 1
    let leftSum = arr[0]
    let rightSum = arr[right]
          
    left += 1
    right -= 1
          
    while (left < right) {
        if (leftSum < rightSum) {
            leftSum += arr[left]
            left += 1
        } else {
            rightSum += arr[right]
            right -= 1
            }
        }
          
        if (leftSum == rightSum) {
            return left;
        }
          
        return "Not possible"
    };


    function fieldValidation (){
        let numberSpaces = /^[0-9\s]+$/
    
        if(inputField.value == ""){

            errorLabel.style.display = "block";

            errorLabel.innerHTML = "Input is empty, please insert values."
            return false
        }

        if(inputField.value.length <= 3){
            errorLabel.style.display = "block";

            errorLabel.innerHTML = "There is not enough elements. Please insert more."
            return false
        }
    
        if(inputField.value.match(numberSpaces)){
            return true
        }else{
           
            errorLabel.style.display = "block";

            errorLabel.innerHTML = "Input only accepts numbers and spaces"
            return false
        }
    
    }
      

   inputButton.addEventListener("click", function() {

    if(errorLabel.style.display = "block"){
        errorLabel.style.display = "none";
    }

    fieldValidation()

    let inputArray = inputField.value
    const array = inputArray.split(" ")
    arr = array.map(Number);

    const indexResult = findIndex(arr)
    outputField.innerHTML= indexResult
    
    
  });

});