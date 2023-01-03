["^ ","~:resource-id",["~:shadow.build.classpath/resource","com/cognitect/transit/impl/reader.js"],"~:js","goog.provide(\"com.cognitect.transit.impl.reader\");\ngoog.require(\"com.cognitect.transit.impl.decoder\");\ngoog.require(\"com.cognitect.transit.caching\");\ngoog.scope(function() {\n  var reader = com.cognitect.transit.impl.reader, decoder = com.cognitect.transit.impl.decoder, caching = com.cognitect.transit.caching;\n  reader.JSONUnmarshaller = function Transit$JSONUnmarshaller(opts) {\n    this.decoder = new decoder.Decoder(opts);\n  };\n  reader.JSONUnmarshaller.prototype.unmarshal = function(str, cache) {\n    return this.decoder.decode(JSON.parse(str), cache);\n  };\n  reader.Reader = function Transit$Reader(unmarshaller, options) {\n    this.unmarshaller = unmarshaller;\n    this.options = options || {};\n    this.cache = this.options[\"cache\"] ? this.options[\"cache\"] : new caching.ReadCache();\n  };\n  reader.Reader.prototype.read = function(str) {\n    var ret = this.unmarshaller.unmarshal(str, this.cache);\n    this.cache.clear();\n    return ret;\n  };\n  reader.Reader.prototype[\"read\"] = reader.Reader.prototype.read;\n});\n","~:source","// Copyright 2014 Cognitect. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\ngoog.provide(\"com.cognitect.transit.impl.reader\");\ngoog.require(\"com.cognitect.transit.impl.decoder\");\ngoog.require(\"com.cognitect.transit.caching\");\n\ngoog.scope(function () {\n\n    var reader  = com.cognitect.transit.impl.reader,\n        decoder = com.cognitect.transit.impl.decoder,\n        caching = com.cognitect.transit.caching;\n\n    /**\n     * A JSON unmarshaller\n     * @constructor\n     */\n    reader.JSONUnmarshaller = function Transit$JSONUnmarshaller(opts) {\n        this.decoder = new decoder.Decoder(opts);\n    };\n\n    /**\n     * @param {string} str a JSON string\n     * @param {caching.ReadCache} cache a read cache\n     * @returns {*}\n     */\n    reader.JSONUnmarshaller.prototype.unmarshal = function (str, cache) {\n        return this.decoder.decode(JSON.parse(str), cache);\n    };\n\n    /**\n     * A transit reader\n     * @constructor\n     * @param {reader.JSONUnmarshaller} unmarshaller\n     * @param {Object=} options\n     */\n    reader.Reader = function Transit$Reader(unmarshaller, options) {\n        this.unmarshaller = unmarshaller;\n        this.options = options || {};\n        this.cache = this.options[\"cache\"] ? this.options[\"cache\"] : new caching.ReadCache();\n    };\n\n    /**\n     * @param {string} str a string to be read\n     * @returns {*}\n     */\n    reader.Reader.prototype.read = function (str) {\n        var ret = this.unmarshaller.unmarshal(str, this.cache)\n        this.cache.clear();\n        return ret;\n    };\n    reader.Reader.prototype[\"read\"] = reader.Reader.prototype.read;\n\n});\n","~:compiled-at",1672133943173,"~:source-map-json","{\n\"version\":3,\n\"file\":\"com.cognitect.transit.impl.reader.js\",\n\"lineCount\":24,\n\"mappings\":\"AAcAA,IAAKC,CAAAA,OAAL,CAAa,mCAAb,CAAA;AACAD,IAAKE,CAAAA,OAAL,CAAa,oCAAb,CAAA;AACAF,IAAKE,CAAAA,OAAL,CAAa,+BAAb,CAAA;AAEAF,IAAKG,CAAAA,KAAL,CAAW,QAAS,EAAG;AAEnB,MAAIC,SAAUC,GAAIC,CAAAA,SAAUC,CAAAA,OAAQC,CAAAA,IAAKJ,CAAAA,MAAzC,EACIK,UAAUJ,GAAIC,CAAAA,SAAUC,CAAAA,OAAQC,CAAAA,IAAKC,CAAAA,OADzC,EAEIC,UAAUL,GAAIC,CAAAA,SAAUC,CAAAA,OAAQG,CAAAA,OAFpC;AAQAN,QAAOO,CAAAA,gBAAP,GAA0BC,QAASC,yBAAwB,CAACC,IAAD,CAAO;AAC9D,QAAKL,CAAAA,OAAL,GAAe,IAAIA,OAAQM,CAAAA,OAAZ,CAAoBD,IAApB,CAAf;AAD8D,GAAlE;AASAV,QAAOO,CAAAA,gBAAiBK,CAAAA,SAAUC,CAAAA,SAAlC,GAA8CC,QAAS,CAACC,GAAD,EAAMC,KAAN,CAAa;AAChE,WAAO,IAAKX,CAAAA,OAAQY,CAAAA,MAAb,CAAoBC,IAAKC,CAAAA,KAAL,CAAWJ,GAAX,CAApB,EAAqCC,KAArC,CAAP;AADgE,GAApE;AAUAhB,QAAOoB,CAAAA,MAAP,GAAgBC,QAASC,eAAc,CAACC,YAAD,EAAeC,OAAf,CAAwB;AAC3D,QAAKD,CAAAA,YAAL,GAAoBA,YAApB;AACA,QAAKC,CAAAA,OAAL,GAAeA,OAAf,IAA0B,EAA1B;AACA,QAAKR,CAAAA,KAAL,GAAa,IAAKQ,CAAAA,OAAL,CAAa,OAAb,CAAA,GAAwB,IAAKA,CAAAA,OAAL,CAAa,OAAb,CAAxB,GAAgD,IAAIlB,OAAQmB,CAAAA,SAAZ,EAA7D;AAH2D,GAA/D;AAUAzB,QAAOoB,CAAAA,MAAOR,CAAAA,SAAUc,CAAAA,IAAxB,GAA+BC,QAAS,CAACZ,GAAD,CAAM;AAC1C,QAAIa,MAAM,IAAKL,CAAAA,YAAaV,CAAAA,SAAlB,CAA4BE,GAA5B,EAAiC,IAAKC,CAAAA,KAAtC,CAAV;AACA,QAAKA,CAAAA,KAAMa,CAAAA,KAAX,EAAA;AACA,WAAOD,GAAP;AAH0C,GAA9C;AAKA5B,QAAOoB,CAAAA,MAAOR,CAAAA,SAAd,CAAwB,MAAxB,CAAA,GAAkCZ,MAAOoB,CAAAA,MAAOR,CAAAA,SAAUc,CAAAA,IAA1D;AA5CmB,CAAvB,CAAA;;\",\n\"sources\":[\"com/cognitect/transit/impl/reader.js\"],\n\"sourcesContent\":[\"// Copyright 2014 Cognitect. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\ngoog.provide(\\\"com.cognitect.transit.impl.reader\\\");\\ngoog.require(\\\"com.cognitect.transit.impl.decoder\\\");\\ngoog.require(\\\"com.cognitect.transit.caching\\\");\\n\\ngoog.scope(function () {\\n\\n    var reader  = com.cognitect.transit.impl.reader,\\n        decoder = com.cognitect.transit.impl.decoder,\\n        caching = com.cognitect.transit.caching;\\n\\n    /**\\n     * A JSON unmarshaller\\n     * @constructor\\n     */\\n    reader.JSONUnmarshaller = function Transit$JSONUnmarshaller(opts) {\\n        this.decoder = new decoder.Decoder(opts);\\n    };\\n\\n    /**\\n     * @param {string} str a JSON string\\n     * @param {caching.ReadCache} cache a read cache\\n     * @returns {*}\\n     */\\n    reader.JSONUnmarshaller.prototype.unmarshal = function (str, cache) {\\n        return this.decoder.decode(JSON.parse(str), cache);\\n    };\\n\\n    /**\\n     * A transit reader\\n     * @constructor\\n     * @param {reader.JSONUnmarshaller} unmarshaller\\n     * @param {Object=} options\\n     */\\n    reader.Reader = function Transit$Reader(unmarshaller, options) {\\n        this.unmarshaller = unmarshaller;\\n        this.options = options || {};\\n        this.cache = this.options[\\\"cache\\\"] ? this.options[\\\"cache\\\"] : new caching.ReadCache();\\n    };\\n\\n    /**\\n     * @param {string} str a string to be read\\n     * @returns {*}\\n     */\\n    reader.Reader.prototype.read = function (str) {\\n        var ret = this.unmarshaller.unmarshal(str, this.cache)\\n        this.cache.clear();\\n        return ret;\\n    };\\n    reader.Reader.prototype[\\\"read\\\"] = reader.Reader.prototype.read;\\n\\n});\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"scope\",\"reader\",\"com\",\"cognitect\",\"transit\",\"impl\",\"decoder\",\"caching\",\"JSONUnmarshaller\",\"reader.JSONUnmarshaller\",\"Transit$JSONUnmarshaller\",\"opts\",\"Decoder\",\"prototype\",\"unmarshal\",\"reader.JSONUnmarshaller.prototype.unmarshal\",\"str\",\"cache\",\"decode\",\"JSON\",\"parse\",\"Reader\",\"reader.Reader\",\"Transit$Reader\",\"unmarshaller\",\"options\",\"ReadCache\",\"read\",\"reader.Reader.prototype.read\",\"ret\",\"clear\"]\n}\n"]