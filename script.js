$(document).ready(function(){
  $('#ok').click(function(){
    var ime = $('#ime').val();
    var prvi = $('#prvi').val();
    var drugi = $('#drugi').val();
    var tretji = $('#tretji').val();
    var proti = $('#proti').val();
    if(ime == ""){
      $('#movies').hide();
      $('#msg').addClass("col-xs-12 text-center");
      $('#msg').append("<p>Neveljaven vnos!</p>");
      $('#msg').append("<input type='button' value='Ponovno poskusi' class='btn btn-danger' id='reset'>");
      $('#reset').click(function(){
        $('#msg').empty();
        $('#movies').show();
      })
    }
    else{
      var link = {
        datum: new Date(),
        ime: ime,
        prvi: prvi,
        drugi: drugi,
        tretji: tretji,
        proti: proti
      }
      var json = JSON.stringify(link);
      request = new XMLHttpRequest();
      request.open("POST", "/read_store.php", true);
      request.setRequestHeader("Content-type", "application/json;charset=UTF-8");
      request.send(json);
      request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status === 200){
          jsondata = JSON.parse(request.responseText);
          console.log(jsondata);
        }
      }
      console.log(link);
      $('#movies').empty();
      $('#movies').html("<p>Hvala za tvoj glas!</p>");
    }
  })
});
