
"use strict"; 

var audio= new AudioContext();
var osc  = audio.createOscillator();
osc.type = "sawtooth";
osc.connect(audio.destination);  
osc.start(audio.currentTime);
