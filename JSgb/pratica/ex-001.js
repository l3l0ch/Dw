var horas = new Date()
var minutos = horas.getMinutes()
let hora_atual = horas.getHours()




if (hora_atual <= 11 && hora_atual > 10){
    console.log(`São ${hora_atual}:${minutos} horas, está na hora de fazer o almoço`)
} else if ( hora_atual >= 12 ) {
    console.log(`São ${hora_atual}:${minutos} horas, está na hora de almoçar!`)
}
// ----------------------------------------------------------------

switch(hora_atual) 
{
    case 12:
        console.log(`São ${hora_atual}:${minutos} horas, está na hora de almoçar!`)
        break
    case 11:
        console.log(`São ${hora_atual}:${minutos} horas, está na hora de fazer o almoço`)
        break
    case 10:
        console.log(`São ${hora_atual}:${minutos} horas, está na hora de fazer o almoço`)
        break
    default:
        console.log('Não está na hora do almoço!')
        break
}