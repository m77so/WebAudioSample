"use strict"
const canvasF = document.getElementById('canvasFreq')
const canvasCtx = canvasF.getContext('2d')
const canvasT = document.getElementById('canvasTime')
const canvasTCtx = canvasT.getContext('2d')
const freqText = document.getElementById("freq")
canvasCtx.fillStyle = 'orange'
canvasTCtx.fillStyle = 'green'
if (navigator.mediaDevices) {
  console.log('getUserMedia supported.')
  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then(function(stream) {
      const audioCtx = new AudioContext()
      const source = audioCtx.createMediaStreamSource(stream)
      const analyser = audioCtx.createAnalyser()
      source.connect(analyser)
      source.connect(audioCtx.destination)
      const freqIndex2freq = audioCtx.sampleRate / analyser.fftSize
      analyser.fftSize = 2048 // The default value
      const intervalid = window.setInterval(function() {
        canvasCtx.clearRect(0, 0, canvasF.width, canvasF.height)
        canvasTCtx.clearRect(0, 0, canvasF.width, canvasF.height)
        const freqs = new Uint8Array(analyser.frequencyBinCount)
        const times = new Uint8Array(analyser.fftSize)
        analyser.getByteFrequencyData(freqs)
        freqs.forEach((v, i) => {
          canvasCtx.fillRect(i * 5, canvasF.height - v - 50, 5, v)
        })
        freqText.innerText = freqs.indexOf(Math.max(...freqs)) * freqIndex2freq
        analyser.getByteTimeDomainData(times)
        times.forEach((v, i) => {
          canvasTCtx.fillRect(i * 2, canvasT.height - v - 50, 2, v)
        })
      }, 100)
    })
    .catch(function(err) {
      console.log('The following gUM error occured: ' + err)
    })
} else {
  console.log('getUserMedia not supported on your browser!')
}
