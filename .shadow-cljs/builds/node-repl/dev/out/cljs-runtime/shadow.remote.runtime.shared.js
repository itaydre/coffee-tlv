goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__19891,res){
var map__19892 = p__19891;
var map__19892__$1 = cljs.core.__destructure_map(map__19892);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19892__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19892__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__19893 = res;
var G__19893__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19893,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__19893);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19893__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__19893__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__19904 = arguments.length;
switch (G__19904) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__19909,msg,handlers,timeout_after_ms){
var map__19910 = p__19909;
var map__19910__$1 = cljs.core.__destructure_map(map__19910);
var runtime = map__19910__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19910__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20101 = arguments.length;
var i__5770__auto___20102 = (0);
while(true){
if((i__5770__auto___20102 < len__5769__auto___20101)){
args__5775__auto__.push((arguments[i__5770__auto___20102]));

var G__20103 = (i__5770__auto___20102 + (1));
i__5770__auto___20102 = G__20103;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__19914,ev,args){
var map__19915 = p__19914;
var map__19915__$1 = cljs.core.__destructure_map(map__19915);
var runtime = map__19915__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19915__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__19920 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__19923 = null;
var count__19924 = (0);
var i__19925 = (0);
while(true){
if((i__19925 < count__19924)){
var ext = chunk__19923.cljs$core$IIndexed$_nth$arity$2(null,i__19925);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__20116 = seq__19920;
var G__20117 = chunk__19923;
var G__20118 = count__19924;
var G__20119 = (i__19925 + (1));
seq__19920 = G__20116;
chunk__19923 = G__20117;
count__19924 = G__20118;
i__19925 = G__20119;
continue;
} else {
var G__20120 = seq__19920;
var G__20121 = chunk__19923;
var G__20122 = count__19924;
var G__20123 = (i__19925 + (1));
seq__19920 = G__20120;
chunk__19923 = G__20121;
count__19924 = G__20122;
i__19925 = G__20123;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19920);
if(temp__5804__auto__){
var seq__19920__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19920__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19920__$1);
var G__20124 = cljs.core.chunk_rest(seq__19920__$1);
var G__20125 = c__5568__auto__;
var G__20126 = cljs.core.count(c__5568__auto__);
var G__20127 = (0);
seq__19920 = G__20124;
chunk__19923 = G__20125;
count__19924 = G__20126;
i__19925 = G__20127;
continue;
} else {
var ext = cljs.core.first(seq__19920__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__20128 = cljs.core.next(seq__19920__$1);
var G__20129 = null;
var G__20130 = (0);
var G__20131 = (0);
seq__19920 = G__20128;
chunk__19923 = G__20129;
count__19924 = G__20130;
i__19925 = G__20131;
continue;
} else {
var G__20132 = cljs.core.next(seq__19920__$1);
var G__20133 = null;
var G__20134 = (0);
var G__20135 = (0);
seq__19920 = G__20132;
chunk__19923 = G__20133;
count__19924 = G__20134;
i__19925 = G__20135;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq19911){
var G__19912 = cljs.core.first(seq19911);
var seq19911__$1 = cljs.core.next(seq19911);
var G__19913 = cljs.core.first(seq19911__$1);
var seq19911__$2 = cljs.core.next(seq19911__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19912,G__19913,seq19911__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__19938,p__19939){
var map__19940 = p__19938;
var map__19940__$1 = cljs.core.__destructure_map(map__19940);
var runtime = map__19940__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19940__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__19941 = p__19939;
var map__19941__$1 = cljs.core.__destructure_map(map__19941);
var msg = map__19941__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19941__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__19942 = cljs.core.deref(state_ref);
var map__19942__$1 = cljs.core.__destructure_map(map__19942);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19942__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19942__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__19944){
var map__19945 = p__19944;
var map__19945__$1 = cljs.core.__destructure_map(map__19945);
var runtime = map__19945__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19945__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__19949,msg){
var map__19950 = p__19949;
var map__19950__$1 = cljs.core.__destructure_map(map__19950);
var runtime = map__19950__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19950__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__19952,key,p__19953){
var map__19954 = p__19952;
var map__19954__$1 = cljs.core.__destructure_map(map__19954);
var state = map__19954__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19954__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__19955 = p__19953;
var map__19955__$1 = cljs.core.__destructure_map(map__19955);
var spec = map__19955__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19955__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__19969,key,spec){
var map__19970 = p__19969;
var map__19970__$1 = cljs.core.__destructure_map(map__19970);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19970__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__19973_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__19973_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__19974_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__19974_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__19975_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__19975_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__19976_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__19976_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__19978_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__19978_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__19995,key){
var map__19996 = p__19995;
var map__19996__$1 = cljs.core.__destructure_map(map__19996);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19996__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__20038,msg){
var map__20039 = p__20038;
var map__20039__$1 = cljs.core.__destructure_map(map__20039);
var runtime = map__20039__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20039__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__20050,p__20051){
var map__20052 = p__20050;
var map__20052__$1 = cljs.core.__destructure_map(map__20052);
var runtime = map__20052__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20052__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__20053 = p__20051;
var map__20053__$1 = cljs.core.__destructure_map(map__20053);
var msg = map__20053__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20053__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20053__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__20056 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__20058 = null;
var count__20059 = (0);
var i__20060 = (0);
while(true){
if((i__20060 < count__20059)){
var map__20070 = chunk__20058.cljs$core$IIndexed$_nth$arity$2(null,i__20060);
var map__20070__$1 = cljs.core.__destructure_map(map__20070);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20070__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__20150 = seq__20056;
var G__20151 = chunk__20058;
var G__20152 = count__20059;
var G__20153 = (i__20060 + (1));
seq__20056 = G__20150;
chunk__20058 = G__20151;
count__20059 = G__20152;
i__20060 = G__20153;
continue;
} else {
var G__20154 = seq__20056;
var G__20155 = chunk__20058;
var G__20156 = count__20059;
var G__20157 = (i__20060 + (1));
seq__20056 = G__20154;
chunk__20058 = G__20155;
count__20059 = G__20156;
i__20060 = G__20157;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20056);
if(temp__5804__auto__){
var seq__20056__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20056__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20056__$1);
var G__20158 = cljs.core.chunk_rest(seq__20056__$1);
var G__20159 = c__5568__auto__;
var G__20160 = cljs.core.count(c__5568__auto__);
var G__20161 = (0);
seq__20056 = G__20158;
chunk__20058 = G__20159;
count__20059 = G__20160;
i__20060 = G__20161;
continue;
} else {
var map__20073 = cljs.core.first(seq__20056__$1);
var map__20073__$1 = cljs.core.__destructure_map(map__20073);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20073__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__20162 = cljs.core.next(seq__20056__$1);
var G__20163 = null;
var G__20164 = (0);
var G__20165 = (0);
seq__20056 = G__20162;
chunk__20058 = G__20163;
count__20059 = G__20164;
i__20060 = G__20165;
continue;
} else {
var G__20166 = cljs.core.next(seq__20056__$1);
var G__20167 = null;
var G__20168 = (0);
var G__20169 = (0);
seq__20056 = G__20166;
chunk__20058 = G__20167;
count__20059 = G__20168;
i__20060 = G__20169;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
