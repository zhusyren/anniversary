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
 var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if(!isChrome){
      $('#iframeAudio').remove()
    }
  else{
     $('#playAudio').remove() //just to make sure that it will not have 2x audio in the background 
  }
