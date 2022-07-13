//https://teachablemachine.withgoogle.com/models/PKq8lJJCv/model.json

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/PKq8lJJCv/model.json', modelReady);
}

function modelReady(){  
    classifier.classify( gotResults);
}


function gotResults(error,results){
    if (error){
        console.error(error);
    }else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
random_number_g = Math.floor(Math.random() * 255) + 1;
random_number_b = Math.floor(Math.random() * 255) + 1;
        
document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
document.getElementById("result_confidence").innerHTML='Accuracy - '+(results[0].confidence*100).toFixed(2)+"%";
document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

img=document.getElementById('alien1');
img1=document.getElementById('alien2');
img2=document.getElementById('alien3');
img3=document.getElementById('alien4');

if(results[0].label=="dog"){

    img.src='200.gif';
    img1.src='dolphin.png';
    img2.src='cat.jpg.';
    img3.src='dog.webp';
}
else if (results[0].label=="dolphin"){
    img.src='dog.webp';
    img1.src='dolphins-swimming.gif';
    img2.src='cat.jpg';
    img3.src='horse.jpg';
}
else if (results[0].label=="cat"){
    img.src='dog.webp';
    img1.src='dolphin.png';
    img2.src='cat-on-field-cat-field.gif';
    img3.src='horse.jpg';
} 
else  {
    img.src='dog.webp';
    img1.src='dolphin.png';
    img2.src='cat.jpg.';
    img3.src = 'black-horse-horse.gif';
    
}
    }
}








