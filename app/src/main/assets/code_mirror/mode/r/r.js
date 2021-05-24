'use strict';(function(d){"object"==typeof exports&&"object"==typeof module?d(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],d):d(CodeMirror)})(function(d){d.registerHelper("wordChars","r",/[\w.]/);d.defineMode("r",function(d){function f(b){b=b.split(" ");for(var a={},c=0;c<b.length;++c)a[b[c]]=!0;return a}function h(b,a){e=null;var c=b.next();if("#"==c)return b.skipToEnd(),"comment";if("0"==c&&b.eat("x"))return b.eatWhile(/[\da-f]/i),"number";
if("."==c&&b.eat(/\d/))return b.match(/\d*(?:e[+\-]?\d+)?/),"number";if(/\d/.test(c))return b.match(/\d*(?:\.\d+)?(?:e[+\-]\d+)?L?/),"number";if("'"==c||'"'==c)return a.tokenize=l(c),"string";if("."==c&&b.match(/.[.\d]+/))return"keyword";if(/[\w\.]/.test(c)&&"_"!=c)return b.eatWhile(/[\w\.]/),a=b.current(),m.propertyIsEnumerable(a)?"atom":n.propertyIsEnumerable(a)?(p.propertyIsEnumerable(a)&&!b.match(/\s*if(\s+|$)/,!1)&&(e="block"),"keyword"):q.propertyIsEnumerable(a)?"builtin":"variable";if("%"==
c)return b.skipTo("%")&&b.next(),"variable-2";if("<"==c&&b.eat("-"))return"arrow";if("="==c&&a.ctx.argList)return"arg-is";if(k.test(c)){if("$"==c)return"dollar";b.eatWhile(k);return"operator"}return/[\(\){}\[\];]/.test(c)?(e=c,";"==c?"semi":null):null}function l(b){return function(a,c){if(a.eat("\\"))return c=a.next(),"x"==c?a.match(/^[a-f0-9]{2}/i):("u"==c||"U"==c)&&a.eat("{")&&a.skipTo("}")?a.next():"u"==c?a.match(/^[a-f0-9]{4}/i):"U"==c?a.match(/^[a-f0-9]{8}/i):/[0-7]/.test(c)&&a.match(/^[0-7]{1,2}/),
"string-2";for(var d;null!=(d=a.next());){if(d==b){c.tokenize=h;break}if("\\"==d){a.backUp(1);break}}return"string"}}function g(b,a,c){b.ctx={type:a,indent:b.indent,align:null,column:c.column(),prev:b.ctx}}var m=f("NULL NA Inf NaN NA_integer_ NA_real_ NA_complex_ NA_character_"),q=f("list quote bquote eval return call parse deparse"),n=f("if else repeat while function for in next break"),p=f("if else repeat while function for"),k=/[+\-*\/^<>=!&|~$:]/,e;return{startState:function(){return{tokenize:h,
ctx:{type:"top",indent:-d.indentUnit,align:!1},indent:0,afterIdent:!1}},token:function(b,a){b.sol()&&(null==a.ctx.align&&(a.ctx.align=!1),a.indent=b.indentation());if(b.eatSpace())return null;var c=a.tokenize(b,a);"comment"!=c&&null==a.ctx.align&&(a.ctx.align=!0);var d=a.ctx.type;";"!=e&&"{"!=e&&"}"!=e||"block"!=d||(a.indent=a.ctx.indent,a.ctx=a.ctx.prev);"{"==e?g(a,"}",b):"("==e?(g(a,")",b),a.afterIdent&&(a.ctx.argList=!0)):"["==e?g(a,"]",b):"block"==e?g(a,"block",b):e==d&&(a.indent=a.ctx.indent,
a.ctx=a.ctx.prev);a.afterIdent="variable"==c||"keyword"==c;return c},indent:function(b,a){if(b.tokenize!=h)return 0;a=a&&a.charAt(0);b=b.ctx;var c=a==b.type;return"block"==b.type?b.indent+("{"==a?0:d.indentUnit):b.align?b.column+(c?0:1):b.indent+(c?0:d.indentUnit)},lineComment:"#"}});d.defineMIME("text/x-rsrc","r")});
