function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let anoslt = document.querySelector("#ano").value
    let idade = ano - anoslt
    let resultado = document.querySelector("#resultado")
    let img = document.createElement("img")

    if(anoslt.length == 0 || anoslt > ano || idade > 125){
        window.alert("Algo está errado, cheque seus dados e tente novamente!")
    }
    else{
        let choiche = document.getElementsByName("rad")
        let genero = " "
        if (choiche[0].checked){
            genero = "homem"
            if (idade < 10){
                img.setAttribute("src", "images/bebe-m.png")
            }
            else if (idade < 22){
                img.setAttribute("src", "images/jovem-m.png")
            }
            else if (idade < 45){
                img.setAttribute("src", "images/homem.png")
            }
            else{
                img.setAttribute("src", "images/idoso.png")
            }
        }
        else{
            genero = "mulher"
            if (idade < 10){
                img.setAttribute("src", "images/bebe-f.png")
            }
            else if (idade < 22){
                img.setAttribute("src", "images/jovem-f.png")
            }
            else if (idade < 45){
                img.setAttribute("src", "images/mulher.png")
            }
            else{
                img.setAttribute("src", "images/idosa.png")
            }
        }
        resultado.innerHTML = `O resultado foi: ${genero} com ${idade} anos.`
        resultado.appendChild(img)
    }

}