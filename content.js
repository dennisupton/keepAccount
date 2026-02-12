const parts = window.location.pathname.split("/"); 


console.log("current user is : ",localStorage.getItem("currentUser"))
if (localStorage.getItem("currentUser") === null){
    localStorage.setItem("currentUser", 0)
}


function changeAccount(event){
    const link = event.currentTarget;

    event.preventDefault();

    const dataAu = link.getAttribute("data-au");
    localStorage.setItem("currentUser", dataAu);
    console.log("Changing account to : ", dataAu);
}





if (parts.includes("u")){
    parts[parts.indexOf("u")+1] = localStorage.getItem("currentUser");
    let newPath = parts.join("/");
    let newURL = window.location.origin + newPath + window.location.hash;

    if (window.location.href !== newURL){
        window.location.href = newURL;
    }

}