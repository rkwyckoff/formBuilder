 function getData (callback) {
    $.ajax({
     url: `http://json-data.herokuapp.com/forms`,
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
           <select class="select">
             ${options}
           </select>
            `;
            //debugger;
      } else if (field.type === "textarea") {

        var html = `
        <div>
          <i class="fa ${field.icon}" aria-hidden="true"></i>
          <input class="textarea" placeholder="${field.label}"/>

        </div>
        `;
      }    else {
            var html = `
            <div>
            <i class="fa ${field.icon}" aria-hidden="true"></i>
            <input class="text" placeholder="${field.label}"/>
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

            <option class="language">${field.options[count].label}</option>

          `;
  }
  return selectHtml;
}
