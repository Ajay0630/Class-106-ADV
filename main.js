//Tooltip trigger code
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
//glitch code
function glitch(){
    while (true){
        var x = 1;
        x = x + 1;
    }
}

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/j0KQhjy5X/model.json', modelReady);
}
function modelReady(){
    console.error("Model Loaded!");
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
    }
}