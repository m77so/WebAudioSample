/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst canvasF = document.getElementById('canvasFreq');\nconst canvasCtx = canvasF.getContext('2d');\nconst canvasT = document.getElementById('canvasTime');\nconst canvasTCtx = canvasT.getContext('2d');\nconst freqText = document.getElementById(\"freq\");\ncanvasCtx.fillStyle = 'orange';\ncanvasTCtx.fillStyle = 'green';\nif (navigator.mediaDevices) {\n    console.log('getUserMedia supported.');\n    navigator.mediaDevices\n        .getUserMedia({ audio: true })\n        .then(function (stream) {\n        const audioCtx = new AudioContext();\n        const source = audioCtx.createMediaStreamSource(stream);\n        const analyser = audioCtx.createAnalyser();\n        source.connect(analyser);\n        source.connect(audioCtx.destination);\n        const freqIndex2freq = audioCtx.sampleRate / analyser.fftSize;\n        analyser.fftSize = 2048; // The default value\n        const intervalid = window.setInterval(function () {\n            canvasCtx.clearRect(0, 0, canvasF.width, canvasF.height);\n            canvasTCtx.clearRect(0, 0, canvasF.width, canvasF.height);\n            const freqs = new Uint8Array(analyser.frequencyBinCount);\n            const times = new Uint8Array(analyser.fftSize);\n            analyser.getByteFrequencyData(freqs);\n            freqs.forEach((v, i) => {\n                canvasCtx.fillRect(i * 5, canvasF.height - v - 50, 5, v);\n            });\n            freqText.innerText = `${freqs.indexOf(Math.max(...(freqs))) * freqIndex2freq}`;\n            analyser.getByteTimeDomainData(times);\n            times.forEach((v, i) => {\n                canvasTCtx.fillRect(i * 2, canvasT.height - v - 50, 2, v);\n            });\n        }, 100);\n    })\n        .catch(function (err) {\n        console.log('The following gUM error occured: ' + err);\n    });\n}\nelse {\n    console.log('getUserMedia not supported on your browser!');\n}\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ })

/******/ });