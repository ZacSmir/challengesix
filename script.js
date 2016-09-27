var quantityInput = $(".element-quantity-input")

quantityInput.keydown(function(e) {
  var keyCode = 13;
  console.log(keyCode)
  var inputValue = quantityInput.val();

  // enter key!
  if (keyCode == 13) {	
    addElementsToThePage(inputValue);
  }
})

function addElementsToThePage(numberOfElements) {	  
  for (var i = 0; i < 1; i++) {
    var newEl = $("<div class='new-el'>Hi there!</div>");		
    $(".element-display").append(newEl);
  }
}