var agora = new Date()
var horas = agora.getHours()
console.log(`agora são exatamente ${horas} horas`)
if (horas <12){
    console.log('Bom Dia!')
}else if (horas <=18){
    console.log('Boa tarde!')
}
else{ 
    console.log("Boa noite!")
}