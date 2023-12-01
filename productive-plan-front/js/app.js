
function loadNavbar(){
    fetch('/productive-plan-front/views/navbar/index.html').then(response=>response.text()).then(data=>{

        document.getElementsByClassName('navigation-section').innerHTML = data.innerHTML

    })
}

window.onload = loadNavbar