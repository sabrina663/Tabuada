function resultado(){
    let number = document.getElementById('number').value
    let mult = document.getElementById('multiplicador').value
    if (number === '' || mult === ''){
        document.getElementById('area-result').innerHTML = '<p>Por favor Digite um valor valido em ambos campos, so assim o resultado sera gerado</p>'
    }else{
        document.getElementById('area-result').innerHTML = `<p>A multiplicação de ${number} x ${mult} é ${number * mult}</p>`
    }
}



