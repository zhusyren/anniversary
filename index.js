function domReady(fn) {
    // If we're early to the party
    document.addEventListener("DOMContentLoaded", fn);
    // If late; I mean on time.
    if (document.readyState === "interactive" || document.readyState === "complete" ) {
      fn();
    }
}
  
domReady(() => {
    document.getElementsByClassName("card").item(0).addEventListener("click", function(){
        document.getElementsByClassName("modal").item(0).classList.add("is-visible");
    })
    document.getElementsByClassName("modal").item(0).addEventListener("click", function(e){
        if(e.target.classList.contains("is-visible")){
            e.target.classList.remove("is-visible");
        }
    })
});
function play() {var audio = new Audio('' + linkmp3);audio.play();}
linkmp3 = 'https://i.top4top.io/m_24440f4yp1.mp3';
