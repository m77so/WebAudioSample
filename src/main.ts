import * as fft from "fft-js"
const canvasF = <HTMLCanvasElement> document.getElementById('canvasFreq')
const canvasCtx = canvasF.getContext('2d')
const canvasT = <HTMLCanvasElement> document.getElementById('canvasTime')
const canvasTCtx = canvasT.getContext('2d')
const canvasC = <HTMLCanvasElement> document.getElementById('canvasColor')
const canvasCCtx = canvasC.getContext('2d')
const freqText = document.getElementById("freq")
const selfText = document.getElementById("self")

let freq_logs = []
let ampl_logs = []
const wwidth = window.innerWidth
const wheight = window.innerHeight
canvasF.width = wwidth*0.9
canvasF.height = wheight*0.3
canvasT.width = wwidth*0.9
canvasT.height = wheight*0.3
canvasC.width = wwidth*0.9
canvasC.height = wheight*0.3
let barwidth = wwidth*0.005
const pp = function(data) {
  const peak_values = []
  const peak_idxs = []
  for(let i=2; i<data.length; i++) {
    if (data[i-1] - data[i-2] >=0 && data[i]-data[i-1] <0) {
      peak_values.push(data[i-1])
      peak_idxs.push(i-1)
    }
  }
  return peak_idxs[peak_values.indexOf(Math.max(...peak_values))]
}
if (navigator.mediaDevices) {
  console.log('getUserMedia supported.')
  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then(function(stream) {

      const audioCtx = new AudioContext()
      const source = audioCtx.createMediaStreamSource(stream)
      const analyser = audioCtx.createAnalyser()
      source.connect(analyser)
      // source.connect(audioCtx.destination)
      const freqIndex2freq = audioCtx.sampleRate / analyser.fftSize
      analyser.fftSize = 2048 // The default value
      const intervalid = window.setInterval(function() {
        canvasCtx.clearRect(0, 0, canvasF.width, canvasF.height)
        canvasTCtx.clearRect(0, 0, canvasT.width, canvasT.height)
        canvasCCtx.clearRect(0, 0, canvasC.width, canvasC.height)
        const freqs = new Uint8Array(analyser.frequencyBinCount)
        const times = new Uint8Array(analyser.fftSize)
        analyser.getByteFrequencyData(freqs)
        analyser.getByteTimeDomainData(times)
        const self_freqs = fft.ifft(fft.fft(times.map(v=>v-128)).map(l=> [l[0]*l[0]+l[1]*l[1],0.0])).map(l=>Math.sqrt( l[0]*l[0]+l[1]*l[1])/300000)
        
        freqs.forEach((v, i) => {
          const vv = (canvasF.height)/256*v
          canvasCtx.fillStyle = 'orange'
          canvasCtx.fillRect(i * barwidth, canvasF.height - vv , barwidth*.9, vv)
        })
        
        freqText.innerText =  `000000${Math.round(  freqs.indexOf(Math.max(...(freqs))) * freqIndex2freq)}`.substr(-6)
        const self_freq_peak = Math.round(audioCtx.sampleRate/pp(self_freqs))
        selfText.innerText = `000000${self_freq_peak}`.substr(-6)
        times.forEach((v, i) => {
          const vv = (canvasT.height)/128*Math.abs(127-v)*1.5
          canvasTCtx.fillStyle = 'green'
          canvasTCtx.fillRect(i * barwidth, canvasT.height - vv , barwidth*.9, vv)
        })
        freq_logs.push(self_freq_peak)
        ampl_logs.push(Math.max(...(times)))
        if(freq_logs.length > 178){
          freq_logs.shift()
          ampl_logs.shift()
        }
        for(let i = 0; i < freq_logs.length; i++){
          const v = (ampl_logs[i]-128 ) 
          const vv = (canvasF.height)/128*v*2
          canvasCCtx.fillStyle = `hsl(${(1/3+Math.log2(freq_logs[i]*freqIndex2freq /440))%1*360 },100%,50%)`
          canvasCCtx.fillRect(i*barwidth,canvasC.height-vv,barwidth/2,vv )
        }


      }, 100)
    })
    .catch(function(err) {
      console.log('The following gUM error occured: ' + err)
    })
} else {
  console.log('getUserMedia not supported on your browser!')
}
