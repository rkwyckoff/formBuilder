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
    }     else {
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

debugger;

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
