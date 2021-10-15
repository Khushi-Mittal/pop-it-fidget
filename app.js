let popped = 0;

document.addEventListener('click', function(e){
    
    if (e.target.className.includes("balloon")){
        
                e.target.style.backgroundColor = "#000000";
                buttonAnimation(e.target.className);
                popped++;
                removeEvent(e);
                checkAllPopped();
    }   
});


function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 50);
  
  }
  

function removeEvent(e){
    e.target.removeEventListener('click', function(){
        
    })
};

function checkAllPopped(){
    if (popped === 8){
        let gallery = document.querySelector('#wrapper');
       let box =  document.querySelector('.flip-box');
       box.classList.toggle("flipboxs");
       setTimeout(function() {
        gallery.innerHTML =  window.location.reload(true);
      }, 800);
    }
};