 function getData (callback) {
    $.ajax({
     url: `http://json-data.herokuapp.com/forms`,
     dataType: "json",
     success: callback
  });
}
function displayData (data) {
  for (var i = 0; i < data.length; i++) {
    if (data.type = "select") {
      $('.forms-container').append(`
        <div>
          <input placeholder="${data[i].label}" type="select">
        </div>
        `);
    }
  }
}
getData(displayData);

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
