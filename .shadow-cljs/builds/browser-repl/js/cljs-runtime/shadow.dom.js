goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_20655 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_20655(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_20656 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_20656(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__19656 = coll;
var G__19657 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__19656,G__19657) : shadow.dom.lazy_native_coll_seq.call(null,G__19656,G__19657));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__19686 = arguments.length;
switch (G__19686) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__19689 = arguments.length;
switch (G__19689) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__19693 = arguments.length;
switch (G__19693) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__19701 = arguments.length;
switch (G__19701) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__19731 = arguments.length;
switch (G__19731) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__19755 = arguments.length;
switch (G__19755) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e19769){if((e19769 instanceof Object)){
var e = e19769;
return console.log("didnt support attachEvent",el,e);
} else {
throw e19769;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__19783 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__19784 = null;
var count__19785 = (0);
var i__19786 = (0);
while(true){
if((i__19786 < count__19785)){
var el = chunk__19784.cljs$core$IIndexed$_nth$arity$2(null,i__19786);
var handler_20668__$1 = ((function (seq__19783,chunk__19784,count__19785,i__19786,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__19783,chunk__19784,count__19785,i__19786,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20668__$1);


var G__20669 = seq__19783;
var G__20670 = chunk__19784;
var G__20671 = count__19785;
var G__20672 = (i__19786 + (1));
seq__19783 = G__20669;
chunk__19784 = G__20670;
count__19785 = G__20671;
i__19786 = G__20672;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19783);
if(temp__5804__auto__){
var seq__19783__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19783__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19783__$1);
var G__20673 = cljs.core.chunk_rest(seq__19783__$1);
var G__20674 = c__5568__auto__;
var G__20675 = cljs.core.count(c__5568__auto__);
var G__20676 = (0);
seq__19783 = G__20673;
chunk__19784 = G__20674;
count__19785 = G__20675;
i__19786 = G__20676;
continue;
} else {
var el = cljs.core.first(seq__19783__$1);
var handler_20678__$1 = ((function (seq__19783,chunk__19784,count__19785,i__19786,el,seq__19783__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__19783,chunk__19784,count__19785,i__19786,el,seq__19783__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20678__$1);


var G__20682 = cljs.core.next(seq__19783__$1);
var G__20683 = null;
var G__20684 = (0);
var G__20685 = (0);
seq__19783 = G__20682;
chunk__19784 = G__20683;
count__19785 = G__20684;
i__19786 = G__20685;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__19838 = arguments.length;
switch (G__19838) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__19860 = cljs.core.seq(events);
var chunk__19861 = null;
var count__19862 = (0);
var i__19863 = (0);
while(true){
if((i__19863 < count__19862)){
var vec__19883 = chunk__19861.cljs$core$IIndexed$_nth$arity$2(null,i__19863);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19883,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19883,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20725 = seq__19860;
var G__20726 = chunk__19861;
var G__20727 = count__19862;
var G__20728 = (i__19863 + (1));
seq__19860 = G__20725;
chunk__19861 = G__20726;
count__19862 = G__20727;
i__19863 = G__20728;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19860);
if(temp__5804__auto__){
var seq__19860__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19860__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19860__$1);
var G__20729 = cljs.core.chunk_rest(seq__19860__$1);
var G__20730 = c__5568__auto__;
var G__20731 = cljs.core.count(c__5568__auto__);
var G__20732 = (0);
seq__19860 = G__20729;
chunk__19861 = G__20730;
count__19862 = G__20731;
i__19863 = G__20732;
continue;
} else {
var vec__19896 = cljs.core.first(seq__19860__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19896,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19896,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20733 = cljs.core.next(seq__19860__$1);
var G__20734 = null;
var G__20735 = (0);
var G__20736 = (0);
seq__19860 = G__20733;
chunk__19861 = G__20734;
count__19862 = G__20735;
i__19863 = G__20736;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__19910 = cljs.core.seq(styles);
var chunk__19911 = null;
var count__19912 = (0);
var i__19913 = (0);
while(true){
if((i__19913 < count__19912)){
var vec__19936 = chunk__19911.cljs$core$IIndexed$_nth$arity$2(null,i__19913);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19936,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19936,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__20763 = seq__19910;
var G__20764 = chunk__19911;
var G__20765 = count__19912;
var G__20766 = (i__19913 + (1));
seq__19910 = G__20763;
chunk__19911 = G__20764;
count__19912 = G__20765;
i__19913 = G__20766;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19910);
if(temp__5804__auto__){
var seq__19910__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19910__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19910__$1);
var G__20784 = cljs.core.chunk_rest(seq__19910__$1);
var G__20785 = c__5568__auto__;
var G__20786 = cljs.core.count(c__5568__auto__);
var G__20787 = (0);
seq__19910 = G__20784;
chunk__19911 = G__20785;
count__19912 = G__20786;
i__19913 = G__20787;
continue;
} else {
var vec__19942 = cljs.core.first(seq__19910__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19942,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19942,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__20799 = cljs.core.next(seq__19910__$1);
var G__20800 = null;
var G__20801 = (0);
var G__20802 = (0);
seq__19910 = G__20799;
chunk__19911 = G__20800;
count__19912 = G__20801;
i__19913 = G__20802;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__19950_20803 = key;
var G__19950_20804__$1 = (((G__19950_20803 instanceof cljs.core.Keyword))?G__19950_20803.fqn:null);
switch (G__19950_20804__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_20817 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_20817,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_20817,"aria-");
}
})())){
el.setAttribute(ks_20817,value);
} else {
(el[ks_20817] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__19983){
var map__19984 = p__19983;
var map__19984__$1 = cljs.core.__destructure_map(map__19984);
var props = map__19984__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19984__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__19988 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19988,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19988,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19988,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__19994 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__19994,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__19994;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__19996 = arguments.length;
switch (G__19996) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__19997){
var vec__19998 = p__19997;
var seq__19999 = cljs.core.seq(vec__19998);
var first__20000 = cljs.core.first(seq__19999);
var seq__19999__$1 = cljs.core.next(seq__19999);
var nn = first__20000;
var first__20000__$1 = cljs.core.first(seq__19999__$1);
var seq__19999__$2 = cljs.core.next(seq__19999__$1);
var np = first__20000__$1;
var nc = seq__19999__$2;
var node = vec__19998;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20004 = nn;
var G__20005 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20004,G__20005) : create_fn.call(null,G__20004,G__20005));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20006 = nn;
var G__20007 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20006,G__20007) : create_fn.call(null,G__20006,G__20007));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__20012 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20012,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20012,(1),null);
var seq__20016_20825 = cljs.core.seq(node_children);
var chunk__20017_20826 = null;
var count__20018_20827 = (0);
var i__20019_20828 = (0);
while(true){
if((i__20019_20828 < count__20018_20827)){
var child_struct_20829 = chunk__20017_20826.cljs$core$IIndexed$_nth$arity$2(null,i__20019_20828);
var children_20830 = shadow.dom.dom_node(child_struct_20829);
if(cljs.core.seq_QMARK_(children_20830)){
var seq__20059_20831 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_20830));
var chunk__20061_20832 = null;
var count__20062_20833 = (0);
var i__20063_20834 = (0);
while(true){
if((i__20063_20834 < count__20062_20833)){
var child_20835 = chunk__20061_20832.cljs$core$IIndexed$_nth$arity$2(null,i__20063_20834);
if(cljs.core.truth_(child_20835)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20835);


var G__20836 = seq__20059_20831;
var G__20837 = chunk__20061_20832;
var G__20838 = count__20062_20833;
var G__20839 = (i__20063_20834 + (1));
seq__20059_20831 = G__20836;
chunk__20061_20832 = G__20837;
count__20062_20833 = G__20838;
i__20063_20834 = G__20839;
continue;
} else {
var G__20840 = seq__20059_20831;
var G__20841 = chunk__20061_20832;
var G__20842 = count__20062_20833;
var G__20843 = (i__20063_20834 + (1));
seq__20059_20831 = G__20840;
chunk__20061_20832 = G__20841;
count__20062_20833 = G__20842;
i__20063_20834 = G__20843;
continue;
}
} else {
var temp__5804__auto___20844 = cljs.core.seq(seq__20059_20831);
if(temp__5804__auto___20844){
var seq__20059_20845__$1 = temp__5804__auto___20844;
if(cljs.core.chunked_seq_QMARK_(seq__20059_20845__$1)){
var c__5568__auto___20846 = cljs.core.chunk_first(seq__20059_20845__$1);
var G__20847 = cljs.core.chunk_rest(seq__20059_20845__$1);
var G__20848 = c__5568__auto___20846;
var G__20849 = cljs.core.count(c__5568__auto___20846);
var G__20850 = (0);
seq__20059_20831 = G__20847;
chunk__20061_20832 = G__20848;
count__20062_20833 = G__20849;
i__20063_20834 = G__20850;
continue;
} else {
var child_20851 = cljs.core.first(seq__20059_20845__$1);
if(cljs.core.truth_(child_20851)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20851);


var G__20852 = cljs.core.next(seq__20059_20845__$1);
var G__20853 = null;
var G__20854 = (0);
var G__20855 = (0);
seq__20059_20831 = G__20852;
chunk__20061_20832 = G__20853;
count__20062_20833 = G__20854;
i__20063_20834 = G__20855;
continue;
} else {
var G__20856 = cljs.core.next(seq__20059_20845__$1);
var G__20857 = null;
var G__20858 = (0);
var G__20859 = (0);
seq__20059_20831 = G__20856;
chunk__20061_20832 = G__20857;
count__20062_20833 = G__20858;
i__20063_20834 = G__20859;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_20830);
}


var G__20860 = seq__20016_20825;
var G__20861 = chunk__20017_20826;
var G__20862 = count__20018_20827;
var G__20863 = (i__20019_20828 + (1));
seq__20016_20825 = G__20860;
chunk__20017_20826 = G__20861;
count__20018_20827 = G__20862;
i__20019_20828 = G__20863;
continue;
} else {
var temp__5804__auto___20864 = cljs.core.seq(seq__20016_20825);
if(temp__5804__auto___20864){
var seq__20016_20865__$1 = temp__5804__auto___20864;
if(cljs.core.chunked_seq_QMARK_(seq__20016_20865__$1)){
var c__5568__auto___20866 = cljs.core.chunk_first(seq__20016_20865__$1);
var G__20867 = cljs.core.chunk_rest(seq__20016_20865__$1);
var G__20868 = c__5568__auto___20866;
var G__20869 = cljs.core.count(c__5568__auto___20866);
var G__20870 = (0);
seq__20016_20825 = G__20867;
chunk__20017_20826 = G__20868;
count__20018_20827 = G__20869;
i__20019_20828 = G__20870;
continue;
} else {
var child_struct_20871 = cljs.core.first(seq__20016_20865__$1);
var children_20872 = shadow.dom.dom_node(child_struct_20871);
if(cljs.core.seq_QMARK_(children_20872)){
var seq__20070_20873 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_20872));
var chunk__20072_20874 = null;
var count__20073_20875 = (0);
var i__20074_20876 = (0);
while(true){
if((i__20074_20876 < count__20073_20875)){
var child_20877 = chunk__20072_20874.cljs$core$IIndexed$_nth$arity$2(null,i__20074_20876);
if(cljs.core.truth_(child_20877)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20877);


var G__20878 = seq__20070_20873;
var G__20879 = chunk__20072_20874;
var G__20880 = count__20073_20875;
var G__20881 = (i__20074_20876 + (1));
seq__20070_20873 = G__20878;
chunk__20072_20874 = G__20879;
count__20073_20875 = G__20880;
i__20074_20876 = G__20881;
continue;
} else {
var G__20882 = seq__20070_20873;
var G__20883 = chunk__20072_20874;
var G__20884 = count__20073_20875;
var G__20885 = (i__20074_20876 + (1));
seq__20070_20873 = G__20882;
chunk__20072_20874 = G__20883;
count__20073_20875 = G__20884;
i__20074_20876 = G__20885;
continue;
}
} else {
var temp__5804__auto___20886__$1 = cljs.core.seq(seq__20070_20873);
if(temp__5804__auto___20886__$1){
var seq__20070_20887__$1 = temp__5804__auto___20886__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20070_20887__$1)){
var c__5568__auto___20888 = cljs.core.chunk_first(seq__20070_20887__$1);
var G__20889 = cljs.core.chunk_rest(seq__20070_20887__$1);
var G__20890 = c__5568__auto___20888;
var G__20891 = cljs.core.count(c__5568__auto___20888);
var G__20892 = (0);
seq__20070_20873 = G__20889;
chunk__20072_20874 = G__20890;
count__20073_20875 = G__20891;
i__20074_20876 = G__20892;
continue;
} else {
var child_20893 = cljs.core.first(seq__20070_20887__$1);
if(cljs.core.truth_(child_20893)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20893);


var G__20894 = cljs.core.next(seq__20070_20887__$1);
var G__20895 = null;
var G__20896 = (0);
var G__20897 = (0);
seq__20070_20873 = G__20894;
chunk__20072_20874 = G__20895;
count__20073_20875 = G__20896;
i__20074_20876 = G__20897;
continue;
} else {
var G__20898 = cljs.core.next(seq__20070_20887__$1);
var G__20899 = null;
var G__20900 = (0);
var G__20901 = (0);
seq__20070_20873 = G__20898;
chunk__20072_20874 = G__20899;
count__20073_20875 = G__20900;
i__20074_20876 = G__20901;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_20872);
}


var G__20902 = cljs.core.next(seq__20016_20865__$1);
var G__20903 = null;
var G__20904 = (0);
var G__20905 = (0);
seq__20016_20825 = G__20902;
chunk__20017_20826 = G__20903;
count__20018_20827 = G__20904;
i__20019_20828 = G__20905;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__20079 = cljs.core.seq(node);
var chunk__20080 = null;
var count__20081 = (0);
var i__20082 = (0);
while(true){
if((i__20082 < count__20081)){
var n = chunk__20080.cljs$core$IIndexed$_nth$arity$2(null,i__20082);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__20912 = seq__20079;
var G__20913 = chunk__20080;
var G__20914 = count__20081;
var G__20915 = (i__20082 + (1));
seq__20079 = G__20912;
chunk__20080 = G__20913;
count__20081 = G__20914;
i__20082 = G__20915;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20079);
if(temp__5804__auto__){
var seq__20079__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20079__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20079__$1);
var G__20917 = cljs.core.chunk_rest(seq__20079__$1);
var G__20918 = c__5568__auto__;
var G__20919 = cljs.core.count(c__5568__auto__);
var G__20920 = (0);
seq__20079 = G__20917;
chunk__20080 = G__20918;
count__20081 = G__20919;
i__20082 = G__20920;
continue;
} else {
var n = cljs.core.first(seq__20079__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__20921 = cljs.core.next(seq__20079__$1);
var G__20922 = null;
var G__20923 = (0);
var G__20924 = (0);
seq__20079 = G__20921;
chunk__20080 = G__20922;
count__20081 = G__20923;
i__20082 = G__20924;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__20101 = arguments.length;
switch (G__20101) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__20108 = arguments.length;
switch (G__20108) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__20120 = arguments.length;
switch (G__20120) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20929 = arguments.length;
var i__5770__auto___20930 = (0);
while(true){
if((i__5770__auto___20930 < len__5769__auto___20929)){
args__5775__auto__.push((arguments[i__5770__auto___20930]));

var G__20931 = (i__5770__auto___20930 + (1));
i__5770__auto___20930 = G__20931;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__20178_20932 = cljs.core.seq(nodes);
var chunk__20179_20933 = null;
var count__20180_20934 = (0);
var i__20181_20935 = (0);
while(true){
if((i__20181_20935 < count__20180_20934)){
var node_20936 = chunk__20179_20933.cljs$core$IIndexed$_nth$arity$2(null,i__20181_20935);
fragment.appendChild(shadow.dom._to_dom(node_20936));


var G__20937 = seq__20178_20932;
var G__20938 = chunk__20179_20933;
var G__20939 = count__20180_20934;
var G__20940 = (i__20181_20935 + (1));
seq__20178_20932 = G__20937;
chunk__20179_20933 = G__20938;
count__20180_20934 = G__20939;
i__20181_20935 = G__20940;
continue;
} else {
var temp__5804__auto___20941 = cljs.core.seq(seq__20178_20932);
if(temp__5804__auto___20941){
var seq__20178_20942__$1 = temp__5804__auto___20941;
if(cljs.core.chunked_seq_QMARK_(seq__20178_20942__$1)){
var c__5568__auto___20943 = cljs.core.chunk_first(seq__20178_20942__$1);
var G__20944 = cljs.core.chunk_rest(seq__20178_20942__$1);
var G__20945 = c__5568__auto___20943;
var G__20946 = cljs.core.count(c__5568__auto___20943);
var G__20947 = (0);
seq__20178_20932 = G__20944;
chunk__20179_20933 = G__20945;
count__20180_20934 = G__20946;
i__20181_20935 = G__20947;
continue;
} else {
var node_20949 = cljs.core.first(seq__20178_20942__$1);
fragment.appendChild(shadow.dom._to_dom(node_20949));


var G__20950 = cljs.core.next(seq__20178_20942__$1);
var G__20951 = null;
var G__20952 = (0);
var G__20953 = (0);
seq__20178_20932 = G__20950;
chunk__20179_20933 = G__20951;
count__20180_20934 = G__20952;
i__20181_20935 = G__20953;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq20162){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20162));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__20195_20954 = cljs.core.seq(scripts);
var chunk__20196_20955 = null;
var count__20197_20956 = (0);
var i__20198_20957 = (0);
while(true){
if((i__20198_20957 < count__20197_20956)){
var vec__20206_20958 = chunk__20196_20955.cljs$core$IIndexed$_nth$arity$2(null,i__20198_20957);
var script_tag_20959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20206_20958,(0),null);
var script_body_20960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20206_20958,(1),null);
eval(script_body_20960);


var G__20961 = seq__20195_20954;
var G__20962 = chunk__20196_20955;
var G__20963 = count__20197_20956;
var G__20964 = (i__20198_20957 + (1));
seq__20195_20954 = G__20961;
chunk__20196_20955 = G__20962;
count__20197_20956 = G__20963;
i__20198_20957 = G__20964;
continue;
} else {
var temp__5804__auto___20965 = cljs.core.seq(seq__20195_20954);
if(temp__5804__auto___20965){
var seq__20195_20966__$1 = temp__5804__auto___20965;
if(cljs.core.chunked_seq_QMARK_(seq__20195_20966__$1)){
var c__5568__auto___20967 = cljs.core.chunk_first(seq__20195_20966__$1);
var G__20968 = cljs.core.chunk_rest(seq__20195_20966__$1);
var G__20969 = c__5568__auto___20967;
var G__20970 = cljs.core.count(c__5568__auto___20967);
var G__20971 = (0);
seq__20195_20954 = G__20968;
chunk__20196_20955 = G__20969;
count__20197_20956 = G__20970;
i__20198_20957 = G__20971;
continue;
} else {
var vec__20209_20972 = cljs.core.first(seq__20195_20966__$1);
var script_tag_20973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20209_20972,(0),null);
var script_body_20974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20209_20972,(1),null);
eval(script_body_20974);


var G__20975 = cljs.core.next(seq__20195_20966__$1);
var G__20976 = null;
var G__20977 = (0);
var G__20978 = (0);
seq__20195_20954 = G__20975;
chunk__20196_20955 = G__20976;
count__20197_20956 = G__20977;
i__20198_20957 = G__20978;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__20212){
var vec__20213 = p__20212;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20213,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20213,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__20219 = arguments.length;
switch (G__20219) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__20238 = cljs.core.seq(style_keys);
var chunk__20239 = null;
var count__20240 = (0);
var i__20241 = (0);
while(true){
if((i__20241 < count__20240)){
var it = chunk__20239.cljs$core$IIndexed$_nth$arity$2(null,i__20241);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__20982 = seq__20238;
var G__20983 = chunk__20239;
var G__20984 = count__20240;
var G__20985 = (i__20241 + (1));
seq__20238 = G__20982;
chunk__20239 = G__20983;
count__20240 = G__20984;
i__20241 = G__20985;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20238);
if(temp__5804__auto__){
var seq__20238__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20238__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20238__$1);
var G__20986 = cljs.core.chunk_rest(seq__20238__$1);
var G__20987 = c__5568__auto__;
var G__20988 = cljs.core.count(c__5568__auto__);
var G__20989 = (0);
seq__20238 = G__20986;
chunk__20239 = G__20987;
count__20240 = G__20988;
i__20241 = G__20989;
continue;
} else {
var it = cljs.core.first(seq__20238__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__20990 = cljs.core.next(seq__20238__$1);
var G__20991 = null;
var G__20992 = (0);
var G__20993 = (0);
seq__20238 = G__20990;
chunk__20239 = G__20991;
count__20240 = G__20992;
i__20241 = G__20993;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20248,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20260 = k20248;
var G__20260__$1 = (((G__20260 instanceof cljs.core.Keyword))?G__20260.fqn:null);
switch (G__20260__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20248,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20266){
var vec__20267 = p__20266;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20267,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20267,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20247){
var self__ = this;
var G__20247__$1 = this;
return (new cljs.core.RecordIter((0),G__20247__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20249,other20250){
var self__ = this;
var this20249__$1 = this;
return (((!((other20250 == null)))) && ((((this20249__$1.constructor === other20250.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20249__$1.x,other20250.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20249__$1.y,other20250.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20249__$1.__extmap,other20250.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20248){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20291 = k20248;
var G__20291__$1 = (((G__20291 instanceof cljs.core.Keyword))?G__20291.fqn:null);
switch (G__20291__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20248);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20247){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20295 = cljs.core.keyword_identical_QMARK_;
var expr__20296 = k__5352__auto__;
if(cljs.core.truth_((pred__20295.cljs$core$IFn$_invoke$arity$2 ? pred__20295.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__20296) : pred__20295.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__20296)))){
return (new shadow.dom.Coordinate(G__20247,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20295.cljs$core$IFn$_invoke$arity$2 ? pred__20295.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__20296) : pred__20295.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__20296)))){
return (new shadow.dom.Coordinate(self__.x,G__20247,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20247),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20247){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__20247,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__20253){
var extmap__5385__auto__ = (function (){var G__20309 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20253,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__20253)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20309);
} else {
return G__20309;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__20253),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__20253),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20322,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20333 = k20322;
var G__20333__$1 = (((G__20333 instanceof cljs.core.Keyword))?G__20333.fqn:null);
switch (G__20333__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20322,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20337){
var vec__20338 = p__20337;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20338,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20338,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20321){
var self__ = this;
var G__20321__$1 = this;
return (new cljs.core.RecordIter((0),G__20321__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20323,other20324){
var self__ = this;
var this20323__$1 = this;
return (((!((other20324 == null)))) && ((((this20323__$1.constructor === other20324.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20323__$1.w,other20324.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20323__$1.h,other20324.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20323__$1.__extmap,other20324.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20322){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20368 = k20322;
var G__20368__$1 = (((G__20368 instanceof cljs.core.Keyword))?G__20368.fqn:null);
switch (G__20368__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20322);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20321){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20372 = cljs.core.keyword_identical_QMARK_;
var expr__20373 = k__5352__auto__;
if(cljs.core.truth_((pred__20372.cljs$core$IFn$_invoke$arity$2 ? pred__20372.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__20373) : pred__20372.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__20373)))){
return (new shadow.dom.Size(G__20321,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20372.cljs$core$IFn$_invoke$arity$2 ? pred__20372.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__20373) : pred__20372.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__20373)))){
return (new shadow.dom.Size(self__.w,G__20321,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20321),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20321){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__20321,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__20326){
var extmap__5385__auto__ = (function (){var G__20375 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20326,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__20326)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20375);
} else {
return G__20375;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__20326),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__20326),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__21035 = (i + (1));
var G__21036 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__21035;
ret = G__21036;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20380){
var vec__20381 = p__20380;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20381,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20381,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__20385 = arguments.length;
switch (G__20385) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__21044 = ps;
var G__21045 = (i + (1));
el__$1 = G__21044;
i = G__21045;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__20398 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20398,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20398,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20398,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__20401_21054 = cljs.core.seq(props);
var chunk__20402_21055 = null;
var count__20403_21056 = (0);
var i__20404_21057 = (0);
while(true){
if((i__20404_21057 < count__20403_21056)){
var vec__20417_21058 = chunk__20402_21055.cljs$core$IIndexed$_nth$arity$2(null,i__20404_21057);
var k_21059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20417_21058,(0),null);
var v_21060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20417_21058,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_21059);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21059),v_21060);


var G__21061 = seq__20401_21054;
var G__21062 = chunk__20402_21055;
var G__21063 = count__20403_21056;
var G__21064 = (i__20404_21057 + (1));
seq__20401_21054 = G__21061;
chunk__20402_21055 = G__21062;
count__20403_21056 = G__21063;
i__20404_21057 = G__21064;
continue;
} else {
var temp__5804__auto___21065 = cljs.core.seq(seq__20401_21054);
if(temp__5804__auto___21065){
var seq__20401_21066__$1 = temp__5804__auto___21065;
if(cljs.core.chunked_seq_QMARK_(seq__20401_21066__$1)){
var c__5568__auto___21067 = cljs.core.chunk_first(seq__20401_21066__$1);
var G__21068 = cljs.core.chunk_rest(seq__20401_21066__$1);
var G__21069 = c__5568__auto___21067;
var G__21070 = cljs.core.count(c__5568__auto___21067);
var G__21071 = (0);
seq__20401_21054 = G__21068;
chunk__20402_21055 = G__21069;
count__20403_21056 = G__21070;
i__20404_21057 = G__21071;
continue;
} else {
var vec__20441_21072 = cljs.core.first(seq__20401_21066__$1);
var k_21073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20441_21072,(0),null);
var v_21074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20441_21072,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_21073);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21073),v_21074);


var G__21076 = cljs.core.next(seq__20401_21066__$1);
var G__21077 = null;
var G__21078 = (0);
var G__21079 = (0);
seq__20401_21054 = G__21076;
chunk__20402_21055 = G__21077;
count__20403_21056 = G__21078;
i__20404_21057 = G__21079;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__20548 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20548,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20548,(1),null);
var seq__20552_21083 = cljs.core.seq(node_children);
var chunk__20554_21084 = null;
var count__20555_21085 = (0);
var i__20556_21086 = (0);
while(true){
if((i__20556_21086 < count__20555_21085)){
var child_struct_21090 = chunk__20554_21084.cljs$core$IIndexed$_nth$arity$2(null,i__20556_21086);
if((!((child_struct_21090 == null)))){
if(typeof child_struct_21090 === 'string'){
var text_21091 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21091),child_struct_21090].join(''));
} else {
var children_21099 = shadow.dom.svg_node(child_struct_21090);
if(cljs.core.seq_QMARK_(children_21099)){
var seq__20580_21100 = cljs.core.seq(children_21099);
var chunk__20582_21101 = null;
var count__20583_21102 = (0);
var i__20584_21103 = (0);
while(true){
if((i__20584_21103 < count__20583_21102)){
var child_21104 = chunk__20582_21101.cljs$core$IIndexed$_nth$arity$2(null,i__20584_21103);
if(cljs.core.truth_(child_21104)){
node.appendChild(child_21104);


var G__21105 = seq__20580_21100;
var G__21106 = chunk__20582_21101;
var G__21107 = count__20583_21102;
var G__21108 = (i__20584_21103 + (1));
seq__20580_21100 = G__21105;
chunk__20582_21101 = G__21106;
count__20583_21102 = G__21107;
i__20584_21103 = G__21108;
continue;
} else {
var G__21109 = seq__20580_21100;
var G__21110 = chunk__20582_21101;
var G__21111 = count__20583_21102;
var G__21112 = (i__20584_21103 + (1));
seq__20580_21100 = G__21109;
chunk__20582_21101 = G__21110;
count__20583_21102 = G__21111;
i__20584_21103 = G__21112;
continue;
}
} else {
var temp__5804__auto___21113 = cljs.core.seq(seq__20580_21100);
if(temp__5804__auto___21113){
var seq__20580_21114__$1 = temp__5804__auto___21113;
if(cljs.core.chunked_seq_QMARK_(seq__20580_21114__$1)){
var c__5568__auto___21115 = cljs.core.chunk_first(seq__20580_21114__$1);
var G__21116 = cljs.core.chunk_rest(seq__20580_21114__$1);
var G__21117 = c__5568__auto___21115;
var G__21118 = cljs.core.count(c__5568__auto___21115);
var G__21119 = (0);
seq__20580_21100 = G__21116;
chunk__20582_21101 = G__21117;
count__20583_21102 = G__21118;
i__20584_21103 = G__21119;
continue;
} else {
var child_21120 = cljs.core.first(seq__20580_21114__$1);
if(cljs.core.truth_(child_21120)){
node.appendChild(child_21120);


var G__21121 = cljs.core.next(seq__20580_21114__$1);
var G__21122 = null;
var G__21123 = (0);
var G__21124 = (0);
seq__20580_21100 = G__21121;
chunk__20582_21101 = G__21122;
count__20583_21102 = G__21123;
i__20584_21103 = G__21124;
continue;
} else {
var G__21125 = cljs.core.next(seq__20580_21114__$1);
var G__21126 = null;
var G__21127 = (0);
var G__21128 = (0);
seq__20580_21100 = G__21125;
chunk__20582_21101 = G__21126;
count__20583_21102 = G__21127;
i__20584_21103 = G__21128;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21099);
}
}


var G__21129 = seq__20552_21083;
var G__21130 = chunk__20554_21084;
var G__21131 = count__20555_21085;
var G__21132 = (i__20556_21086 + (1));
seq__20552_21083 = G__21129;
chunk__20554_21084 = G__21130;
count__20555_21085 = G__21131;
i__20556_21086 = G__21132;
continue;
} else {
var G__21133 = seq__20552_21083;
var G__21134 = chunk__20554_21084;
var G__21135 = count__20555_21085;
var G__21136 = (i__20556_21086 + (1));
seq__20552_21083 = G__21133;
chunk__20554_21084 = G__21134;
count__20555_21085 = G__21135;
i__20556_21086 = G__21136;
continue;
}
} else {
var temp__5804__auto___21137 = cljs.core.seq(seq__20552_21083);
if(temp__5804__auto___21137){
var seq__20552_21138__$1 = temp__5804__auto___21137;
if(cljs.core.chunked_seq_QMARK_(seq__20552_21138__$1)){
var c__5568__auto___21139 = cljs.core.chunk_first(seq__20552_21138__$1);
var G__21140 = cljs.core.chunk_rest(seq__20552_21138__$1);
var G__21141 = c__5568__auto___21139;
var G__21142 = cljs.core.count(c__5568__auto___21139);
var G__21143 = (0);
seq__20552_21083 = G__21140;
chunk__20554_21084 = G__21141;
count__20555_21085 = G__21142;
i__20556_21086 = G__21143;
continue;
} else {
var child_struct_21144 = cljs.core.first(seq__20552_21138__$1);
if((!((child_struct_21144 == null)))){
if(typeof child_struct_21144 === 'string'){
var text_21145 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21145),child_struct_21144].join(''));
} else {
var children_21146 = shadow.dom.svg_node(child_struct_21144);
if(cljs.core.seq_QMARK_(children_21146)){
var seq__20591_21147 = cljs.core.seq(children_21146);
var chunk__20593_21148 = null;
var count__20594_21149 = (0);
var i__20595_21150 = (0);
while(true){
if((i__20595_21150 < count__20594_21149)){
var child_21151 = chunk__20593_21148.cljs$core$IIndexed$_nth$arity$2(null,i__20595_21150);
if(cljs.core.truth_(child_21151)){
node.appendChild(child_21151);


var G__21152 = seq__20591_21147;
var G__21153 = chunk__20593_21148;
var G__21154 = count__20594_21149;
var G__21155 = (i__20595_21150 + (1));
seq__20591_21147 = G__21152;
chunk__20593_21148 = G__21153;
count__20594_21149 = G__21154;
i__20595_21150 = G__21155;
continue;
} else {
var G__21156 = seq__20591_21147;
var G__21157 = chunk__20593_21148;
var G__21158 = count__20594_21149;
var G__21159 = (i__20595_21150 + (1));
seq__20591_21147 = G__21156;
chunk__20593_21148 = G__21157;
count__20594_21149 = G__21158;
i__20595_21150 = G__21159;
continue;
}
} else {
var temp__5804__auto___21160__$1 = cljs.core.seq(seq__20591_21147);
if(temp__5804__auto___21160__$1){
var seq__20591_21161__$1 = temp__5804__auto___21160__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20591_21161__$1)){
var c__5568__auto___21162 = cljs.core.chunk_first(seq__20591_21161__$1);
var G__21163 = cljs.core.chunk_rest(seq__20591_21161__$1);
var G__21164 = c__5568__auto___21162;
var G__21165 = cljs.core.count(c__5568__auto___21162);
var G__21166 = (0);
seq__20591_21147 = G__21163;
chunk__20593_21148 = G__21164;
count__20594_21149 = G__21165;
i__20595_21150 = G__21166;
continue;
} else {
var child_21167 = cljs.core.first(seq__20591_21161__$1);
if(cljs.core.truth_(child_21167)){
node.appendChild(child_21167);


var G__21168 = cljs.core.next(seq__20591_21161__$1);
var G__21169 = null;
var G__21170 = (0);
var G__21171 = (0);
seq__20591_21147 = G__21168;
chunk__20593_21148 = G__21169;
count__20594_21149 = G__21170;
i__20595_21150 = G__21171;
continue;
} else {
var G__21172 = cljs.core.next(seq__20591_21161__$1);
var G__21173 = null;
var G__21174 = (0);
var G__21175 = (0);
seq__20591_21147 = G__21172;
chunk__20593_21148 = G__21173;
count__20594_21149 = G__21174;
i__20595_21150 = G__21175;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21146);
}
}


var G__21177 = cljs.core.next(seq__20552_21138__$1);
var G__21178 = null;
var G__21179 = (0);
var G__21180 = (0);
seq__20552_21083 = G__21177;
chunk__20554_21084 = G__21178;
count__20555_21085 = G__21179;
i__20556_21086 = G__21180;
continue;
} else {
var G__21181 = cljs.core.next(seq__20552_21138__$1);
var G__21182 = null;
var G__21183 = (0);
var G__21184 = (0);
seq__20552_21083 = G__21181;
chunk__20554_21084 = G__21182;
count__20555_21085 = G__21183;
i__20556_21086 = G__21184;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21185 = arguments.length;
var i__5770__auto___21186 = (0);
while(true){
if((i__5770__auto___21186 < len__5769__auto___21185)){
args__5775__auto__.push((arguments[i__5770__auto___21186]));

var G__21187 = (i__5770__auto___21186 + (1));
i__5770__auto___21186 = G__21187;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq20623){
var G__20624 = cljs.core.first(seq20623);
var seq20623__$1 = cljs.core.next(seq20623);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20624,seq20623__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__20627 = arguments.length;
switch (G__20627) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__17246__auto___21191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17024__auto__ = (function (state_20635){
var state_val_20636 = (state_20635[(1)]);
if((state_val_20636 === (1))){
var state_20635__$1 = state_20635;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20635__$1,(2),once_or_cleanup);
} else {
if((state_val_20636 === (2))){
var inst_20632 = (state_20635[(2)]);
var inst_20633 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_20635__$1 = (function (){var statearr_20638 = state_20635;
(statearr_20638[(7)] = inst_20632);

return statearr_20638;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20635__$1,inst_20633);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__17025__auto__ = null;
var shadow$dom$state_machine__17025__auto____0 = (function (){
var statearr_20639 = [null,null,null,null,null,null,null,null];
(statearr_20639[(0)] = shadow$dom$state_machine__17025__auto__);

(statearr_20639[(1)] = (1));

return statearr_20639;
});
var shadow$dom$state_machine__17025__auto____1 = (function (state_20635){
while(true){
var ret_value__17026__auto__ = (function (){try{while(true){
var result__17027__auto__ = switch__17024__auto__(state_20635);
if(cljs.core.keyword_identical_QMARK_(result__17027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17027__auto__;
}
break;
}
}catch (e20640){var ex__17028__auto__ = e20640;
var statearr_20641_21192 = state_20635;
(statearr_20641_21192[(2)] = ex__17028__auto__);


if(cljs.core.seq((state_20635[(4)]))){
var statearr_20642_21193 = state_20635;
(statearr_20642_21193[(1)] = cljs.core.first((state_20635[(4)])));

} else {
throw ex__17028__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21194 = state_20635;
state_20635 = G__21194;
continue;
} else {
return ret_value__17026__auto__;
}
break;
}
});
shadow$dom$state_machine__17025__auto__ = function(state_20635){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__17025__auto____0.call(this);
case 1:
return shadow$dom$state_machine__17025__auto____1.call(this,state_20635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__17025__auto____0;
shadow$dom$state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__17025__auto____1;
return shadow$dom$state_machine__17025__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_20643 = f__17247__auto__();
(statearr_20643[(6)] = c__17246__auto___21191);

return statearr_20643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
