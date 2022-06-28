//Tooltip trigger code
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
//glitch code
function glitch(){
    var x = 1;
    while (true){
        x = (x * x * x * x) + (x/(x + 2));
    }
}
//break
//break
//break
//break
//break
//break
//break
//break
//break
//break
//break
//break
//break
//break
//break
//break
//break
//break
//break
//break
//break
//break
//break
//break
//break
//break
//break
//break
//break
//break
//break
//break
//break
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/j0KQhjy5X/model.json', modelReady);
}
function modelReady(){
    console.log("Model Loaded!");
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("i-hear-this").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = (results[0].confidence * 100).toFixed(1) + "%";
        document.getElementById("i-hear-this").style.color = "rgb(" + r + ", " + g + ", " + b + ")";
        document.getElementById("accuracy").style.color = "rgb(" + r + ", " + g + ", " + b + ")";

        img1 = document.getElementById("alien1");
        img2 = document.getElementById("alien2");
        img3 = document.getElementById("alien3");
        img4 = document.getElementById("alien4");

        if (results[0].label == "My Voice") {
            img1.src = "aliens-04.gif";
            img2.src = "aliens-03.png";
            img3.src = "aliens-02.png";
            img4.src = "aliens-01.png";
        } else if (results[0].label == "Clap") {
            img1.src = "aliens-03.png";
            img2.src = "aliens-02.gif";
            img3.src = "aliens-01.png";
            img4.src = "aliens-04.png";
        } else if (results[0].label == "Table") {
            img1.src = "aliens-02.png";
            img2.src = "aliens-01.png";
            img3.src = "aliens-04.gif";
            img4.src = "aliens-03.png";
        } else {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.gif";
        }
    }
}