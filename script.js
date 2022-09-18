$(document).ready(function(){
    $('button').click(function(){
        const a = $('#name').val();
        alert(a);
$('.img-class').attr('src',`https://joeschmoe.io/api/v1/${a}`);        
    });
});

