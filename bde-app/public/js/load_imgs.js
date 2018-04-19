//var pics = [];
//var response;

var Picture = function (id, name, urlImg){
    this.id = id;
    this.name = name;
    this.url = urlImg;
};

var images = [];

function getImages(){
    
    //xml http request to /api/users
    url = '/api/event/pictures/'+document.getElementById("eventid").value;
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send(null);
    
    xhr.addEventListener('readystatechange', function() {

    //if request completed gets the JSON file
    if (xhr.readyState === 4 && xhr.status === 200) {
      
      
      var response = JSON.parse(xhr.responseText);
      var i=0;
      
      
      while(response[i] != null){
          images.push(new Picture(response[i].id, response[i].name, response[i].url_picture));
        setImage(response[i].url_picture, response[i].id);
//        console.log(response[i].url_picture);
        i+=1;
      }
      
      var ldedstate = document.getElementById("imgsloaded");
      ldedstate.value = 1;
 
    }
    else {
        return 'error';
    }

    });
}

function setImage(imgpath, id){
    //print to DOM
    var newimage = new Image();
    newimage.id = "id"+id;
    newimage.src = imgpath;
    newimage.addEventListener('click', function(){
        
        //function executed when photo clicked
        
        //Get the modal
        var modal = document.getElementById('myModal');
//        var imgsrc = document.getElementById(this.id).src;
        var modalImg = document.getElementById('mdlImg');

        modal.style.display = "block";
        modalImg.style.background = 'center / contain no-repeat url('+this.src+')';
        
        loadComments();

        var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
                modal.style.display = "none";
            } ;
    });
    document.getElementById('photos').appendChild(newimage); 
}

getImages();
