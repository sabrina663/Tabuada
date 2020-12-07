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
}
function tabuada(){
    let number = document.getElementById('number').value
    document.getElementById('multiplicador').value = ''
    let msg = document.getElementById('result-now')
    /* analise do campo numero */
    if (number === ''){
        msg.innerHTML = '<p>Por favor Digite um valor valido no campo Numero se deseja ver a tabuada</p>'
        msg.style.color = 'rgb(90, 20, 20)'
    }else{
        /* criação da div  tabuada */
        let display_right = document.createElement('div');
        display_right.className = 'sub-conteiner tabuada'
        display_right.id = 'tab'
        let conteiner = document.getElementById('cont').appendChild(display_right);
        /* criacao da tabela */
        let tabela = document.createElement('table')
        tabela.id = 'idtab'
        let tab = document.getElementById('tab').appendChild(tabela)
        /* laço */
        for(let x = 0;x <=10; x++){
            let tr = tab.insertRow()
            tr.innerHTML = `${number} x ${x} = ${number * x}`
        }
        document.getElementById('number').value = ''
  
    }
}



