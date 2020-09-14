function createDiv(rep) 
{
    let lDivv;
    let lBr;
    let lTags;
    lDivv = document.createElement("DIV");
    let lTypecode = document.createElement("DIV");
    lBr = document.createElement("BR");
    lDivv.class = "rep";
    lTypecode.class= "typecode";
    lTags = "";
    if (rep.tags)
        rep.tags.forEach(tag => {
            lTags += `<span class="tag">${tag}</span>`
        });

    lDivv.innerHTML =  `<a href="./${rep.url}"> ${rep.name} </a>`;
    
    rep.languages.forEach(lang => {
        let lCodeDiv = document.createElement("DIV");
        lCodeDiv.innerHTML = 
            `<span class="circle", id="${lang.toLowerCase()}"></span>` +
            `<span class="codename"> ${lang} </span>`;
    });
    
    lDivv.innerHTML += lTags;
    document.body.appendChild(lDivv);
    lDivv.appendChild(lTypecode);
    document.body.appendChild(lBr);
}

fetch("https://api.github.com/users/Knose1/repos").then((r) => {
    r.json().then(repositories => {
        repositories.forEach( pData => {
            let fetchCount = 0;
            const fetchNedded = 2;
            let rep = {};
            rep.name = pData.name;
            fetch("https://api.github.com/repos/knose1/"+rep.name+"/tags").then((r) => {
                r.json( (j) => {
                    rep.tags = j;
                });
            });
            fetch("https://api.github.com/repos/knose1/"+rep.name+"/languages").then((r) => {
                r.json( (j) => {
                    rep.languages = Object.keys(j);
                    createDiv(rep);
                });
            });
            
            function lOnFetch() 
            {
                fetchCount += 1;
                if (fetchNedded == 2) createDiv(rep);
            }
        });
    });
});
