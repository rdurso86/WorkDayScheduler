let day = moment().format("dddd, MMMM Do YYYY");
console.log(day);
$("#currentDay").html(day);


let userInput = $("#userInput");
let saveBtn = $("#saveBtn");
let text = localStorage.getItem('userInput');


console.log(text);
//console.log(localStorage);
init();

$(document).on("click", "#saveBtn", function() {
  let userInput = $(this)
  .prev()
  .attr("id");
  let text = $(this)
  .prev()
  .val();
  localStorage.setItem(userInput, text);
  console.log(text);
});


function init() {
  localStorage.getItem(text);
  
  if (userInput = null);

  else {
    userInput = $(text);
  };
  
};





// function init() {
//   let storedUserInput = localStorage.getItem(userInput);
  
//     userInput = storedUserInput;
  

//   // Render todos to the DOM
  
//  /// renderInput();
// };

// // function storeUserInput() {
// //   // Stringify and set "todos" key in localStorage to todos array
// //   localStorage.setItem("userInput", JSON.stringify(userInput));
// // };

//creates click event for save buttons








// // $( "#saveBtn" ).on( "click", function() {
//   //   localStorage.setItem(userInput, value);
//   // });
//   //localStorage.getItem(userInput);
//   // function storeUserInput() {
    
// //     localStorage.setItem("userInput", JSON.stringify(userInput));
// //   };
// // $(saveBtn).on("click", function(event) {
// //     event.preventDefault();
    
// //     localStorage.setItem("userInput", JSON.stringify(userInput));
// //     console.log(userInput);
// // });