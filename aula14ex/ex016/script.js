function contar () {
    let  i = document.getElementById('inicio')
    let  f = document.getElementById('fim')
    let  p = document.getElementById('passo')
    let res = document.getElementById('res')

    if(i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        window.alert('[ERRO] Confira os dados!')
    } else {
        res.innerHTML = 'Contando:'
        let ini = Number(i.value)
        let fim = Number(f.value)
        let pas = Number(p.value)
        if (i < f) {
            // contagem crescente
            for(let c= ini;c <= fim; c += pas) {
                res.innerHTML += `  ${c}  \u{1F449}`
            }
        } else {
            // contagem regressiva
            for(let c = ini; c>= fim; c -= pas){
                res.innerHTML += `  ${c}  \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}