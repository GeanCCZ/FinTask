
const fields = fetch('navigation-options.json')
.then(response => response.json())
.then(data => {
    console.log(`a`)
    console.log(data)
  return data // Aqui você pode usar os dados JSON
})

function renderFields(){

    let navOptions = document.getElementsByClassName('navigation-options')
    let div = document.createElement("div")
    for (let i=0; i<fields.length;i++){
        let item =document.createTextNode(fields[i])
        div.appendChild=item

    }
    console.log(div)
}
renderFields()

module.export