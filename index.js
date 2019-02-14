(() => {
    let lDivv;
    let lBr;
    let lTags;
    repositories.forEach( pData => {

        lDivv = document.createElement("DIV");
        lBr = document.createElement("BR");
        lDivv.id = "rep";
        lTags = "";
        pData.tags.forEach(tag => {
            lTags += `<span class="tag">${tag.toLowerCase}</span>`
        });

        lDivv.innerHTML =    `<a href="./${pData.url}"> ${pData.name} </a>` +
                            `<div class="typecode">` +
                                `<span class="circle", id="${pData.code.toLowerCase()}"></span>` +
                                `<span class="codename"> ${pData.code} </span>` +
                            `</div>` +
                            lTags;
        document.body.appendChild(lDivv);
        document.body.appendChild(lBr);
    });
})()
