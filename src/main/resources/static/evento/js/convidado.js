const data = JSON.parse(window.localStorage.getItem('convidado'));

if (data != null) {
    for (var i = 0; i < data.length; i++ ){
         if (data[i].name == 'nomeConvidado'){
             $("[name='nomeConvidado']").val(data[i].value);
         }
         if (data[i].name == 'rg'){
             $("[name='rg']").val(data[i].value);
         }
    }
}

$( "#form" ).change(function() {
   var data = $( this ).serializeArray();
   localStorage.setItem('convidado', JSON.stringify(data));
});


$('#save').on('click', function () {
    if( $("[name='nomeConvidado']").val() != '' &&
        $("[name='rg']").val() != '')
    {
        window.localStorage.removeItem('convidado');
    }
});