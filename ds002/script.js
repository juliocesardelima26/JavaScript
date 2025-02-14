function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res(fano.ariaValueMax.) = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var radsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        if(radsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                
                res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
            }
    }
}