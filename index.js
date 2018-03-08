async function repoLoad() {
    await function repoaw() {
        var scripting = document.createElement("SCRIPT");
        scripting.type = "text/javascript";
        scripting.src = "repositories.json";
    
        document.head.appendChild(scripting);
    }
    
    repositories.forEach( m => {
    
        var divv = document.createElement("div");
        divv.id = "rep";
        var tags = "";
        m.tags.forEach(tag => {
            tags += `<span class="tag">${tag}</span>`
        });
        
        divv.innerHTML =    `<a href="./"${m.url}> ${m.name} </a>` +
                            `<div class="typecode"><span class="circle", id="${m.code.toLowerCase()}"> <span class="codename"> ${m.code} </div>` +
                            tags;
    });
}

repoLoad()
