import {
  ArgumentException_default,
  AztecReader_default,
  BarcodeFormat_default,
  BinaryBitmap_default,
  ChecksumException_default,
  DataMatrixReader_default,
  DecodeHintType_default,
  EncodeHintType_default,
  Encoder_default,
  ErrorCorrectionLevel_default,
  FormatException_default,
  HybridBinarizer_default,
  IllegalArgumentException_default,
  IllegalStateException_default,
  InvertedLuminanceSource_default,
  LuminanceSource_default,
  MultiFormatOneDReader_default,
  MultiFormatReader_default,
  NotFoundException_default,
  PDF417Reader_default,
  QRCodeReader_default
} from "./chunk-R4NIWQA2.js";
import {
  FormsModule
} from "./chunk-YX676IPB.js";
import {
  Router,
  RouterLink
} from "./chunk-HOXEAXWN.js";
import "./chunk-ZNESRAKE.js";
import {
  DataService
} from "./chunk-F47T3EGJ.js";
import "./chunk-EXP2T67A.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-MXCAMUXG.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// node_modules/@zxing/browser/esm/common/HTMLCanvasElementLuminanceSource.js
var __extends = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var HTMLCanvasElementLuminanceSource = (
  /** @class */
  (function(_super) {
    __extends(HTMLCanvasElementLuminanceSource2, _super);
    function HTMLCanvasElementLuminanceSource2(canvas) {
      var _this = _super.call(this, canvas.width, canvas.height) || this;
      _this.canvas = canvas;
      _this.tempCanvasElement = null;
      _this.buffer = HTMLCanvasElementLuminanceSource2.makeBufferFromCanvasImageData(canvas);
      return _this;
    }
    HTMLCanvasElementLuminanceSource2.makeBufferFromCanvasImageData = function(canvas) {
      var canvasCtx;
      try {
        canvasCtx = canvas.getContext("2d", { willReadFrequently: true });
      } catch (e) {
        canvasCtx = canvas.getContext("2d");
      }
      if (!canvasCtx) {
        throw new Error("Couldn't get canvas context.");
      }
      var imageData = canvasCtx.getImageData(0, 0, canvas.width, canvas.height);
      return HTMLCanvasElementLuminanceSource2.toGrayscaleBuffer(imageData.data, canvas.width, canvas.height);
    };
    HTMLCanvasElementLuminanceSource2.toGrayscaleBuffer = function(imageBuffer, width, height) {
      var grayscaleBuffer = new Uint8ClampedArray(width * height);
      for (var i = 0, j = 0, length_1 = imageBuffer.length; i < length_1; i += 4, j++) {
        var gray = void 0;
        var alpha = imageBuffer[i + 3];
        if (alpha === 0) {
          gray = 255;
        } else {
          var pixelR = imageBuffer[i];
          var pixelG = imageBuffer[i + 1];
          var pixelB = imageBuffer[i + 2];
          gray = 306 * pixelR + 601 * pixelG + 117 * pixelB + 512 >> 10;
        }
        grayscaleBuffer[j] = gray;
      }
      return grayscaleBuffer;
    };
    HTMLCanvasElementLuminanceSource2.prototype.getRow = function(y, row) {
      if (y < 0 || y >= this.getHeight()) {
        throw new IllegalArgumentException_default("Requested row is outside the image: " + y);
      }
      var width = this.getWidth();
      var start = y * width;
      if (row === null) {
        row = this.buffer.slice(start, start + width);
      } else {
        if (row.length < width) {
          row = new Uint8ClampedArray(width);
        }
        row.set(this.buffer.slice(start, start + width));
      }
      return row;
    };
    HTMLCanvasElementLuminanceSource2.prototype.getMatrix = function() {
      return this.buffer;
    };
    HTMLCanvasElementLuminanceSource2.prototype.isCropSupported = function() {
      return true;
    };
    HTMLCanvasElementLuminanceSource2.prototype.crop = function(left, top, width, height) {
      _super.prototype.crop.call(this, left, top, width, height);
      return this;
    };
    HTMLCanvasElementLuminanceSource2.prototype.isRotateSupported = function() {
      return true;
    };
    HTMLCanvasElementLuminanceSource2.prototype.rotateCounterClockwise = function() {
      this.rotate(-90);
      return this;
    };
    HTMLCanvasElementLuminanceSource2.prototype.rotateCounterClockwise45 = function() {
      this.rotate(-45);
      return this;
    };
    HTMLCanvasElementLuminanceSource2.prototype.invert = function() {
      return new InvertedLuminanceSource_default(this);
    };
    HTMLCanvasElementLuminanceSource2.prototype.getTempCanvasElement = function() {
      if (null === this.tempCanvasElement) {
        var tempCanvasElement = this.canvas.ownerDocument.createElement("canvas");
        tempCanvasElement.width = this.canvas.width;
        tempCanvasElement.height = this.canvas.height;
        this.tempCanvasElement = tempCanvasElement;
      }
      return this.tempCanvasElement;
    };
    HTMLCanvasElementLuminanceSource2.prototype.rotate = function(angle) {
      var tempCanvasElement = this.getTempCanvasElement();
      if (!tempCanvasElement) {
        throw new Error("Could not create a Canvas element.");
      }
      var angleRadians = angle * HTMLCanvasElementLuminanceSource2.DEGREE_TO_RADIANS;
      var width = this.canvas.width;
      var height = this.canvas.height;
      var newWidth = Math.ceil(Math.abs(Math.cos(angleRadians)) * width + Math.abs(Math.sin(angleRadians)) * height);
      var newHeight = Math.ceil(Math.abs(Math.sin(angleRadians)) * width + Math.abs(Math.cos(angleRadians)) * height);
      tempCanvasElement.width = newWidth;
      tempCanvasElement.height = newHeight;
      var tempContext = tempCanvasElement.getContext("2d");
      if (!tempContext) {
        throw new Error("Could not create a Canvas Context element.");
      }
      tempContext.translate(newWidth / 2, newHeight / 2);
      tempContext.rotate(angleRadians);
      tempContext.drawImage(this.canvas, width / -2, height / -2);
      this.buffer = HTMLCanvasElementLuminanceSource2.makeBufferFromCanvasImageData(tempCanvasElement);
      return this;
    };
    HTMLCanvasElementLuminanceSource2.DEGREE_TO_RADIANS = Math.PI / 180;
    return HTMLCanvasElementLuminanceSource2;
  })(LuminanceSource_default)
);

// node_modules/@zxing/browser/esm/common/navigator-utils.js
function hasNavigator() {
  return typeof navigator !== "undefined";
}
function isMediaDevicesSupported() {
  return hasNavigator() && !!navigator.mediaDevices;
}
function canEnumerateDevices() {
  return !!(isMediaDevicesSupported() && navigator.mediaDevices.enumerateDevices);
}

// node_modules/@zxing/browser/esm/readers/BrowserCodeReader.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __values = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var defaultOptions = {
  delayBetweenScanAttempts: 500,
  delayBetweenScanSuccess: 500,
  tryPlayVideoTimeout: 5e3
};
var BrowserCodeReader = (
  /** @class */
  (function() {
    function BrowserCodeReader2(reader, hints, options) {
      if (hints === void 0) {
        hints = /* @__PURE__ */ new Map();
      }
      if (options === void 0) {
        options = {};
      }
      this.reader = reader;
      this.hints = hints;
      this.options = __assign(__assign({}, defaultOptions), options);
    }
    Object.defineProperty(BrowserCodeReader2.prototype, "possibleFormats", {
      /**
       * Allows to change the possible formats the decoder should
       * search for while scanning some image. Useful for changing
       * the possible formats during BrowserCodeReader::scan.
       */
      set: function(formats) {
        this.hints.set(DecodeHintType_default.POSSIBLE_FORMATS, formats);
      },
      enumerable: false,
      configurable: true
    });
    BrowserCodeReader2.addVideoSource = function(videoElement, stream) {
      try {
        videoElement.srcObject = stream;
      } catch (err) {
        console.error("got interrupted by new loading request");
      }
    };
    BrowserCodeReader2.mediaStreamSetTorch = function(track, onOff) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, track.applyConstraints({
                advanced: [{
                  fillLightMode: onOff ? "flash" : "off",
                  torch: onOff ? true : false
                }]
              })];
            case 1:
              _a.sent();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    BrowserCodeReader2.mediaStreamIsTorchCompatible = function(params) {
      var e_1, _a;
      var tracks = params.getVideoTracks();
      try {
        for (var tracks_1 = __values(tracks), tracks_1_1 = tracks_1.next(); !tracks_1_1.done; tracks_1_1 = tracks_1.next()) {
          var track = tracks_1_1.value;
          if (BrowserCodeReader2.mediaStreamIsTorchCompatibleTrack(track)) {
            return true;
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (tracks_1_1 && !tracks_1_1.done && (_a = tracks_1.return)) _a.call(tracks_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return false;
    };
    BrowserCodeReader2.mediaStreamIsTorchCompatibleTrack = function(track) {
      try {
        var capabilities = track.getCapabilities();
        return "torch" in capabilities;
      } catch (err) {
        console.error(err);
        console.warn("Your browser may be not fully compatible with WebRTC and/or ImageCapture specs. Torch will not be available.");
        return false;
      }
    };
    BrowserCodeReader2.isVideoPlaying = function(video) {
      return video.currentTime > 0 && !video.paused && video.readyState > 2;
    };
    BrowserCodeReader2.getMediaElement = function(mediaElementId, type) {
      var mediaElement = document.getElementById(mediaElementId);
      if (!mediaElement) {
        throw new ArgumentException_default("element with id '".concat(mediaElementId, "' not found"));
      }
      if (mediaElement.nodeName.toLowerCase() !== type.toLowerCase()) {
        throw new ArgumentException_default("element with id '".concat(mediaElementId, "' must be an ").concat(type, " element"));
      }
      return mediaElement;
    };
    BrowserCodeReader2.createVideoElement = function(videoThingy) {
      if (videoThingy instanceof HTMLVideoElement) {
        return videoThingy;
      }
      if (typeof videoThingy === "string") {
        return BrowserCodeReader2.getMediaElement(videoThingy, "video");
      }
      if (!videoThingy && typeof document !== "undefined") {
        var videoElement = document.createElement("video");
        videoElement.width = 200;
        videoElement.height = 200;
        return videoElement;
      }
      throw new Error("Couldn't get videoElement from videoSource!");
    };
    BrowserCodeReader2.prepareImageElement = function(imageSource) {
      if (imageSource instanceof HTMLImageElement) {
        return imageSource;
      }
      if (typeof imageSource === "string") {
        return BrowserCodeReader2.getMediaElement(imageSource, "img");
      }
      if (typeof imageSource === "undefined") {
        var imageElement = document.createElement("img");
        imageElement.width = 200;
        imageElement.height = 200;
        return imageElement;
      }
      throw new Error("Couldn't get imageElement from imageSource!");
    };
    BrowserCodeReader2.prepareVideoElement = function(videoElem) {
      var videoElement = BrowserCodeReader2.createVideoElement(videoElem);
      videoElement.setAttribute("autoplay", "true");
      videoElement.setAttribute("muted", "true");
      videoElement.setAttribute("playsinline", "true");
      return videoElement;
    };
    BrowserCodeReader2.isImageLoaded = function(img) {
      if (!img.complete) {
        return false;
      }
      if (img.naturalWidth === 0) {
        return false;
      }
      return true;
    };
    BrowserCodeReader2.createBinaryBitmapFromCanvas = function(canvas) {
      var luminanceSource = new HTMLCanvasElementLuminanceSource(canvas);
      var hybridBinarizer = new HybridBinarizer_default(luminanceSource);
      return new BinaryBitmap_default(hybridBinarizer);
    };
    BrowserCodeReader2.drawImageOnCanvas = function(canvasElementContext, srcElement) {
      canvasElementContext.drawImage(srcElement, 0, 0);
    };
    BrowserCodeReader2.getMediaElementDimensions = function(mediaElement) {
      if (mediaElement instanceof HTMLVideoElement) {
        return {
          height: mediaElement.videoHeight,
          width: mediaElement.videoWidth
        };
      }
      if (mediaElement instanceof HTMLImageElement) {
        return {
          height: mediaElement.naturalHeight || mediaElement.height,
          width: mediaElement.naturalWidth || mediaElement.width
        };
      }
      throw new Error("Couldn't find the Source's dimensions!");
    };
    BrowserCodeReader2.createCaptureCanvas = function(mediaElement) {
      if (!mediaElement) {
        throw new ArgumentException_default("Cannot create a capture canvas without a media element.");
      }
      if (typeof document === "undefined") {
        throw new Error(`The page "Document" is undefined, make sure you're running in a browser.`);
      }
      var canvasElement = document.createElement("canvas");
      var _a = BrowserCodeReader2.getMediaElementDimensions(mediaElement), width = _a.width, height = _a.height;
      canvasElement.style.width = width + "px";
      canvasElement.style.height = height + "px";
      canvasElement.width = width;
      canvasElement.height = height;
      return canvasElement;
    };
    BrowserCodeReader2.tryPlayVideo = function(videoElement) {
      return __awaiter(this, void 0, void 0, function() {
        var error_1;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (videoElement === null || videoElement === void 0 ? void 0 : videoElement.ended) {
                console.error("Trying to play video that has ended.");
                return [2, false];
              }
              if (BrowserCodeReader2.isVideoPlaying(videoElement)) {
                console.warn("Trying to play video that is already playing.");
                return [2, true];
              }
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, , 4]);
              return [4, videoElement.play()];
            case 2:
              _a.sent();
              return [2, true];
            case 3:
              error_1 = _a.sent();
              console.warn("It was not possible to play the video.", error_1);
              return [2, false];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    BrowserCodeReader2.createCanvasFromMediaElement = function(mediaElement) {
      var canvas = BrowserCodeReader2.createCaptureCanvas(mediaElement);
      var ctx = canvas.getContext("2d");
      if (!ctx) {
        throw new Error("Couldn't find Canvas 2D Context.");
      }
      BrowserCodeReader2.drawImageOnCanvas(ctx, mediaElement);
      return canvas;
    };
    BrowserCodeReader2.createBinaryBitmapFromMediaElem = function(mediaElement) {
      var canvas = BrowserCodeReader2.createCanvasFromMediaElement(mediaElement);
      return BrowserCodeReader2.createBinaryBitmapFromCanvas(canvas);
    };
    BrowserCodeReader2.destroyImageElement = function(imageElement) {
      imageElement.src = "";
      imageElement.removeAttribute("src");
      imageElement = void 0;
    };
    BrowserCodeReader2.listVideoInputDevices = function() {
      return __awaiter(this, void 0, void 0, function() {
        var devices, videoDevices, devices_1, devices_1_1, device, kind, deviceId, label, groupId, videoDevice;
        var e_2, _a;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              if (!hasNavigator()) {
                throw new Error("Can't enumerate devices, navigator is not present.");
              }
              if (!canEnumerateDevices()) {
                throw new Error("Can't enumerate devices, method not supported.");
              }
              return [4, navigator.mediaDevices.enumerateDevices()];
            case 1:
              devices = _b.sent();
              videoDevices = [];
              try {
                for (devices_1 = __values(devices), devices_1_1 = devices_1.next(); !devices_1_1.done; devices_1_1 = devices_1.next()) {
                  device = devices_1_1.value;
                  kind = device.kind === "video" ? "videoinput" : device.kind;
                  if (kind !== "videoinput") {
                    continue;
                  }
                  deviceId = device.deviceId || device.id;
                  label = device.label || "Video device ".concat(videoDevices.length + 1);
                  groupId = device.groupId;
                  videoDevice = { deviceId, label, kind, groupId };
                  videoDevices.push(videoDevice);
                }
              } catch (e_2_1) {
                e_2 = { error: e_2_1 };
              } finally {
                try {
                  if (devices_1_1 && !devices_1_1.done && (_a = devices_1.return)) _a.call(devices_1);
                } finally {
                  if (e_2) throw e_2.error;
                }
              }
              return [2, videoDevices];
          }
        });
      });
    };
    BrowserCodeReader2.findDeviceById = function(deviceId) {
      return __awaiter(this, void 0, void 0, function() {
        var devices;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, BrowserCodeReader2.listVideoInputDevices()];
            case 1:
              devices = _a.sent();
              if (!devices) {
                return [
                  2
                  /*return*/
                ];
              }
              return [2, devices.find(function(x) {
                return x.deviceId === deviceId;
              })];
          }
        });
      });
    };
    BrowserCodeReader2.cleanVideoSource = function(videoElement) {
      if (!videoElement) {
        return;
      }
      try {
        videoElement.srcObject = null;
      } catch (err) {
        videoElement.src = "";
      }
      if (videoElement) {
        videoElement.removeAttribute("src");
      }
    };
    BrowserCodeReader2.releaseAllStreams = function() {
      if (BrowserCodeReader2.streamTracker.length !== 0) {
        BrowserCodeReader2.streamTracker.forEach(function(mediaStream) {
          mediaStream.getTracks().forEach(function(track) {
            return track.stop();
          });
        });
      }
      BrowserCodeReader2.streamTracker = [];
    };
    BrowserCodeReader2.playVideoOnLoadAsync = function(element, timeout) {
      return __awaiter(this, void 0, void 0, function() {
        var isPlaying;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, BrowserCodeReader2.tryPlayVideo(element)];
            case 1:
              isPlaying = _a.sent();
              if (isPlaying) {
                return [2, true];
              }
              return [2, new Promise(function(resolve, reject) {
                var timeoutId = setTimeout(function() {
                  if (BrowserCodeReader2.isVideoPlaying(element)) {
                    return;
                  }
                  reject(false);
                  element.removeEventListener("canplay", videoCanPlayListener);
                }, timeout);
                var videoCanPlayListener = function() {
                  BrowserCodeReader2.tryPlayVideo(element).then(function(hasPlayed) {
                    clearTimeout(timeoutId);
                    element.removeEventListener("canplay", videoCanPlayListener);
                    resolve(hasPlayed);
                  });
                };
                element.addEventListener("canplay", videoCanPlayListener);
              })];
          }
        });
      });
    };
    BrowserCodeReader2.attachStreamToVideo = function(stream, preview, previewPlayTimeout) {
      if (previewPlayTimeout === void 0) {
        previewPlayTimeout = 5e3;
      }
      return __awaiter(this, void 0, void 0, function() {
        var videoElement;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              videoElement = BrowserCodeReader2.prepareVideoElement(preview);
              BrowserCodeReader2.addVideoSource(videoElement, stream);
              return [4, BrowserCodeReader2.playVideoOnLoadAsync(videoElement, previewPlayTimeout)];
            case 1:
              _a.sent();
              return [2, videoElement];
          }
        });
      });
    };
    BrowserCodeReader2._waitImageLoad = function(element) {
      return new Promise(function(resolve, reject) {
        var timeout = 1e4;
        var timeoutId = setTimeout(function() {
          if (BrowserCodeReader2.isImageLoaded(element)) {
            return;
          }
          element.removeEventListener("load", imageLoadedListener);
          reject();
        }, timeout);
        var imageLoadedListener = function() {
          clearTimeout(timeoutId);
          element.removeEventListener("load", imageLoadedListener);
          resolve();
        };
        element.addEventListener("load", imageLoadedListener);
      });
    };
    BrowserCodeReader2.checkCallbackFnOrThrow = function(callbackFn) {
      if (!callbackFn) {
        throw new ArgumentException_default("`callbackFn` is a required parameter, you cannot capture results without it.");
      }
    };
    BrowserCodeReader2.disposeMediaStream = function(stream) {
      stream.getVideoTracks().forEach(function(x) {
        return x.stop();
      });
      stream = void 0;
    };
    BrowserCodeReader2.prototype.decode = function(element) {
      var canvas = BrowserCodeReader2.createCanvasFromMediaElement(element);
      return this.decodeFromCanvas(canvas);
    };
    BrowserCodeReader2.prototype.decodeBitmap = function(binaryBitmap) {
      return this.reader.decode(binaryBitmap, this.hints);
    };
    BrowserCodeReader2.prototype.decodeFromCanvas = function(canvas) {
      var binaryBitmap = BrowserCodeReader2.createBinaryBitmapFromCanvas(canvas);
      return this.decodeBitmap(binaryBitmap);
    };
    BrowserCodeReader2.prototype.decodeFromImageElement = function(source) {
      return __awaiter(this, void 0, void 0, function() {
        var element;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!source) {
                throw new ArgumentException_default("An image element must be provided.");
              }
              element = BrowserCodeReader2.prepareImageElement(source);
              return [4, this._decodeOnLoadImage(element)];
            case 1:
              return [2, _a.sent()];
          }
        });
      });
    };
    BrowserCodeReader2.prototype.decodeFromImageUrl = function(url) {
      return __awaiter(this, void 0, void 0, function() {
        var element;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!url) {
                throw new ArgumentException_default("An URL must be provided.");
              }
              element = BrowserCodeReader2.prepareImageElement();
              element.src = url;
              _a.label = 1;
            case 1:
              _a.trys.push([1, , 3, 4]);
              return [4, this.decodeFromImageElement(element)];
            case 2:
              return [2, _a.sent()];
            case 3:
              BrowserCodeReader2.destroyImageElement(element);
              return [
                7
                /*endfinally*/
              ];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    BrowserCodeReader2.prototype.decodeFromConstraints = function(constraints, previewElem, callbackFn) {
      return __awaiter(this, void 0, void 0, function() {
        var stream, error_2;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              BrowserCodeReader2.checkCallbackFnOrThrow(callbackFn);
              return [4, this.getUserMedia(constraints)];
            case 1:
              stream = _a.sent();
              _a.label = 2;
            case 2:
              _a.trys.push([2, 4, , 5]);
              return [4, this.decodeFromStream(stream, previewElem, callbackFn)];
            case 3:
              return [2, _a.sent()];
            case 4:
              error_2 = _a.sent();
              BrowserCodeReader2.disposeMediaStream(stream);
              throw error_2;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    BrowserCodeReader2.prototype.decodeFromStream = function(stream, preview, callbackFn) {
      return __awaiter(this, void 0, void 0, function() {
        var timeout, video, finalizeCallback, originalControls, videoTracks, controls, isTorchAvailable, torchTrack_1, switchTorch_1;
        var _this = this;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              BrowserCodeReader2.checkCallbackFnOrThrow(callbackFn);
              timeout = this.options.tryPlayVideoTimeout;
              return [4, BrowserCodeReader2.attachStreamToVideo(stream, preview, timeout)];
            case 1:
              video = _a.sent();
              finalizeCallback = function() {
                BrowserCodeReader2.disposeMediaStream(stream);
                BrowserCodeReader2.cleanVideoSource(video);
              };
              originalControls = this.scan(video, callbackFn, finalizeCallback);
              videoTracks = stream.getVideoTracks();
              controls = __assign(__assign({}, originalControls), { stop: function() {
                originalControls.stop();
              }, streamVideoConstraintsApply: function(constraints, trackFilter) {
                return __awaiter(this, void 0, void 0, function() {
                  var tracks, tracks_2, tracks_2_1, track, e_3_1;
                  var e_3, _a2;
                  return __generator(this, function(_b) {
                    switch (_b.label) {
                      case 0:
                        tracks = trackFilter ? videoTracks.filter(trackFilter) : videoTracks;
                        _b.label = 1;
                      case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        tracks_2 = __values(tracks), tracks_2_1 = tracks_2.next();
                        _b.label = 2;
                      case 2:
                        if (!!tracks_2_1.done) return [3, 5];
                        track = tracks_2_1.value;
                        return [4, track.applyConstraints(constraints)];
                      case 3:
                        _b.sent();
                        _b.label = 4;
                      case 4:
                        tracks_2_1 = tracks_2.next();
                        return [3, 2];
                      case 5:
                        return [3, 8];
                      case 6:
                        e_3_1 = _b.sent();
                        e_3 = { error: e_3_1 };
                        return [3, 8];
                      case 7:
                        try {
                          if (tracks_2_1 && !tracks_2_1.done && (_a2 = tracks_2.return)) _a2.call(tracks_2);
                        } finally {
                          if (e_3) throw e_3.error;
                        }
                        return [
                          7
                          /*endfinally*/
                        ];
                      case 8:
                        return [
                          2
                          /*return*/
                        ];
                    }
                  });
                });
              }, streamVideoConstraintsGet: function(trackFilter) {
                return videoTracks.find(trackFilter).getConstraints();
              }, streamVideoSettingsGet: function(trackFilter) {
                return videoTracks.find(trackFilter).getSettings();
              }, streamVideoCapabilitiesGet: function(trackFilter) {
                return videoTracks.find(trackFilter).getCapabilities();
              } });
              isTorchAvailable = BrowserCodeReader2.mediaStreamIsTorchCompatible(stream);
              if (isTorchAvailable) {
                torchTrack_1 = videoTracks === null || videoTracks === void 0 ? void 0 : videoTracks.find(function(t) {
                  return BrowserCodeReader2.mediaStreamIsTorchCompatibleTrack(t);
                });
                switchTorch_1 = function(onOff) {
                  return __awaiter(_this, void 0, void 0, function() {
                    return __generator(this, function(_a2) {
                      switch (_a2.label) {
                        case 0:
                          return [4, BrowserCodeReader2.mediaStreamSetTorch(torchTrack_1, onOff)];
                        case 1:
                          _a2.sent();
                          return [
                            2
                            /*return*/
                          ];
                      }
                    });
                  });
                };
                controls.switchTorch = switchTorch_1;
                controls.stop = function() {
                  return __awaiter(_this, void 0, void 0, function() {
                    return __generator(this, function(_a2) {
                      switch (_a2.label) {
                        case 0:
                          originalControls.stop();
                          return [4, switchTorch_1(false)];
                        case 1:
                          _a2.sent();
                          return [
                            2
                            /*return*/
                          ];
                      }
                    });
                  });
                };
              }
              return [2, controls];
          }
        });
      });
    };
    BrowserCodeReader2.prototype.decodeFromVideoDevice = function(deviceId, previewElem, callbackFn) {
      return __awaiter(this, void 0, void 0, function() {
        var videoConstraints, constraints;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              BrowserCodeReader2.checkCallbackFnOrThrow(callbackFn);
              if (!deviceId) {
                videoConstraints = { facingMode: "environment" };
              } else {
                videoConstraints = { deviceId: { exact: deviceId } };
              }
              constraints = { video: videoConstraints };
              return [4, this.decodeFromConstraints(constraints, previewElem, callbackFn)];
            case 1:
              return [2, _a.sent()];
          }
        });
      });
    };
    BrowserCodeReader2.prototype.decodeFromVideoElement = function(source, callbackFn) {
      return __awaiter(this, void 0, void 0, function() {
        var element, timeout;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              BrowserCodeReader2.checkCallbackFnOrThrow(callbackFn);
              if (!source) {
                throw new ArgumentException_default("A video element must be provided.");
              }
              element = BrowserCodeReader2.prepareVideoElement(source);
              timeout = this.options.tryPlayVideoTimeout;
              return [4, BrowserCodeReader2.playVideoOnLoadAsync(element, timeout)];
            case 1:
              _a.sent();
              return [2, this.scan(element, callbackFn)];
          }
        });
      });
    };
    BrowserCodeReader2.prototype.decodeFromVideoUrl = function(url, callbackFn) {
      return __awaiter(this, void 0, void 0, function() {
        var element, finalizeCallback, timeout, controls;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              BrowserCodeReader2.checkCallbackFnOrThrow(callbackFn);
              if (!url) {
                throw new ArgumentException_default("An URL must be provided.");
              }
              element = BrowserCodeReader2.prepareVideoElement();
              element.src = url;
              finalizeCallback = function() {
                BrowserCodeReader2.cleanVideoSource(element);
              };
              timeout = this.options.tryPlayVideoTimeout;
              return [4, BrowserCodeReader2.playVideoOnLoadAsync(element, timeout)];
            case 1:
              _a.sent();
              controls = this.scan(element, callbackFn, finalizeCallback);
              return [2, controls];
          }
        });
      });
    };
    BrowserCodeReader2.prototype.decodeOnceFromConstraints = function(constraints, videoSource) {
      return __awaiter(this, void 0, void 0, function() {
        var stream;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this.getUserMedia(constraints)];
            case 1:
              stream = _a.sent();
              return [4, this.decodeOnceFromStream(stream, videoSource)];
            case 2:
              return [2, _a.sent()];
          }
        });
      });
    };
    BrowserCodeReader2.prototype.decodeOnceFromStream = function(stream, preview) {
      return __awaiter(this, void 0, void 0, function() {
        var receivedPreview, video, result;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              receivedPreview = Boolean(preview);
              return [4, BrowserCodeReader2.attachStreamToVideo(stream, preview)];
            case 1:
              video = _a.sent();
              _a.label = 2;
            case 2:
              _a.trys.push([2, , 4, 5]);
              return [4, this.scanOneResult(video)];
            case 3:
              result = _a.sent();
              return [2, result];
            case 4:
              if (!receivedPreview) {
                BrowserCodeReader2.cleanVideoSource(video);
              }
              return [
                7
                /*endfinally*/
              ];
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    BrowserCodeReader2.prototype.decodeOnceFromVideoDevice = function(deviceId, videoSource) {
      return __awaiter(this, void 0, void 0, function() {
        var videoConstraints, constraints;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!deviceId) {
                videoConstraints = { facingMode: "environment" };
              } else {
                videoConstraints = { deviceId: { exact: deviceId } };
              }
              constraints = { video: videoConstraints };
              return [4, this.decodeOnceFromConstraints(constraints, videoSource)];
            case 1:
              return [2, _a.sent()];
          }
        });
      });
    };
    BrowserCodeReader2.prototype.decodeOnceFromVideoElement = function(source) {
      return __awaiter(this, void 0, void 0, function() {
        var element, timeout;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!source) {
                throw new ArgumentException_default("A video element must be provided.");
              }
              element = BrowserCodeReader2.prepareVideoElement(source);
              timeout = this.options.tryPlayVideoTimeout;
              return [4, BrowserCodeReader2.playVideoOnLoadAsync(element, timeout)];
            case 1:
              _a.sent();
              return [4, this.scanOneResult(element)];
            case 2:
              return [2, _a.sent()];
          }
        });
      });
    };
    BrowserCodeReader2.prototype.decodeOnceFromVideoUrl = function(url) {
      return __awaiter(this, void 0, void 0, function() {
        var element, task;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!url) {
                throw new ArgumentException_default("An URL must be provided.");
              }
              element = BrowserCodeReader2.prepareVideoElement();
              element.src = url;
              task = this.decodeOnceFromVideoElement(element);
              _a.label = 1;
            case 1:
              _a.trys.push([1, , 3, 4]);
              return [4, task];
            case 2:
              return [2, _a.sent()];
            case 3:
              BrowserCodeReader2.cleanVideoSource(element);
              return [
                7
                /*endfinally*/
              ];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    BrowserCodeReader2.prototype.scanOneResult = function(element, retryIfNotFound, retryIfChecksumError, retryIfFormatError) {
      var _this = this;
      if (retryIfNotFound === void 0) {
        retryIfNotFound = true;
      }
      if (retryIfChecksumError === void 0) {
        retryIfChecksumError = true;
      }
      if (retryIfFormatError === void 0) {
        retryIfFormatError = true;
      }
      return new Promise(function(resolve, reject) {
        _this.scan(element, function(result, error, controls) {
          if (result) {
            resolve(result);
            controls.stop();
            return;
          }
          if (error) {
            if (error instanceof NotFoundException_default && retryIfNotFound) {
              return;
            }
            if (error instanceof ChecksumException_default && retryIfChecksumError) {
              return;
            }
            if (error instanceof FormatException_default && retryIfFormatError) {
              return;
            }
            controls.stop();
            reject(error);
          }
        });
      });
    };
    BrowserCodeReader2.prototype.scan = function(element, callbackFn, finalizeCallback) {
      var _this = this;
      BrowserCodeReader2.checkCallbackFnOrThrow(callbackFn);
      var captureCanvas = BrowserCodeReader2.createCaptureCanvas(element);
      var captureCanvasContext;
      try {
        captureCanvasContext = captureCanvas.getContext("2d", { willReadFrequently: true });
      } catch (e) {
        captureCanvasContext = captureCanvas.getContext("2d");
      }
      if (!captureCanvasContext) {
        throw new Error("Couldn't create canvas for visual element scan.");
      }
      var disposeCanvas = function() {
        captureCanvasContext = void 0;
        captureCanvas = void 0;
      };
      var stopScan = false;
      var lastTimeoutId;
      var stop = function() {
        stopScan = true;
        clearTimeout(lastTimeoutId);
        disposeCanvas();
        if (finalizeCallback) {
          finalizeCallback();
        }
      };
      var controls = { stop };
      var loop = function() {
        if (stopScan) {
          return;
        }
        try {
          BrowserCodeReader2.drawImageOnCanvas(captureCanvasContext, element);
          var result = _this.decodeFromCanvas(captureCanvas);
          callbackFn(result, void 0, controls);
          lastTimeoutId = setTimeout(loop, _this.options.delayBetweenScanSuccess);
        } catch (error) {
          callbackFn(void 0, error, controls);
          var isChecksumError = error instanceof ChecksumException_default;
          var isFormatError = error instanceof FormatException_default;
          var isNotFound = error instanceof NotFoundException_default;
          if (isChecksumError || isFormatError || isNotFound) {
            lastTimeoutId = setTimeout(loop, _this.options.delayBetweenScanAttempts);
            return;
          }
          disposeCanvas();
          if (finalizeCallback) {
            finalizeCallback(error);
          }
        }
      };
      loop();
      return controls;
    };
    BrowserCodeReader2.prototype._decodeOnLoadImage = function(element) {
      return __awaiter(this, void 0, void 0, function() {
        var isImageLoaded;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              isImageLoaded = BrowserCodeReader2.isImageLoaded(element);
              if (!!isImageLoaded) return [3, 2];
              return [4, BrowserCodeReader2._waitImageLoad(element)];
            case 1:
              _a.sent();
              _a.label = 2;
            case 2:
              return [2, this.decode(element)];
          }
        });
      });
    };
    BrowserCodeReader2.prototype.getUserMedia = function(constraints) {
      return __awaiter(this, void 0, void 0, function() {
        var stream;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, navigator.mediaDevices.getUserMedia(constraints)];
            case 1:
              stream = _a.sent();
              BrowserCodeReader2.streamTracker.push(stream);
              return [2, stream];
          }
        });
      });
    };
    BrowserCodeReader2.streamTracker = [];
    return BrowserCodeReader2;
  })()
);

// node_modules/@zxing/browser/esm/readers/BrowserAztecCodeReader.js
var __extends2 = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var BrowserAztecCodeReader = (
  /** @class */
  (function(_super) {
    __extends2(BrowserAztecCodeReader2, _super);
    function BrowserAztecCodeReader2(hints, options) {
      return _super.call(this, new AztecReader_default(), hints, options) || this;
    }
    return BrowserAztecCodeReader2;
  })(BrowserCodeReader)
);

// node_modules/@zxing/browser/esm/readers/BrowserMultiFormatOneDReader.js
var __extends3 = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var BrowserMultiFormatOneDReader = (
  /** @class */
  (function(_super) {
    __extends3(BrowserMultiFormatOneDReader2, _super);
    function BrowserMultiFormatOneDReader2(hints, options) {
      return _super.call(this, new MultiFormatOneDReader_default(hints), hints, options) || this;
    }
    return BrowserMultiFormatOneDReader2;
  })(BrowserCodeReader)
);

// node_modules/@zxing/browser/esm/readers/BrowserDatamatrixCodeReader.js
var __extends4 = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var BrowserDatamatrixCodeReader = (
  /** @class */
  (function(_super) {
    __extends4(BrowserDatamatrixCodeReader2, _super);
    function BrowserDatamatrixCodeReader2(hints, options) {
      return _super.call(this, new DataMatrixReader_default(), hints, options) || this;
    }
    return BrowserDatamatrixCodeReader2;
  })(BrowserCodeReader)
);

// node_modules/@zxing/browser/esm/readers/BrowserMultiFormatReader.js
var __extends5 = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var BrowserMultiFormatReader = (
  /** @class */
  (function(_super) {
    __extends5(BrowserMultiFormatReader2, _super);
    function BrowserMultiFormatReader2(hints, options) {
      var _this = this;
      var reader = new MultiFormatReader_default();
      reader.setHints(hints);
      _this = _super.call(this, reader, hints, options) || this;
      _this.reader = reader;
      return _this;
    }
    Object.defineProperty(BrowserMultiFormatReader2.prototype, "possibleFormats", {
      set: function(formats) {
        this.hints.set(DecodeHintType_default.POSSIBLE_FORMATS, formats);
        this.reader.setHints(this.hints);
      },
      enumerable: false,
      configurable: true
    });
    BrowserMultiFormatReader2.prototype.decodeBitmap = function(binaryBitmap) {
      return this.reader.decodeWithState(binaryBitmap);
    };
    BrowserMultiFormatReader2.prototype.setHints = function(hints) {
      this.hints = hints;
      this.reader.setHints(this.hints);
    };
    return BrowserMultiFormatReader2;
  })(BrowserCodeReader)
);

// node_modules/@zxing/browser/esm/readers/BrowserPDF417Reader.js
var __extends6 = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var BrowserPDF417Reader = (
  /** @class */
  (function(_super) {
    __extends6(BrowserPDF417Reader2, _super);
    function BrowserPDF417Reader2(hints, options) {
      return _super.call(this, new PDF417Reader_default(), hints, options) || this;
    }
    return BrowserPDF417Reader2;
  })(BrowserCodeReader)
);

// node_modules/@zxing/browser/esm/readers/BrowserQRCodeReader.js
var __extends7 = /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var BrowserQRCodeReader = (
  /** @class */
  (function(_super) {
    __extends7(BrowserQRCodeReader2, _super);
    function BrowserQRCodeReader2(hints, options) {
      return _super.call(this, new QRCodeReader_default(), hints, options) || this;
    }
    return BrowserQRCodeReader2;
  })(BrowserCodeReader)
);

// node_modules/@zxing/browser/esm/writers/BrowserCodeSvgWriter.js
var svgNs = "http://www.w3.org/2000/svg";
var BrowserCodeSvgWriter = (
  /** @class */
  (function() {
    function BrowserCodeSvgWriter2(containerElement) {
      if (typeof containerElement === "string") {
        var container = document.getElementById(containerElement);
        if (!container) {
          throw new Error("Could not find a Container element with '".concat(containerElement, "'."));
        }
        this.containerElement = container;
      } else {
        this.containerElement = containerElement;
      }
    }
    BrowserCodeSvgWriter2.prototype.write = function(contents, width, height, hints) {
      if (contents.length === 0) {
        throw new IllegalArgumentException_default("Found empty contents");
      }
      if (width < 0 || height < 0) {
        throw new IllegalArgumentException_default("Requested dimensions are too small: " + width + "x" + height);
      }
      var quietZone = hints && hints.get(EncodeHintType_default.MARGIN) !== void 0 ? Number.parseInt(hints.get(EncodeHintType_default.MARGIN).toString(), 10) : BrowserCodeSvgWriter2.QUIET_ZONE_SIZE;
      var code = this.encode(hints, contents);
      return this.renderResult(code, width, height, quietZone);
    };
    BrowserCodeSvgWriter2.prototype.createSVGElement = function(w, h) {
      var el = document.createElementNS(BrowserCodeSvgWriter2.SVG_NS, "svg");
      el.setAttributeNS(svgNs, "width", h.toString());
      el.setAttributeNS(svgNs, "height", w.toString());
      return el;
    };
    BrowserCodeSvgWriter2.prototype.createSvgPathPlaceholderElement = function(w, h) {
      var el = document.createElementNS(BrowserCodeSvgWriter2.SVG_NS, "path");
      el.setAttributeNS(svgNs, "d", "M0 0h".concat(w, "v").concat(h, "H0z"));
      el.setAttributeNS(svgNs, "fill", "none");
      return el;
    };
    BrowserCodeSvgWriter2.prototype.createSvgRectElement = function(x, y, w, h) {
      var el = document.createElementNS(BrowserCodeSvgWriter2.SVG_NS, "rect");
      el.setAttributeNS(svgNs, "x", x.toString());
      el.setAttributeNS(svgNs, "y", y.toString());
      el.setAttributeNS(svgNs, "height", w.toString());
      el.setAttributeNS(svgNs, "width", h.toString());
      el.setAttributeNS(svgNs, "fill", "#000000");
      return el;
    };
    BrowserCodeSvgWriter2.prototype.encode = function(hints, contents) {
      var errorCorrectionLevel = ErrorCorrectionLevel_default.L;
      if (hints && hints.get(EncodeHintType_default.ERROR_CORRECTION) !== void 0) {
        var correctionStr = hints.get(EncodeHintType_default.ERROR_CORRECTION).toString();
        errorCorrectionLevel = ErrorCorrectionLevel_default.fromString(correctionStr);
      }
      var code = Encoder_default.encode(contents, errorCorrectionLevel, hints);
      return code;
    };
    BrowserCodeSvgWriter2.prototype.renderResult = function(code, width, height, quietZone) {
      var input = code.getMatrix();
      if (input === null) {
        throw new IllegalStateException_default();
      }
      var inputWidth = input.getWidth();
      var inputHeight = input.getHeight();
      var qrWidth = inputWidth + quietZone * 2;
      var qrHeight = inputHeight + quietZone * 2;
      var outputWidth = Math.max(width, qrWidth);
      var outputHeight = Math.max(height, qrHeight);
      var multiple = Math.min(Math.floor(outputWidth / qrWidth), Math.floor(outputHeight / qrHeight));
      var leftPadding = Math.floor((outputWidth - inputWidth * multiple) / 2);
      var topPadding = Math.floor((outputHeight - inputHeight * multiple) / 2);
      var svgElement = this.createSVGElement(outputWidth, outputHeight);
      var placeholder = this.createSvgPathPlaceholderElement(width, height);
      svgElement.appendChild(placeholder);
      this.containerElement.appendChild(svgElement);
      for (var inputY = 0, outputY = topPadding; inputY < inputHeight; inputY++, outputY += multiple) {
        for (var inputX = 0, outputX = leftPadding; inputX < inputWidth; inputX++, outputX += multiple) {
          if (input.get(inputX, inputY) === 1) {
            var svgRectElement = this.createSvgRectElement(outputX, outputY, multiple, multiple);
            svgElement.appendChild(svgRectElement);
          }
        }
      }
      return svgElement;
    };
    BrowserCodeSvgWriter2.QUIET_ZONE_SIZE = 4;
    BrowserCodeSvgWriter2.SVG_NS = "http://www.w3.org/2000/svg";
    return BrowserCodeSvgWriter2;
  })()
);

// node_modules/@zxing/browser/esm/writers/BrowserQRCodeSvgWriter.js
var svgNs2 = "http://www.w3.org/2000/svg";
var BrowserQRCodeSvgWriter = (
  /** @class */
  (function() {
    function BrowserQRCodeSvgWriter2() {
    }
    BrowserQRCodeSvgWriter2.prototype.write = function(contents, width, height, hints) {
      if (contents.length === 0) {
        throw new IllegalArgumentException_default("Found empty contents");
      }
      if (width < 0 || height < 0) {
        throw new IllegalArgumentException_default("Requested dimensions are too small: " + width + "x" + height);
      }
      var errorCorrectionLevel = ErrorCorrectionLevel_default.L;
      var quietZone = BrowserQRCodeSvgWriter2.QUIET_ZONE_SIZE;
      if (hints) {
        if (void 0 !== hints.get(EncodeHintType_default.ERROR_CORRECTION)) {
          var correctionStr = hints.get(EncodeHintType_default.ERROR_CORRECTION).toString();
          errorCorrectionLevel = ErrorCorrectionLevel_default.fromString(correctionStr);
        }
        if (void 0 !== hints.get(EncodeHintType_default.MARGIN)) {
          quietZone = Number.parseInt(hints.get(EncodeHintType_default.MARGIN).toString(), 10);
        }
      }
      var code = Encoder_default.encode(contents, errorCorrectionLevel, hints);
      return this.renderResult(code, width, height, quietZone);
    };
    BrowserQRCodeSvgWriter2.prototype.writeToDom = function(containerElement, contents, width, height, hints) {
      if (typeof containerElement === "string") {
        var targetEl = document.querySelector(containerElement);
        if (!targetEl) {
          throw new Error("Could no find the target HTML element.");
        }
        containerElement = targetEl;
      }
      var svgElement = this.write(contents, width, height, hints);
      if (containerElement instanceof HTMLElement) {
        containerElement.appendChild(svgElement);
      }
    };
    BrowserQRCodeSvgWriter2.prototype.renderResult = function(code, width, height, quietZone) {
      var input = code.getMatrix();
      if (input === null) {
        throw new IllegalStateException_default();
      }
      var inputWidth = input.getWidth();
      var inputHeight = input.getHeight();
      var qrWidth = inputWidth + quietZone * 2;
      var qrHeight = inputHeight + quietZone * 2;
      var outputWidth = Math.max(width, qrWidth);
      var outputHeight = Math.max(height, qrHeight);
      var multiple = Math.min(Math.floor(outputWidth / qrWidth), Math.floor(outputHeight / qrHeight));
      var leftPadding = Math.floor((outputWidth - inputWidth * multiple) / 2);
      var topPadding = Math.floor((outputHeight - inputHeight * multiple) / 2);
      var svgElement = this.createSVGElement(outputWidth, outputHeight);
      for (var inputY = 0, outputY = topPadding; inputY < inputHeight; inputY++, outputY += multiple) {
        for (var inputX = 0, outputX = leftPadding; inputX < inputWidth; inputX++, outputX += multiple) {
          if (input.get(inputX, inputY) === 1) {
            var svgRectElement = this.createSvgRectElement(outputX, outputY, multiple, multiple);
            svgElement.appendChild(svgRectElement);
          }
        }
      }
      return svgElement;
    };
    BrowserQRCodeSvgWriter2.prototype.createSVGElement = function(w, h) {
      var svgElement = document.createElementNS(svgNs2, "svg");
      var width = w.toString();
      var height = h.toString();
      svgElement.setAttribute("height", height);
      svgElement.setAttribute("width", width);
      svgElement.setAttribute("viewBox", "0 0 " + width + " " + height);
      return svgElement;
    };
    BrowserQRCodeSvgWriter2.prototype.createSvgRectElement = function(x, y, w, h) {
      var rect = document.createElementNS(svgNs2, "rect");
      rect.setAttribute("x", x.toString());
      rect.setAttribute("y", y.toString());
      rect.setAttribute("height", w.toString());
      rect.setAttribute("width", h.toString());
      rect.setAttribute("fill", "#000000");
      return rect;
    };
    BrowserQRCodeSvgWriter2.QUIET_ZONE_SIZE = 4;
    return BrowserQRCodeSvgWriter2;
  })()
);

// node_modules/@zxing/ngx-scanner/fesm2022/zxing-ngx-scanner.mjs
var _c0 = ["preview"];
var BrowserMultiFormatContinuousReader = class extends BrowserMultiFormatReader {
  /**
   * Returns the code reader scanner controls.
   */
  getScannerControls() {
    if (!this.scannerControls) {
      throw new Error("No scanning is running at the time.");
    }
    return this.scannerControls;
  }
  /**
   * Starts the decoding from the current or a new video element.
   *
   * @param deviceId The device's to be used Id
   * @param previewEl A new video element
   */
  scanFromDeviceObservable(deviceId, previewEl) {
    return __async(this, null, function* () {
      const scan$ = new BehaviorSubject({});
      let ctrls;
      try {
        ctrls = yield this.decodeFromVideoDevice(deviceId, previewEl, (result, error) => {
          if (!error) {
            scan$.next({
              result
            });
            return;
          }
          const errorName = error.name;
          if (
            // scan Failure - found nothing, no error
            errorName === NotFoundException_default.name || // scan Error - found the QR but got error on decoding
            errorName === ChecksumException_default.name || errorName === FormatException_default.name || error.message.includes("No MultiFormat Readers were able to detect the code.")
          ) {
            scan$.next({
              error
            });
            return;
          }
          scan$.error(error);
          this.scannerControls.stop();
          this.scannerControls = void 0;
          return;
        });
        this.scannerControls = __spreadProps(__spreadValues({}, ctrls), {
          stop() {
            ctrls.stop();
            scan$.complete();
          }
        });
      } catch (e) {
        scan$.error(e);
        this.scannerControls?.stop();
        this.scannerControls = void 0;
      }
      return scan$.asObservable();
    });
  }
};
var ZXingScannerComponent = class _ZXingScannerComponent {
  /**
   * Exposes the current code reader, so the user can use it's APIs.
   */
  get codeReader() {
    return this._codeReader;
  }
  /**
   * User device input
   */
  set device(device) {
    if (!this._ready) {
      this._devicePreStart = device;
      return;
    }
    if (this.isAutostarting) {
      console.warn("Avoid setting a device during auto-start.");
      return;
    }
    if (this.isCurrentDevice(device)) {
      console.warn("Setting the same device is not allowed.");
      return;
    }
    if (!this.hasPermission) {
      console.warn("Permissions not set yet, waiting for them to be set to apply device change.");
      return;
    }
    this.setDevice(device);
  }
  /**
   * User device accessor.
   */
  get device() {
    return this._device;
  }
  /**
   * Returns all the registered formats.
   */
  get formats() {
    return this.hints.get(DecodeHintType_default.POSSIBLE_FORMATS);
  }
  /**
   * Registers formats the scanner should support.
   *
   * @param input BarcodeFormat or case-insensitive string array.
   */
  set formats(input) {
    if (typeof input === "string") {
      throw new Error("Invalid formats, make sure the [formats] input is a binding.");
    }
    const formats = input.map((f) => this.getBarcodeFormatOrFail(f));
    const hints = this.hints;
    hints.set(DecodeHintType_default.POSSIBLE_FORMATS, formats);
    this.hints = hints;
  }
  /**
   * Returns all the registered hints.
   */
  get hints() {
    return this._hints;
  }
  /**
   * Does what it takes to set the hints.
   */
  set hints(hints) {
    this._hints = hints;
    this.codeReader?.setHints(this._hints);
  }
  /**
   * Sets the desired constraints in all video tracks.
   * @experimental
   */
  set videoConstraints(constraints) {
    const controls = this.codeReader?.getScannerControls();
    if (!controls) {
      return;
    }
    controls?.streamVideoConstraintsApply(constraints);
  }
  /**
   *
   */
  set isAutostarting(state) {
    this._isAutostarting = state;
    this.autostarting.next(state);
  }
  /**
   *
   */
  get isAutostarting() {
    return this._isAutostarting;
  }
  /**
   * Can turn on/off the device flashlight.
   *
   * @experimental Torch/Flash APIs are not stable in all browsers, it may be buggy!
   */
  set torch(onOff) {
    try {
      const controls = this.getCodeReader().getScannerControls();
      controls.switchTorch(onOff);
    } catch (error) {
    }
  }
  /**
   * Starts and Stops the scanning.
   */
  set enable(enabled) {
    if (this._enabled === Boolean(enabled)) {
      return;
    }
    this._enabled = Boolean(enabled);
    if (!this._enabled) {
      this.reset();
      BrowserMultiFormatContinuousReader.releaseAllStreams();
    } else {
      if (this.device) {
        this.scanFromDevice(this.device.deviceId);
      } else {
        this.init();
      }
    }
  }
  /**
   * Tells if the scanner is enabled or not.
   */
  get enabled() {
    return this._enabled;
  }
  /**
   * If is `tryHarder` enabled.
   */
  get tryHarder() {
    return this.hints.get(DecodeHintType_default.TRY_HARDER);
  }
  /**
   * Enable/disable tryHarder hint.
   */
  set tryHarder(enable) {
    const hints = this.hints;
    if (enable) {
      hints.set(DecodeHintType_default.TRY_HARDER, true);
    } else {
      hints.delete(DecodeHintType_default.TRY_HARDER);
    }
    this.hints = hints;
  }
  /**
   * Constructor to build the object and do some DI.
   */
  constructor() {
    this.timeBetweenScans = 500;
    this.delayBetweenScanSuccess = 500;
    this.previewFitMode = "cover";
    this.poster = "";
    this._ready = false;
    this.autostarted = new EventEmitter();
    this.autostarting = new EventEmitter();
    this.torchCompatible = new EventEmitter(false);
    this.scanSuccess = new EventEmitter();
    this.scanFailure = new EventEmitter();
    this.scanError = new EventEmitter();
    this.scanComplete = new EventEmitter();
    this.camerasFound = new EventEmitter();
    this.camerasNotFound = new EventEmitter();
    this.permissionResponse = new EventEmitter(true);
    this.hasDevices = new EventEmitter();
    this.deviceChange = new EventEmitter();
    this._enabled = true;
    this._hints = /* @__PURE__ */ new Map();
    this.autofocusEnabled = true;
    this.autostart = true;
    this.formats = [BarcodeFormat_default.QR_CODE];
    this.hasNavigator = typeof navigator !== "undefined";
    this.isMediaDevicesSupported = this.hasNavigator && !!navigator.mediaDevices;
  }
  /**
   * Gets and registers all cameras.
   */
  askForPermission() {
    return __async(this, null, function* () {
      if (!this.hasNavigator) {
        console.error("@zxing/ngx-scanner", "Can't ask permission, navigator is not present.");
        this.setPermission(null);
        return this.hasPermission;
      }
      if (!this.isMediaDevicesSupported) {
        console.error("@zxing/ngx-scanner", "Can't get user media, this is not supported.");
        this.setPermission(null);
        return this.hasPermission;
      }
      let stream;
      let permission;
      try {
        stream = yield this.getAnyVideoDevice();
        permission = !!stream;
      } catch (err) {
        return this.handlePermissionException(err);
      } finally {
        this.terminateStream(stream);
      }
      this.setPermission(permission);
      return permission;
    });
  }
  /**
   *
   */
  getAnyVideoDevice() {
    return navigator.mediaDevices.getUserMedia({
      video: true
    });
  }
  /**
   * Terminates a stream and it's tracks.
   */
  terminateStream(stream) {
    if (stream) {
      stream.getTracks().forEach((t) => t.stop());
    }
    stream = void 0;
  }
  init() {
    return __async(this, null, function* () {
      if (!this.autostart) {
        console.warn("Feature 'autostart' disabled. Permissions and devices recovery has to be run manually.");
        this.initAutostartOff();
        this._ready = true;
        return;
      }
      yield this.initAutostartOn();
      this._ready = true;
    });
  }
  /**
   * Initializes the component without starting the scanner.
   */
  initAutostartOff() {
    this.isAutostarting = false;
    this.updateVideoInputDevices();
    if (this._device && this._devicePreStart) {
      this.setDevice(this._devicePreStart);
    }
  }
  /**
   * Initializes the component and starts the scanner.
   * Permissions are asked to accomplish that.
   */
  initAutostartOn() {
    return __async(this, null, function* () {
      this.isAutostarting = true;
      let hasPermission;
      try {
        hasPermission = yield this.askForPermission();
      } catch (e) {
        console.error("Exception occurred while asking for permission:", e);
        return;
      }
      if (hasPermission) {
        const devices = yield this.updateVideoInputDevices();
        yield this.autostartScanner([...devices]);
      }
      this.isAutostarting = false;
      this.autostarted.next();
    });
  }
  /**
   * Checks if the given device is the current defined one.
   */
  isCurrentDevice(device) {
    return device?.deviceId === this._device?.deviceId;
  }
  /**
   * Executes some actions before destroy the component.
   */
  ngOnDestroy() {
    this.reset();
    BrowserCodeReader.cleanVideoSource(this.previewElemRef.nativeElement);
    BrowserMultiFormatContinuousReader.releaseAllStreams();
  }
  /**
   *
   */
  ngOnInit() {
    this.init();
  }
  /**
   * Stops the scanning, if any.
   */
  scanStop() {
    if (this._scanSubscription) {
      this.codeReader?.getScannerControls().stop();
      this._scanSubscription?.unsubscribe();
      this._scanSubscription = void 0;
    }
  }
  /**
   * Stops the scanning, if any.
   */
  scanStart() {
    if (this._scanSubscription) {
      throw new Error("There is already a scan process running.");
    }
    if (!this._device) {
      throw new Error("No device defined, cannot start scan, please define a device.");
    }
    this.scanFromDevice(this._device.deviceId);
  }
  /**
   * Stops old `codeReader` and starts scanning in a new one.
   */
  restart() {
    this._codeReader = void 0;
    const prevDevice = this._reset();
    if (!prevDevice) {
      return;
    }
    this.device = prevDevice;
  }
  /**
   * Discovers and updates known video input devices.
   */
  updateVideoInputDevices() {
    return __async(this, null, function* () {
      const devices = (yield BrowserCodeReader.listVideoInputDevices()) || [];
      const hasDevices = devices && devices.length > 0;
      this.hasDevices.next(hasDevices);
      this.camerasFound.next([...devices]);
      if (!hasDevices) {
        this.camerasNotFound.next(null);
      }
      return devices;
    });
  }
  /**
   * Starts the scanner with the back camera otherwise take the last
   * available device.
   */
  autostartScanner(devices) {
    return __async(this, null, function* () {
      const matcher = ({
        label
      }) => /back|trás|rear|traseira|environment|ambiente/gi.test(label);
      const device = devices.find(matcher) || devices.pop();
      if (!device) {
        throw new Error("Impossible to autostart, no input devices available.");
      }
      yield this.setDevice(device);
      this.deviceChange.next(device);
    });
  }
  /**
   * Dispatches the scan success event.
   *
   * @param result the scan result.
   */
  dispatchScanSuccess(result) {
    this.scanSuccess.next(result.getText());
  }
  /**
   * Dispatches the scan failure event.
   */
  dispatchScanFailure(reason) {
    this.scanFailure.next(reason);
  }
  /**
   * Dispatches the scan error event.
   *
   * @param error the error thing.
   */
  dispatchScanError(error) {
    if (!this.scanError.observed) {
      console.error(`zxing scanner component: ${error.name}`, error);
      console.warn("Use the `(scanError)` property to handle errors like this!");
    }
    this.scanError.next(error);
  }
  /**
   * Dispatches the scan event.
   *
   * @param result the scan result.
   */
  dispatchScanComplete(result) {
    this.scanComplete.next(result);
  }
  /**
   * Returns the filtered permission.
   */
  handlePermissionException(err) {
    console.error("@zxing/ngx-scanner", "Error when asking for permission.", err);
    let permission;
    switch (err.name) {
      // usually caused by not secure origins
      case "NotSupportedError":
        console.warn("@zxing/ngx-scanner", err.message);
        permission = null;
        this.hasDevices.next(null);
        break;
      // user denied permission
      case "NotAllowedError":
        console.warn("@zxing/ngx-scanner", err.message);
        permission = false;
        this.hasDevices.next(true);
        break;
      // the device has no attached input devices
      case "NotFoundError":
        console.warn("@zxing/ngx-scanner", err.message);
        permission = null;
        this.hasDevices.next(false);
        this.camerasNotFound.next(err);
        break;
      case "NotReadableError":
        console.warn("@zxing/ngx-scanner", "Couldn't read the device(s)'s stream, it's probably in use by another app.");
        permission = null;
        this.hasDevices.next(false);
        this.camerasNotFound.next(err);
        break;
      case "AbortError":
        console.warn("@zxing/ngx-scanner", "It seems that the required permissions have been granted, but something else failed", err);
        permission = true;
        this.hasDevices.next(null);
        this.camerasNotFound.next(err);
        break;
      default:
        console.warn("@zxing/ngx-scanner", "I was not able to define if I have permissions for camera or not.", err);
        permission = null;
        break;
    }
    this.setPermission(permission);
    this.permissionResponse.error(err);
    return permission;
  }
  /**
   * Returns a valid BarcodeFormat or fails.
   */
  getBarcodeFormatOrFail(format) {
    return typeof format === "string" ? BarcodeFormat_default[format.trim().toUpperCase()] : format;
  }
  /**
   * Return a code reader, create one if non exist
   */
  getCodeReader() {
    if (!this._codeReader) {
      const options = {
        delayBetweenScanAttempts: this.timeBetweenScans,
        delayBetweenScanSuccess: this.delayBetweenScanSuccess
      };
      this._codeReader = new BrowserMultiFormatContinuousReader(this.hints, options);
    }
    return this._codeReader;
  }
  /**
   * Starts the continuous scanning for the given device.
   *
   * @param deviceId The deviceId from the device.
   */
  scanFromDevice(deviceId) {
    return __async(this, null, function* () {
      const videoElement = this.previewElemRef.nativeElement;
      const codeReader = this.getCodeReader();
      const scanStream = yield codeReader.scanFromDeviceObservable(deviceId, videoElement);
      if (!scanStream) {
        throw new Error("Undefined decoding stream, aborting.");
      }
      const next = (x) => this._onDecodeResult(x.result, x.error);
      const error = (err) => this._onDecodeError(err);
      const complete = () => {
      };
      this._scanSubscription = scanStream.subscribe(next, error, complete);
      if (this._scanSubscription.closed) {
        return;
      }
      const controls = codeReader.getScannerControls();
      const hasTorchControl = typeof controls.switchTorch !== "undefined";
      this.torchCompatible.next(hasTorchControl);
    });
  }
  /**
   * Handles decode errors.
   */
  _onDecodeError(err) {
    this.dispatchScanError(err);
  }
  /**
   * Handles decode results.
   */
  _onDecodeResult(result, error) {
    if (result) {
      this.dispatchScanSuccess(result);
    } else {
      this.dispatchScanFailure(error);
    }
    this.dispatchScanComplete(result);
  }
  /**
   * Stops the code reader and returns the previous selected device.
   */
  _reset() {
    if (!this._codeReader) {
      return;
    }
    this.scanStop();
    try {
      const videoElement = this.previewElemRef.nativeElement;
      BrowserCodeReader.cleanVideoSource(videoElement);
    } catch (err) {
    }
    try {
      BrowserCodeReader.releaseAllStreams();
    } catch (err) {
    }
    this._codeReader = void 0;
    const device = this._device;
    this.device = void 0;
    return device;
  }
  /**
   * Resets the scanner and emits device change.
   */
  reset() {
    this._reset();
    this.deviceChange.emit(null);
  }
  /**
   * Sets the current device.
   */
  setDevice(device) {
    return __async(this, null, function* () {
      this.scanStop();
      this._device = device || void 0;
      if (!this._device) {
        BrowserCodeReader.cleanVideoSource(this.previewElemRef.nativeElement);
      }
      if (this._enabled && device) {
        yield this.scanFromDevice(device.deviceId);
      }
    });
  }
  /**
   * Sets the permission value and emits the event.
   */
  setPermission(hasPermission) {
    this.hasPermission = hasPermission;
    this.permissionResponse.next(hasPermission);
  }
  static {
    this.\u0275fac = function ZXingScannerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ZXingScannerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _ZXingScannerComponent,
      selectors: [["zxing-scanner"]],
      viewQuery: function ZXingScannerComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c0, 7);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.previewElemRef = _t.first);
        }
      },
      inputs: {
        autofocusEnabled: "autofocusEnabled",
        timeBetweenScans: "timeBetweenScans",
        delayBetweenScanSuccess: "delayBetweenScanSuccess",
        autostart: "autostart",
        previewFitMode: "previewFitMode",
        poster: "poster",
        device: "device",
        formats: "formats",
        videoConstraints: "videoConstraints",
        torch: "torch",
        enable: "enable",
        tryHarder: "tryHarder"
      },
      outputs: {
        autostarted: "autostarted",
        autostarting: "autostarting",
        torchCompatible: "torchCompatible",
        scanSuccess: "scanSuccess",
        scanFailure: "scanFailure",
        scanError: "scanError",
        scanComplete: "scanComplete",
        camerasFound: "camerasFound",
        camerasNotFound: "camerasNotFound",
        permissionResponse: "permissionResponse",
        hasDevices: "hasDevices",
        deviceChange: "deviceChange"
      },
      standalone: false,
      decls: 6,
      vars: 3,
      consts: [["preview", ""], [3, "poster"]],
      template: function ZXingScannerComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "video", 1, 0)(2, "p");
          \u0275\u0275text(3, " Your browser does not support this feature, please try to upgrade it. ");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(4, "p");
          \u0275\u0275text(5, " Seu navegador n\xE3o suporta este recurso, por favor tente atualiz\xE1-lo. ");
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275styleProp("object-fit", ctx.previewFitMode);
          \u0275\u0275property("poster", ctx.poster);
        }
      },
      styles: ["[_nghost-%COMP%]{display:block}video[_ngcontent-%COMP%]{width:100%;height:auto;object-fit:contain}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZXingScannerComponent, [{
    type: Component,
    args: [{
      selector: "zxing-scanner",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<video #preview [style.object-fit]="previewFitMode" [poster]="poster">\n  <p>\n    Your browser does not support this feature, please try to upgrade it.\n  </p>\n  <p>\n    Seu navegador n\xE3o suporta este recurso, por favor tente atualiz\xE1-lo.\n  </p>\n</video>\n',
      styles: [":host{display:block}video{width:100%;height:auto;object-fit:contain}\n"]
    }]
  }], () => [], {
    previewElemRef: [{
      type: ViewChild,
      args: ["preview", {
        static: true
      }]
    }],
    autofocusEnabled: [{
      type: Input
    }],
    timeBetweenScans: [{
      type: Input
    }],
    delayBetweenScanSuccess: [{
      type: Input
    }],
    autostarted: [{
      type: Output
    }],
    autostarting: [{
      type: Output
    }],
    autostart: [{
      type: Input
    }],
    previewFitMode: [{
      type: Input
    }],
    poster: [{
      type: Input
    }],
    torchCompatible: [{
      type: Output
    }],
    scanSuccess: [{
      type: Output
    }],
    scanFailure: [{
      type: Output
    }],
    scanError: [{
      type: Output
    }],
    scanComplete: [{
      type: Output
    }],
    camerasFound: [{
      type: Output
    }],
    camerasNotFound: [{
      type: Output
    }],
    permissionResponse: [{
      type: Output
    }],
    hasDevices: [{
      type: Output
    }],
    device: [{
      type: Input
    }],
    deviceChange: [{
      type: Output
    }],
    formats: [{
      type: Input
    }],
    videoConstraints: [{
      type: Input
    }],
    torch: [{
      type: Input
    }],
    enable: [{
      type: Input
    }],
    tryHarder: [{
      type: Input
    }]
  });
})();
var ZXingScannerModule = class _ZXingScannerModule {
  static {
    this.\u0275fac = function ZXingScannerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ZXingScannerModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ZXingScannerModule,
      declarations: [ZXingScannerComponent],
      imports: [CommonModule, FormsModule],
      exports: [ZXingScannerComponent]
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [CommonModule, FormsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZXingScannerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule],
      declarations: [ZXingScannerComponent],
      exports: [ZXingScannerComponent]
    }]
  }], null, null);
})();

// src/app/pages/qr-scanner/qr-scanner.component.ts
var _forTrack0 = ($index, $item) => $item.deviceId;
function QrScannerComponent_Conditional_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.scanError);
  }
}
function QrScannerComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 9);
    \u0275\u0275text(2, "\u{1F4F7}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Camera Permission Required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Please allow camera access to scan QR codes.");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, QrScannerComponent_Conditional_9_Conditional_7_Template, 2, 1, "p", 10);
    \u0275\u0275elementStart(8, "p", 11);
    \u0275\u0275text(9, "Tip: If your built-in webcam is not detected, try Chrome settings (chrome://settings/content/camera) to select it, or close other apps using the camera.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 12);
    \u0275\u0275listener("click", function QrScannerComponent_Conditional_9_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retryPermission());
    });
    \u0275\u0275text(11, " Try Again ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.scanError ? 7 : -1);
  }
}
function QrScannerComponent_Conditional_10_Conditional_16_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const device_r5 = ctx.$implicit;
    const $index_r6 = ctx.$index;
    \u0275\u0275property("value", device_r5.deviceId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(device_r5.label || "Camera " + ($index_r6 + 1));
  }
}
function QrScannerComponent_Conditional_10_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "label", 28)(2, "span", 29);
    \u0275\u0275text(3, "\u{1F4F7}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Camera ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 30);
    \u0275\u0275listener("change", function QrScannerComponent_Conditional_10_Conditional_16_Template_select_change_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDeviceSelectChange($event.target.value));
    });
    \u0275\u0275repeaterCreate(6, QrScannerComponent_Conditional_10_Conditional_16_For_7_Template, 2, 2, "option", 31, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", (ctx_r1.selectedDevice == null ? null : ctx_r1.selectedDevice.deviceId) || "");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.availableDevices);
  }
}
function QrScannerComponent_Conditional_10_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function QrScannerComponent_Conditional_10_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleTorch());
    });
    \u0275\u0275elementStart(1, "span", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.torchEnabled ? "\u{1F526}" : "\u{1F4A1}");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.torchEnabled ? "Turn Off Flash" : "Turn On Flash");
  }
}
function QrScannerComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 13)(2, "zxing-scanner", 14);
    \u0275\u0275listener("torchCompatible", function QrScannerComponent_Conditional_10_Template_zxing_scanner_torchCompatible_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTorchCompatible($event));
    })("camerasFound", function QrScannerComponent_Conditional_10_Template_zxing_scanner_camerasFound_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCamerasFound($event));
    })("scanSuccess", function QrScannerComponent_Conditional_10_Template_zxing_scanner_scanSuccess_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onScanSuccess($event));
    })("scanError", function QrScannerComponent_Conditional_10_Template_zxing_scanner_scanError_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onScanError($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15)(4, "div", 16)(5, "div", 17);
    \u0275\u0275element(6, "div", 18)(7, "div", 19)(8, "div", 20)(9, "div", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 22)(11, "span", 23);
    \u0275\u0275text(12, "\u{1F4F1}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Position QR code within the frame ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 24)(15, "div", 25);
    \u0275\u0275conditionalCreate(16, QrScannerComponent_Conditional_10_Conditional_16_Template, 8, 1, "div", 26);
    \u0275\u0275conditionalCreate(17, QrScannerComponent_Conditional_10_Conditional_17_Template, 5, 2, "button", 27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("enable", ctx_r1.scannerEnabled)("device", ctx_r1.selectedDevice)("formats", ctx_r1.allowedFormats)("torch", ctx_r1.torchEnabled);
    \u0275\u0275advance(14);
    \u0275\u0275conditional(ctx_r1.availableDevices.length > 0 ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.torchAvailable ? 17 : -1);
  }
}
function QrScannerComponent_Conditional_11_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 39);
    \u0275\u0275text(1, " This looks like a link: ");
    \u0275\u0275elementStart(2, "a", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "a", 41);
    \u0275\u0275text(5, " Open link in new tab ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r1.scanResultUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.scanResultUrl, " ");
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.scanResultUrl, \u0275\u0275sanitizeUrl);
  }
}
function QrScannerComponent_Conditional_11_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.scanError);
  }
}
function QrScannerComponent_Conditional_11_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 39);
    \u0275\u0275text(1, "Processing...");
    \u0275\u0275elementEnd();
  }
}
function QrScannerComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 34)(2, "h3");
    \u0275\u0275text(3, "QR Code Scanned!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 35);
    \u0275\u0275listener("click", function QrScannerComponent_Conditional_11_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetScanner());
    });
    \u0275\u0275text(5, " Scan Another ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 36)(7, "p", 37);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, QrScannerComponent_Conditional_11_Conditional_9_Template, 6, 3)(10, QrScannerComponent_Conditional_11_Conditional_10_Template, 2, 1, "p", 38)(11, QrScannerComponent_Conditional_11_Conditional_11_Template, 2, 0, "p", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.scanResult);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.scanResultUrl ? 9 : ctx_r1.scanError ? 10 : 11);
  }
}
var QrScannerComponent = class _QrScannerComponent {
  constructor(router, data) {
    this.router = router;
    this.data = data;
    this.scannerEnabled = false;
    this.hasPermission = false;
    this.availableDevices = [];
    this.selectedDevice = void 0;
    this.scanResult = null;
    this.scanResultUrl = null;
    this.scanError = null;
    this.allowedFormats = [BarcodeFormat_default.QR_CODE];
    this.torchEnabled = false;
    this.torchAvailable = false;
  }
  ngOnInit() {
    this.requestCameraPermission();
  }
  ngOnDestroy() {
    this.scannerEnabled = false;
  }
  requestCameraPermission() {
    return __async(this, null, function* () {
      const strategies = [
        { video: true },
        { video: { facingMode: "user" } },
        { video: { facingMode: "environment" } },
        { video: { width: { ideal: 1280 }, height: { ideal: 720 } } }
      ];
      for (const constraints of strategies) {
        try {
          const stream = yield navigator.mediaDevices.getUserMedia(constraints);
          stream.getTracks().forEach((track) => track.stop());
          this.hasPermission = true;
          this.scannerEnabled = true;
          this.scanError = null;
          return;
        } catch (error) {
          const errorName = error?.name || "";
          if (errorName === "NotAllowedError" || errorName === "PermissionDeniedError") {
            this.hasPermission = false;
            this.scanError = "Camera permission denied. Please enable camera access in your browser settings.";
            return;
          }
          if (errorName === "NotFoundError" || errorName === "DevicesNotFoundError") {
            continue;
          }
          if (errorName === "NotReadableError" || errorName === "TrackStartError") {
            this.hasPermission = false;
            this.scanError = "Camera is already in use by another application.";
            return;
          }
        }
      }
      this.hasPermission = false;
      this.scanError = this.scanError || "No camera found. Try closing other apps using the camera, or use Chrome settings (chrome://settings/content/camera) to select your webcam.";
    });
  }
  onCamerasFound(devices) {
    this.availableDevices = devices.filter((d) => d.kind === "videoinput");
    const label = (d) => (d.label || "").toLowerCase();
    const backCamera = this.availableDevices.find((d) => label(d).includes("back") || label(d).includes("rear") || label(d).includes("environment"));
    this.selectedDevice = backCamera || this.availableDevices[0] || void 0;
  }
  onDeviceSelectChange(deviceId) {
    this.selectedDevice = this.availableDevices.find((device) => device.deviceId === deviceId) || void 0;
  }
  onScanSuccess(result) {
    const text = typeof result === "string" ? result : result.getText();
    this.scanResult = text;
    this.scanError = null;
    if (this.scanResult) {
      this.processScannedCode(this.scanResult);
    }
  }
  onScanError(error) {
    if (this.hasPermission && !this.scanError) {
      this.scanError = "An error occurred while scanning. Please try again.";
    }
  }
  onTorchCompatible(isCompatible) {
    this.torchAvailable = isCompatible;
  }
  toggleTorch() {
    this.torchEnabled = !this.torchEnabled;
  }
  openRouteInNewTab(commands) {
    if (typeof window === "undefined") {
      this.router.navigate(commands);
      return;
    }
    const urlTree = this.router.createUrlTree(commands);
    const url = this.router.serializeUrl(urlTree);
    window.open(url, "_blank");
  }
  processScannedCode(code) {
    try {
      this.scanResultUrl = null;
      let parsed;
      try {
        parsed = JSON.parse(code);
      } catch (e) {
        parsed = null;
      }
      const isAdminPath = this.router.url.startsWith("/admin");
      const base = isAdminPath ? "/admin" : "/staff";
      if (parsed) {
        if (parsed.type === "resident") {
          const residentKey = parsed.id || parsed.residentId;
          if (residentKey) {
            const resident = this.data.getResidentById(residentKey) || this.data.getResidentByResidentId(residentKey);
            if (resident) {
              this.openRouteInNewTab([base, "residents", resident.id]);
            } else {
              this.scanError = `Resident not found for ID "${residentKey}"`;
            }
            return;
          }
        }
        if (parsed.type === "request" && parsed.id) {
          const request = this.data.getRequestById(parsed.id);
          if (request) {
            this.openRouteInNewTab([base, "requests", request.id]);
          } else {
            this.scanError = `Request not found for ID "${parsed.id}"`;
          }
          return;
        }
        if (parsed.type === "certificate" && parsed.id) {
          const request = this.data.getRequestById(parsed.id);
          if (request) {
            this.openRouteInNewTab([base, "requests", request.id]);
          } else {
            this.scanError = `Certificate not found for ID "${parsed.id}"`;
          }
          return;
        }
      }
      const trimmedCode = code.trim();
      let urlToOpen = null;
      if (/^https?:\/\/\S+/i.test(trimmedCode)) {
        urlToOpen = trimmedCode;
      } else if (/^www\.\S+/i.test(trimmedCode) || /^[a-z0-9.-]+\.[a-z]{2,}(\S*)?$/i.test(trimmedCode)) {
        urlToOpen = `https://${trimmedCode}`;
      }
      if (urlToOpen) {
        this.scanResultUrl = urlToOpen;
        if (typeof window !== "undefined") {
          try {
            window.open(urlToOpen, "_blank");
          } catch (e) {
          }
        }
        return;
      }
      const residentFromId = this.data.getResidentById(code) || this.data.getResidentByResidentId(code);
      if (residentFromId) {
        this.openRouteInNewTab([base, "residents", residentFromId.id]);
        return;
      }
      if (code.startsWith("REQ-") || code.startsWith("req-")) {
        const requestId = code.replace(/^(REQ-|req-)/i, "");
        const request = this.data.getRequestById(requestId);
        if (request) {
          this.openRouteInNewTab([base, "requests", request.id]);
        } else {
          this.scanError = `Request not found for ID "${requestId}"`;
        }
        return;
      }
      this.scanError = `Unrecognized QR code format: ${code}`;
    } catch (error) {
      this.scanError = "Error processing QR code. Please try scanning again.";
    }
  }
  resetScanner() {
    this.scanResult = null;
    this.scanResultUrl = null;
    this.scanError = null;
    this.scannerEnabled = true;
  }
  retryPermission() {
    this.requestCameraPermission();
  }
  static {
    this.\u0275fac = function QrScannerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QrScannerComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QrScannerComponent, selectors: [["app-qr-scanner"]], decls: 12, vars: 3, consts: [[1, "qr-scanner"], [1, "page-header"], [1, "page-title"], ["routerLink", "../dashboard", 1, "back-button"], [1, "back-button__icon"], [1, "back-button__text"], [1, "permission-card", "card"], [1, "scanner-container"], [1, "scan-result", "card"], [1, "permission-icon"], [1, "permission-hint"], [1, "permission-tip"], ["type", "button", 1, "btn", "btn--primary", 3, "click"], [1, "scanner-wrapper"], [1, "scanner", 3, "torchCompatible", "camerasFound", "scanSuccess", "scanError", "enable", "device", "formats", "torch"], [1, "scanner-overlay"], [1, "scanner-frame"], [1, "scanner-frame__corners"], [1, "corner", "corner--top-left"], [1, "corner", "corner--top-right"], [1, "corner", "corner--bottom-left"], [1, "corner", "corner--bottom-right"], [1, "scanner-instruction"], [1, "scanner-instruction__icon"], [1, "scanner-controls"], [1, "scanner-controls__row"], [1, "control-group"], ["type", "button", 1, "btn", "btn--secondary", "btn--icon"], ["for", "camera-select"], [1, "control-label__icon"], ["id", "camera-select", 1, "form-control", 3, "change", "value"], [3, "value"], ["type", "button", 1, "btn", "btn--secondary", "btn--icon", 3, "click"], [1, "btn-icon"], [1, "scan-result__header"], ["type", "button", 1, "btn", "btn--sm", "btn--secondary", 3, "click"], [1, "scan-result__content"], [1, "scan-result__code"], [1, "scan-result__error"], [1, "scan-result__success"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn--primary", "btn--sm", 3, "href"]], template: function QrScannerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "QR Code Scanner");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "a", 3)(5, "span", 4);
        \u0275\u0275text(6, "\u2190");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span", 5);
        \u0275\u0275text(8, "Back");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(9, QrScannerComponent_Conditional_9_Template, 12, 1, "div", 6);
        \u0275\u0275conditionalCreate(10, QrScannerComponent_Conditional_10_Template, 18, 6, "div", 7);
        \u0275\u0275conditionalCreate(11, QrScannerComponent_Conditional_11_Template, 12, 2, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275conditional(!ctx.hasPermission ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.hasPermission && ctx.scannerEnabled ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.scanResult ? 11 : -1);
      }
    }, dependencies: [CommonModule, RouterLink, ZXingScannerModule, ZXingScannerComponent], styles: ['@charset "UTF-8";\n\n\n\n.qr-scanner[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 100%;\n  position: relative;\n}\n@media (max-width: 640px) {\n  .qr-scanner[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  position: relative;\n  padding-right: 100px;\n}\n.page-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n@media (max-width: 640px) {\n  .page-header[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n    flex-wrap: wrap;\n    gap: 0.75rem;\n    padding-right: 0;\n  }\n  .page-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n    position: static;\n    transform: none;\n  }\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--color-text);\n  margin: 0;\n}\n@media (max-width: 640px) {\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n.back-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: var(--radius);\n  background: var(--color-bg-card);\n  color: var(--color-text);\n  text-decoration: none;\n  font-size: 0.9375rem;\n  font-weight: 500;\n  transition: background 0.2s, filter 0.2s;\n  border: 1px solid var(--color-border);\n}\n.back-button[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.95);\n}\n@media (max-width: 640px) {\n  .back-button[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n    font-size: 0.875rem;\n  }\n}\n.back-button__icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.permission-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 32px;\n  max-width: 450px;\n  margin: 0 auto;\n}\n@media (max-width: 640px) {\n  .permission-card[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n    max-width: 100%;\n  }\n}\n.permission-icon[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  margin-bottom: 24px;\n  display: inline-block;\n  animation: _ngcontent-%COMP%_pulse-icon 2s ease-in-out infinite;\n}\n@media (max-width: 640px) {\n  .permission-icon[_ngcontent-%COMP%] {\n    font-size: 4rem;\n    margin-bottom: 20px;\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse-icon {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n}\n.permission-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0 0 12px 0;\n}\n@media (max-width: 640px) {\n  .permission-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n.permission-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  margin: 0 0 32px 0;\n  font-size: 1rem;\n  line-height: 1.6;\n}\n@media (max-width: 640px) {\n  .permission-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.9375rem;\n    margin-bottom: 24px;\n  }\n}\n.permission-hint[_ngcontent-%COMP%] {\n  color: var(--color-error, #c53030) !important;\n  margin-bottom: 12px !important;\n}\n.permission-tip[_ngcontent-%COMP%] {\n  font-size: 0.875rem !important;\n  color: var(--color-text-muted) !important;\n  margin-bottom: 24px !important;\n  opacity: 0.9;\n}\n.scanner-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n@media (max-width: 768px) {\n  .scanner-container[_ngcontent-%COMP%] {\n    gap: 24px;\n  }\n}\n.scanner-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 600px;\n  margin: 0 auto;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  background: #000;\n  aspect-ratio: 1;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n}\n@media (max-width: 640px) {\n  .scanner-wrapper[_ngcontent-%COMP%] {\n    max-width: 100%;\n    border-radius: var(--radius);\n  }\n}\n.scanner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n  object-fit: cover;\n}\n.scanner-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n  padding: 20px;\n}\n.scanner-frame[_ngcontent-%COMP%] {\n  width: 70%;\n  max-width: 300px;\n  aspect-ratio: 1;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.scanner-frame[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border: 2px solid rgba(59, 130, 246, 0.8);\n  border-radius: 16px;\n  box-shadow:\n    0 0 0 9999px rgba(0, 0, 0, 0.6),\n    0 0 30px rgba(59, 130, 246, 0.4),\n    inset 0 0 30px rgba(59, 130, 246, 0.2);\n  animation: _ngcontent-%COMP%_pulse 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    box-shadow:\n      0 0 0 9999px rgba(0, 0, 0, 0.6),\n      0 0 30px rgba(59, 130, 246, 0.4),\n      inset 0 0 30px rgba(59, 130, 246, 0.2);\n  }\n  50% {\n    box-shadow:\n      0 0 0 9999px rgba(0, 0, 0, 0.6),\n      0 0 40px rgba(59, 130, 246, 0.6),\n      inset 0 0 40px rgba(59, 130, 246, 0.3);\n  }\n}\n.scanner-frame__corners[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.corner[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  border: 3px solid #3b82f6;\n}\n.corner--top-left[_ngcontent-%COMP%] {\n  top: -3px;\n  left: -3px;\n  border-right: none;\n  border-bottom: none;\n  border-top-left-radius: 12px;\n}\n.corner--top-right[_ngcontent-%COMP%] {\n  top: -3px;\n  right: -3px;\n  border-left: none;\n  border-bottom: none;\n  border-top-right-radius: 12px;\n}\n.corner--bottom-left[_ngcontent-%COMP%] {\n  bottom: -3px;\n  left: -3px;\n  border-right: none;\n  border-top: none;\n  border-bottom-left-radius: 12px;\n}\n.corner--bottom-right[_ngcontent-%COMP%] {\n  bottom: -3px;\n  right: -3px;\n  border-left: none;\n  border-top: none;\n  border-bottom-right-radius: 12px;\n}\n.scanner-instruction[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  color: #fff;\n  font-size: 1rem;\n  font-weight: 500;\n  text-align: center;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(0, 0, 0, 0.5);\n  padding: 12px 20px;\n  border-radius: 24px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n@media (max-width: 640px) {\n  .scanner-instruction[_ngcontent-%COMP%] {\n    font-size: 0.9375rem;\n    margin-top: 24px;\n    padding: 10px 16px;\n  }\n}\n.scanner-instruction__icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  animation: _ngcontent-%COMP%_bounce 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_bounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n}\n.scanner-controls[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n  width: 100%;\n}\n.scanner-controls__row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: flex-end;\n}\n@media (max-width: 640px) {\n  .scanner-controls__row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n.control-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n}\n@media (max-width: 640px) {\n  .control-group[_ngcontent-%COMP%] {\n    flex: none;\n  }\n}\n.control-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--color-text);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.control-label__icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  background: var(--color-bg-card);\n  color: var(--color-text);\n  font-size: 0.9375rem;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-primary);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);\n}\n.scan-result[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 32px auto 0;\n}\n@media (max-width: 640px) {\n  .scan-result[_ngcontent-%COMP%] {\n    margin-top: 24px;\n  }\n}\n.scan-result__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  gap: 16px;\n}\n@media (max-width: 640px) {\n  .scan-result__header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 12px;\n  }\n}\n.scan-result__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.scan-result__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]::before {\n  content: "\\2713";\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  background: #10b981;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 1.25rem;\n  font-weight: 700;\n}\n@media (max-width: 640px) {\n  .scan-result__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .scan-result__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]::before {\n    width: 28px;\n    height: 28px;\n    font-size: 1.125rem;\n  }\n}\n.scan-result__content[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: var(--color-bg-card);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n}\n@media (max-width: 640px) {\n  .scan-result__content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n.scan-result__code[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-size: 0.9375rem;\n  color: var(--color-text);\n  word-break: break-all;\n  margin: 0 0 16px 0;\n  padding: 16px;\n  background: var(--color-bg);\n  border-radius: var(--radius);\n  border: 1px solid var(--color-border);\n  line-height: 1.6;\n}\n@media (max-width: 640px) {\n  .scan-result__code[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    padding: 12px;\n  }\n}\n.scan-result__success[_ngcontent-%COMP%] {\n  color: #10b981;\n  font-size: 0.9375rem;\n  margin: 0;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.scan-result__success[_ngcontent-%COMP%]::before {\n  content: "\\23f3";\n  font-size: 1.125rem;\n}\n.scan-result__error[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.9375rem;\n  margin: 0;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.scan-result__error[_ngcontent-%COMP%]::before {\n  content: "\\26a0\\fe0f";\n  font-size: 1.125rem;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 20px;\n  border: none;\n  border-radius: var(--radius);\n  font-size: 0.9375rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-decoration: none;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: #fff;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n}\n.btn--secondary[_ngcontent-%COMP%] {\n  background: var(--color-bg-card);\n  color: var(--color-text);\n  border: 1px solid var(--color-border);\n}\n.btn--secondary[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.95);\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 0.875rem;\n}\n.btn--icon[_ngcontent-%COMP%] {\n  gap: 8px;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n@media (max-width: 640px) {\n  .card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=qr-scanner.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QrScannerComponent, [{
    type: Component,
    args: [{ selector: "app-qr-scanner", standalone: true, imports: [CommonModule, RouterLink, ZXingScannerModule], template: `<div class="qr-scanner">\r
  <div class="page-header">\r
    <h1 class="page-title">QR Code Scanner</h1>\r
    <a routerLink="../dashboard" class="back-button">\r
      <span class="back-button__icon">\u2190</span>\r
      <span class="back-button__text">Back</span>\r
    </a>\r
  </div>\r
\r
  @if (!hasPermission) {\r
    <div class="permission-card card">\r
      <div class="permission-icon">\u{1F4F7}</div>\r
      <h2>Camera Permission Required</h2>\r
      <p>Please allow camera access to scan QR codes.</p>\r
      @if (scanError) {\r
        <p class="permission-hint">{{ scanError }}</p>\r
      }\r
      <p class="permission-tip">Tip: If your built-in webcam is not detected, try Chrome settings (chrome://settings/content/camera) to select it, or close other apps using the camera.</p>\r
      <button type="button" class="btn btn--primary" (click)="retryPermission()">\r
        Try Again\r
      </button>\r
    </div>\r
  }\r
\r
  @if (hasPermission && scannerEnabled) {\r
    <div class="scanner-container">\r
      <div class="scanner-wrapper">\r
        <zxing-scanner\r
          [enable]="scannerEnabled"\r
          [device]="selectedDevice"\r
          [formats]="allowedFormats"\r
          [torch]="torchEnabled"\r
          (torchCompatible)="onTorchCompatible($event)"\r
          (camerasFound)="onCamerasFound($event)"\r
          (scanSuccess)="onScanSuccess($event)"\r
          (scanError)="onScanError($event)"\r
          class="scanner"\r
        ></zxing-scanner>\r
        \r
        <div class="scanner-overlay">\r
          <div class="scanner-frame">\r
            <div class="scanner-frame__corners">\r
              <div class="corner corner--top-left"></div>\r
              <div class="corner corner--top-right"></div>\r
              <div class="corner corner--bottom-left"></div>\r
              <div class="corner corner--bottom-right"></div>\r
            </div>\r
          </div>\r
          <p class="scanner-instruction">\r
            <span class="scanner-instruction__icon">\u{1F4F1}</span>\r
            Position QR code within the frame\r
          </p>\r
        </div>\r
      </div>\r
\r
      <div class="scanner-controls">\r
        <div class="scanner-controls__row">\r
          @if (availableDevices.length > 0) {\r
            <div class="control-group">\r
              <label for="camera-select">\r
                <span class="control-label__icon">\u{1F4F7}</span>\r
                Camera\r
              </label>\r
              <select \r
                id="camera-select" \r
                class="form-control"\r
                [value]="selectedDevice?.deviceId || ''"\r
                (change)="onDeviceSelectChange($any($event.target).value)"\r
              >\r
                @for (device of availableDevices; track device.deviceId) {\r
                  <option [value]="device.deviceId">{{ device.label || 'Camera ' + ($index + 1) }}</option>\r
                }\r
              </select>\r
            </div>\r
          }\r
\r
          @if (torchAvailable) {\r
            <button \r
              type="button" \r
              class="btn btn--secondary btn--icon"\r
              (click)="toggleTorch()"\r
            >\r
              <span class="btn-icon">{{ torchEnabled ? '\u{1F526}' : '\u{1F4A1}' }}</span>\r
              <span>{{ torchEnabled ? 'Turn Off Flash' : 'Turn On Flash' }}</span>\r
            </button>\r
          }\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  @if (scanResult) {\r
    <div class="scan-result card">\r
      <div class="scan-result__header">\r
        <h3>QR Code Scanned!</h3>\r
        <button \r
          type="button" \r
          class="btn btn--sm btn--secondary"\r
          (click)="resetScanner()"\r
        >\r
          Scan Another\r
        </button>\r
      </div>\r
      <div class="scan-result__content">\r
        <p class="scan-result__code">{{ scanResult }}</p>\r
        @if (scanResultUrl) {\r
          <p class="scan-result__success">\r
            This looks like a link:\r
            <a\r
              [href]="scanResultUrl"\r
              target="_blank"\r
              rel="noopener noreferrer"\r
            >\r
              {{ scanResultUrl }}\r
            </a>\r
          </p>\r
          <a\r
            class="btn btn--primary btn--sm"\r
            [href]="scanResultUrl"\r
            target="_blank"\r
            rel="noopener noreferrer"\r
          >\r
            Open link in new tab\r
          </a>\r
        } @else if (scanError) {\r
          <p class="scan-result__error">{{ scanError }}</p>\r
        } @else {\r
          <p class="scan-result__success">Processing...</p>\r
        }\r
      </div>\r
    </div>\r
  }\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/qr-scanner/qr-scanner.component.scss */\n.qr-scanner {\n  padding: 24px;\n  max-width: 100%;\n  position: relative;\n}\n@media (max-width: 640px) {\n  .qr-scanner {\n    padding: 16px;\n  }\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  position: relative;\n  padding-right: 100px;\n}\n.page-header .back-button {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n@media (max-width: 640px) {\n  .page-header {\n    margin-bottom: 16px;\n    flex-wrap: wrap;\n    gap: 0.75rem;\n    padding-right: 0;\n  }\n  .page-header .back-button {\n    position: static;\n    transform: none;\n  }\n}\n.page-title {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--color-text);\n  margin: 0;\n}\n@media (max-width: 640px) {\n  .page-title {\n    font-size: 1.5rem;\n  }\n}\n.back-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: var(--radius);\n  background: var(--color-bg-card);\n  color: var(--color-text);\n  text-decoration: none;\n  font-size: 0.9375rem;\n  font-weight: 500;\n  transition: background 0.2s, filter 0.2s;\n  border: 1px solid var(--color-border);\n}\n.back-button:hover {\n  filter: brightness(0.95);\n}\n@media (max-width: 640px) {\n  .back-button {\n    padding: 6px 12px;\n    font-size: 0.875rem;\n  }\n}\n.back-button__icon {\n  font-size: 1.125rem;\n}\n.permission-card {\n  text-align: center;\n  padding: 48px 32px;\n  max-width: 450px;\n  margin: 0 auto;\n}\n@media (max-width: 640px) {\n  .permission-card {\n    padding: 32px 24px;\n    max-width: 100%;\n  }\n}\n.permission-icon {\n  font-size: 5rem;\n  margin-bottom: 24px;\n  display: inline-block;\n  animation: pulse-icon 2s ease-in-out infinite;\n}\n@media (max-width: 640px) {\n  .permission-icon {\n    font-size: 4rem;\n    margin-bottom: 20px;\n  }\n}\n@keyframes pulse-icon {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n}\n.permission-card h2 {\n  font-size: 1.75rem;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0 0 12px 0;\n}\n@media (max-width: 640px) {\n  .permission-card h2 {\n    font-size: 1.5rem;\n  }\n}\n.permission-card p {\n  color: var(--color-text-muted);\n  margin: 0 0 32px 0;\n  font-size: 1rem;\n  line-height: 1.6;\n}\n@media (max-width: 640px) {\n  .permission-card p {\n    font-size: 0.9375rem;\n    margin-bottom: 24px;\n  }\n}\n.permission-hint {\n  color: var(--color-error, #c53030) !important;\n  margin-bottom: 12px !important;\n}\n.permission-tip {\n  font-size: 0.875rem !important;\n  color: var(--color-text-muted) !important;\n  margin-bottom: 24px !important;\n  opacity: 0.9;\n}\n.scanner-container {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n@media (max-width: 768px) {\n  .scanner-container {\n    gap: 24px;\n  }\n}\n.scanner-wrapper {\n  position: relative;\n  width: 100%;\n  max-width: 600px;\n  margin: 0 auto;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  background: #000;\n  aspect-ratio: 1;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n}\n@media (max-width: 640px) {\n  .scanner-wrapper {\n    max-width: 100%;\n    border-radius: var(--radius);\n  }\n}\n.scanner {\n  width: 100%;\n  height: 100%;\n  display: block;\n  object-fit: cover;\n}\n.scanner-overlay {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n  padding: 20px;\n}\n.scanner-frame {\n  width: 70%;\n  max-width: 300px;\n  aspect-ratio: 1;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.scanner-frame::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border: 2px solid rgba(59, 130, 246, 0.8);\n  border-radius: 16px;\n  box-shadow:\n    0 0 0 9999px rgba(0, 0, 0, 0.6),\n    0 0 30px rgba(59, 130, 246, 0.4),\n    inset 0 0 30px rgba(59, 130, 246, 0.2);\n  animation: pulse 2s ease-in-out infinite;\n}\n@keyframes pulse {\n  0%, 100% {\n    box-shadow:\n      0 0 0 9999px rgba(0, 0, 0, 0.6),\n      0 0 30px rgba(59, 130, 246, 0.4),\n      inset 0 0 30px rgba(59, 130, 246, 0.2);\n  }\n  50% {\n    box-shadow:\n      0 0 0 9999px rgba(0, 0, 0, 0.6),\n      0 0 40px rgba(59, 130, 246, 0.6),\n      inset 0 0 40px rgba(59, 130, 246, 0.3);\n  }\n}\n.scanner-frame__corners {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.corner {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  border: 3px solid #3b82f6;\n}\n.corner--top-left {\n  top: -3px;\n  left: -3px;\n  border-right: none;\n  border-bottom: none;\n  border-top-left-radius: 12px;\n}\n.corner--top-right {\n  top: -3px;\n  right: -3px;\n  border-left: none;\n  border-bottom: none;\n  border-top-right-radius: 12px;\n}\n.corner--bottom-left {\n  bottom: -3px;\n  left: -3px;\n  border-right: none;\n  border-top: none;\n  border-bottom-left-radius: 12px;\n}\n.corner--bottom-right {\n  bottom: -3px;\n  right: -3px;\n  border-left: none;\n  border-top: none;\n  border-bottom-right-radius: 12px;\n}\n.scanner-instruction {\n  margin-top: 32px;\n  color: #fff;\n  font-size: 1rem;\n  font-weight: 500;\n  text-align: center;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(0, 0, 0, 0.5);\n  padding: 12px 20px;\n  border-radius: 24px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n@media (max-width: 640px) {\n  .scanner-instruction {\n    font-size: 0.9375rem;\n    margin-top: 24px;\n    padding: 10px 16px;\n  }\n}\n.scanner-instruction__icon {\n  font-size: 1.25rem;\n  animation: bounce 2s ease-in-out infinite;\n}\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n}\n.scanner-controls {\n  max-width: 600px;\n  margin: 0 auto;\n  width: 100%;\n}\n.scanner-controls__row {\n  display: flex;\n  gap: 16px;\n  align-items: flex-end;\n}\n@media (max-width: 640px) {\n  .scanner-controls__row {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n.control-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n}\n@media (max-width: 640px) {\n  .control-group {\n    flex: none;\n  }\n}\n.control-group label {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--color-text);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.control-label__icon {\n  font-size: 1rem;\n}\n.form-control {\n  padding: 10px 14px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  background: var(--color-bg-card);\n  color: var(--color-text);\n  font-size: 0.9375rem;\n}\n.form-control:focus {\n  outline: none;\n  border-color: var(--color-primary);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);\n}\n.scan-result {\n  max-width: 600px;\n  margin: 32px auto 0;\n}\n@media (max-width: 640px) {\n  .scan-result {\n    margin-top: 24px;\n  }\n}\n.scan-result__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  gap: 16px;\n}\n@media (max-width: 640px) {\n  .scan-result__header {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 12px;\n  }\n}\n.scan-result__header h3 {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.scan-result__header h3::before {\n  content: "\\2713";\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  background: #10b981;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 1.25rem;\n  font-weight: 700;\n}\n@media (max-width: 640px) {\n  .scan-result__header h3 {\n    font-size: 1.25rem;\n  }\n  .scan-result__header h3::before {\n    width: 28px;\n    height: 28px;\n    font-size: 1.125rem;\n  }\n}\n.scan-result__content {\n  padding: 20px;\n  background: var(--color-bg-card);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n}\n@media (max-width: 640px) {\n  .scan-result__content {\n    padding: 16px;\n  }\n}\n.scan-result__code {\n  font-family: "Courier New", monospace;\n  font-size: 0.9375rem;\n  color: var(--color-text);\n  word-break: break-all;\n  margin: 0 0 16px 0;\n  padding: 16px;\n  background: var(--color-bg);\n  border-radius: var(--radius);\n  border: 1px solid var(--color-border);\n  line-height: 1.6;\n}\n@media (max-width: 640px) {\n  .scan-result__code {\n    font-size: 0.875rem;\n    padding: 12px;\n  }\n}\n.scan-result__success {\n  color: #10b981;\n  font-size: 0.9375rem;\n  margin: 0;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.scan-result__success::before {\n  content: "\\23f3";\n  font-size: 1.125rem;\n}\n.scan-result__error {\n  color: #ef4444;\n  font-size: 0.9375rem;\n  margin: 0;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.scan-result__error::before {\n  content: "\\26a0\\fe0f";\n  font-size: 1.125rem;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 20px;\n  border: none;\n  border-radius: var(--radius);\n  font-size: 0.9375rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-decoration: none;\n}\n.btn--primary {\n  background: #3b82f6;\n  color: #fff;\n}\n.btn--primary:hover {\n  background: #2563eb;\n}\n.btn--secondary {\n  background: var(--color-bg-card);\n  color: var(--color-text);\n  border: 1px solid var(--color-border);\n}\n.btn--secondary:hover {\n  filter: brightness(0.95);\n}\n.btn--sm {\n  padding: 6px 12px;\n  font-size: 0.875rem;\n}\n.btn--icon {\n  gap: 8px;\n}\n.btn-icon {\n  font-size: 1.125rem;\n  line-height: 1;\n}\n.card {\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n@media (max-width: 640px) {\n  .card {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=qr-scanner.component.css.map */\n'] }]
  }], () => [{ type: Router }, { type: DataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QrScannerComponent, { className: "QrScannerComponent", filePath: "src/app/pages/qr-scanner/qr-scanner.component.ts", lineNumber: 15 });
})();
export {
  QrScannerComponent
};
//# sourceMappingURL=chunk-TVXV7ZN4.js.map
