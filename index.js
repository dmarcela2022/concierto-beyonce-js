
function gestionarAdmision(edad) {
    if (edad <14) {
        console.log(lo siento, eres demasiado joven, vuelve a intentarlo en unos años.")
    } else if (edad >=14 && edad < 18){
        console.log ("puedes entrar, pero solo si te acompaña una persona mayor de edad.")
    } else {
        console.log ("Eres mayor de edad, puedes entrar")
    }

    gestionarAdmision(0)
    gestionarAdmision(8)
    gestionarAdmision(12)
    gestionarAdmision(14)
    gestionarAdmision(17)
    gestionarAdmision(18)
    gestionarAdmision(35)
    gestionarAdmision(19)
