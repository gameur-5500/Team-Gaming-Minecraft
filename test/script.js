const contents = document.getElementById('maison2');
contents.addEventListener('click', function() {          
const contents2 = document.getElementById('toutemaison');
contents2.style.display = "none"; 

    const contents3 = document.getElementById('navigationmaison');
    contents3.style.top = '60px' ;
    const contents4 = document.getElementById('navigationmaison2');
    contents4.style.top = '60px';
    const contents5 = document.getElementById('responsive3');
    contents5.style.top = '43px';
    const contents6 = document.getElementById('navigationmaison5');
    contents6.style.top = '60px' ; 
    const contents7 = document.getElementById('navigationmaison6');
    contents7.style.top = '60px' ;
    const contents8 = document.getElementById('navigationmaison7');
    contents8.style.top = '69px' ;
    const contents9 = document.getElementById('navigationmaison8');
    contents9.style.top = '-109px' ;
    const contents10 = document.getElementById('navigationmaison9');
    contents10.style.top = '-250px' ;
    contents10.style.right = '-679px';});

    const responsive = document.getElementById('responsive3');
    responsive.addEventListener('click', function() {          
        const responsive2 = document.getElementById('responsive2');
        if(responsive2.style.display=="block"){
        responsive.style.transition = 'all 1.0s ease';
        responsive2.style.display="none";
        const responsive3 = document.getElementById('responsivelogonav');
        responsive3.style.borderBottom = 'none';
        responsive.innerHTML = '<i class="fas fa-bars"></i>';
        }else{
        responsive.style.transition = 'all 1.0s ease';
        responsive2.style.display="block";
        const responsive3 = document.getElementById('responsivelogonav');
        responsive3.style.borderBottom = '1px solid white';
        responsive.innerHTML = '<i class="fas fa-times"></i>'
        }
}); 

const langue = document.getElementById('langue35');
langue.addEventListener('click', function() {          
const langue2 = document.getElementById('langue37');
if(langue2.style.display=="block"){
langue2.style.display="none";
}else{
langue2.style.display="block";
}  });


jQuery(function(){
$(function () {
$(window).scroll(function () { //Fonction appelée quand on descend la page
if ($(this).scrollTop() > 700 ) {  // Quand on est à 200pixels du haut de page,
    $('#scrollUp').css('display','block'); // Replace à 10pixels de la droite l'image
} else { 
    $('#scrollUp').removeAttr( 'style' ); // Enlève les attributs CSS affectés par javascript
}
});
});
});
$(function(){
        $("#scrollUp").click(function(){
            $("html, body").animate({scrollTop: 0},"slow");
        });
    });
