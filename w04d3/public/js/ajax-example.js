$(document).ready(function () {

  // function htmlToInsert(data){
  //   let returnString = '';
  
  //   returnString += "<ul>";
  //   for (let i = 0; i < data.length; i++){
  //     returnString += '<li>' + data[i].question + '</li>';
  //   }
  //   returnString += "</ul>";
  
  //   return returnString;
  // }

  // function htmlToInsert(data){
  //   return `<div class="learning-objective">
  //   <article>
  //   <h3>${data[17].question}</h3>
  //   <p>Type: ${data[17].type}</p>
  //   <p>${data[17].answer}</p>
  //   </article>
  //   </div>`;
  // }

  function $htmlToInsert(data){

    const $wrapper = $('<span class="monkeyfuzz"></span>');

    data.forEach(element => {
      const $newLI = $(`<li>${element.question}</li>`);
      $wrapper.append($newLI);
    });

    return $wrapper;
  }

  $('form').submit( function (event){
    event.preventDefault();

    $.ajax({
      url: 'https://localhost:7865/json',
      method: 'get'
    })
    .then((data) => {
      console.log("data",data);
      const returnVal = $htmlToInsert(data);
      $('#display').append(returnVal);
    })
    .catch((error) => {
      console.log("error",error);
    });

  });

});
