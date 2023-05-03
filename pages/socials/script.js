window.onload = function() {
    document.getElementById("video").preload='auto'
    document.getElementById("show-modal").click()
}
click=0
window.onclick = function() {
    if (click==1){
        document.getElementById("video").play()
        document.getElementById("video").style.display='';
        document.getElementById("msg").style.display='';
        document.getElementById("msg").scrollIntoView();
        document.getElementById("cookie-modal").style.display="none";
    }
    click+=1
}