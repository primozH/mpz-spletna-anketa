$(document).ready(function(){
  $('#ok').click(function(){
    var prvi = $('#prvi').val();
    var drugi = $('#drugi').val();
    var tretji = $('#tretji').val();
    var proti = $('#proti').val();
    var cont = prvi + "\n" + drugi + "\n" +
	tretji + "\n" + proti;
    var link = "mailto:primoz.hrovat.96@gmail.com"
                 + "&subject=" + escape("Filmski večer - filmi")
                 + "&body=" + escape(cont)
        ;

        window.location.href = link;
    $('#movies').empty();
    $('#movies').html("<p>Hvala za tvoj glas!</p>");
  })
});
