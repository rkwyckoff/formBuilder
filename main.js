 function getData (callback) {
    $.ajax({
     url: `http://json-data.herokuapp.com/forms`,
     dataType: "json",
     success: callback
  });
}

 function fillHtml (data) {
  //debugger;
    for (var i = 0; i < data.length; i++) {
    var field = data[i];
        if (field.type === "select") {
            var html = selectHtml(field);
        } else {
            var html = `
            <div>
            <input placeholder="${field.label}"/>
            </div>
            `;
          }
        $('.forms-container').append(html);
  }
}

getData(fillHtml);

function selectHtml (field) {
        var selectHtml = "";
   // generate optionsHtml with a loop
    for (var count = 0; count < 5; count++) {

      selectHtml += `<div class="selectLanguage">
              <input placeholder="${field.label}"</input>
              <select name="select">
              <option value="language">${field.options[count].label}</option>
              </select>
              </div>`;


    }
    return selectHtml;
}

function getData (callback) {
    $.ajax({
     url: `http://json-data.herokuapp.com/forms`,
     dataType: "json",
     success: callback
  });
}

function fillHtml (data) {
  //debugger;
    for (var i = 0; i < data.length; i++) {
    var field = data[i];
        if (field.type === "select") {
            var html = selectHtml(field);
        } else {
            var html = `
            <div>
            <input placeholder="${field.label}"/>
            </div>
            `;
          }
        $('.forms-container').append(html);
  }
}

getData(fillHtml);

function selectHtml (field) {
        var selectHtml = "";
   // generate optionsHtml with a loop
    for (var count = 0; count < 5; count++) {

     selectHtml += `<div class="selectLanguage">
              <input placeholder="${field.label}"</input>
              <select name="select">
              <option value="language">${field.options[count].label}</option>
              </select>
              </div>`;


   }
    return selectHtml;
}







// <select name="select">
//   <option value="value1">Value 1</option>
//   <option value="value2" selected>Value 2</option>
//   <option value="value3">Value 3</option>
// </select>
//working code: 3pm tuesday
// function getData (callback) {
//    $.ajax({
//     url: `http://json-data.herokuapp.com/forms`,
//     dataType: "json",
//     success: callback
//  });
// }
//
// function fillHtml (data) {
//  //debugger;
//  for (var i = 0; i < data.length; i++) {
//    var field = data[i];
//    if (field.type === "select") {
//      var html = selectHtml(field);
//    } else {
//      var html = `
//        <div>
//          <input placeholder="${field.label}"/>
//        </div>
//        `;
//    }
//    $('.forms-container').append(html);
//  }
// }
//
// getData(fillHtml);
//
// function selectHtml (field) {
//
//   // generate optionsHtml with a loop
//    for (var i = 0; i < data.length; i++) {
//    return `<div class="selectLanguage">
//            <input placeholder="${field.label}"/>
//              <select name="select">
//                <option value="language">${field.label}</option>
//                ${optionsHtml}
//              </select>
//            </div>`;
// }
//
//
//
//
//
//
//
//
//
// // name/variable lookup:
// // 1) it checks for a local variable definition
// // 2) it checks the argument list
// // 3) it check the window/global scope
//
// // arguments to functions
// // 1) A function can have as many as you want, named however you want.
// //    (Those will "shadow" global variables of the same name.)
// // 2) Inside a function, you must refer to arguments based on the name in the argument list.
// // 3) Outside a function, I refer to the argument based on the how the variable is named in *that* scope.

//<input placeholder="${data[i].label}"/>
    // if (data[i].label === "Select Language") {
    //       $('.forms-container').append(`
    //        <div>
    //          <input placeholder="${data[i].options}"/>
    //        </div>
    //        `);


 //  function submitForm (event) {
 // +  event.preventDefault();
 // +  getData(planetId, updatePageForPlanet);
 // +}
 // +
 // +$(".submit-form").click(addPlanet);




//     else if() {
//       $('.forms-container').append(`
//         <div>
//           <input placeholder="${data[i].label}" type="text">
//         </div>
//         `);
//       }
//     }
//     else {
//       $('.forms-container').append(`
//         <div>
//           <input placeholder="${data[i].label}" type="text">
//         </div>
//         `);
//     }
//   $('.forms-container').append(`
//     <div>
//       <input placeholder="${data[i].label}" type="text">
//     </div>
//     `);
//   }
// }
// getData(displayData);

// function getData (callback) {
//    $.ajax({
//     url: `http://json-data.herokuapp.com/forms`,
//     dataType: "json",
//     success: callback
//  });
// }
// function displayData (data) {
//  for (var i = 0; i < data.length; i++) {
//    //if (data.type = "select") {
//      $('.forms-container').append(`
//        <div>
//          <input placeholder="${data[i].label}"/>
//        </div>
//        `);
//    }
//  }
//getData(displayData);
