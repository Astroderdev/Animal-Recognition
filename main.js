var dog = 0;
var lion = 0;
var cat = 0;
var cow = 0;

function classificationstarted(){
    navigator.mediaDevices.getUserMedia({ audio: true}); 
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/bC2jyC8mf/model.json", modelReady);
}

function modelReady(){ 
    classifier.classify(gotResults);
 }

 function gotResults(error, results){
    if(error){
        console.log(error);
    }else{
        console.log(results);
        r1 = Math.floor(Math.random() * 255)+1;
        g1 = Math.floor(Math.random() * 255)+1;
        b1 = Math.floor(Math.random() * 255)+1;
        r2 = Math.floor(Math.random() * 255)+1;
        g2 = Math.floor(Math.random() * 255)+1;
        b2 = Math.floor(Math.random() * 255)+1;
        r3 = Math.floor(Math.random() * 255)+1;
        g3 = Math.floor(Math.random() * 255)+1;
        b3 = Math.floor(Math.random() * 255)+1;
        r4 = Math.floor(Math.random() * 255)+1;
        g4 = Math.floor(Math.random() * 255)+1;
        b4 = Math.floor(Math.random() * 255)+1;
        r5 = Math.floor(Math.random() * 255)+1;
        g5 = Math.floor(Math.random() * 255)+1;
        b5 = Math.floor(Math.random() * 255)+1;
        
        if(results[0].label == 'Barking'){
            document.getElementById("image_animal").src = "Images/dog.png";
            dog = dog + 1;
            document.getElementById("dog").innerHTML = "dectected voice of dog-" + dog;
        }
        if(results[0].label == 'Meowing'){
            document.getElementById("image_animal").src = "Images/cat.png";
            cat = cat + 1;
            document.getElementById("cat").innerHTML = "dectected voice of cat-" + cat;
        }
        if(results[0].label == 'Roar'){
            document.getElementById("image_animal").src = "Images/lion.png";
            lion = lion + 1;
            document.getElementById("lion").innerHTML = "dectected voice of lion-" + lion;
        }
        if(results[0].label == 'Mooing'){
            document.getElementById("image_animal").src = "Images/cow.png";
            cow = cow + 1;
            document.getElementById("cow").innerHTML = "dectected voice of cow-" + cow;
        }
        if(results[0].label == 'Background Noise'){
            document.getElementById("image_animal").src = "Images/default.png";
        }

        var results = results[0].label;
        document.getElementById("voice").innerHTML = "The recognized voice is-" + results

        document.getElementById("dog").style.color = "rgb("+r1+","+b1+","+g1+")";
        document.getElementById("cat").style.color = "rgb("+r2+","+b2+","+g2+")";
        document.getElementById("lion").style.color = "rgb("+r3+","+b3+","+g3+")";
        document.getElementById("cow").style.color = "rgb("+r4+","+b4+","+g4+")";
        document.getElementById("voice").style.color = "rgb("+r5+","+b5+","+g5+")";
    }
} 