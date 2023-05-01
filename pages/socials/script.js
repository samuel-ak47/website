window.onload = function() {
    document.getElementById("MainVideovid").preload='auto'
    document.getElementById("show_modal").click()
}
click=0
window.onclick = function() {
    if (click==1){
        document.getElementById("MainVideovid").play()
        document.getElementById("close_modal").click()
        document.getElementById("MainVideovid").style.display='';
        document.getElementById("MainVideodesc").style.display='';
        document.getElementById("MainVideovid").scrollIntoView();
    }
    click+=1
}