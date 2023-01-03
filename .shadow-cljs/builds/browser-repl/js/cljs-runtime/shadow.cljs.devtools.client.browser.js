goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22335 = arguments.length;
var i__5770__auto___22336 = (0);
while(true){
if((i__5770__auto___22336 < len__5769__auto___22335)){
args__5775__auto__.push((arguments[i__5770__auto___22336]));

var G__22337 = (i__5770__auto___22336 + (1));
i__5770__auto___22336 = G__22337;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22051){
var G__22052 = cljs.core.first(seq22051);
var seq22051__$1 = cljs.core.next(seq22051);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22052,seq22051__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22055 = cljs.core.seq(sources);
var chunk__22056 = null;
var count__22057 = (0);
var i__22058 = (0);
while(true){
if((i__22058 < count__22057)){
var map__22064 = chunk__22056.cljs$core$IIndexed$_nth$arity$2(null,i__22058);
var map__22064__$1 = cljs.core.__destructure_map(map__22064);
var src = map__22064__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22064__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22064__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22064__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22064__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22066){var e_22338 = e22066;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22338);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22338.message)].join('')));
}

var G__22339 = seq__22055;
var G__22340 = chunk__22056;
var G__22341 = count__22057;
var G__22342 = (i__22058 + (1));
seq__22055 = G__22339;
chunk__22056 = G__22340;
count__22057 = G__22341;
i__22058 = G__22342;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22055);
if(temp__5804__auto__){
var seq__22055__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22055__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22055__$1);
var G__22343 = cljs.core.chunk_rest(seq__22055__$1);
var G__22344 = c__5568__auto__;
var G__22345 = cljs.core.count(c__5568__auto__);
var G__22346 = (0);
seq__22055 = G__22343;
chunk__22056 = G__22344;
count__22057 = G__22345;
i__22058 = G__22346;
continue;
} else {
var map__22067 = cljs.core.first(seq__22055__$1);
var map__22067__$1 = cljs.core.__destructure_map(map__22067);
var src = map__22067__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22067__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22067__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22067__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22067__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22068){var e_22347 = e22068;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22347);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22347.message)].join('')));
}

var G__22348 = cljs.core.next(seq__22055__$1);
var G__22349 = null;
var G__22350 = (0);
var G__22351 = (0);
seq__22055 = G__22348;
chunk__22056 = G__22349;
count__22057 = G__22350;
i__22058 = G__22351;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__22069 = cljs.core.seq(js_requires);
var chunk__22070 = null;
var count__22071 = (0);
var i__22072 = (0);
while(true){
if((i__22072 < count__22071)){
var js_ns = chunk__22070.cljs$core$IIndexed$_nth$arity$2(null,i__22072);
var require_str_22352 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22352);


var G__22353 = seq__22069;
var G__22354 = chunk__22070;
var G__22355 = count__22071;
var G__22356 = (i__22072 + (1));
seq__22069 = G__22353;
chunk__22070 = G__22354;
count__22071 = G__22355;
i__22072 = G__22356;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22069);
if(temp__5804__auto__){
var seq__22069__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22069__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22069__$1);
var G__22357 = cljs.core.chunk_rest(seq__22069__$1);
var G__22358 = c__5568__auto__;
var G__22359 = cljs.core.count(c__5568__auto__);
var G__22360 = (0);
seq__22069 = G__22357;
chunk__22070 = G__22358;
count__22071 = G__22359;
i__22072 = G__22360;
continue;
} else {
var js_ns = cljs.core.first(seq__22069__$1);
var require_str_22361 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22361);


var G__22362 = cljs.core.next(seq__22069__$1);
var G__22363 = null;
var G__22364 = (0);
var G__22365 = (0);
seq__22069 = G__22362;
chunk__22070 = G__22363;
count__22071 = G__22364;
i__22072 = G__22365;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22074){
var map__22075 = p__22074;
var map__22075__$1 = cljs.core.__destructure_map(map__22075);
var msg = map__22075__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22075__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22075__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22076(s__22077){
return (new cljs.core.LazySeq(null,(function (){
var s__22077__$1 = s__22077;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22077__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__22082 = cljs.core.first(xs__6360__auto__);
var map__22082__$1 = cljs.core.__destructure_map(map__22082);
var src = map__22082__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22082__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22082__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__22077__$1,map__22082,map__22082__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22075,map__22075__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22076_$_iter__22078(s__22079){
return (new cljs.core.LazySeq(null,((function (s__22077__$1,map__22082,map__22082__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22075,map__22075__$1,msg,info,reload_info){
return (function (){
var s__22079__$1 = s__22079;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22079__$1);
if(temp__5804__auto____$1){
var s__22079__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22079__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__22079__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__22081 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__22080 = (0);
while(true){
if((i__22080 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__22080);
cljs.core.chunk_append(b__22081,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__22366 = (i__22080 + (1));
i__22080 = G__22366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22081),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22076_$_iter__22078(cljs.core.chunk_rest(s__22079__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22081),null);
}
} else {
var warning = cljs.core.first(s__22079__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22076_$_iter__22078(cljs.core.rest(s__22079__$2)));
}
} else {
return null;
}
break;
}
});})(s__22077__$1,map__22082,map__22082__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22075,map__22075__$1,msg,info,reload_info))
,null,null));
});})(s__22077__$1,map__22082,map__22082__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22075,map__22075__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22076(cljs.core.rest(s__22077__$1)));
} else {
var G__22367 = cljs.core.rest(s__22077__$1);
s__22077__$1 = G__22367;
continue;
}
} else {
var G__22368 = cljs.core.rest(s__22077__$1);
s__22077__$1 = G__22368;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__22083_22369 = cljs.core.seq(warnings);
var chunk__22084_22370 = null;
var count__22085_22371 = (0);
var i__22086_22372 = (0);
while(true){
if((i__22086_22372 < count__22085_22371)){
var map__22089_22373 = chunk__22084_22370.cljs$core$IIndexed$_nth$arity$2(null,i__22086_22372);
var map__22089_22374__$1 = cljs.core.__destructure_map(map__22089_22373);
var w_22375 = map__22089_22374__$1;
var msg_22376__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22089_22374__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22089_22374__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22089_22374__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22089_22374__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22379)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22377),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22378),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22376__$1)].join(''));


var G__22380 = seq__22083_22369;
var G__22381 = chunk__22084_22370;
var G__22382 = count__22085_22371;
var G__22383 = (i__22086_22372 + (1));
seq__22083_22369 = G__22380;
chunk__22084_22370 = G__22381;
count__22085_22371 = G__22382;
i__22086_22372 = G__22383;
continue;
} else {
var temp__5804__auto___22384 = cljs.core.seq(seq__22083_22369);
if(temp__5804__auto___22384){
var seq__22083_22385__$1 = temp__5804__auto___22384;
if(cljs.core.chunked_seq_QMARK_(seq__22083_22385__$1)){
var c__5568__auto___22386 = cljs.core.chunk_first(seq__22083_22385__$1);
var G__22387 = cljs.core.chunk_rest(seq__22083_22385__$1);
var G__22388 = c__5568__auto___22386;
var G__22389 = cljs.core.count(c__5568__auto___22386);
var G__22390 = (0);
seq__22083_22369 = G__22387;
chunk__22084_22370 = G__22388;
count__22085_22371 = G__22389;
i__22086_22372 = G__22390;
continue;
} else {
var map__22090_22391 = cljs.core.first(seq__22083_22385__$1);
var map__22090_22392__$1 = cljs.core.__destructure_map(map__22090_22391);
var w_22393 = map__22090_22392__$1;
var msg_22394__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22090_22392__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22090_22392__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22090_22392__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22090_22392__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22397)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22395),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22396),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22394__$1)].join(''));


var G__22398 = cljs.core.next(seq__22083_22385__$1);
var G__22399 = null;
var G__22400 = (0);
var G__22401 = (0);
seq__22083_22369 = G__22398;
chunk__22084_22370 = G__22399;
count__22085_22371 = G__22400;
i__22086_22372 = G__22401;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22073_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22073_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22091){
var map__22092 = p__22091;
var map__22092__$1 = cljs.core.__destructure_map(map__22092);
var msg = map__22092__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22092__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22092__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22093 = cljs.core.seq(updates);
var chunk__22095 = null;
var count__22096 = (0);
var i__22097 = (0);
while(true){
if((i__22097 < count__22096)){
var path = chunk__22095.cljs$core$IIndexed$_nth$arity$2(null,i__22097);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22207_22402 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22211_22403 = null;
var count__22212_22404 = (0);
var i__22213_22405 = (0);
while(true){
if((i__22213_22405 < count__22212_22404)){
var node_22406 = chunk__22211_22403.cljs$core$IIndexed$_nth$arity$2(null,i__22213_22405);
if(cljs.core.not(node_22406.shadow$old)){
var path_match_22407 = shadow.cljs.devtools.client.browser.match_paths(node_22406.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22407)){
var new_link_22408 = (function (){var G__22239 = node_22406.cloneNode(true);
G__22239.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22407),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22239;
})();
(node_22406.shadow$old = true);

(new_link_22408.onload = ((function (seq__22207_22402,chunk__22211_22403,count__22212_22404,i__22213_22405,seq__22093,chunk__22095,count__22096,i__22097,new_link_22408,path_match_22407,node_22406,path,map__22092,map__22092__$1,msg,updates,reload_info){
return (function (e){
var seq__22240_22409 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22242_22410 = null;
var count__22243_22411 = (0);
var i__22244_22412 = (0);
while(true){
if((i__22244_22412 < count__22243_22411)){
var map__22248_22413 = chunk__22242_22410.cljs$core$IIndexed$_nth$arity$2(null,i__22244_22412);
var map__22248_22414__$1 = cljs.core.__destructure_map(map__22248_22413);
var task_22415 = map__22248_22414__$1;
var fn_str_22416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22248_22414__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22248_22414__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22418 = goog.getObjectByName(fn_str_22416,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22417)].join(''));

(fn_obj_22418.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22418.cljs$core$IFn$_invoke$arity$2(path,new_link_22408) : fn_obj_22418.call(null,path,new_link_22408));


var G__22419 = seq__22240_22409;
var G__22420 = chunk__22242_22410;
var G__22421 = count__22243_22411;
var G__22422 = (i__22244_22412 + (1));
seq__22240_22409 = G__22419;
chunk__22242_22410 = G__22420;
count__22243_22411 = G__22421;
i__22244_22412 = G__22422;
continue;
} else {
var temp__5804__auto___22423 = cljs.core.seq(seq__22240_22409);
if(temp__5804__auto___22423){
var seq__22240_22424__$1 = temp__5804__auto___22423;
if(cljs.core.chunked_seq_QMARK_(seq__22240_22424__$1)){
var c__5568__auto___22425 = cljs.core.chunk_first(seq__22240_22424__$1);
var G__22426 = cljs.core.chunk_rest(seq__22240_22424__$1);
var G__22427 = c__5568__auto___22425;
var G__22428 = cljs.core.count(c__5568__auto___22425);
var G__22429 = (0);
seq__22240_22409 = G__22426;
chunk__22242_22410 = G__22427;
count__22243_22411 = G__22428;
i__22244_22412 = G__22429;
continue;
} else {
var map__22249_22430 = cljs.core.first(seq__22240_22424__$1);
var map__22249_22431__$1 = cljs.core.__destructure_map(map__22249_22430);
var task_22432 = map__22249_22431__$1;
var fn_str_22433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22249_22431__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22249_22431__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22435 = goog.getObjectByName(fn_str_22433,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22434)].join(''));

(fn_obj_22435.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22435.cljs$core$IFn$_invoke$arity$2(path,new_link_22408) : fn_obj_22435.call(null,path,new_link_22408));


var G__22436 = cljs.core.next(seq__22240_22424__$1);
var G__22437 = null;
var G__22438 = (0);
var G__22439 = (0);
seq__22240_22409 = G__22436;
chunk__22242_22410 = G__22437;
count__22243_22411 = G__22438;
i__22244_22412 = G__22439;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22406);
});})(seq__22207_22402,chunk__22211_22403,count__22212_22404,i__22213_22405,seq__22093,chunk__22095,count__22096,i__22097,new_link_22408,path_match_22407,node_22406,path,map__22092,map__22092__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22407], 0));

goog.dom.insertSiblingAfter(new_link_22408,node_22406);


var G__22440 = seq__22207_22402;
var G__22441 = chunk__22211_22403;
var G__22442 = count__22212_22404;
var G__22443 = (i__22213_22405 + (1));
seq__22207_22402 = G__22440;
chunk__22211_22403 = G__22441;
count__22212_22404 = G__22442;
i__22213_22405 = G__22443;
continue;
} else {
var G__22444 = seq__22207_22402;
var G__22445 = chunk__22211_22403;
var G__22446 = count__22212_22404;
var G__22447 = (i__22213_22405 + (1));
seq__22207_22402 = G__22444;
chunk__22211_22403 = G__22445;
count__22212_22404 = G__22446;
i__22213_22405 = G__22447;
continue;
}
} else {
var G__22448 = seq__22207_22402;
var G__22449 = chunk__22211_22403;
var G__22450 = count__22212_22404;
var G__22451 = (i__22213_22405 + (1));
seq__22207_22402 = G__22448;
chunk__22211_22403 = G__22449;
count__22212_22404 = G__22450;
i__22213_22405 = G__22451;
continue;
}
} else {
var temp__5804__auto___22452 = cljs.core.seq(seq__22207_22402);
if(temp__5804__auto___22452){
var seq__22207_22453__$1 = temp__5804__auto___22452;
if(cljs.core.chunked_seq_QMARK_(seq__22207_22453__$1)){
var c__5568__auto___22454 = cljs.core.chunk_first(seq__22207_22453__$1);
var G__22455 = cljs.core.chunk_rest(seq__22207_22453__$1);
var G__22456 = c__5568__auto___22454;
var G__22457 = cljs.core.count(c__5568__auto___22454);
var G__22458 = (0);
seq__22207_22402 = G__22455;
chunk__22211_22403 = G__22456;
count__22212_22404 = G__22457;
i__22213_22405 = G__22458;
continue;
} else {
var node_22459 = cljs.core.first(seq__22207_22453__$1);
if(cljs.core.not(node_22459.shadow$old)){
var path_match_22460 = shadow.cljs.devtools.client.browser.match_paths(node_22459.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22460)){
var new_link_22461 = (function (){var G__22250 = node_22459.cloneNode(true);
G__22250.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22460),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22250;
})();
(node_22459.shadow$old = true);

(new_link_22461.onload = ((function (seq__22207_22402,chunk__22211_22403,count__22212_22404,i__22213_22405,seq__22093,chunk__22095,count__22096,i__22097,new_link_22461,path_match_22460,node_22459,seq__22207_22453__$1,temp__5804__auto___22452,path,map__22092,map__22092__$1,msg,updates,reload_info){
return (function (e){
var seq__22251_22462 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22253_22463 = null;
var count__22254_22464 = (0);
var i__22255_22465 = (0);
while(true){
if((i__22255_22465 < count__22254_22464)){
var map__22259_22466 = chunk__22253_22463.cljs$core$IIndexed$_nth$arity$2(null,i__22255_22465);
var map__22259_22467__$1 = cljs.core.__destructure_map(map__22259_22466);
var task_22468 = map__22259_22467__$1;
var fn_str_22469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22259_22467__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22259_22467__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22471 = goog.getObjectByName(fn_str_22469,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22470)].join(''));

(fn_obj_22471.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22471.cljs$core$IFn$_invoke$arity$2(path,new_link_22461) : fn_obj_22471.call(null,path,new_link_22461));


var G__22472 = seq__22251_22462;
var G__22473 = chunk__22253_22463;
var G__22474 = count__22254_22464;
var G__22475 = (i__22255_22465 + (1));
seq__22251_22462 = G__22472;
chunk__22253_22463 = G__22473;
count__22254_22464 = G__22474;
i__22255_22465 = G__22475;
continue;
} else {
var temp__5804__auto___22476__$1 = cljs.core.seq(seq__22251_22462);
if(temp__5804__auto___22476__$1){
var seq__22251_22477__$1 = temp__5804__auto___22476__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22251_22477__$1)){
var c__5568__auto___22478 = cljs.core.chunk_first(seq__22251_22477__$1);
var G__22479 = cljs.core.chunk_rest(seq__22251_22477__$1);
var G__22480 = c__5568__auto___22478;
var G__22481 = cljs.core.count(c__5568__auto___22478);
var G__22482 = (0);
seq__22251_22462 = G__22479;
chunk__22253_22463 = G__22480;
count__22254_22464 = G__22481;
i__22255_22465 = G__22482;
continue;
} else {
var map__22260_22483 = cljs.core.first(seq__22251_22477__$1);
var map__22260_22484__$1 = cljs.core.__destructure_map(map__22260_22483);
var task_22485 = map__22260_22484__$1;
var fn_str_22486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22260_22484__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22260_22484__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22488 = goog.getObjectByName(fn_str_22486,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22487)].join(''));

(fn_obj_22488.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22488.cljs$core$IFn$_invoke$arity$2(path,new_link_22461) : fn_obj_22488.call(null,path,new_link_22461));


var G__22489 = cljs.core.next(seq__22251_22477__$1);
var G__22490 = null;
var G__22491 = (0);
var G__22492 = (0);
seq__22251_22462 = G__22489;
chunk__22253_22463 = G__22490;
count__22254_22464 = G__22491;
i__22255_22465 = G__22492;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22459);
});})(seq__22207_22402,chunk__22211_22403,count__22212_22404,i__22213_22405,seq__22093,chunk__22095,count__22096,i__22097,new_link_22461,path_match_22460,node_22459,seq__22207_22453__$1,temp__5804__auto___22452,path,map__22092,map__22092__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22460], 0));

goog.dom.insertSiblingAfter(new_link_22461,node_22459);


var G__22493 = cljs.core.next(seq__22207_22453__$1);
var G__22494 = null;
var G__22495 = (0);
var G__22496 = (0);
seq__22207_22402 = G__22493;
chunk__22211_22403 = G__22494;
count__22212_22404 = G__22495;
i__22213_22405 = G__22496;
continue;
} else {
var G__22497 = cljs.core.next(seq__22207_22453__$1);
var G__22498 = null;
var G__22499 = (0);
var G__22500 = (0);
seq__22207_22402 = G__22497;
chunk__22211_22403 = G__22498;
count__22212_22404 = G__22499;
i__22213_22405 = G__22500;
continue;
}
} else {
var G__22501 = cljs.core.next(seq__22207_22453__$1);
var G__22502 = null;
var G__22503 = (0);
var G__22504 = (0);
seq__22207_22402 = G__22501;
chunk__22211_22403 = G__22502;
count__22212_22404 = G__22503;
i__22213_22405 = G__22504;
continue;
}
}
} else {
}
}
break;
}


var G__22505 = seq__22093;
var G__22506 = chunk__22095;
var G__22507 = count__22096;
var G__22508 = (i__22097 + (1));
seq__22093 = G__22505;
chunk__22095 = G__22506;
count__22096 = G__22507;
i__22097 = G__22508;
continue;
} else {
var G__22509 = seq__22093;
var G__22510 = chunk__22095;
var G__22511 = count__22096;
var G__22512 = (i__22097 + (1));
seq__22093 = G__22509;
chunk__22095 = G__22510;
count__22096 = G__22511;
i__22097 = G__22512;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22093);
if(temp__5804__auto__){
var seq__22093__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22093__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22093__$1);
var G__22513 = cljs.core.chunk_rest(seq__22093__$1);
var G__22514 = c__5568__auto__;
var G__22515 = cljs.core.count(c__5568__auto__);
var G__22516 = (0);
seq__22093 = G__22513;
chunk__22095 = G__22514;
count__22096 = G__22515;
i__22097 = G__22516;
continue;
} else {
var path = cljs.core.first(seq__22093__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22261_22517 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22265_22518 = null;
var count__22266_22519 = (0);
var i__22267_22520 = (0);
while(true){
if((i__22267_22520 < count__22266_22519)){
var node_22521 = chunk__22265_22518.cljs$core$IIndexed$_nth$arity$2(null,i__22267_22520);
if(cljs.core.not(node_22521.shadow$old)){
var path_match_22522 = shadow.cljs.devtools.client.browser.match_paths(node_22521.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22522)){
var new_link_22523 = (function (){var G__22293 = node_22521.cloneNode(true);
G__22293.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22522),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22293;
})();
(node_22521.shadow$old = true);

(new_link_22523.onload = ((function (seq__22261_22517,chunk__22265_22518,count__22266_22519,i__22267_22520,seq__22093,chunk__22095,count__22096,i__22097,new_link_22523,path_match_22522,node_22521,path,seq__22093__$1,temp__5804__auto__,map__22092,map__22092__$1,msg,updates,reload_info){
return (function (e){
var seq__22294_22524 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22296_22525 = null;
var count__22297_22526 = (0);
var i__22298_22527 = (0);
while(true){
if((i__22298_22527 < count__22297_22526)){
var map__22302_22528 = chunk__22296_22525.cljs$core$IIndexed$_nth$arity$2(null,i__22298_22527);
var map__22302_22529__$1 = cljs.core.__destructure_map(map__22302_22528);
var task_22530 = map__22302_22529__$1;
var fn_str_22531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22302_22529__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22302_22529__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22533 = goog.getObjectByName(fn_str_22531,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22532)].join(''));

(fn_obj_22533.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22533.cljs$core$IFn$_invoke$arity$2(path,new_link_22523) : fn_obj_22533.call(null,path,new_link_22523));


var G__22534 = seq__22294_22524;
var G__22535 = chunk__22296_22525;
var G__22536 = count__22297_22526;
var G__22537 = (i__22298_22527 + (1));
seq__22294_22524 = G__22534;
chunk__22296_22525 = G__22535;
count__22297_22526 = G__22536;
i__22298_22527 = G__22537;
continue;
} else {
var temp__5804__auto___22538__$1 = cljs.core.seq(seq__22294_22524);
if(temp__5804__auto___22538__$1){
var seq__22294_22539__$1 = temp__5804__auto___22538__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22294_22539__$1)){
var c__5568__auto___22540 = cljs.core.chunk_first(seq__22294_22539__$1);
var G__22541 = cljs.core.chunk_rest(seq__22294_22539__$1);
var G__22542 = c__5568__auto___22540;
var G__22543 = cljs.core.count(c__5568__auto___22540);
var G__22544 = (0);
seq__22294_22524 = G__22541;
chunk__22296_22525 = G__22542;
count__22297_22526 = G__22543;
i__22298_22527 = G__22544;
continue;
} else {
var map__22303_22545 = cljs.core.first(seq__22294_22539__$1);
var map__22303_22546__$1 = cljs.core.__destructure_map(map__22303_22545);
var task_22547 = map__22303_22546__$1;
var fn_str_22548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22303_22546__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22303_22546__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22550 = goog.getObjectByName(fn_str_22548,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22549)].join(''));

(fn_obj_22550.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22550.cljs$core$IFn$_invoke$arity$2(path,new_link_22523) : fn_obj_22550.call(null,path,new_link_22523));


var G__22551 = cljs.core.next(seq__22294_22539__$1);
var G__22552 = null;
var G__22553 = (0);
var G__22554 = (0);
seq__22294_22524 = G__22551;
chunk__22296_22525 = G__22552;
count__22297_22526 = G__22553;
i__22298_22527 = G__22554;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22521);
});})(seq__22261_22517,chunk__22265_22518,count__22266_22519,i__22267_22520,seq__22093,chunk__22095,count__22096,i__22097,new_link_22523,path_match_22522,node_22521,path,seq__22093__$1,temp__5804__auto__,map__22092,map__22092__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22522], 0));

goog.dom.insertSiblingAfter(new_link_22523,node_22521);


var G__22555 = seq__22261_22517;
var G__22556 = chunk__22265_22518;
var G__22557 = count__22266_22519;
var G__22558 = (i__22267_22520 + (1));
seq__22261_22517 = G__22555;
chunk__22265_22518 = G__22556;
count__22266_22519 = G__22557;
i__22267_22520 = G__22558;
continue;
} else {
var G__22559 = seq__22261_22517;
var G__22560 = chunk__22265_22518;
var G__22561 = count__22266_22519;
var G__22562 = (i__22267_22520 + (1));
seq__22261_22517 = G__22559;
chunk__22265_22518 = G__22560;
count__22266_22519 = G__22561;
i__22267_22520 = G__22562;
continue;
}
} else {
var G__22563 = seq__22261_22517;
var G__22564 = chunk__22265_22518;
var G__22565 = count__22266_22519;
var G__22566 = (i__22267_22520 + (1));
seq__22261_22517 = G__22563;
chunk__22265_22518 = G__22564;
count__22266_22519 = G__22565;
i__22267_22520 = G__22566;
continue;
}
} else {
var temp__5804__auto___22567__$1 = cljs.core.seq(seq__22261_22517);
if(temp__5804__auto___22567__$1){
var seq__22261_22568__$1 = temp__5804__auto___22567__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22261_22568__$1)){
var c__5568__auto___22569 = cljs.core.chunk_first(seq__22261_22568__$1);
var G__22570 = cljs.core.chunk_rest(seq__22261_22568__$1);
var G__22571 = c__5568__auto___22569;
var G__22572 = cljs.core.count(c__5568__auto___22569);
var G__22573 = (0);
seq__22261_22517 = G__22570;
chunk__22265_22518 = G__22571;
count__22266_22519 = G__22572;
i__22267_22520 = G__22573;
continue;
} else {
var node_22574 = cljs.core.first(seq__22261_22568__$1);
if(cljs.core.not(node_22574.shadow$old)){
var path_match_22575 = shadow.cljs.devtools.client.browser.match_paths(node_22574.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22575)){
var new_link_22576 = (function (){var G__22304 = node_22574.cloneNode(true);
G__22304.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22575),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22304;
})();
(node_22574.shadow$old = true);

(new_link_22576.onload = ((function (seq__22261_22517,chunk__22265_22518,count__22266_22519,i__22267_22520,seq__22093,chunk__22095,count__22096,i__22097,new_link_22576,path_match_22575,node_22574,seq__22261_22568__$1,temp__5804__auto___22567__$1,path,seq__22093__$1,temp__5804__auto__,map__22092,map__22092__$1,msg,updates,reload_info){
return (function (e){
var seq__22305_22577 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22307_22578 = null;
var count__22308_22579 = (0);
var i__22309_22580 = (0);
while(true){
if((i__22309_22580 < count__22308_22579)){
var map__22313_22581 = chunk__22307_22578.cljs$core$IIndexed$_nth$arity$2(null,i__22309_22580);
var map__22313_22582__$1 = cljs.core.__destructure_map(map__22313_22581);
var task_22583 = map__22313_22582__$1;
var fn_str_22584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22313_22582__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22313_22582__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22586 = goog.getObjectByName(fn_str_22584,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22585)].join(''));

(fn_obj_22586.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22586.cljs$core$IFn$_invoke$arity$2(path,new_link_22576) : fn_obj_22586.call(null,path,new_link_22576));


var G__22587 = seq__22305_22577;
var G__22588 = chunk__22307_22578;
var G__22589 = count__22308_22579;
var G__22590 = (i__22309_22580 + (1));
seq__22305_22577 = G__22587;
chunk__22307_22578 = G__22588;
count__22308_22579 = G__22589;
i__22309_22580 = G__22590;
continue;
} else {
var temp__5804__auto___22591__$2 = cljs.core.seq(seq__22305_22577);
if(temp__5804__auto___22591__$2){
var seq__22305_22592__$1 = temp__5804__auto___22591__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22305_22592__$1)){
var c__5568__auto___22593 = cljs.core.chunk_first(seq__22305_22592__$1);
var G__22594 = cljs.core.chunk_rest(seq__22305_22592__$1);
var G__22595 = c__5568__auto___22593;
var G__22596 = cljs.core.count(c__5568__auto___22593);
var G__22597 = (0);
seq__22305_22577 = G__22594;
chunk__22307_22578 = G__22595;
count__22308_22579 = G__22596;
i__22309_22580 = G__22597;
continue;
} else {
var map__22314_22598 = cljs.core.first(seq__22305_22592__$1);
var map__22314_22599__$1 = cljs.core.__destructure_map(map__22314_22598);
var task_22600 = map__22314_22599__$1;
var fn_str_22601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22314_22599__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22314_22599__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22603 = goog.getObjectByName(fn_str_22601,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22602)].join(''));

(fn_obj_22603.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22603.cljs$core$IFn$_invoke$arity$2(path,new_link_22576) : fn_obj_22603.call(null,path,new_link_22576));


var G__22604 = cljs.core.next(seq__22305_22592__$1);
var G__22605 = null;
var G__22606 = (0);
var G__22607 = (0);
seq__22305_22577 = G__22604;
chunk__22307_22578 = G__22605;
count__22308_22579 = G__22606;
i__22309_22580 = G__22607;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22574);
});})(seq__22261_22517,chunk__22265_22518,count__22266_22519,i__22267_22520,seq__22093,chunk__22095,count__22096,i__22097,new_link_22576,path_match_22575,node_22574,seq__22261_22568__$1,temp__5804__auto___22567__$1,path,seq__22093__$1,temp__5804__auto__,map__22092,map__22092__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22575], 0));

goog.dom.insertSiblingAfter(new_link_22576,node_22574);


var G__22608 = cljs.core.next(seq__22261_22568__$1);
var G__22609 = null;
var G__22610 = (0);
var G__22611 = (0);
seq__22261_22517 = G__22608;
chunk__22265_22518 = G__22609;
count__22266_22519 = G__22610;
i__22267_22520 = G__22611;
continue;
} else {
var G__22612 = cljs.core.next(seq__22261_22568__$1);
var G__22613 = null;
var G__22614 = (0);
var G__22615 = (0);
seq__22261_22517 = G__22612;
chunk__22265_22518 = G__22613;
count__22266_22519 = G__22614;
i__22267_22520 = G__22615;
continue;
}
} else {
var G__22616 = cljs.core.next(seq__22261_22568__$1);
var G__22617 = null;
var G__22618 = (0);
var G__22619 = (0);
seq__22261_22517 = G__22616;
chunk__22265_22518 = G__22617;
count__22266_22519 = G__22618;
i__22267_22520 = G__22619;
continue;
}
}
} else {
}
}
break;
}


var G__22620 = cljs.core.next(seq__22093__$1);
var G__22621 = null;
var G__22622 = (0);
var G__22623 = (0);
seq__22093 = G__22620;
chunk__22095 = G__22621;
count__22096 = G__22622;
i__22097 = G__22623;
continue;
} else {
var G__22624 = cljs.core.next(seq__22093__$1);
var G__22625 = null;
var G__22626 = (0);
var G__22627 = (0);
seq__22093 = G__22624;
chunk__22095 = G__22625;
count__22096 = G__22626;
i__22097 = G__22627;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__22315){
var map__22316 = p__22315;
var map__22316__$1 = cljs.core.__destructure_map(map__22316);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22316__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__22317){
var map__22318 = p__22317;
var map__22318__$1 = cljs.core.__destructure_map(map__22318);
var _ = map__22318__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22318__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__22319,done,error){
var map__22320 = p__22319;
var map__22320__$1 = cljs.core.__destructure_map(map__22320);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22320__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__22321,done,error){
var map__22322 = p__22321;
var map__22322__$1 = cljs.core.__destructure_map(map__22322);
var msg = map__22322__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22322__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22322__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22322__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__22323){
var map__22324 = p__22323;
var map__22324__$1 = cljs.core.__destructure_map(map__22324);
var src = map__22324__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22324__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__22325 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__22325) : done.call(null,G__22325));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__22326){
var map__22327 = p__22326;
var map__22327__$1 = cljs.core.__destructure_map(map__22327);
var msg__$1 = map__22327__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22327__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e22328){var ex = e22328;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__22329){
var map__22330 = p__22329;
var map__22330__$1 = cljs.core.__destructure_map(map__22330);
var env = map__22330__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22330__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__22331){
var map__22332 = p__22331;
var map__22332__$1 = cljs.core.__destructure_map(map__22332);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22332__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22332__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__22333){
var map__22334 = p__22333;
var map__22334__$1 = cljs.core.__destructure_map(map__22334);
var svc = map__22334__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22334__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
