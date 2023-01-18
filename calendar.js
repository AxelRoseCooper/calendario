function finDeSemana(){
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    let anio = document.getElementById("anio").value;

    let fecha = new Date(anio,mes,dia).getDay()
    
    switch(fecha){
        case 0: // domingo
        return document.getElementById("resultado").innerHTML = "Domingo, a mimir.";
        case 1: // lunes
        return document.getElementById("resultado").innerHTML = "Lunes, a trabajar.";
        case 2: // Martes
        return document.getElementById("resultado").innerHTML = "Martes, a trabajar.";
        case 3: // Miercoles
        return document.getElementById("resultado").innerHTML = "Miercoles, a trabajar.";
        case 4: // Jueves
        return document.getElementById("resultado").innerHTML = "Jueves, a trabajar";
        case 5: // Viernes
          return document.getElementById("resultado").innerHTML = "Viernes, a trabajar y despues una miche.";
        default: // Sabado
        return document.getElementById("resultado").innerHTML = "A Sabado , si descansas los sabados a mimir.";
        
    }
}
