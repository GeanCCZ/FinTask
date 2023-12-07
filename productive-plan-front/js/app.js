
async function loadNavbar(){
    await fetch('/productive-plan-front/views/navbar/index.html').then( response=>  response.text()).then( data=>{
        const navElements = document.getElementsByClassName('navigation-section')
        for(let element of navElements){
            element.innerHTML = data
        }
    }).catch(error=>{
        throw new Error(error)
    })
}

window.onload=loadNavbar()