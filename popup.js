chrome.topSites.get(function (top){
    if(top){
        top = top.splice(0, 7)
        var str = '<ul>'
        top.forEach(data=>{
            var name = data.title;
            var link = data.url;
            str += `<li><a target="_blank" href="${link}">${name}</a></li>`
        })
        document.getElementById('topSites').innerHTML = str;
    }
})
var topBtnSel = document.getElementById('topShowBtn')
if(topBtnSel) {
    topBtnSel.addEventListener('onclick', function(){
        var element = document.getElementById("topSites");
        element.classList.toggle("showHide");
    })
    topBtnSel.addEventListener('click', function(){
        var element = document.getElementById("topSites");
        element.classList.toggle("showHide");
    })
}
var set = document.getElementById('plus')
if(set) {
    set.addEventListener('click', function(){
        var element1 = document.getElementById("main-body");
        var element2 = document.getElementById("settings");
        var element = document.getElementById("topSites");
        element.classList.add("showHide");
        element1.classList.toggle("showHide");
        element2.classList.toggle("showHide");
    })
}





