Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera ');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version', ml5.version);

classifier = mll5.imageClassifier('https://teachablemachine.withgoogle.com/models/UFPkPn4Vn/',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
      console.log(results);
      document.getElementById("result_emotion_name").innerHTML = results[0].label;
      document.getElementById("result_emotion_name2").innerHTML = results[1].label;
      prediction_1 = results[0].label;
      prediction_2 = results[1].label;
      speak();
      if(results[0].label == "Amazing")
      {
        document.getElementById("update_emoji").innerHTML = "&#128076;";
      }

      if(results[0].label == "Best")
      {
        document.getElementById("update_emoji").innerHTML = "&#128077;";
      }

      if(results[0].label == "Victory")
      {
        document.getElementById("update_emoji").innerHTML = "&#9996;";
      }

      if(results[0].label == "Raised Fist")
      {
        document.getElementById("update_emoji").innerHTML = "&#9994;";
      }

      if(results[0].label == "Clapping Hands")
      {
        document.getElementById("update_emoji").innerHTML = "&#128079;";
      }

      if(results[0].label == "Sign of the Horns")
      {
        document.getElementById("update_emoji").innerHTML = "&#128304;";
      }

      if(results[0].label == "Vulcan Salute")
      {
        document.getElementById("update_emoji").innerHTML = "&#128406;";
      }

      if(results[0].label == "Pointing Index")
      {
        document.getElementById("update_emoji").innerHTML = "&#9957;";
      }

      if(results[1].label == "Amazing")
      {
        document.getElementById("update_emoji2").innerHTML = "&#128076;";
      }

      if(results[1].label == "Best")
      {
        document.getElementById("update_emoji2").innerHTML = "&#128077;";
      }

      if(results[1].label == "Victory")
      {
        document.getElementById("update_emoji2").innerHTML = "&#9996;";
      }

      if(results[1].label == "Raised Fist")
      {
        document.getElementById("update_emoji2").innerHTML = "&#9994;";
      }

      if(results[1].label == "Clapping Hands")
      {
        document.getElementById("update_emoji2").innerHTML = "&#128079;";
      }

      if(results[1].label == "Sign of the Horns")
      {
        document.getElementById("update_emoji2").innerHTML = "&#128304;";
      }

      if(results[1].label == "Vulcan Salute")
      {
        document.getElementById("update_emoji2").innerHTML = "&#128406;";
      }

      if(results[1].label == "Pointing Index")
      {
        document.getElementById("update_emoji2").innerHTML = "&#9957;";
      }
    }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is" + prediction_1;
    speak_data_2 = "And the second prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_1);
    synth.speak(utterThis);
}