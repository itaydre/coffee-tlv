goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20469){
var map__20471 = p__20469;
var map__20471__$1 = cljs.core.__destructure_map(map__20471);
var m = map__20471__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20471__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20471__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__20474_20795 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20475_20796 = null;
var count__20476_20797 = (0);
var i__20477_20798 = (0);
while(true){
if((i__20477_20798 < count__20476_20797)){
var f_20799 = chunk__20475_20796.cljs$core$IIndexed$_nth$arity$2(null,i__20477_20798);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20799], 0));


var G__20800 = seq__20474_20795;
var G__20801 = chunk__20475_20796;
var G__20802 = count__20476_20797;
var G__20803 = (i__20477_20798 + (1));
seq__20474_20795 = G__20800;
chunk__20475_20796 = G__20801;
count__20476_20797 = G__20802;
i__20477_20798 = G__20803;
continue;
} else {
var temp__5804__auto___20804 = cljs.core.seq(seq__20474_20795);
if(temp__5804__auto___20804){
var seq__20474_20805__$1 = temp__5804__auto___20804;
if(cljs.core.chunked_seq_QMARK_(seq__20474_20805__$1)){
var c__5568__auto___20806 = cljs.core.chunk_first(seq__20474_20805__$1);
var G__20807 = cljs.core.chunk_rest(seq__20474_20805__$1);
var G__20808 = c__5568__auto___20806;
var G__20809 = cljs.core.count(c__5568__auto___20806);
var G__20810 = (0);
seq__20474_20795 = G__20807;
chunk__20475_20796 = G__20808;
count__20476_20797 = G__20809;
i__20477_20798 = G__20810;
continue;
} else {
var f_20811 = cljs.core.first(seq__20474_20805__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20811], 0));


var G__20812 = cljs.core.next(seq__20474_20805__$1);
var G__20813 = null;
var G__20814 = (0);
var G__20815 = (0);
seq__20474_20795 = G__20812;
chunk__20475_20796 = G__20813;
count__20476_20797 = G__20814;
i__20477_20798 = G__20815;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20816 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20816], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20816)))?cljs.core.second(arglists_20816):arglists_20816)], 0));
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
var seq__20487_20817 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20488_20818 = null;
var count__20489_20819 = (0);
var i__20490_20820 = (0);
while(true){
if((i__20490_20820 < count__20489_20819)){
var vec__20528_20821 = chunk__20488_20818.cljs$core$IIndexed$_nth$arity$2(null,i__20490_20820);
var name_20822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20528_20821,(0),null);
var map__20531_20823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20528_20821,(1),null);
var map__20531_20824__$1 = cljs.core.__destructure_map(map__20531_20823);
var doc_20825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20531_20824__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20531_20824__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20822], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20826], 0));

if(cljs.core.truth_(doc_20825)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20825], 0));
} else {
}


var G__20827 = seq__20487_20817;
var G__20828 = chunk__20488_20818;
var G__20829 = count__20489_20819;
var G__20830 = (i__20490_20820 + (1));
seq__20487_20817 = G__20827;
chunk__20488_20818 = G__20828;
count__20489_20819 = G__20829;
i__20490_20820 = G__20830;
continue;
} else {
var temp__5804__auto___20831 = cljs.core.seq(seq__20487_20817);
if(temp__5804__auto___20831){
var seq__20487_20832__$1 = temp__5804__auto___20831;
if(cljs.core.chunked_seq_QMARK_(seq__20487_20832__$1)){
var c__5568__auto___20833 = cljs.core.chunk_first(seq__20487_20832__$1);
var G__20834 = cljs.core.chunk_rest(seq__20487_20832__$1);
var G__20835 = c__5568__auto___20833;
var G__20836 = cljs.core.count(c__5568__auto___20833);
var G__20837 = (0);
seq__20487_20817 = G__20834;
chunk__20488_20818 = G__20835;
count__20489_20819 = G__20836;
i__20490_20820 = G__20837;
continue;
} else {
var vec__20551_20838 = cljs.core.first(seq__20487_20832__$1);
var name_20839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20551_20838,(0),null);
var map__20554_20840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20551_20838,(1),null);
var map__20554_20841__$1 = cljs.core.__destructure_map(map__20554_20840);
var doc_20842 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20554_20841__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20554_20841__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20839], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20843], 0));

if(cljs.core.truth_(doc_20842)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20842], 0));
} else {
}


var G__20847 = cljs.core.next(seq__20487_20832__$1);
var G__20848 = null;
var G__20849 = (0);
var G__20850 = (0);
seq__20487_20817 = G__20847;
chunk__20488_20818 = G__20848;
count__20489_20819 = G__20849;
i__20490_20820 = G__20850;
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

var seq__20572 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20573 = null;
var count__20574 = (0);
var i__20575 = (0);
while(true){
if((i__20575 < count__20574)){
var role = chunk__20573.cljs$core$IIndexed$_nth$arity$2(null,i__20575);
var temp__5804__auto___20856__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20856__$1)){
var spec_20859 = temp__5804__auto___20856__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20859)], 0));
} else {
}


var G__20863 = seq__20572;
var G__20864 = chunk__20573;
var G__20865 = count__20574;
var G__20866 = (i__20575 + (1));
seq__20572 = G__20863;
chunk__20573 = G__20864;
count__20574 = G__20865;
i__20575 = G__20866;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__20572);
if(temp__5804__auto____$1){
var seq__20572__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20572__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20572__$1);
var G__20867 = cljs.core.chunk_rest(seq__20572__$1);
var G__20868 = c__5568__auto__;
var G__20869 = cljs.core.count(c__5568__auto__);
var G__20870 = (0);
seq__20572 = G__20867;
chunk__20573 = G__20868;
count__20574 = G__20869;
i__20575 = G__20870;
continue;
} else {
var role = cljs.core.first(seq__20572__$1);
var temp__5804__auto___20873__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20873__$2)){
var spec_20874 = temp__5804__auto___20873__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20874)], 0));
} else {
}


var G__20876 = cljs.core.next(seq__20572__$1);
var G__20877 = null;
var G__20878 = (0);
var G__20879 = (0);
seq__20572 = G__20876;
chunk__20573 = G__20877;
count__20574 = G__20878;
i__20575 = G__20879;
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
var G__20882 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__20883 = cljs.core.ex_cause(t);
via = G__20882;
t = G__20883;
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
var map__20651 = datafied_throwable;
var map__20651__$1 = cljs.core.__destructure_map(map__20651);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20651__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20651__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20651__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20652 = cljs.core.last(via);
var map__20652__$1 = cljs.core.__destructure_map(map__20652);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20652__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20652__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20652__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20653 = data;
var map__20653__$1 = cljs.core.__destructure_map(map__20653);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20653__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20653__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20653__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20654 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20654__$1 = cljs.core.__destructure_map(map__20654);
var top_data = map__20654__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20654__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20655 = phase;
var G__20655__$1 = (((G__20655 instanceof cljs.core.Keyword))?G__20655.fqn:null);
switch (G__20655__$1) {
case "read-source":
var map__20656 = data;
var map__20656__$1 = cljs.core.__destructure_map(map__20656);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20656__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20656__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20657 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20657__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20657,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20657);
var G__20657__$2 = (cljs.core.truth_((function (){var fexpr__20658 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20658.cljs$core$IFn$_invoke$arity$1 ? fexpr__20658.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20658.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20657__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20657__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20657__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20657__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20660 = top_data;
var G__20660__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20660,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20660);
var G__20660__$2 = (cljs.core.truth_((function (){var fexpr__20661 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20661.cljs$core$IFn$_invoke$arity$1 ? fexpr__20661.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20661.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20660__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20660__$1);
var G__20660__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20660__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20660__$2);
var G__20660__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20660__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20660__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20660__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20660__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20666 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20666,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20666,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20666,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20666,(3),null);
var G__20670 = top_data;
var G__20670__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20670,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20670);
var G__20670__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20670__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20670__$1);
var G__20670__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20670__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20670__$2);
var G__20670__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20670__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20670__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20670__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20670__$4;
}

break;
case "execution":
var vec__20675 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20675,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20675,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20675,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20675,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20650_SHARP_){
var or__5045__auto__ = (p1__20650_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__20678 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20678.cljs$core$IFn$_invoke$arity$1 ? fexpr__20678.cljs$core$IFn$_invoke$arity$1(p1__20650_SHARP_) : fexpr__20678.call(null,p1__20650_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__20679 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20679__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20679,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20679);
var G__20679__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20679__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20679__$1);
var G__20679__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20679__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20679__$2);
var G__20679__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20679__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20679__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20679__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20679__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20655__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20698){
var map__20699 = p__20698;
var map__20699__$1 = cljs.core.__destructure_map(map__20699);
var triage_data = map__20699__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20699__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20699__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20699__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20699__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20699__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20699__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20699__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20699__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__20724 = phase;
var G__20724__$1 = (((G__20724 instanceof cljs.core.Keyword))?G__20724.fqn:null);
switch (G__20724__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20734 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20735 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20736 = loc;
var G__20737 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20739_20959 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20740_20960 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20741_20961 = true;
var _STAR_print_fn_STAR__temp_val__20742_20962 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20741_20961);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20742_20962);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20686_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20686_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20740_20960);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20739_20959);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20734,G__20735,G__20736,G__20737) : format.call(null,G__20734,G__20735,G__20736,G__20737));

break;
case "macroexpansion":
var G__20743 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20744 = cause_type;
var G__20745 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20746 = loc;
var G__20747 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20743,G__20744,G__20745,G__20746,G__20747) : format.call(null,G__20743,G__20744,G__20745,G__20746,G__20747));

break;
case "compile-syntax-check":
var G__20750 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20751 = cause_type;
var G__20752 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20753 = loc;
var G__20754 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20750,G__20751,G__20752,G__20753,G__20754) : format.call(null,G__20750,G__20751,G__20752,G__20753,G__20754));

break;
case "compilation":
var G__20760 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20761 = cause_type;
var G__20762 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20763 = loc;
var G__20764 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20760,G__20761,G__20762,G__20763,G__20764) : format.call(null,G__20760,G__20761,G__20762,G__20763,G__20764));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20767 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20768 = symbol;
var G__20769 = loc;
var G__20770 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20771_20975 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20772_20976 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20774_20977 = true;
var _STAR_print_fn_STAR__temp_val__20775_20978 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20774_20977);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20775_20978);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20688_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20688_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20772_20976);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20771_20975);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20767,G__20768,G__20769,G__20770) : format.call(null,G__20767,G__20768,G__20769,G__20770));
} else {
var G__20778 = "Execution error%s at %s(%s).\n%s\n";
var G__20780 = cause_type;
var G__20781 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20782 = loc;
var G__20783 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20778,G__20780,G__20781,G__20782,G__20783) : format.call(null,G__20778,G__20780,G__20781,G__20782,G__20783));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20724__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
