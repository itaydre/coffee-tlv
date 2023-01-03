["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/html/trustedtypes.js"],"~:js","goog.provide(\"goog.html.trustedtypes\");\ngoog.html.trustedtypes.cachedPolicy_;\ngoog.html.trustedtypes.getPolicyPrivateDoNotAccessOrElse = function() {\n  if (!goog.TRUSTED_TYPES_POLICY_NAME) {\n    return null;\n  }\n  if (goog.html.trustedtypes.cachedPolicy_ === undefined) {\n    goog.html.trustedtypes.cachedPolicy_ = goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + \"#html\");\n  }\n  return goog.html.trustedtypes.cachedPolicy_;\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Policy to convert strings to Trusted Types. See\n * https://github.com/WICG/trusted-types for details.\n */\n\ngoog.provide('goog.html.trustedtypes');\n\n\n/**\n * Cached result of goog.createTrustedTypesPolicy.\n * @type {?TrustedTypePolicy|undefined}\n * @private\n */\ngoog.html.trustedtypes.cachedPolicy_;\n\n\n/**\n * Creates a (singleton) Trusted Type Policy for Safe HTML Types.\n * @return {?TrustedTypePolicy}\n * @package\n */\ngoog.html.trustedtypes.getPolicyPrivateDoNotAccessOrElse = function() {\n  'use strict';\n  if (!goog.TRUSTED_TYPES_POLICY_NAME) {\n    // Binary not configured for Trusted Types.\n    return null;\n  }\n\n  if (goog.html.trustedtypes.cachedPolicy_ === undefined) {\n    goog.html.trustedtypes.cachedPolicy_ =\n        goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + '#html');\n  }\n\n  return goog.html.trustedtypes.cachedPolicy_;\n};\n","~:compiled-at",1672153495201,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.html.trustedtypes.js\",\n\"lineCount\":12,\n\"mappings\":\"AAWAA,IAAKC,CAAAA,OAAL,CAAa,wBAAb,CAAA;AAQAD,IAAKE,CAAAA,IAAKC,CAAAA,YAAaC,CAAAA,aAAvB;AAQAJ,IAAKE,CAAAA,IAAKC,CAAAA,YAAaE,CAAAA,iCAAvB,GAA2DC,QAAQ,EAAG;AAEpE,MAAI,CAACN,IAAKO,CAAAA,yBAAV;AAEE,WAAO,IAAP;AAFF;AAKA,MAAIP,IAAKE,CAAAA,IAAKC,CAAAA,YAAaC,CAAAA,aAA3B,KAA6CI,SAA7C;AACER,QAAKE,CAAAA,IAAKC,CAAAA,YAAaC,CAAAA,aAAvB,GACIJ,IAAKS,CAAAA,wBAAL,CAA8BT,IAAKO,CAAAA,yBAAnC,GAA+D,OAA/D,CADJ;AADF;AAKA,SAAOP,IAAKE,CAAAA,IAAKC,CAAAA,YAAaC,CAAAA,aAA9B;AAZoE,CAAtE;;\",\n\"sources\":[\"goog/html/trustedtypes.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Policy to convert strings to Trusted Types. See\\n * https://github.com/WICG/trusted-types for details.\\n */\\n\\ngoog.provide('goog.html.trustedtypes');\\n\\n\\n/**\\n * Cached result of goog.createTrustedTypesPolicy.\\n * @type {?TrustedTypePolicy|undefined}\\n * @private\\n */\\ngoog.html.trustedtypes.cachedPolicy_;\\n\\n\\n/**\\n * Creates a (singleton) Trusted Type Policy for Safe HTML Types.\\n * @return {?TrustedTypePolicy}\\n * @package\\n */\\ngoog.html.trustedtypes.getPolicyPrivateDoNotAccessOrElse = function() {\\n  'use strict';\\n  if (!goog.TRUSTED_TYPES_POLICY_NAME) {\\n    // Binary not configured for Trusted Types.\\n    return null;\\n  }\\n\\n  if (goog.html.trustedtypes.cachedPolicy_ === undefined) {\\n    goog.html.trustedtypes.cachedPolicy_ =\\n        goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + '#html');\\n  }\\n\\n  return goog.html.trustedtypes.cachedPolicy_;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"html\",\"trustedtypes\",\"cachedPolicy_\",\"getPolicyPrivateDoNotAccessOrElse\",\"goog.html.trustedtypes.getPolicyPrivateDoNotAccessOrElse\",\"TRUSTED_TYPES_POLICY_NAME\",\"undefined\",\"createTrustedTypesPolicy\"]\n}\n"]