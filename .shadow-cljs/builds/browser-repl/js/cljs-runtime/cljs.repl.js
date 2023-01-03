goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20392){
var map__20394 = p__20392;
var map__20394__$1 = cljs.core.__destructure_map(map__20394);
var m = map__20394__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20394__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20394__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20409_20737 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20410_20738 = null;
var count__20411_20739 = (0);
var i__20412_20740 = (0);
while(true){
if((i__20412_20740 < count__20411_20739)){
var f_20741 = chunk__20410_20738.cljs$core$IIndexed$_nth$arity$2(null,i__20412_20740);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20741], 0));


var G__20742 = seq__20409_20737;
var G__20743 = chunk__20410_20738;
var G__20744 = count__20411_20739;
var G__20745 = (i__20412_20740 + (1));
seq__20409_20737 = G__20742;
chunk__20410_20738 = G__20743;
count__20411_20739 = G__20744;
i__20412_20740 = G__20745;
continue;
} else {
var temp__5804__auto___20746 = cljs.core.seq(seq__20409_20737);
if(temp__5804__auto___20746){
var seq__20409_20747__$1 = temp__5804__auto___20746;
if(cljs.core.chunked_seq_QMARK_(seq__20409_20747__$1)){
var c__5568__auto___20748 = cljs.core.chunk_first(seq__20409_20747__$1);
var G__20749 = cljs.core.chunk_rest(seq__20409_20747__$1);
var G__20750 = c__5568__auto___20748;
var G__20751 = cljs.core.count(c__5568__auto___20748);
var G__20752 = (0);
seq__20409_20737 = G__20749;
chunk__20410_20738 = G__20750;
count__20411_20739 = G__20751;
i__20412_20740 = G__20752;
continue;
} else {
var f_20753 = cljs.core.first(seq__20409_20747__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20753], 0));


var G__20754 = cljs.core.next(seq__20409_20747__$1);
var G__20755 = null;
var G__20756 = (0);
var G__20757 = (0);
seq__20409_20737 = G__20754;
chunk__20410_20738 = G__20755;
count__20411_20739 = G__20756;
i__20412_20740 = G__20757;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20758 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20758], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20758)))?cljs.core.second(arglists_20758):arglists_20758)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20500_20759 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20501_20760 = null;
var count__20502_20761 = (0);
var i__20503_20762 = (0);
while(true){
if((i__20503_20762 < count__20502_20761)){
var vec__20532_20767 = chunk__20501_20760.cljs$core$IIndexed$_nth$arity$2(null,i__20503_20762);
var name_20768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20532_20767,(0),null);
var map__20535_20769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20532_20767,(1),null);
var map__20535_20770__$1 = cljs.core.__destructure_map(map__20535_20769);
var doc_20771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20535_20770__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20535_20770__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20768], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20772], 0));

if(cljs.core.truth_(doc_20771)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20771], 0));
} else {
}


var G__20773 = seq__20500_20759;
var G__20774 = chunk__20501_20760;
var G__20775 = count__20502_20761;
var G__20776 = (i__20503_20762 + (1));
seq__20500_20759 = G__20773;
chunk__20501_20760 = G__20774;
count__20502_20761 = G__20775;
i__20503_20762 = G__20776;
continue;
} else {
var temp__5804__auto___20777 = cljs.core.seq(seq__20500_20759);
if(temp__5804__auto___20777){
var seq__20500_20778__$1 = temp__5804__auto___20777;
if(cljs.core.chunked_seq_QMARK_(seq__20500_20778__$1)){
var c__5568__auto___20779 = cljs.core.chunk_first(seq__20500_20778__$1);
var G__20780 = cljs.core.chunk_rest(seq__20500_20778__$1);
var G__20781 = c__5568__auto___20779;
var G__20782 = cljs.core.count(c__5568__auto___20779);
var G__20783 = (0);
seq__20500_20759 = G__20780;
chunk__20501_20760 = G__20781;
count__20502_20761 = G__20782;
i__20503_20762 = G__20783;
continue;
} else {
var vec__20537_20788 = cljs.core.first(seq__20500_20778__$1);
var name_20789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20537_20788,(0),null);
var map__20540_20790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20537_20788,(1),null);
var map__20540_20791__$1 = cljs.core.__destructure_map(map__20540_20790);
var doc_20792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20540_20791__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20540_20791__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20789], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20793], 0));

if(cljs.core.truth_(doc_20792)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20792], 0));
} else {
}


var G__20794 = cljs.core.next(seq__20500_20778__$1);
var G__20795 = null;
var G__20796 = (0);
var G__20797 = (0);
seq__20500_20759 = G__20794;
chunk__20501_20760 = G__20795;
count__20502_20761 = G__20796;
i__20503_20762 = G__20797;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20541 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20542 = null;
var count__20543 = (0);
var i__20544 = (0);
while(true){
if((i__20544 < count__20543)){
var role = chunk__20542.cljs$core$IIndexed$_nth$arity$2(null,i__20544);
var temp__5804__auto___20798__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20798__$1)){
var spec_20806 = temp__5804__auto___20798__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20806)], 0));
} else {
}


var G__20807 = seq__20541;
var G__20808 = chunk__20542;
var G__20809 = count__20543;
var G__20810 = (i__20544 + (1));
seq__20541 = G__20807;
chunk__20542 = G__20808;
count__20543 = G__20809;
i__20544 = G__20810;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__20541);
if(temp__5804__auto____$1){
var seq__20541__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20541__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20541__$1);
var G__20811 = cljs.core.chunk_rest(seq__20541__$1);
var G__20812 = c__5568__auto__;
var G__20813 = cljs.core.count(c__5568__auto__);
var G__20814 = (0);
seq__20541 = G__20811;
chunk__20542 = G__20812;
count__20543 = G__20813;
i__20544 = G__20814;
continue;
} else {
var role = cljs.core.first(seq__20541__$1);
var temp__5804__auto___20815__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20815__$2)){
var spec_20816 = temp__5804__auto___20815__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20816)], 0));
} else {
}


var G__20818 = cljs.core.next(seq__20541__$1);
var G__20819 = null;
var G__20820 = (0);
var G__20821 = (0);
seq__20541 = G__20818;
chunk__20542 = G__20819;
count__20543 = G__20820;
i__20544 = G__20821;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20823 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__20824 = cljs.core.ex_cause(t);
via = G__20823;
t = G__20824;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20601 = datafied_throwable;
var map__20601__$1 = cljs.core.__destructure_map(map__20601);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20601__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20601__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20601__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20602 = cljs.core.last(via);
var map__20602__$1 = cljs.core.__destructure_map(map__20602);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20602__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20602__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20602__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20603 = data;
var map__20603__$1 = cljs.core.__destructure_map(map__20603);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20603__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20603__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20603__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20604 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20604__$1 = cljs.core.__destructure_map(map__20604);
var top_data = map__20604__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20604__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20605 = phase;
var G__20605__$1 = (((G__20605 instanceof cljs.core.Keyword))?G__20605.fqn:null);
switch (G__20605__$1) {
case "read-source":
var map__20609 = data;
var map__20609__$1 = cljs.core.__destructure_map(map__20609);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20609__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20609__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20613 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20613__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20613,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20613);
var G__20613__$2 = (cljs.core.truth_((function (){var fexpr__20615 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20615.cljs$core$IFn$_invoke$arity$1 ? fexpr__20615.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20615.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20613__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20613__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20613__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20613__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20618 = top_data;
var G__20618__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20618,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20618);
var G__20618__$2 = (cljs.core.truth_((function (){var fexpr__20619 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20619.cljs$core$IFn$_invoke$arity$1 ? fexpr__20619.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20619.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20618__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20618__$1);
var G__20618__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20618__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20618__$2);
var G__20618__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20618__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20618__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20618__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20618__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20620 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20620,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20620,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20620,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20620,(3),null);
var G__20625 = top_data;
var G__20625__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20625,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20625);
var G__20625__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20625__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20625__$1);
var G__20625__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20625__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20625__$2);
var G__20625__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20625__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20625__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20625__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20625__$4;
}

break;
case "execution":
var vec__20628 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20628,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20628,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20628,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20628,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20598_SHARP_){
var or__5045__auto__ = (p1__20598_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__20650 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20650.cljs$core$IFn$_invoke$arity$1 ? fexpr__20650.cljs$core$IFn$_invoke$arity$1(p1__20598_SHARP_) : fexpr__20650.call(null,p1__20598_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__20654 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20654__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20654,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20654);
var G__20654__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20654__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20654__$1);
var G__20654__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20654__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20654__$2);
var G__20654__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20654__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20654__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20654__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20654__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20605__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20677){
var map__20679 = p__20677;
var map__20679__$1 = cljs.core.__destructure_map(map__20679);
var triage_data = map__20679__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20679__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20679__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20679__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20679__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20679__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20679__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20679__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20679__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20688 = phase;
var G__20688__$1 = (((G__20688 instanceof cljs.core.Keyword))?G__20688.fqn:null);
switch (G__20688__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20689 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20690 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20691 = loc;
var G__20692 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20693_21015 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20694_21016 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20695_21017 = true;
var _STAR_print_fn_STAR__temp_val__20696_21018 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20695_21017);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20696_21018);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20666_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20666_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20694_21016);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20693_21015);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20689,G__20690,G__20691,G__20692) : format.call(null,G__20689,G__20690,G__20691,G__20692));

break;
case "macroexpansion":
var G__20697 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20698 = cause_type;
var G__20699 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20700 = loc;
var G__20701 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20697,G__20698,G__20699,G__20700,G__20701) : format.call(null,G__20697,G__20698,G__20699,G__20700,G__20701));

break;
case "compile-syntax-check":
var G__20702 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20703 = cause_type;
var G__20704 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20705 = loc;
var G__20706 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20702,G__20703,G__20704,G__20705,G__20706) : format.call(null,G__20702,G__20703,G__20704,G__20705,G__20706));

break;
case "compilation":
var G__20707 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20708 = cause_type;
var G__20709 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20710 = loc;
var G__20711 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20707,G__20708,G__20709,G__20710,G__20711) : format.call(null,G__20707,G__20708,G__20709,G__20710,G__20711));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20712 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20713 = symbol;
var G__20714 = loc;
var G__20715 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20716_21027 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20717_21028 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20718_21029 = true;
var _STAR_print_fn_STAR__temp_val__20719_21030 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20718_21029);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20719_21030);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20667_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20667_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20717_21028);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20716_21027);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20712,G__20713,G__20714,G__20715) : format.call(null,G__20712,G__20713,G__20714,G__20715));
} else {
var G__20720 = "Execution error%s at %s(%s).\n%s\n";
var G__20721 = cause_type;
var G__20722 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20723 = loc;
var G__20724 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20720,G__20721,G__20722,G__20723,G__20724) : format.call(null,G__20720,G__20721,G__20722,G__20723,G__20724));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20688__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
