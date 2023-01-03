goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__21371,p__21372){
var map__21373 = p__21371;
var map__21373__$1 = cljs.core.__destructure_map(map__21373);
var svc = map__21373__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21373__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21373__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21373__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__21374 = p__21372;
var map__21374__$1 = cljs.core.__destructure_map(map__21374);
var msg = map__21374__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21374__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21374__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21374__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21374__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__21375,p__21376){
var map__21377 = p__21375;
var map__21377__$1 = cljs.core.__destructure_map(map__21377);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21377__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__21378 = p__21376;
var map__21378__$1 = cljs.core.__destructure_map(map__21378);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21378__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__21379,p__21380){
var map__21381 = p__21379;
var map__21381__$1 = cljs.core.__destructure_map(map__21381);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21381__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21381__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__21382 = p__21380;
var map__21382__$1 = cljs.core.__destructure_map(map__21382);
var msg = map__21382__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21382__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__21383,tid){
var map__21384 = p__21383;
var map__21384__$1 = cljs.core.__destructure_map(map__21384);
var svc = map__21384__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21384__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__21391 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__21392 = null;
var count__21393 = (0);
var i__21394 = (0);
while(true){
if((i__21394 < count__21393)){
var vec__21406 = chunk__21392.cljs$core$IIndexed$_nth$arity$2(null,i__21394);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21406,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21406,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__21422 = seq__21391;
var G__21423 = chunk__21392;
var G__21424 = count__21393;
var G__21425 = (i__21394 + (1));
seq__21391 = G__21422;
chunk__21392 = G__21423;
count__21393 = G__21424;
i__21394 = G__21425;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21391);
if(temp__5804__auto__){
var seq__21391__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21391__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21391__$1);
var G__21426 = cljs.core.chunk_rest(seq__21391__$1);
var G__21427 = c__5568__auto__;
var G__21428 = cljs.core.count(c__5568__auto__);
var G__21429 = (0);
seq__21391 = G__21426;
chunk__21392 = G__21427;
count__21393 = G__21428;
i__21394 = G__21429;
continue;
} else {
var vec__21409 = cljs.core.first(seq__21391__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21409,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21409,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__21430 = cljs.core.next(seq__21391__$1);
var G__21431 = null;
var G__21432 = (0);
var G__21433 = (0);
seq__21391 = G__21430;
chunk__21392 = G__21431;
count__21393 = G__21432;
i__21394 = G__21433;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__21386_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__21386_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__21387_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__21387_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__21388_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__21388_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__21389_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__21389_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__21415){
var map__21416 = p__21415;
var map__21416__$1 = cljs.core.__destructure_map(map__21416);
var svc = map__21416__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21416__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21416__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
