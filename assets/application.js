




  
function aa() {

    data = {
      "qqq": 'idd',
    }
    jQuery.ajax({
      type: 'GET',
      url: '/?sections=qqq',
      dataType: 'json',
      success: function(w) { 
        console.log("www",w.response);
      }
    });
  }

$('document').ready(function(e){
  console.log("sdsdsdsdsd");
  aa();
})



 let formData = new FormData();

  // add one more field
 formData.append("qqq", "Lee");

// Put your applicaiton javascript here
xhr = new XMLHttpRequest();
xhr.open('GET', '/?sections=qqq&qqq=tgtgt', true);
xhr.responseType = "json";
xhr.send();

//JSON.parse(xhr.responseText);
// collections/boys-games

xhr.onload = function() {
  if (xhr.status != 200) { // HTTP error?
    // handle error
    alert( 'Error: ' + xhr.status);
    return;
  } else {
    console.log(`${xhr.response.qqq}`);
  }
}

xhr.onerror = function() { // only triggers if the request couldn't be made at all
  alert(`Network Error`);
};
