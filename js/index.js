$(window).on('load', function () {
    // Cargamos las entradas 
    const respuesta = $.getJSON( "./blog.json", function() {
      })
        .done(function() {
          const posts = respuesta.responseJSON.entradas;
          for (let i = 0; i < posts.length ; i+=1){
              
          }
        })
        .fail(function() {
          console.log( "error" );
        })



    $('#menumovil').on('click', function () {
        // Esta función se encarga de mostrar el menú del movil
        menuMovil();
    });
    $(window).on('resize', function () {
        // Esta función se encarga de ocultar el menu del móvil cuándo se hace más grande la pesataña.
        if ($(window).width() >= 768) {
            if ($('#menumovil-items').hasClass('menumovil-show')) {
                menuMovil();
            }
        }
    });

    function menuMovil() {
        $('#menumovil-items').toggleClass('menumovil-show');
        $('#portada-container-contenido').toggleClass('noHeight');
        $('#menumovil').toggleClass('menumovilClose');
    }

});