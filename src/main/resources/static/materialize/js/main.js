const data = JSON.parse(window.localStorage.getItem('form'));

if (data != null) {
    for (var i = 0; i < data.length; i++ ){
         if (data[i].name == 'nome'){
             $("[name='nome']").val(data[i].value);
         }
         if (data[i].name == 'local'){
             $("[name='local']").val(data[i].value);
         }
         if (data[i].name == 'data'){
             $("[name='data']").val(data[i].value);
         }
         if (data[i].name == 'horario'){
             $("[name='horario']").val(data[i].value);
         }
    }
}

$( "#form" ).change(function() {
   var data = $( this ).serializeArray();
   localStorage.setItem('form', JSON.stringify(data));
});


$('#save').on('click', function () {
    if( $("[name='nome']").val() != '' &&
        $("[name='local']").val() != '' &&
        $("[name='data']").val() != '' &&
        $("[name='horario']").val() != '' )
    {
        window.localStorage.removeItem('form');
    }
});