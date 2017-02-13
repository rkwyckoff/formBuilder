
 function getData (callback) {
    $.ajax({
     url: `http://json-data.herokuapp.com/forms`,
     dataType: "json",
     success: callback
  });
}
function displayData (data) {
  for (var i = 0; i < data.length; i++) {
  $('.forms-container').append(`
    <div>
      <input placeholder="${data[i].label}">
    </div>
    `);

  //    return `
  //    <input>${results.responseJSON.label}</input>`
}
}
getData(displayData);
