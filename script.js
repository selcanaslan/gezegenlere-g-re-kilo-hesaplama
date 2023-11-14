const header = document.querySelector('h1')
const input = document.querySelector('input')
const select = document.getElementById('select')
const btn = document.getElementById('button')
const input_container = document.querySelector('.container')
const flex_container = document.querySelector('.flex-container')
const img_container = document.querySelector('.img-container')
const img = document.getElementById('image')
const content = document.getElementById('content')


document.body.style.backgroundImage = "url('./galaxy.gif')"


header.style.color = "white"
header.style.textAlign = "center"


input_container.style.display = "flex"
input_container.style.justifyContent = "center"
input_container.style.alignItems = "center"
input_container.style.gar = "20px"
input_container.style.margin = "20px auto"


flex_container.style.display = "flex"
flex_container.style.justifyContent = "center"
flex_container.style.alignItems = "center"
flex_container.style.margin = "50px auto"
flex_container.style.gap = "20px"
flex_container.style.backgroundColor = "rgba(255,255,255,0.100"
flex_container.style.padding = "30px"


btn.style.width = "150px"
btn.style.height = "30px"
input.style.width = "150px"
input.style.height = "30px"
select.style.width = "150px"
select.style.height = "30px"

content.style.color = "white"
content.style.fontSize = "20px"


btn.addEventListener('click', function() {
    let kilo = Number(input.value)
    kilo /= 9.81
    let gezegen = select.value
    let sonuc = 0


   if (input.value.trim () != '' && select.value != "Bir gezegen seç" &&  !isNaN(input.value)) {
    sonuc = kilo * 9.81
    if(gezegen === "earth"){
        img.setAttribute("src","./earth.png")
    }else if (gezegen === "jupiter"){
        img.setAttribute("src","./jupiter.png")
        sonuc = kilo * 24.8
    }else if (gezegen === "mars"){
        img.setAttribute("src","./mars.png")
        sonuc = kilo * 3.7
    }else if (gezegen === "mercury"){
        img.setAttribute("src","./mercury.png")
        sonuc = kilo * 3.7
    }else if(gezegen === "moon"){
        img.setAttribute("src","./moon.png")
        sonuc = kilo * 1.6
    }else if (gezegen === "neptune.png"){
        img.setAttribute("src","./neptune.png")
        sonuc = kilo * 11.15
    }else if (gezegen =="pluto"){
        img.setAttribute("src","./pluto.png")
        sonuc = kilo * 0.62
    }else if ( gezegen === "saturn"){
        img.setAttribute("src", "./saturn.png")
        sonuc = kilo * 10.44
    }else if (gezegen === "uranus"){
        img.setAttribute("src","uranus.png")
        sonuc = kilo * 8.87
    }else if ( gezegen === "venus"){
        img.setAttribute("src","./venus.png")
        sonuc = kilo * 8.87
    }

    content.innerHTML = `Seçmiş olduğunuz gezegen: <span class="sekillendir">${gezegen} </span> ve bu gezegemdeki ağırlığınız: <span class="sekillendir"> ${sonuc.toFixed (2)}kg </span>`
   }else{
    content.textContent= "kilonu sayıyla gir ve bir gezegen seçtiğinden emin ol"
   }
})


