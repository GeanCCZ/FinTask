const fetchFields= async()=>{
    const pathRelative = window.location.origin + "/productive-plan-front/data/navigation-options.json" ;

    const response = await fetch(pathRelative)
      .then((response) => response.json())
      .then((data) => {
        return data; // Aqui você pode usar os dados JSON
      });
    return response
}
async function renderFields(){
    fields = await fetchFields()
    let navOptions = document.getElementsByClassName('navigation-options')
    let div = document.createElement("div")

    fields.forEach(field => {
        let itemDiv = document.createElement("div");
        itemDiv.textContent = field.name;
        div.appendChild(itemDiv);
    });

    Array.from(navOptions).forEach(navOption=>{
        navOption.appendChild(div.cloneNode(true))
    })

}
window.onload = renderFields()
