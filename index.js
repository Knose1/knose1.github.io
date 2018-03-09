repositories.forEach( m => {
    
    var divv = document.createElement("DIV");
    divv.id = "rep";
    var tags = "";
    m.tags.forEach(tag => {
        tags += `<span class="tag">${tag}</span>`
    });
        
    divv.innerHTML =    `<a href="./${m.url}"> ${m.name} </a>` +
                        `<div class="typecode">` +
                            `<span class="circle", id="${m.code.toLowerCase()}"></span>` +
                            `<span class="codename"> ${m.code} </span>` +
                        `</div>` +
                        tags;
    document.body.appendChild(divv);
});
