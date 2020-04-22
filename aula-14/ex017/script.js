function gerarTabuada(){
    let numero = document.getElementById('valor');
    let tabuada = document.getElementById('tabuada');

    if(numero.value.length == 0){
        window.alert('Por favor, digite um número');
    }else{
        let num = Number(numero.value);
        tabuada.innerHTML = '';
        for(let contador = 0; contador <= 10; contador++){
            let item = document.createElement('option');
             item.text = `${num} x ${contador} = ${num*contador}`;
             item.value= `tabuada${contador}`;
             tabuada.appendChild(item);
        }   
        //let contador = 1;
        // while(contador <= 10){
        //     let item = document.createElement('option');
        //     item.text = `${num} x ${contador} = ${num*contador}`;
        //     item.value= `tabuada${contador}`;
        //     tabuada.appendChild(item);
        //     contador++;
        // }
    }

}