function resultado(){
    let number = document.getElementById('number').value
    let mult = document.getElementById('multiplicador').value
    let msg = document.getElementById('result-now')
    if (number === '' || mult === ''){
        msg.innerHTML = '<p>Por favor Digite um valor valido em ambos campos, so assim o resultado sera gerado</p>'
        msg.style.color = 'rgb(90, 20, 20)'
    }else{
        msg.innerHTML = `<p>A multiplicação de ${number} x ${mult} é ${number * mult}</p>`
        msg.style.color = 'rgb(6, 65, 6)'
    }
    document.getElementById('number').value = ''
    document.getElementById('multiplicador').value = ''
}
function tabuada(){
    /* recuperar o valor do campo */
    let number = document.getElementById('number').value
    document.getElementById('multiplicador').value = ''
    /* analise do campo numero */
    if (number === ''){
        let msg = document.getElementById('result-now')
        msg.innerHTML = '<p>Por favor Digite um valor valido no campo Numero se deseja ver a tabuada</p>'
        msg.style.color = 'rgb(90, 20, 20)'
    }else{
        /* criação da div  tabuada */
        let div = document.createElement('div');
        $("#div").remove()
        /* da estilização pro div tabuada */
        div.className = 'sub-conteiner tabuada'
        div.id = 'div'
        document.getElementById('cont').appendChild(div);
        /* criacao da tabela */
        let table = document.createElement('table')
        $('table').remove();
        let tabela = document.getElementById('div').appendChild(table) 
        /* $('table').remove(); */
        /* laço */
        for(let x = 0;x <=10; x++){
            let tr = tabela.insertRow()
            tr.innerHTML = `${number} x ${x} = ${number * x}`
        }
        document.getElementById('number').value = ''
    }
    
}



