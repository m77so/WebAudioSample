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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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

/***/ "./node_modules/bit-twiddle/twiddle.js":
/*!*********************************************!*\
  !*** ./node_modules/bit-twiddle/twiddle.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Bit twiddling hacks for JavaScript.\n *\n * Author: Mikola Lysenko\n *\n * Ported from Stanford bit twiddling hack library:\n *    http://graphics.stanford.edu/~seander/bithacks.html\n */\n\n \"use restrict\";\n\n//Number of bits in an integer\nvar INT_BITS = 32;\n\n//Constants\nexports.INT_BITS  = INT_BITS;\nexports.INT_MAX   =  0x7fffffff;\nexports.INT_MIN   = -1<<(INT_BITS-1);\n\n//Returns -1, 0, +1 depending on sign of x\nexports.sign = function(v) {\n  return (v > 0) - (v < 0);\n}\n\n//Computes absolute value of integer\nexports.abs = function(v) {\n  var mask = v >> (INT_BITS-1);\n  return (v ^ mask) - mask;\n}\n\n//Computes minimum of integers x and y\nexports.min = function(x, y) {\n  return y ^ ((x ^ y) & -(x < y));\n}\n\n//Computes maximum of integers x and y\nexports.max = function(x, y) {\n  return x ^ ((x ^ y) & -(x < y));\n}\n\n//Checks if a number is a power of two\nexports.isPow2 = function(v) {\n  return !(v & (v-1)) && (!!v);\n}\n\n//Computes log base 2 of v\nexports.log2 = function(v) {\n  var r, shift;\n  r =     (v > 0xFFFF) << 4; v >>>= r;\n  shift = (v > 0xFF  ) << 3; v >>>= shift; r |= shift;\n  shift = (v > 0xF   ) << 2; v >>>= shift; r |= shift;\n  shift = (v > 0x3   ) << 1; v >>>= shift; r |= shift;\n  return r | (v >> 1);\n}\n\n//Computes log base 10 of v\nexports.log10 = function(v) {\n  return  (v >= 1000000000) ? 9 : (v >= 100000000) ? 8 : (v >= 10000000) ? 7 :\n          (v >= 1000000) ? 6 : (v >= 100000) ? 5 : (v >= 10000) ? 4 :\n          (v >= 1000) ? 3 : (v >= 100) ? 2 : (v >= 10) ? 1 : 0;\n}\n\n//Counts number of bits\nexports.popCount = function(v) {\n  v = v - ((v >>> 1) & 0x55555555);\n  v = (v & 0x33333333) + ((v >>> 2) & 0x33333333);\n  return ((v + (v >>> 4) & 0xF0F0F0F) * 0x1010101) >>> 24;\n}\n\n//Counts number of trailing zeros\nfunction countTrailingZeros(v) {\n  var c = 32;\n  v &= -v;\n  if (v) c--;\n  if (v & 0x0000FFFF) c -= 16;\n  if (v & 0x00FF00FF) c -= 8;\n  if (v & 0x0F0F0F0F) c -= 4;\n  if (v & 0x33333333) c -= 2;\n  if (v & 0x55555555) c -= 1;\n  return c;\n}\nexports.countTrailingZeros = countTrailingZeros;\n\n//Rounds to next power of 2\nexports.nextPow2 = function(v) {\n  v += v === 0;\n  --v;\n  v |= v >>> 1;\n  v |= v >>> 2;\n  v |= v >>> 4;\n  v |= v >>> 8;\n  v |= v >>> 16;\n  return v + 1;\n}\n\n//Rounds down to previous power of 2\nexports.prevPow2 = function(v) {\n  v |= v >>> 1;\n  v |= v >>> 2;\n  v |= v >>> 4;\n  v |= v >>> 8;\n  v |= v >>> 16;\n  return v - (v>>>1);\n}\n\n//Computes parity of word\nexports.parity = function(v) {\n  v ^= v >>> 16;\n  v ^= v >>> 8;\n  v ^= v >>> 4;\n  v &= 0xf;\n  return (0x6996 >>> v) & 1;\n}\n\nvar REVERSE_TABLE = new Array(256);\n\n(function(tab) {\n  for(var i=0; i<256; ++i) {\n    var v = i, r = i, s = 7;\n    for (v >>>= 1; v; v >>>= 1) {\n      r <<= 1;\n      r |= v & 1;\n      --s;\n    }\n    tab[i] = (r << s) & 0xff;\n  }\n})(REVERSE_TABLE);\n\n//Reverse bits in a 32 bit word\nexports.reverse = function(v) {\n  return  (REVERSE_TABLE[ v         & 0xff] << 24) |\n          (REVERSE_TABLE[(v >>> 8)  & 0xff] << 16) |\n          (REVERSE_TABLE[(v >>> 16) & 0xff] << 8)  |\n           REVERSE_TABLE[(v >>> 24) & 0xff];\n}\n\n//Interleave bits of 2 coordinates with 16 bits.  Useful for fast quadtree codes\nexports.interleave2 = function(x, y) {\n  x &= 0xFFFF;\n  x = (x | (x << 8)) & 0x00FF00FF;\n  x = (x | (x << 4)) & 0x0F0F0F0F;\n  x = (x | (x << 2)) & 0x33333333;\n  x = (x | (x << 1)) & 0x55555555;\n\n  y &= 0xFFFF;\n  y = (y | (y << 8)) & 0x00FF00FF;\n  y = (y | (y << 4)) & 0x0F0F0F0F;\n  y = (y | (y << 2)) & 0x33333333;\n  y = (y | (y << 1)) & 0x55555555;\n\n  return x | (y << 1);\n}\n\n//Extracts the nth interleaved component\nexports.deinterleave2 = function(v, n) {\n  v = (v >>> n) & 0x55555555;\n  v = (v | (v >>> 1))  & 0x33333333;\n  v = (v | (v >>> 2))  & 0x0F0F0F0F;\n  v = (v | (v >>> 4))  & 0x00FF00FF;\n  v = (v | (v >>> 16)) & 0x000FFFF;\n  return (v << 16) >> 16;\n}\n\n\n//Interleave bits of 3 coordinates, each with 10 bits.  Useful for fast octree codes\nexports.interleave3 = function(x, y, z) {\n  x &= 0x3FF;\n  x  = (x | (x<<16)) & 4278190335;\n  x  = (x | (x<<8))  & 251719695;\n  x  = (x | (x<<4))  & 3272356035;\n  x  = (x | (x<<2))  & 1227133513;\n\n  y &= 0x3FF;\n  y  = (y | (y<<16)) & 4278190335;\n  y  = (y | (y<<8))  & 251719695;\n  y  = (y | (y<<4))  & 3272356035;\n  y  = (y | (y<<2))  & 1227133513;\n  x |= (y << 1);\n  \n  z &= 0x3FF;\n  z  = (z | (z<<16)) & 4278190335;\n  z  = (z | (z<<8))  & 251719695;\n  z  = (z | (z<<4))  & 3272356035;\n  z  = (z | (z<<2))  & 1227133513;\n  \n  return x | (z << 2);\n}\n\n//Extracts nth interleaved component of a 3-tuple\nexports.deinterleave3 = function(v, n) {\n  v = (v >>> n)       & 1227133513;\n  v = (v | (v>>>2))   & 3272356035;\n  v = (v | (v>>>4))   & 251719695;\n  v = (v | (v>>>8))   & 4278190335;\n  v = (v | (v>>>16))  & 0x3FF;\n  return (v<<22)>>22;\n}\n\n//Computes next combination in colexicographic order (this is mistakenly called nextPermutation on the bit twiddling hacks page)\nexports.nextCombination = function(v) {\n  var t = v | (v - 1);\n  return (t + 1) | (((~t & -~t) - 1) >>> (countTrailingZeros(v) + 1));\n}\n\n\n\n//# sourceURL=webpack:///./node_modules/bit-twiddle/twiddle.js?");

/***/ }),

/***/ "./node_modules/fft-js/index.js":
/*!**************************************!*\
  !*** ./node_modules/fft-js/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*===========================================================================*\\\n * Fast Fourier Transform (Cooley-Tukey Method)\n *\n * (c) Vail Systems. Joshua Jung and Ben Bryan. 2015\n *\n * This code is not designed to be highly optimized but as an educational\n * tool to understand the Fast Fourier Transform.\n\\*===========================================================================*/\nmodule.exports = {\n    fft: __webpack_require__(/*! ./src/fft */ \"./node_modules/fft-js/src/fft.js\").fft,\n    ifft: __webpack_require__(/*! ./src/ifft */ \"./node_modules/fft-js/src/ifft.js\").ifft,\n    fftInPlace: __webpack_require__(/*! ./src/fft */ \"./node_modules/fft-js/src/fft.js\").fftInPlace,\n    util: __webpack_require__(/*! ./src/fftutil */ \"./node_modules/fft-js/src/fftutil.js\"),\n    dft: __webpack_require__(/*! ./src/dft */ \"./node_modules/fft-js/src/dft.js\"),\n    idft: __webpack_require__(/*! ./src/idft */ \"./node_modules/fft-js/src/idft.js\")\n};\n\n\n//# sourceURL=webpack:///./node_modules/fft-js/index.js?");

/***/ }),

/***/ "./node_modules/fft-js/src/complex.js":
/*!********************************************!*\
  !*** ./node_modules/fft-js/src/complex.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//-------------------------------------------------\n// Add two complex numbers\n//-------------------------------------------------\nvar complexAdd = function (a, b)\n{\n    return [a[0] + b[0], a[1] + b[1]];\n};\n\n//-------------------------------------------------\n// Subtract two complex numbers\n//-------------------------------------------------\nvar complexSubtract = function (a, b)\n{\n    return [a[0] - b[0], a[1] - b[1]];\n};\n\n//-------------------------------------------------\n// Multiply two complex numbers\n//\n// (a + bi) * (c + di) = (ac - bd) + (ad + bc)i\n//-------------------------------------------------\nvar complexMultiply = function (a, b) \n{\n    return [(a[0] * b[0] - a[1] * b[1]), \n            (a[0] * b[1] + a[1] * b[0])];\n};\n\n//-------------------------------------------------\n// Calculate |a + bi|\n//\n// sqrt(a*a + b*b)\n//-------------------------------------------------\nvar complexMagnitude = function (c) \n{\n    return Math.sqrt(c[0]*c[0] + c[1]*c[1]); \n};\n\n//-------------------------------------------------\n// Exports\n//-------------------------------------------------\nmodule.exports = {\n    add: complexAdd,\n    subtract: complexSubtract,\n    multiply: complexMultiply,\n    magnitude: complexMagnitude\n};\n\n\n//# sourceURL=webpack:///./node_modules/fft-js/src/complex.js?");

/***/ }),

/***/ "./node_modules/fft-js/src/dft.js":
/*!****************************************!*\
  !*** ./node_modules/fft-js/src/dft.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*===========================================================================*\\\n * Discrete Fourier Transform (O(n^2) brute-force method)\n *\n * (c) Vail Systems. Joshua Jung and Ben Bryan. 2015\n *\n * This code is not designed to be highly optimized but as an educational\n * tool to understand the Fast Fourier Transform.\n\\*===========================================================================*/\n\n//------------------------------------------------\n// Note: this code is not optimized and is\n// primarily designed as an educational and testing\n// tool.\n//------------------------------------------------\nvar complex = __webpack_require__(/*! ./complex */ \"./node_modules/fft-js/src/complex.js\");\nvar fftUtil = __webpack_require__(/*! ./fftutil */ \"./node_modules/fft-js/src/fftutil.js\");\n\n//-------------------------------------------------\n// Calculate brute-force O(n^2) DFT for vector.\n//-------------------------------------------------\nvar dft = function(vector) {\n  var X = [],\n      N = vector.length;\n\n  for (var k = 0; k < N; k++) {\n    X[k] = [0, 0]; //Initialize to a 0-valued complex number.\n\n    for (var i = 0; i < N; i++) {\n      var exp = fftUtil.exponent(k * i, N);\n      var term;\n      if (Array.isArray(vector[i]))\n        term = complex.multiply(vector[i], exp)//If input vector contains complex numbers\n      else\n        term = complex.multiply([vector[i], 0], exp);//Complex mult of the signal with the exponential term.  \n      X[k] = complex.add(X[k], term); //Complex summation of X[k] and exponential\n    }\n  }\n\n  return X;\n};\n\nmodule.exports = dft;\n\n//# sourceURL=webpack:///./node_modules/fft-js/src/dft.js?");

/***/ }),

/***/ "./node_modules/fft-js/src/fft.js":
/*!****************************************!*\
  !*** ./node_modules/fft-js/src/fft.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*===========================================================================*\\\n * Fast Fourier Transform (Cooley-Tukey Method)\n *\n * (c) Vail Systems. Joshua Jung and Ben Bryan. 2015\n *\n * This code is not designed to be highly optimized but as an educational\n * tool to understand the Fast Fourier Transform.\n\\*===========================================================================*/\n\n//------------------------------------------------\n// Note: Some of this code is not optimized and is\n// primarily designed as an educational and testing\n// tool.\n// To get high performace would require transforming\n// the recursive calls into a loop and then loop\n// unrolling. All of this is best accomplished\n// in C or assembly.\n//-------------------------------------------------\n\n//-------------------------------------------------\n// The following code assumes a complex number is\n// an array: [real, imaginary]\n//-------------------------------------------------\nvar complex = __webpack_require__(/*! ./complex */ \"./node_modules/fft-js/src/complex.js\"),\n    fftUtil = __webpack_require__(/*! ./fftutil */ \"./node_modules/fft-js/src/fftutil.js\"),\n    twiddle = __webpack_require__(/*! bit-twiddle */ \"./node_modules/bit-twiddle/twiddle.js\");\n\nmodule.exports = {\n  //-------------------------------------------------\n  // Calculate FFT for vector where vector.length\n  // is assumed to be a power of 2.\n  //-------------------------------------------------\n  fft: function fft(vector) {\n    var X = [],\n        N = vector.length;\n\n    // Base case is X = x + 0i since our input is assumed to be real only.\n    if (N == 1) {\n      if (Array.isArray(vector[0])) //If input vector contains complex numbers\n        return [[vector[0][0], vector[0][1]]];      \n      else\n        return [[vector[0], 0]];\n    }\n\n    // Recurse: all even samples\n    var X_evens = fft(vector.filter(even)),\n\n        // Recurse: all odd samples\n        X_odds  = fft(vector.filter(odd));\n\n    // Now, perform N/2 operations!\n    for (var k = 0; k < N / 2; k++) {\n      // t is a complex number!\n      var t = X_evens[k],\n          e = complex.multiply(fftUtil.exponent(k, N), X_odds[k]);\n\n      X[k] = complex.add(t, e);\n      X[k + (N / 2)] = complex.subtract(t, e);\n    }\n\n    function even(__, ix) {\n      return ix % 2 == 0;\n    }\n\n    function odd(__, ix) {\n      return ix % 2 == 1;\n    }\n\n    return X;\n  },\n  //-------------------------------------------------\n  // Calculate FFT for vector where vector.length\n  // is assumed to be a power of 2.  This is the in-\n  // place implementation, to avoid the memory\n  // footprint used by recursion.\n  //-------------------------------------------------\n  fftInPlace: function(vector) {\n    var N = vector.length;\n\n    var trailingZeros = twiddle.countTrailingZeros(N); //Once reversed, this will be leading zeros\n\n    // Reverse bits\n    for (var k = 0; k < N; k++) {\n      var p = twiddle.reverse(k) >>> (twiddle.INT_BITS - trailingZeros);\n      if (p > k) {\n        var complexTemp = [vector[k], 0];\n        vector[k] = vector[p];\n        vector[p] = complexTemp;\n      } else {\n        vector[p] = [vector[p], 0];\n      }\n    }\n\n    //Do the DIT now in-place\n    for (var len = 2; len <= N; len += len) {\n      for (var i = 0; i < len / 2; i++) {\n        var w = fftUtil.exponent(i, len);\n        for (var j = 0; j < N / len; j++) {\n          var t = complex.multiply(w, vector[j * len + i + len / 2]);\n          vector[j * len + i + len / 2] = complex.subtract(vector[j * len + i], t);\n          vector[j * len + i] = complex.add(vector[j * len + i], t);\n        }\n      }\n    }\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/fft-js/src/fft.js?");

/***/ }),

/***/ "./node_modules/fft-js/src/fftutil.js":
/*!********************************************!*\
  !*** ./node_modules/fft-js/src/fftutil.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*===========================================================================*\\\n * Fast Fourier Transform Frequency/Magnitude passes\n *\n * (c) Vail Systems. Joshua Jung and Ben Bryan. 2015\n *\n * This code is not designed to be highly optimized but as an educational\n * tool to understand the Fast Fourier Transform.\n\\*===========================================================================*/\n\n//-------------------------------------------------\n// The following code assumes a complex number is\n// an array: [real, imaginary]\n//-------------------------------------------------\nvar complex = __webpack_require__(/*! ./complex */ \"./node_modules/fft-js/src/complex.js\");\n\n\n//-------------------------------------------------\n// By Eulers Formula:\n//\n// e^(i*x) = cos(x) + i*sin(x)\n//\n// and in DFT:\n//\n// x = -2*PI*(k/N)\n//-------------------------------------------------\nvar mapExponent = {},\n    exponent = function (k, N) {\n      var x = -2 * Math.PI * (k / N);\n\n      mapExponent[N] = mapExponent[N] || {};\n      mapExponent[N][k] = mapExponent[N][k] || [Math.cos(x), Math.sin(x)];// [Real, Imaginary]\n\n      return mapExponent[N][k];\n};\n\n//-------------------------------------------------\n// Calculate FFT Magnitude for complex numbers.\n//-------------------------------------------------\nvar fftMag = function (fftBins) {\n    var ret = fftBins.map(complex.magnitude);\n    return ret.slice(0, ret.length / 2);\n};\n\n//-------------------------------------------------\n// Calculate Frequency Bins\n// \n// Returns an array of the frequencies (in hertz) of\n// each FFT bin provided, assuming the sampleRate is\n// samples taken per second.\n//-------------------------------------------------\nvar fftFreq = function (fftBins, sampleRate) {\n    var stepFreq = sampleRate / (fftBins.length);\n    var ret = fftBins.slice(0, fftBins.length / 2);\n\n    return ret.map(function (__, ix) {\n        return ix * stepFreq;\n    });\n};\n\n//-------------------------------------------------\n// Exports\n//-------------------------------------------------\nmodule.exports = {\n    fftMag: fftMag,\n    fftFreq: fftFreq,\n    exponent: exponent\n};\n\n\n//# sourceURL=webpack:///./node_modules/fft-js/src/fftutil.js?");

/***/ }),

/***/ "./node_modules/fft-js/src/idft.js":
/*!*****************************************!*\
  !*** ./node_modules/fft-js/src/idft.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*===========================================================================*\\\n * Inverse Discrete Fourier Transform (O(n^2) brute-force method)\n *\n * (c) Maximilian Bügler. 2016\n *\n * Based on and using the code by\n * (c) Vail Systems. Joshua Jung and Ben Bryan. 2015\n *\n * This code is not designed to be highly optimized but as an educational\n * tool to understand the Fast Fourier Transform.\n\\*===========================================================================*/\n\n//------------------------------------------------\n// Note: Some of this code is not optimized and is\n// primarily designed as an educational and testing\n// tool.\n//-------------------------------------------------\n\n//-------------------------------------------------\n// The following code assumes a complex number is\n// an array: [real, imaginary]\n//-------------------------------------------------\nvar dft = __webpack_require__(/*! ./dft */ \"./node_modules/fft-js/src/dft.js\");\n\nfunction idft(signal) {\n    //Interchange real and imaginary parts\n    var csignal = [];\n    for (var i = 0; i < signal.length; i++) {\n        csignal[i] = [signal[i][1], signal[i][0]];\n    }\n\n    //Apply dft\n    var ps = dft(csignal);\n\n    //Interchange real and imaginary parts and normalize\n    var res = [];\n    for (var j = 0; j < ps.length; j++) {\n        res[j] = [ps[j][1] / ps.length, ps[j][0] / ps.length];\n    }\n    return res;\n}\n\nmodule.exports = idft;\n\n//# sourceURL=webpack:///./node_modules/fft-js/src/idft.js?");

/***/ }),

/***/ "./node_modules/fft-js/src/ifft.js":
/*!*****************************************!*\
  !*** ./node_modules/fft-js/src/ifft.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*===========================================================================*\\\n * Inverse Fast Fourier Transform (Cooley-Tukey Method)\n *\n * (c) Maximilian Bügler. 2016\n *\n * Based on and using the code by\n * (c) Vail Systems. Joshua Jung and Ben Bryan. 2015\n *\n * This code is not designed to be highly optimized but as an educational\n * tool to understand the Fast Fourier Transform.\n\\*===========================================================================*/\n\n//------------------------------------------------\n// Note: Some of this code is not optimized and is\n// primarily designed as an educational and testing\n// tool.\n// To get high performace would require transforming\n// the recursive calls into a loop and then loop\n// unrolling. All of this is best accomplished\n// in C or assembly.\n//-------------------------------------------------\n\n//-------------------------------------------------\n// The following code assumes a complex number is\n// an array: [real, imaginary]\n//-------------------------------------------------\n\nvar fft = __webpack_require__(/*! ./fft */ \"./node_modules/fft-js/src/fft.js\").fft;\n\n\nmodule.exports = {\n    ifft: function ifft(signal){\n        //Interchange real and imaginary parts\n        var csignal=[];\n        for(var i=0; i<signal.length; i++){\n            csignal[i]=[signal[i][1], signal[i][0]];\n        }\n    \n        //Apply fft\n        var ps=fft(csignal);\n        \n        //Interchange real and imaginary parts and normalize\n        var res=[];\n        for(var j=0; j<ps.length; j++){\n            res[j]=[ps[j][1]/ps.length, ps[j][0]/ps.length];\n        }\n        return res;\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/fft-js/src/ifft.js?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fft_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fft-js */ \"./node_modules/fft-js/index.js\");\n/* harmony import */ var fft_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fft_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst canvasF = document.getElementById('canvasFreq');\nconst canvasCtx = canvasF.getContext('2d');\nconst canvasT = document.getElementById('canvasTime');\nconst canvasTCtx = canvasT.getContext('2d');\nconst canvasC = document.getElementById('canvasColor');\nconst canvasCCtx = canvasC.getContext('2d');\nconst freqText = document.getElementById(\"freq\");\nconst selfText = document.getElementById(\"self\");\nlet freq_logs = [];\nlet ampl_logs = [];\nconst wwidth = window.innerWidth;\nconst wheight = window.innerHeight;\ncanvasF.width = wwidth * 0.9;\ncanvasF.height = wheight * 0.3;\ncanvasT.width = wwidth * 0.9;\ncanvasT.height = wheight * 0.3;\ncanvasC.width = wwidth * 0.9;\ncanvasC.height = wheight * 0.3;\nlet barwidth = wwidth * 0.005;\nconst pp = function (data) {\n    const peak_values = [];\n    const peak_idxs = [];\n    for (let i = 2; i < data.length; i++) {\n        if (data[i - 1] - data[i - 2] >= 0 && data[i] - data[i - 1] < 0) {\n            peak_values.push(data[i - 1]);\n            peak_idxs.push(i - 1);\n        }\n    }\n    return peak_idxs[peak_values.indexOf(Math.max(...peak_values))];\n};\nif (navigator.mediaDevices) {\n    console.log('getUserMedia supported.');\n    navigator.mediaDevices\n        .getUserMedia({ audio: true })\n        .then(function (stream) {\n        const audioCtx = new AudioContext();\n        const source = audioCtx.createMediaStreamSource(stream);\n        const analyser = audioCtx.createAnalyser();\n        source.connect(analyser);\n        // source.connect(audioCtx.destination)\n        const freqIndex2freq = audioCtx.sampleRate / analyser.fftSize;\n        analyser.fftSize = 2048; // The default value\n        const intervalid = window.setInterval(function () {\n            canvasCtx.clearRect(0, 0, canvasF.width, canvasF.height);\n            canvasTCtx.clearRect(0, 0, canvasT.width, canvasT.height);\n            canvasCCtx.clearRect(0, 0, canvasC.width, canvasC.height);\n            const freqs = new Uint8Array(analyser.frequencyBinCount);\n            const times = new Uint8Array(analyser.fftSize);\n            analyser.getByteFrequencyData(freqs);\n            analyser.getByteTimeDomainData(times);\n            const self_freqs = fft_js__WEBPACK_IMPORTED_MODULE_0__[\"ifft\"](fft_js__WEBPACK_IMPORTED_MODULE_0__[\"fft\"](times.map(v => v - 128)).map(l => [l[0] * l[0] + l[1] * l[1], 0.0])).map(l => Math.sqrt(l[0] * l[0] + l[1] * l[1]) / 300000);\n            freqs.forEach((v, i) => {\n                const vv = (canvasF.height) / 256 * v;\n                canvasCtx.fillStyle = 'orange';\n                canvasCtx.fillRect(i * barwidth, canvasF.height - vv, barwidth * .9, vv);\n            });\n            freqText.innerText = `000000${Math.round(freqs.indexOf(Math.max(...(freqs))) * freqIndex2freq)}`.substr(-6);\n            const self_freq_peak = Math.round(audioCtx.sampleRate / pp(self_freqs));\n            selfText.innerText = `000000${self_freq_peak}`.substr(-6);\n            times.forEach((v, i) => {\n                const vv = (canvasT.height) / 128 * Math.abs(127 - v) * 1.5;\n                canvasTCtx.fillStyle = 'green';\n                canvasTCtx.fillRect(i * barwidth, canvasT.height - vv, barwidth * .9, vv);\n            });\n            freq_logs.push(self_freq_peak);\n            ampl_logs.push(Math.max(...(times)));\n            if (freq_logs.length > 178) {\n                freq_logs.shift();\n                ampl_logs.shift();\n            }\n            for (let i = 0; i < freq_logs.length; i++) {\n                const v = (ampl_logs[i] - 128);\n                const vv = (canvasF.height) / 128 * v * 5;\n                canvasCCtx.fillStyle = `hsl(${(1 / 3 + Math.log2(freq_logs[i] * freqIndex2freq / 440)) % 1 * 360},100%,50%)`;\n                canvasCCtx.fillRect(i * barwidth, canvasC.height - vv, barwidth / 2, vv);\n            }\n        }, 100);\n    })\n        .catch(function (err) {\n        console.log('The following gUM error occured: ' + err);\n    });\n}\nelse {\n    console.log('getUserMedia not supported on your browser!');\n}\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ })

/******/ });