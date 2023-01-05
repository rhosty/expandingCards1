

let onLoad = document.getElementById('onLoad');
    onLoad.style.width = "800px"


const picture = document.getElementsByClassName('imageCard');
for (let i = 0; i < picture.length; i++) {
  picture[i].addEventListener('click', function() {

    for (let j = 0; j < picture.length; j++) 
    {
      picture[j].style.width = '100px';
    }
    picture[i].style.width = '800px';

    //  if (picture[i].offsetWidth === 800){
    //     picture[i].style.width = "100px"
        
    // }

  });
}