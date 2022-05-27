
    $(document).ready(function(){
       jsObtenerPeliculas();
    });

    function jsObtenerPeliculas() {
        //https://swapi.dev/api/films //Lista
        //'https://swapi.dev/api/films/1/',
        $.ajax({
            type: 'GET',
            url: 'https://swapi.dev/api/films',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
          //  data: JSON.stringify(obj),
            async: true,
            processData: false,
            cache: false,
            success: function (Peliculas) {
                console.log(Peliculas);
                var Html='';
                for (Pelicula of Peliculas.results) {

                   Html+=' <div class="col-4">';
                  
                   Html+=' <table class="table table-hover table-body Conte-Peli">';
                   Html+='    <tr>';
                   Html+='    <td>Titulo</td>';
                   Html+="      <td class=\"TituloPelicula\" onclick=\"jsObtenerDetallesPelicula('" +Pelicula.url +"')\">" + Pelicula.title+ "</td>";
                   Html+='   </tr>';
                   Html+='    <tr>';
                   Html+='       <td>Director</td>';
                   Html+='       <td class="directorPelicula">' + Pelicula.director+ '</td>';
                   Html+='   </tr>';
                
                   Html+='   <tr>';
                   Html+='       <td>episode</td>';
                   Html+='       <td class="episodePelicula">' + Pelicula.episode_id+ '</td>';
                   Html+='  </tr>';
                
                   Html+='   <tr>';
                   Html+='       <td>año de lanzamiento</td>';
                   Html+='        <td class="anioPelicula">' + Pelicula.release_date+ '</td>';
                   Html+='    </tr>';
                
                   Html+='  </table>';
        
                   Html+=' </div>';
                   }            
                  $('.content-Peliculas').html(Html);
  
                
 },
            error: function (xhr) {
                  console.log('v');
              return false;
            }
        });
    }
        function jsObtenerDetallesPelicula(url='') {
            //https://swapi.dev/api/films //Lista
            $.ajax({
                type: 'GET',
                url: url,
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
              //  data: JSON.stringify(obj),
                async: true,
                processData: false,
                cache: false,
                success: function (Pelicula) {
                    var Html='';
                   Html+='<div class="col-12"><b>'+ Pelicula.title + '</b></div>';
                   Html+='<div class="col-4"> <b>Director</b></div>';
                   Html+='<div class="col-8"> '+Pelicula.director+'</div>';
                   Html+='<div class="col-6"> <b>año de lanzamiento</b></div>';
                   Html+='<div class="col-3"> ' + Pelicula.release_date +' </div>';
                   Html+='<div class="col-4">';
                       Html+='<p class="Encabezado">Naves</p>';
                       Html+='<ul>';
                       var i=1
                       for (vehicles of Pelicula.vehicles) {
                        Html+=  ' <li class="elemento' + i +'"></li>';
                       jsPeliculasvehiculo(vehicles,i);
                       i++;
                      } 

                       Html+='</ul>';
                       Html+='</div>';
                       Html+='<div class="col-4  ">';
                       Html+='<p class="Encabezado">Personajes</p>';
                       Html+='<ul>';
                      
                      // for (Planeta of Pelicula.producer) {
                           Html+=  ' <li class="elemento"> '+ Pelicula.producer + '</li>';
                       
                      // }


                      
                       Html+='</ul>';
                       Html+='</div>';
                       Html+=      '<div class="col-4">';
                       Html+=   '<p class="Encabezado">Plantas</p>';
                       Html+=   '<ul>';
                       
                       for (vehicles of Pelicula.planets) {
                        Html+=  ' <li class="elemento' + i +'"></li>';
                       jsPeliculasvehiculo(vehicles,i);
                       i++;
                      } 
                     
                      Html+=   '</ul>';
                      Html+=   '</div>';
                      
                    $('.content-divDetallesPelicula').html(Html);
                    
     },
                error: function (xhr) {
                      console.log('v');
                  return false;
                }
            });

}

function jsPeliculasvehiculo(url='',id=0) {
    //https://swapi.dev/api/films //Lista
    //'https://swapi.dev/api/films/1/',
    var vehiculo='.elemento'+id;
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
      //  data: JSON.stringify(obj),
        async: true,
        processData: false,
        cache: false,
        success: function (planet) {
         $(vehiculo).html(planet.name);
  
                
 },
            error: function (xhr) {
                  console.log('v');
              return false;
            }
        });
    }