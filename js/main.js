$(document).ready(function(){
  
  // fullpage customization
  $('#fullpage').fullpage({
    sectionSelector: '.section',
    navigation: true,
    slidesNavigation: true,
    css3: true,
    controlArrows: false    
  }); 
  
});

window.onload = function() {
  i=1;
  setInterval(function(){
    var pic = document.getElementById('target');
    pic.setAttribute("src",("/images/bg_section040"+(i%4+1)+".jpg"));
    i++;
    
  },5000);

}

