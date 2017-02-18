 function getData (callback) {
    $.ajax({
     url: `https://json-data.herokuapp.com/forms`,
     dataType: "json",
     success: callback
  });
}

 function fillHtml (data) {

    for (var i = 0; i < data.length; i++) {
      var field = data[i];
      if (field.type === "select") {

       var options = selectHtml(field);
       var html = `
          <div>
           <select class="form-field">
             ${options}
           </select>
           </div>
            `;
            //debugger;
      } else if (field.type === "textarea") {

        var html = `
        <div>
          <i class="fa ${field.icon}" aria-hidden="true"></i>
          <textarea class="form-field" placeholder="${field.label}"></textarea>

        </div>
        `;
      }    else {
            var html = `
            <div>
            <i class="fa ${field.icon}" aria-hidden="true"></i>
            <input class="form-field" placeholder="${field.label}"/>
            </div>
            `;
        }
        $('.forms-container').append(html);
    }
  }


getData(fillHtml);



function selectHtml (field) {
  var selectHtml = `<option>${field.label}</option>`;
// generate optionsHtml with a loop
  for (var count = 0; count < field.options.length; count++) {
    selectHtml +=
            `

            <option>${field.options[count].label}</option>

          `;
  }
  return selectHtml;
}
