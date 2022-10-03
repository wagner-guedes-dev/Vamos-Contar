function contar(){
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf') 
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 ||fim.value.length == 0 ||passo.value.length == 0 ){
        res.innerHTML = 'Impossivel contar, por favor verifique os dados'
    }else{
        res.innerHTML = `Contando:`
        i = Number(inicio.value)
        f = Number(fim.value)
        p = Number(passo.value)
        if(p <= 0){
            p = 1
            alert("Passo invalido! PASSO considerado 1")
        }
    
        if(i < f){
            //contagem crescente       
            for(var c = i ; c <= f; c += p)
            res.innerHTML += ` ${c} \u{1F449} `
            
        }else{
            //contagem decrescente
            for(var c = i ; c >= f; c -= p)
            res.innerHTML += ` ${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }

}

document.addEventListener("keypress", function(e){
    if(e.key === 'Enter'){
        var btn = document.getElementById('enter');
        btn.click();
    }
} )