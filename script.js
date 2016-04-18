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
        ime: ime,
        prvi: prvi,
        drugi: drugi,
        tretji: tretji,
        proti: proti
      }
      var json = JSON.stringify(link);
      console.log(json);
      var request = new XMLHttpRequest();
      request.open("POST", "read_store.php", false);
      request.setRequestHeader("Content-type", "application/json;charset=UTF-8");
      request.send(json);
      $('#movies').empty();
      $('#movies').html("<p>Hvala za tvoj glas!</p>");
    }
  });
});
