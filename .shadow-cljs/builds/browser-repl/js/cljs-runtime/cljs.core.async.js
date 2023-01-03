goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17308 = arguments.length;
switch (G__17308) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17313 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17313 = (function (f,blockable,meta17314){
this.f = f;
this.blockable = blockable;
this.meta17314 = meta17314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17315,meta17314__$1){
var self__ = this;
var _17315__$1 = this;
return (new cljs.core.async.t_cljs$core$async17313(self__.f,self__.blockable,meta17314__$1));
}));

(cljs.core.async.t_cljs$core$async17313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17315){
var self__ = this;
var _17315__$1 = this;
return self__.meta17314;
}));

(cljs.core.async.t_cljs$core$async17313.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17313.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17313.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17313.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17314","meta17314",-13243640,null)], null);
}));

(cljs.core.async.t_cljs$core$async17313.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17313");

(cljs.core.async.t_cljs$core$async17313.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17313");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17313.
 */
cljs.core.async.__GT_t_cljs$core$async17313 = (function cljs$core$async$__GT_t_cljs$core$async17313(f__$1,blockable__$1,meta17314){
return (new cljs.core.async.t_cljs$core$async17313(f__$1,blockable__$1,meta17314));
});

}

return (new cljs.core.async.t_cljs$core$async17313(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__17322 = arguments.length;
switch (G__17322) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__17324 = arguments.length;
switch (G__17324) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__17328 = arguments.length;
switch (G__17328) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19540 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19540) : fn1.call(null,val_19540));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19540) : fn1.call(null,val_19540));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__17339 = arguments.length;
switch (G__17339) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___19542 = n;
var x_19543 = (0);
while(true){
if((x_19543 < n__5636__auto___19542)){
(a[x_19543] = x_19543);

var G__19544 = (x_19543 + (1));
x_19543 = G__19544;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17349 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17349 = (function (flag,meta17350){
this.flag = flag;
this.meta17350 = meta17350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17351,meta17350__$1){
var self__ = this;
var _17351__$1 = this;
return (new cljs.core.async.t_cljs$core$async17349(self__.flag,meta17350__$1));
}));

(cljs.core.async.t_cljs$core$async17349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17351){
var self__ = this;
var _17351__$1 = this;
return self__.meta17350;
}));

(cljs.core.async.t_cljs$core$async17349.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17349.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17349.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17349.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17349.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17350","meta17350",-1579198439,null)], null);
}));

(cljs.core.async.t_cljs$core$async17349.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17349");

(cljs.core.async.t_cljs$core$async17349.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17349");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17349.
 */
cljs.core.async.__GT_t_cljs$core$async17349 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17349(flag__$1,meta17350){
return (new cljs.core.async.t_cljs$core$async17349(flag__$1,meta17350));
});

}

return (new cljs.core.async.t_cljs$core$async17349(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17359 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17359 = (function (flag,cb,meta17360){
this.flag = flag;
this.cb = cb;
this.meta17360 = meta17360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17361,meta17360__$1){
var self__ = this;
var _17361__$1 = this;
return (new cljs.core.async.t_cljs$core$async17359(self__.flag,self__.cb,meta17360__$1));
}));

(cljs.core.async.t_cljs$core$async17359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17361){
var self__ = this;
var _17361__$1 = this;
return self__.meta17360;
}));

(cljs.core.async.t_cljs$core$async17359.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17359.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17359.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17359.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17360","meta17360",472013856,null)], null);
}));

(cljs.core.async.t_cljs$core$async17359.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17359.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17359");

(cljs.core.async.t_cljs$core$async17359.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17359");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17359.
 */
cljs.core.async.__GT_t_cljs$core$async17359 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17359(flag__$1,cb__$1,meta17360){
return (new cljs.core.async.t_cljs$core$async17359(flag__$1,cb__$1,meta17360));
});

}

return (new cljs.core.async.t_cljs$core$async17359(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17367_SHARP_){
var G__17372 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17367_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17372) : fret.call(null,G__17372));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17368_SHARP_){
var G__17374 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17368_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17374) : fret.call(null,G__17374));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19547 = (i + (1));
i = G__19547;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19548 = arguments.length;
var i__5770__auto___19549 = (0);
while(true){
if((i__5770__auto___19549 < len__5769__auto___19548)){
args__5775__auto__.push((arguments[i__5770__auto___19549]));

var G__19550 = (i__5770__auto___19549 + (1));
i__5770__auto___19549 = G__19550;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17377){
var map__17378 = p__17377;
var map__17378__$1 = cljs.core.__destructure_map(map__17378);
var opts = map__17378__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17375){
var G__17376 = cljs.core.first(seq17375);
var seq17375__$1 = cljs.core.next(seq17375);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17376,seq17375__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__17403 = arguments.length;
switch (G__17403) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17246__auto___19565 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17024__auto__ = (function (state_17507){
var state_val_17508 = (state_17507[(1)]);
if((state_val_17508 === (7))){
var inst_17503 = (state_17507[(2)]);
var state_17507__$1 = state_17507;
var statearr_17510_19566 = state_17507__$1;
(statearr_17510_19566[(2)] = inst_17503);

(statearr_17510_19566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17508 === (1))){
var state_17507__$1 = state_17507;
var statearr_17511_19568 = state_17507__$1;
(statearr_17511_19568[(2)] = null);

(statearr_17511_19568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17508 === (4))){
var inst_17473 = (state_17507[(7)]);
var inst_17473__$1 = (state_17507[(2)]);
var inst_17486 = (inst_17473__$1 == null);
var state_17507__$1 = (function (){var statearr_17512 = state_17507;
(statearr_17512[(7)] = inst_17473__$1);

return statearr_17512;
})();
if(cljs.core.truth_(inst_17486)){
var statearr_17513_19571 = state_17507__$1;
(statearr_17513_19571[(1)] = (5));

} else {
var statearr_17514_19573 = state_17507__$1;
(statearr_17514_19573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17508 === (13))){
var state_17507__$1 = state_17507;
var statearr_17515_19574 = state_17507__$1;
(statearr_17515_19574[(2)] = null);

(statearr_17515_19574[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17508 === (6))){
var inst_17473 = (state_17507[(7)]);
var state_17507__$1 = state_17507;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17507__$1,(11),to,inst_17473);
} else {
if((state_val_17508 === (3))){
var inst_17505 = (state_17507[(2)]);
var state_17507__$1 = state_17507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17507__$1,inst_17505);
} else {
if((state_val_17508 === (12))){
var state_17507__$1 = state_17507;
var statearr_17517_19577 = state_17507__$1;
(statearr_17517_19577[(2)] = null);

(statearr_17517_19577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17508 === (2))){
var state_17507__$1 = state_17507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17507__$1,(4),from);
} else {
if((state_val_17508 === (11))){
var inst_17496 = (state_17507[(2)]);
var state_17507__$1 = state_17507;
if(cljs.core.truth_(inst_17496)){
var statearr_17518_19578 = state_17507__$1;
(statearr_17518_19578[(1)] = (12));

} else {
var statearr_17519_19579 = state_17507__$1;
(statearr_17519_19579[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17508 === (9))){
var state_17507__$1 = state_17507;
var statearr_17520_19580 = state_17507__$1;
(statearr_17520_19580[(2)] = null);

(statearr_17520_19580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17508 === (5))){
var state_17507__$1 = state_17507;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17521_19581 = state_17507__$1;
(statearr_17521_19581[(1)] = (8));

} else {
var statearr_17522_19582 = state_17507__$1;
(statearr_17522_19582[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17508 === (14))){
var inst_17501 = (state_17507[(2)]);
var state_17507__$1 = state_17507;
var statearr_17523_19583 = state_17507__$1;
(statearr_17523_19583[(2)] = inst_17501);

(statearr_17523_19583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17508 === (10))){
var inst_17493 = (state_17507[(2)]);
var state_17507__$1 = state_17507;
var statearr_17524_19584 = state_17507__$1;
(statearr_17524_19584[(2)] = inst_17493);

(statearr_17524_19584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17508 === (8))){
var inst_17490 = cljs.core.async.close_BANG_(to);
var state_17507__$1 = state_17507;
var statearr_17525_19585 = state_17507__$1;
(statearr_17525_19585[(2)] = inst_17490);

(statearr_17525_19585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17025__auto__ = null;
var cljs$core$async$state_machine__17025__auto____0 = (function (){
var statearr_17526 = [null,null,null,null,null,null,null,null];
(statearr_17526[(0)] = cljs$core$async$state_machine__17025__auto__);

(statearr_17526[(1)] = (1));

return statearr_17526;
});
var cljs$core$async$state_machine__17025__auto____1 = (function (state_17507){
while(true){
var ret_value__17026__auto__ = (function (){try{while(true){
var result__17027__auto__ = switch__17024__auto__(state_17507);
if(cljs.core.keyword_identical_QMARK_(result__17027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17027__auto__;
}
break;
}
}catch (e17527){var ex__17028__auto__ = e17527;
var statearr_17528_19587 = state_17507;
(statearr_17528_19587[(2)] = ex__17028__auto__);


if(cljs.core.seq((state_17507[(4)]))){
var statearr_17529_19590 = state_17507;
(statearr_17529_19590[(1)] = cljs.core.first((state_17507[(4)])));

} else {
throw ex__17028__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19592 = state_17507;
state_17507 = G__19592;
continue;
} else {
return ret_value__17026__auto__;
}
break;
}
});
cljs$core$async$state_machine__17025__auto__ = function(state_17507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17025__auto____1.call(this,state_17507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17025__auto____0;
cljs$core$async$state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17025__auto____1;
return cljs$core$async$state_machine__17025__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_17530 = f__17247__auto__();
(statearr_17530[(6)] = c__17246__auto___19565);

return statearr_17530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__17531){
var vec__17532 = p__17531;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17532,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17532,(1),null);
var job = vec__17532;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17246__auto___19593 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17024__auto__ = (function (state_17539){
var state_val_17540 = (state_17539[(1)]);
if((state_val_17540 === (1))){
var state_17539__$1 = state_17539;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17539__$1,(2),res,v);
} else {
if((state_val_17540 === (2))){
var inst_17536 = (state_17539[(2)]);
var inst_17537 = cljs.core.async.close_BANG_(res);
var state_17539__$1 = (function (){var statearr_17541 = state_17539;
(statearr_17541[(7)] = inst_17536);

return statearr_17541;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17539__$1,inst_17537);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17025__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17025__auto____0 = (function (){
var statearr_17542 = [null,null,null,null,null,null,null,null];
(statearr_17542[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17025__auto__);

(statearr_17542[(1)] = (1));

return statearr_17542;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17025__auto____1 = (function (state_17539){
while(true){
var ret_value__17026__auto__ = (function (){try{while(true){
var result__17027__auto__ = switch__17024__auto__(state_17539);
if(cljs.core.keyword_identical_QMARK_(result__17027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17027__auto__;
}
break;
}
}catch (e17543){var ex__17028__auto__ = e17543;
var statearr_17544_19595 = state_17539;
(statearr_17544_19595[(2)] = ex__17028__auto__);


if(cljs.core.seq((state_17539[(4)]))){
var statearr_17545_19597 = state_17539;
(statearr_17545_19597[(1)] = cljs.core.first((state_17539[(4)])));

} else {
throw ex__17028__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19598 = state_17539;
state_17539 = G__19598;
continue;
} else {
return ret_value__17026__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17025__auto__ = function(state_17539){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17025__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17025__auto____1.call(this,state_17539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17025__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17025__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17025__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_17546 = f__17247__auto__();
(statearr_17546[(6)] = c__17246__auto___19593);

return statearr_17546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__17547){
var vec__17548 = p__17547;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17548,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17548,(1),null);
var job = vec__17548;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___19600 = n;
var __19601 = (0);
while(true){
if((__19601 < n__5636__auto___19600)){
var G__17551_19604 = type;
var G__17551_19605__$1 = (((G__17551_19604 instanceof cljs.core.Keyword))?G__17551_19604.fqn:null);
switch (G__17551_19605__$1) {
case "compute":
var c__17246__auto___19607 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19601,c__17246__auto___19607,G__17551_19604,G__17551_19605__$1,n__5636__auto___19600,jobs,results,process__$1,async){
return (function (){
var f__17247__auto__ = (function (){var switch__17024__auto__ = ((function (__19601,c__17246__auto___19607,G__17551_19604,G__17551_19605__$1,n__5636__auto___19600,jobs,results,process__$1,async){
return (function (state_17564){
var state_val_17565 = (state_17564[(1)]);
if((state_val_17565 === (1))){
var state_17564__$1 = state_17564;
var statearr_17566_19608 = state_17564__$1;
(statearr_17566_19608[(2)] = null);

(statearr_17566_19608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (2))){
var state_17564__$1 = state_17564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17564__$1,(4),jobs);
} else {
if((state_val_17565 === (3))){
var inst_17562 = (state_17564[(2)]);
var state_17564__$1 = state_17564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17564__$1,inst_17562);
} else {
if((state_val_17565 === (4))){
var inst_17554 = (state_17564[(2)]);
var inst_17555 = process__$1(inst_17554);
var state_17564__$1 = state_17564;
if(cljs.core.truth_(inst_17555)){
var statearr_17567_19609 = state_17564__$1;
(statearr_17567_19609[(1)] = (5));

} else {
var statearr_17568_19610 = state_17564__$1;
(statearr_17568_19610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (5))){
var state_17564__$1 = state_17564;
var statearr_17569_19611 = state_17564__$1;
(statearr_17569_19611[(2)] = null);

(statearr_17569_19611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (6))){
var state_17564__$1 = state_17564;
var statearr_17570_19612 = state_17564__$1;
(statearr_17570_19612[(2)] = null);

(statearr_17570_19612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (7))){
var inst_17560 = (state_17564[(2)]);
var state_17564__$1 = state_17564;
var statearr_17571_19613 = state_17564__$1;
(statearr_17571_19613[(2)] = inst_17560);

(statearr_17571_19613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19601,c__17246__auto___19607,G__17551_19604,G__17551_19605__$1,n__5636__auto___19600,jobs,results,process__$1,async))
;
return ((function (__19601,switch__17024__auto__,c__17246__auto___19607,G__17551_19604,G__17551_19605__$1,n__5636__auto___19600,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17025__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17025__auto____0 = (function (){
var statearr_17572 = [null,null,null,null,null,null,null];
(statearr_17572[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17025__auto__);

(statearr_17572[(1)] = (1));

return statearr_17572;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17025__auto____1 = (function (state_17564){
while(true){
var ret_value__17026__auto__ = (function (){try{while(true){
var result__17027__auto__ = switch__17024__auto__(state_17564);
if(cljs.core.keyword_identical_QMARK_(result__17027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17027__auto__;
}
break;
}
}catch (e17573){var ex__17028__auto__ = e17573;
var statearr_17574_19616 = state_17564;
(statearr_17574_19616[(2)] = ex__17028__auto__);


if(cljs.core.seq((state_17564[(4)]))){
var statearr_17575_19617 = state_17564;
(statearr_17575_19617[(1)] = cljs.core.first((state_17564[(4)])));

} else {
throw ex__17028__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19618 = state_17564;
state_17564 = G__19618;
continue;
} else {
return ret_value__17026__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17025__auto__ = function(state_17564){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17025__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17025__auto____1.call(this,state_17564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17025__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17025__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17025__auto__;
})()
;})(__19601,switch__17024__auto__,c__17246__auto___19607,G__17551_19604,G__17551_19605__$1,n__5636__auto___19600,jobs,results,process__$1,async))
})();
var state__17248__auto__ = (function (){var statearr_17576 = f__17247__auto__();
(statearr_17576[(6)] = c__17246__auto___19607);

return statearr_17576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
});})(__19601,c__17246__auto___19607,G__17551_19604,G__17551_19605__$1,n__5636__auto___19600,jobs,results,process__$1,async))
);


break;
case "async":
var c__17246__auto___19619 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19601,c__17246__auto___19619,G__17551_19604,G__17551_19605__$1,n__5636__auto___19600,jobs,results,process__$1,async){
return (function (){
var f__17247__auto__ = (function (){var switch__17024__auto__ = ((function (__19601,c__17246__auto___19619,G__17551_19604,G__17551_19605__$1,n__5636__auto___19600,jobs,results,process__$1,async){
return (function (state_17589){
var state_val_17590 = (state_17589[(1)]);
if((state_val_17590 === (1))){
var state_17589__$1 = state_17589;
var statearr_17591_19620 = state_17589__$1;
(statearr_17591_19620[(2)] = null);

(statearr_17591_19620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17590 === (2))){
var state_17589__$1 = state_17589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17589__$1,(4),jobs);
} else {
if((state_val_17590 === (3))){
var inst_17587 = (state_17589[(2)]);
var state_17589__$1 = state_17589;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17589__$1,inst_17587);
} else {
if((state_val_17590 === (4))){
var inst_17579 = (state_17589[(2)]);
var inst_17580 = async(inst_17579);
var state_17589__$1 = state_17589;
if(cljs.core.truth_(inst_17580)){
var statearr_17592_19623 = state_17589__$1;
(statearr_17592_19623[(1)] = (5));

} else {
var statearr_17593_19624 = state_17589__$1;
(statearr_17593_19624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17590 === (5))){
var state_17589__$1 = state_17589;
var statearr_17594_19625 = state_17589__$1;
(statearr_17594_19625[(2)] = null);

(statearr_17594_19625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17590 === (6))){
var state_17589__$1 = state_17589;
var statearr_17595_19626 = state_17589__$1;
(statearr_17595_19626[(2)] = null);

(statearr_17595_19626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17590 === (7))){
var inst_17585 = (state_17589[(2)]);
var state_17589__$1 = state_17589;
var statearr_17596_19629 = state_17589__$1;
(statearr_17596_19629[(2)] = inst_17585);

(statearr_17596_19629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19601,c__17246__auto___19619,G__17551_19604,G__17551_19605__$1,n__5636__auto___19600,jobs,results,process__$1,async))
;
return ((function (__19601,switch__17024__auto__,c__17246__auto___19619,G__17551_19604,G__17551_19605__$1,n__5636__auto___19600,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17025__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17025__auto____0 = (function (){
var statearr_17597 = [null,null,null,null,null,null,null];
(statearr_17597[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17025__auto__);

(statearr_17597[(1)] = (1));

return statearr_17597;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17025__auto____1 = (function (state_17589){
while(true){
var ret_value__17026__auto__ = (function (){try{while(true){
var result__17027__auto__ = switch__17024__auto__(state_17589);
if(cljs.core.keyword_identical_QMARK_(result__17027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17027__auto__;
}
break;
}
}catch (e17598){var ex__17028__auto__ = e17598;
var statearr_17599_19630 = state_17589;
(statearr_17599_19630[(2)] = ex__17028__auto__);


if(cljs.core.seq((state_17589[(4)]))){
var statearr_17600_19632 = state_17589;
(statearr_17600_19632[(1)] = cljs.core.first((state_17589[(4)])));

} else {
throw ex__17028__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19633 = state_17589;
state_17589 = G__19633;
continue;
} else {
return ret_value__17026__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17025__auto__ = function(state_17589){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17025__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17025__auto____1.call(this,state_17589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17025__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17025__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17025__auto__;
})()
;})(__19601,switch__17024__auto__,c__17246__auto___19619,G__17551_19604,G__17551_19605__$1,n__5636__auto___19600,jobs,results,process__$1,async))
})();
var state__17248__auto__ = (function (){var statearr_17601 = f__17247__auto__();
(statearr_17601[(6)] = c__17246__auto___19619);

return statearr_17601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
});})(__19601,c__17246__auto___19619,G__17551_19604,G__17551_19605__$1,n__5636__auto___19600,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17551_19605__$1)].join('')));

}

var G__19634 = (__19601 + (1));
__19601 = G__19634;
continue;
} else {
}
break;
}

var c__17246__auto___19635 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17024__auto__ = (function (state_17623){
var state_val_17624 = (state_17623[(1)]);
if((state_val_17624 === (7))){
var inst_17619 = (state_17623[(2)]);
var state_17623__$1 = state_17623;
var statearr_17625_19636 = state_17623__$1;
(statearr_17625_19636[(2)] = inst_17619);

(statearr_17625_19636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17624 === (1))){
var state_17623__$1 = state_17623;
var statearr_17626_19637 = state_17623__$1;
(statearr_17626_19637[(2)] = null);

(statearr_17626_19637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17624 === (4))){
var inst_17604 = (state_17623[(7)]);
var inst_17604__$1 = (state_17623[(2)]);
var inst_17605 = (inst_17604__$1 == null);
var state_17623__$1 = (function (){var statearr_17627 = state_17623;
(statearr_17627[(7)] = inst_17604__$1);

return statearr_17627;
})();
if(cljs.core.truth_(inst_17605)){
var statearr_17628_19647 = state_17623__$1;
(statearr_17628_19647[(1)] = (5));

} else {
var statearr_17629_19648 = state_17623__$1;
(statearr_17629_19648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17624 === (6))){
var inst_17604 = (state_17623[(7)]);
var inst_17609 = (state_17623[(8)]);
var inst_17609__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17610 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17611 = [inst_17604,inst_17609__$1];
var inst_17612 = (new cljs.core.PersistentVector(null,2,(5),inst_17610,inst_17611,null));
var state_17623__$1 = (function (){var statearr_17630 = state_17623;
(statearr_17630[(8)] = inst_17609__$1);

return statearr_17630;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17623__$1,(8),jobs,inst_17612);
} else {
if((state_val_17624 === (3))){
var inst_17621 = (state_17623[(2)]);
var state_17623__$1 = state_17623;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17623__$1,inst_17621);
} else {
if((state_val_17624 === (2))){
var state_17623__$1 = state_17623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17623__$1,(4),from);
} else {
if((state_val_17624 === (9))){
var inst_17616 = (state_17623[(2)]);
var state_17623__$1 = (function (){var statearr_17631 = state_17623;
(statearr_17631[(9)] = inst_17616);

return statearr_17631;
})();
var statearr_17632_19649 = state_17623__$1;
(statearr_17632_19649[(2)] = null);

(statearr_17632_19649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17624 === (5))){
var inst_17607 = cljs.core.async.close_BANG_(jobs);
var state_17623__$1 = state_17623;
var statearr_17633_19651 = state_17623__$1;
(statearr_17633_19651[(2)] = inst_17607);

(statearr_17633_19651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17624 === (8))){
var inst_17609 = (state_17623[(8)]);
var inst_17614 = (state_17623[(2)]);
var state_17623__$1 = (function (){var statearr_17634 = state_17623;
(statearr_17634[(10)] = inst_17614);

return statearr_17634;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17623__$1,(9),results,inst_17609);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17025__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17025__auto____0 = (function (){
var statearr_17635 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17635[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17025__auto__);

(statearr_17635[(1)] = (1));

return statearr_17635;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17025__auto____1 = (function (state_17623){
while(true){
var ret_value__17026__auto__ = (function (){try{while(true){
var result__17027__auto__ = switch__17024__auto__(state_17623);
if(cljs.core.keyword_identical_QMARK_(result__17027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17027__auto__;
}
break;
}
}catch (e17636){var ex__17028__auto__ = e17636;
var statearr_17637_19652 = state_17623;
(statearr_17637_19652[(2)] = ex__17028__auto__);


if(cljs.core.seq((state_17623[(4)]))){
var statearr_17638_19653 = state_17623;
(statearr_17638_19653[(1)] = cljs.core.first((state_17623[(4)])));

} else {
throw ex__17028__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19654 = state_17623;
state_17623 = G__19654;
continue;
} else {
return ret_value__17026__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17025__auto__ = function(state_17623){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17025__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17025__auto____1.call(this,state_17623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17025__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17025__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17025__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_17639 = f__17247__auto__();
(statearr_17639[(6)] = c__17246__auto___19635);

return statearr_17639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));


var c__17246__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17024__auto__ = (function (state_17677){
var state_val_17678 = (state_17677[(1)]);
if((state_val_17678 === (7))){
var inst_17673 = (state_17677[(2)]);
var state_17677__$1 = state_17677;
var statearr_17679_19655 = state_17677__$1;
(statearr_17679_19655[(2)] = inst_17673);

(statearr_17679_19655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17678 === (20))){
var state_17677__$1 = state_17677;
var statearr_17680_19658 = state_17677__$1;
(statearr_17680_19658[(2)] = null);

(statearr_17680_19658[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17678 === (1))){
var state_17677__$1 = state_17677;
var statearr_17681_19659 = state_17677__$1;
(statearr_17681_19659[(2)] = null);

(statearr_17681_19659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17678 === (4))){
var inst_17642 = (state_17677[(7)]);
var inst_17642__$1 = (state_17677[(2)]);
var inst_17643 = (inst_17642__$1 == null);
var state_17677__$1 = (function (){var statearr_17682 = state_17677;
(statearr_17682[(7)] = inst_17642__$1);

return statearr_17682;
})();
if(cljs.core.truth_(inst_17643)){
var statearr_17683_19660 = state_17677__$1;
(statearr_17683_19660[(1)] = (5));

} else {
var statearr_17684_19661 = state_17677__$1;
(statearr_17684_19661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17678 === (15))){
var inst_17655 = (state_17677[(8)]);
var state_17677__$1 = state_17677;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17677__$1,(18),to,inst_17655);
} else {
if((state_val_17678 === (21))){
var inst_17668 = (state_17677[(2)]);
var state_17677__$1 = state_17677;
var statearr_17685_19662 = state_17677__$1;
(statearr_17685_19662[(2)] = inst_17668);

(statearr_17685_19662[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17678 === (13))){
var inst_17670 = (state_17677[(2)]);
var state_17677__$1 = (function (){var statearr_17686 = state_17677;
(statearr_17686[(9)] = inst_17670);

return statearr_17686;
})();
var statearr_17687_19663 = state_17677__$1;
(statearr_17687_19663[(2)] = null);

(statearr_17687_19663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17678 === (6))){
var inst_17642 = (state_17677[(7)]);
var state_17677__$1 = state_17677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17677__$1,(11),inst_17642);
} else {
if((state_val_17678 === (17))){
var inst_17663 = (state_17677[(2)]);
var state_17677__$1 = state_17677;
if(cljs.core.truth_(inst_17663)){
var statearr_17688_19664 = state_17677__$1;
(statearr_17688_19664[(1)] = (19));

} else {
var statearr_17689_19665 = state_17677__$1;
(statearr_17689_19665[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17678 === (3))){
var inst_17675 = (state_17677[(2)]);
var state_17677__$1 = state_17677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17677__$1,inst_17675);
} else {
if((state_val_17678 === (12))){
var inst_17652 = (state_17677[(10)]);
var state_17677__$1 = state_17677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17677__$1,(14),inst_17652);
} else {
if((state_val_17678 === (2))){
var state_17677__$1 = state_17677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17677__$1,(4),results);
} else {
if((state_val_17678 === (19))){
var state_17677__$1 = state_17677;
var statearr_17690_19666 = state_17677__$1;
(statearr_17690_19666[(2)] = null);

(statearr_17690_19666[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17678 === (11))){
var inst_17652 = (state_17677[(2)]);
var state_17677__$1 = (function (){var statearr_17691 = state_17677;
(statearr_17691[(10)] = inst_17652);

return statearr_17691;
})();
var statearr_17692_19667 = state_17677__$1;
(statearr_17692_19667[(2)] = null);

(statearr_17692_19667[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17678 === (9))){
var state_17677__$1 = state_17677;
var statearr_17693_19668 = state_17677__$1;
(statearr_17693_19668[(2)] = null);

(statearr_17693_19668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17678 === (5))){
var state_17677__$1 = state_17677;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17694_19669 = state_17677__$1;
(statearr_17694_19669[(1)] = (8));

} else {
var statearr_17695_19670 = state_17677__$1;
(statearr_17695_19670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17678 === (14))){
var inst_17657 = (state_17677[(11)]);
var inst_17655 = (state_17677[(8)]);
var inst_17655__$1 = (state_17677[(2)]);
var inst_17656 = (inst_17655__$1 == null);
var inst_17657__$1 = cljs.core.not(inst_17656);
var state_17677__$1 = (function (){var statearr_17696 = state_17677;
(statearr_17696[(11)] = inst_17657__$1);

(statearr_17696[(8)] = inst_17655__$1);

return statearr_17696;
})();
if(inst_17657__$1){
var statearr_17697_19671 = state_17677__$1;
(statearr_17697_19671[(1)] = (15));

} else {
var statearr_17698_19672 = state_17677__$1;
(statearr_17698_19672[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17678 === (16))){
var inst_17657 = (state_17677[(11)]);
var state_17677__$1 = state_17677;
var statearr_17699_19673 = state_17677__$1;
(statearr_17699_19673[(2)] = inst_17657);

(statearr_17699_19673[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17678 === (10))){
var inst_17649 = (state_17677[(2)]);
var state_17677__$1 = state_17677;
var statearr_17700_19674 = state_17677__$1;
(statearr_17700_19674[(2)] = inst_17649);

(statearr_17700_19674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17678 === (18))){
var inst_17660 = (state_17677[(2)]);
var state_17677__$1 = state_17677;
var statearr_17701_19675 = state_17677__$1;
(statearr_17701_19675[(2)] = inst_17660);

(statearr_17701_19675[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17678 === (8))){
var inst_17646 = cljs.core.async.close_BANG_(to);
var state_17677__$1 = state_17677;
var statearr_17702_19676 = state_17677__$1;
(statearr_17702_19676[(2)] = inst_17646);

(statearr_17702_19676[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17025__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17025__auto____0 = (function (){
var statearr_17703 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17703[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17025__auto__);

(statearr_17703[(1)] = (1));

return statearr_17703;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17025__auto____1 = (function (state_17677){
while(true){
var ret_value__17026__auto__ = (function (){try{while(true){
var result__17027__auto__ = switch__17024__auto__(state_17677);
if(cljs.core.keyword_identical_QMARK_(result__17027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17027__auto__;
}
break;
}
}catch (e17704){var ex__17028__auto__ = e17704;
var statearr_17705_19677 = state_17677;
(statearr_17705_19677[(2)] = ex__17028__auto__);


if(cljs.core.seq((state_17677[(4)]))){
var statearr_17706_19678 = state_17677;
(statearr_17706_19678[(1)] = cljs.core.first((state_17677[(4)])));

} else {
throw ex__17028__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19679 = state_17677;
state_17677 = G__19679;
continue;
} else {
return ret_value__17026__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17025__auto__ = function(state_17677){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17025__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17025__auto____1.call(this,state_17677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17025__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17025__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17025__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_17707 = f__17247__auto__();
(statearr_17707[(6)] = c__17246__auto__);

return statearr_17707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));

return c__17246__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__17709 = arguments.length;
switch (G__17709) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__17711 = arguments.length;
switch (G__17711) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__17713 = arguments.length;
switch (G__17713) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17246__auto___19694 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17024__auto__ = (function (state_17739){
var state_val_17740 = (state_17739[(1)]);
if((state_val_17740 === (7))){
var inst_17735 = (state_17739[(2)]);
var state_17739__$1 = state_17739;
var statearr_17741_19695 = state_17739__$1;
(statearr_17741_19695[(2)] = inst_17735);

(statearr_17741_19695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17740 === (1))){
var state_17739__$1 = state_17739;
var statearr_17742_19696 = state_17739__$1;
(statearr_17742_19696[(2)] = null);

(statearr_17742_19696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17740 === (4))){
var inst_17716 = (state_17739[(7)]);
var inst_17716__$1 = (state_17739[(2)]);
var inst_17717 = (inst_17716__$1 == null);
var state_17739__$1 = (function (){var statearr_17743 = state_17739;
(statearr_17743[(7)] = inst_17716__$1);

return statearr_17743;
})();
if(cljs.core.truth_(inst_17717)){
var statearr_17744_19698 = state_17739__$1;
(statearr_17744_19698[(1)] = (5));

} else {
var statearr_17745_19699 = state_17739__$1;
(statearr_17745_19699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17740 === (13))){
var state_17739__$1 = state_17739;
var statearr_17746_19700 = state_17739__$1;
(statearr_17746_19700[(2)] = null);

(statearr_17746_19700[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17740 === (6))){
var inst_17716 = (state_17739[(7)]);
var inst_17722 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17716) : p.call(null,inst_17716));
var state_17739__$1 = state_17739;
if(cljs.core.truth_(inst_17722)){
var statearr_17747_19702 = state_17739__$1;
(statearr_17747_19702[(1)] = (9));

} else {
var statearr_17748_19703 = state_17739__$1;
(statearr_17748_19703[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17740 === (3))){
var inst_17737 = (state_17739[(2)]);
var state_17739__$1 = state_17739;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17739__$1,inst_17737);
} else {
if((state_val_17740 === (12))){
var state_17739__$1 = state_17739;
var statearr_17749_19711 = state_17739__$1;
(statearr_17749_19711[(2)] = null);

(statearr_17749_19711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17740 === (2))){
var state_17739__$1 = state_17739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17739__$1,(4),ch);
} else {
if((state_val_17740 === (11))){
var inst_17716 = (state_17739[(7)]);
var inst_17726 = (state_17739[(2)]);
var state_17739__$1 = state_17739;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17739__$1,(8),inst_17726,inst_17716);
} else {
if((state_val_17740 === (9))){
var state_17739__$1 = state_17739;
var statearr_17750_19712 = state_17739__$1;
(statearr_17750_19712[(2)] = tc);

(statearr_17750_19712[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17740 === (5))){
var inst_17719 = cljs.core.async.close_BANG_(tc);
var inst_17720 = cljs.core.async.close_BANG_(fc);
var state_17739__$1 = (function (){var statearr_17751 = state_17739;
(statearr_17751[(8)] = inst_17719);

return statearr_17751;
})();
var statearr_17752_19714 = state_17739__$1;
(statearr_17752_19714[(2)] = inst_17720);

(statearr_17752_19714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17740 === (14))){
var inst_17733 = (state_17739[(2)]);
var state_17739__$1 = state_17739;
var statearr_17753_19715 = state_17739__$1;
(statearr_17753_19715[(2)] = inst_17733);

(statearr_17753_19715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17740 === (10))){
var state_17739__$1 = state_17739;
var statearr_17754_19716 = state_17739__$1;
(statearr_17754_19716[(2)] = fc);

(statearr_17754_19716[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17740 === (8))){
var inst_17728 = (state_17739[(2)]);
var state_17739__$1 = state_17739;
if(cljs.core.truth_(inst_17728)){
var statearr_17755_19717 = state_17739__$1;
(statearr_17755_19717[(1)] = (12));

} else {
var statearr_17756_19718 = state_17739__$1;
(statearr_17756_19718[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17025__auto__ = null;
var cljs$core$async$state_machine__17025__auto____0 = (function (){
var statearr_17757 = [null,null,null,null,null,null,null,null,null];
(statearr_17757[(0)] = cljs$core$async$state_machine__17025__auto__);

(statearr_17757[(1)] = (1));

return statearr_17757;
});
var cljs$core$async$state_machine__17025__auto____1 = (function (state_17739){
while(true){
var ret_value__17026__auto__ = (function (){try{while(true){
var result__17027__auto__ = switch__17024__auto__(state_17739);
if(cljs.core.keyword_identical_QMARK_(result__17027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17027__auto__;
}
break;
}
}catch (e17758){var ex__17028__auto__ = e17758;
var statearr_17759_19729 = state_17739;
(statearr_17759_19729[(2)] = ex__17028__auto__);


if(cljs.core.seq((state_17739[(4)]))){
var statearr_17760_19730 = state_17739;
(statearr_17760_19730[(1)] = cljs.core.first((state_17739[(4)])));

} else {
throw ex__17028__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19732 = state_17739;
state_17739 = G__19732;
continue;
} else {
return ret_value__17026__auto__;
}
break;
}
});
cljs$core$async$state_machine__17025__auto__ = function(state_17739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17025__auto____1.call(this,state_17739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17025__auto____0;
cljs$core$async$state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17025__auto____1;
return cljs$core$async$state_machine__17025__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_17761 = f__17247__auto__();
(statearr_17761[(6)] = c__17246__auto___19694);

return statearr_17761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17246__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17024__auto__ = (function (state_17783){
var state_val_17785 = (state_17783[(1)]);
if((state_val_17785 === (7))){
var inst_17779 = (state_17783[(2)]);
var state_17783__$1 = state_17783;
var statearr_17791_19737 = state_17783__$1;
(statearr_17791_19737[(2)] = inst_17779);

(statearr_17791_19737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17785 === (1))){
var inst_17762 = init;
var inst_17763 = inst_17762;
var state_17783__$1 = (function (){var statearr_17793 = state_17783;
(statearr_17793[(7)] = inst_17763);

return statearr_17793;
})();
var statearr_17795_19738 = state_17783__$1;
(statearr_17795_19738[(2)] = null);

(statearr_17795_19738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17785 === (4))){
var inst_17766 = (state_17783[(8)]);
var inst_17766__$1 = (state_17783[(2)]);
var inst_17767 = (inst_17766__$1 == null);
var state_17783__$1 = (function (){var statearr_17796 = state_17783;
(statearr_17796[(8)] = inst_17766__$1);

return statearr_17796;
})();
if(cljs.core.truth_(inst_17767)){
var statearr_17797_19739 = state_17783__$1;
(statearr_17797_19739[(1)] = (5));

} else {
var statearr_17798_19740 = state_17783__$1;
(statearr_17798_19740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17785 === (6))){
var inst_17766 = (state_17783[(8)]);
var inst_17763 = (state_17783[(7)]);
var inst_17770 = (state_17783[(9)]);
var inst_17770__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17763,inst_17766) : f.call(null,inst_17763,inst_17766));
var inst_17771 = cljs.core.reduced_QMARK_(inst_17770__$1);
var state_17783__$1 = (function (){var statearr_17800 = state_17783;
(statearr_17800[(9)] = inst_17770__$1);

return statearr_17800;
})();
if(inst_17771){
var statearr_17802_19748 = state_17783__$1;
(statearr_17802_19748[(1)] = (8));

} else {
var statearr_17803_19749 = state_17783__$1;
(statearr_17803_19749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17785 === (3))){
var inst_17781 = (state_17783[(2)]);
var state_17783__$1 = state_17783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17783__$1,inst_17781);
} else {
if((state_val_17785 === (2))){
var state_17783__$1 = state_17783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17783__$1,(4),ch);
} else {
if((state_val_17785 === (9))){
var inst_17770 = (state_17783[(9)]);
var inst_17763 = inst_17770;
var state_17783__$1 = (function (){var statearr_17805 = state_17783;
(statearr_17805[(7)] = inst_17763);

return statearr_17805;
})();
var statearr_17810_19750 = state_17783__$1;
(statearr_17810_19750[(2)] = null);

(statearr_17810_19750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17785 === (5))){
var inst_17763 = (state_17783[(7)]);
var state_17783__$1 = state_17783;
var statearr_17811_19752 = state_17783__$1;
(statearr_17811_19752[(2)] = inst_17763);

(statearr_17811_19752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17785 === (10))){
var inst_17777 = (state_17783[(2)]);
var state_17783__$1 = state_17783;
var statearr_17813_19754 = state_17783__$1;
(statearr_17813_19754[(2)] = inst_17777);

(statearr_17813_19754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17785 === (8))){
var inst_17770 = (state_17783[(9)]);
var inst_17773 = cljs.core.deref(inst_17770);
var state_17783__$1 = state_17783;
var statearr_17815_19756 = state_17783__$1;
(statearr_17815_19756[(2)] = inst_17773);

(statearr_17815_19756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__17025__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17025__auto____0 = (function (){
var statearr_17826 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17826[(0)] = cljs$core$async$reduce_$_state_machine__17025__auto__);

(statearr_17826[(1)] = (1));

return statearr_17826;
});
var cljs$core$async$reduce_$_state_machine__17025__auto____1 = (function (state_17783){
while(true){
var ret_value__17026__auto__ = (function (){try{while(true){
var result__17027__auto__ = switch__17024__auto__(state_17783);
if(cljs.core.keyword_identical_QMARK_(result__17027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17027__auto__;
}
break;
}
}catch (e17827){var ex__17028__auto__ = e17827;
var statearr_17828_19757 = state_17783;
(statearr_17828_19757[(2)] = ex__17028__auto__);


if(cljs.core.seq((state_17783[(4)]))){
var statearr_17829_19758 = state_17783;
(statearr_17829_19758[(1)] = cljs.core.first((state_17783[(4)])));

} else {
throw ex__17028__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19759 = state_17783;
state_17783 = G__19759;
continue;
} else {
return ret_value__17026__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17025__auto__ = function(state_17783){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17025__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17025__auto____1.call(this,state_17783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17025__auto____0;
cljs$core$async$reduce_$_state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17025__auto____1;
return cljs$core$async$reduce_$_state_machine__17025__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_17836 = f__17247__auto__();
(statearr_17836[(6)] = c__17246__auto__);

return statearr_17836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));

return c__17246__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17246__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17024__auto__ = (function (state_17850){
var state_val_17851 = (state_17850[(1)]);
if((state_val_17851 === (1))){
var inst_17841 = cljs.core.async.reduce(f__$1,init,ch);
var state_17850__$1 = state_17850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17850__$1,(2),inst_17841);
} else {
if((state_val_17851 === (2))){
var inst_17845 = (state_17850[(2)]);
var inst_17847 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17845) : f__$1.call(null,inst_17845));
var state_17850__$1 = state_17850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17850__$1,inst_17847);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17025__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17025__auto____0 = (function (){
var statearr_17860 = [null,null,null,null,null,null,null];
(statearr_17860[(0)] = cljs$core$async$transduce_$_state_machine__17025__auto__);

(statearr_17860[(1)] = (1));

return statearr_17860;
});
var cljs$core$async$transduce_$_state_machine__17025__auto____1 = (function (state_17850){
while(true){
var ret_value__17026__auto__ = (function (){try{while(true){
var result__17027__auto__ = switch__17024__auto__(state_17850);
if(cljs.core.keyword_identical_QMARK_(result__17027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17027__auto__;
}
break;
}
}catch (e17862){var ex__17028__auto__ = e17862;
var statearr_17863_19767 = state_17850;
(statearr_17863_19767[(2)] = ex__17028__auto__);


if(cljs.core.seq((state_17850[(4)]))){
var statearr_17864_19768 = state_17850;
(statearr_17864_19768[(1)] = cljs.core.first((state_17850[(4)])));

} else {
throw ex__17028__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19770 = state_17850;
state_17850 = G__19770;
continue;
} else {
return ret_value__17026__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17025__auto__ = function(state_17850){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17025__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17025__auto____1.call(this,state_17850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17025__auto____0;
cljs$core$async$transduce_$_state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17025__auto____1;
return cljs$core$async$transduce_$_state_machine__17025__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_17866 = f__17247__auto__();
(statearr_17866[(6)] = c__17246__auto__);

return statearr_17866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));

return c__17246__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__17869 = arguments.length;
switch (G__17869) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17246__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17024__auto__ = (function (state_17914){
var state_val_17915 = (state_17914[(1)]);
if((state_val_17915 === (7))){
var inst_17884 = (state_17914[(2)]);
var state_17914__$1 = state_17914;
var statearr_17921_19773 = state_17914__$1;
(statearr_17921_19773[(2)] = inst_17884);

(statearr_17921_19773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17915 === (1))){
var inst_17876 = cljs.core.seq(coll);
var inst_17878 = inst_17876;
var state_17914__$1 = (function (){var statearr_17922 = state_17914;
(statearr_17922[(7)] = inst_17878);

return statearr_17922;
})();
var statearr_17931_19777 = state_17914__$1;
(statearr_17931_19777[(2)] = null);

(statearr_17931_19777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17915 === (4))){
var inst_17878 = (state_17914[(7)]);
var inst_17882 = cljs.core.first(inst_17878);
var state_17914__$1 = state_17914;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17914__$1,(7),ch,inst_17882);
} else {
if((state_val_17915 === (13))){
var inst_17907 = (state_17914[(2)]);
var state_17914__$1 = state_17914;
var statearr_17944_19779 = state_17914__$1;
(statearr_17944_19779[(2)] = inst_17907);

(statearr_17944_19779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17915 === (6))){
var inst_17887 = (state_17914[(2)]);
var state_17914__$1 = state_17914;
if(cljs.core.truth_(inst_17887)){
var statearr_17945_19780 = state_17914__$1;
(statearr_17945_19780[(1)] = (8));

} else {
var statearr_17946_19781 = state_17914__$1;
(statearr_17946_19781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17915 === (3))){
var inst_17912 = (state_17914[(2)]);
var state_17914__$1 = state_17914;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17914__$1,inst_17912);
} else {
if((state_val_17915 === (12))){
var state_17914__$1 = state_17914;
var statearr_17947_19782 = state_17914__$1;
(statearr_17947_19782[(2)] = null);

(statearr_17947_19782[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17915 === (2))){
var inst_17878 = (state_17914[(7)]);
var state_17914__$1 = state_17914;
if(cljs.core.truth_(inst_17878)){
var statearr_17948_19787 = state_17914__$1;
(statearr_17948_19787[(1)] = (4));

} else {
var statearr_17949_19788 = state_17914__$1;
(statearr_17949_19788[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17915 === (11))){
var inst_17904 = cljs.core.async.close_BANG_(ch);
var state_17914__$1 = state_17914;
var statearr_17950_19789 = state_17914__$1;
(statearr_17950_19789[(2)] = inst_17904);

(statearr_17950_19789[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17915 === (9))){
var state_17914__$1 = state_17914;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17951_19790 = state_17914__$1;
(statearr_17951_19790[(1)] = (11));

} else {
var statearr_17952_19791 = state_17914__$1;
(statearr_17952_19791[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17915 === (5))){
var inst_17878 = (state_17914[(7)]);
var state_17914__$1 = state_17914;
var statearr_17954_19792 = state_17914__$1;
(statearr_17954_19792[(2)] = inst_17878);

(statearr_17954_19792[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17915 === (10))){
var inst_17910 = (state_17914[(2)]);
var state_17914__$1 = state_17914;
var statearr_17955_19793 = state_17914__$1;
(statearr_17955_19793[(2)] = inst_17910);

(statearr_17955_19793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17915 === (8))){
var inst_17878 = (state_17914[(7)]);
var inst_17899 = cljs.core.next(inst_17878);
var inst_17878__$1 = inst_17899;
var state_17914__$1 = (function (){var statearr_17956 = state_17914;
(statearr_17956[(7)] = inst_17878__$1);

return statearr_17956;
})();
var statearr_17957_19795 = state_17914__$1;
(statearr_17957_19795[(2)] = null);

(statearr_17957_19795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17025__auto__ = null;
var cljs$core$async$state_machine__17025__auto____0 = (function (){
var statearr_17958 = [null,null,null,null,null,null,null,null];
(statearr_17958[(0)] = cljs$core$async$state_machine__17025__auto__);

(statearr_17958[(1)] = (1));

return statearr_17958;
});
var cljs$core$async$state_machine__17025__auto____1 = (function (state_17914){
while(true){
var ret_value__17026__auto__ = (function (){try{while(true){
var result__17027__auto__ = switch__17024__auto__(state_17914);
if(cljs.core.keyword_identical_QMARK_(result__17027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17027__auto__;
}
break;
}
}catch (e17959){var ex__17028__auto__ = e17959;
var statearr_17960_19796 = state_17914;
(statearr_17960_19796[(2)] = ex__17028__auto__);


if(cljs.core.seq((state_17914[(4)]))){
var statearr_17961_19804 = state_17914;
(statearr_17961_19804[(1)] = cljs.core.first((state_17914[(4)])));

} else {
throw ex__17028__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19805 = state_17914;
state_17914 = G__19805;
continue;
} else {
return ret_value__17026__auto__;
}
break;
}
});
cljs$core$async$state_machine__17025__auto__ = function(state_17914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17025__auto____1.call(this,state_17914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17025__auto____0;
cljs$core$async$state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17025__auto____1;
return cljs$core$async$state_machine__17025__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_17962 = f__17247__auto__();
(statearr_17962[(6)] = c__17246__auto__);

return statearr_17962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));

return c__17246__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__17980 = arguments.length;
switch (G__17980) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_19808 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_19808(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19809 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_19809(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19812 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_19812(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19813 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_19813(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17994 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17994 = (function (ch,cs,meta17995){
this.ch = ch;
this.cs = cs;
this.meta17995 = meta17995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17996,meta17995__$1){
var self__ = this;
var _17996__$1 = this;
return (new cljs.core.async.t_cljs$core$async17994(self__.ch,self__.cs,meta17995__$1));
}));

(cljs.core.async.t_cljs$core$async17994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17996){
var self__ = this;
var _17996__$1 = this;
return self__.meta17995;
}));

(cljs.core.async.t_cljs$core$async17994.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17994.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17994.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17994.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async17994.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async17994.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async17994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17995","meta17995",1679582611,null)], null);
}));

(cljs.core.async.t_cljs$core$async17994.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17994");

(cljs.core.async.t_cljs$core$async17994.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17994");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17994.
 */
cljs.core.async.__GT_t_cljs$core$async17994 = (function cljs$core$async$mult_$___GT_t_cljs$core$async17994(ch__$1,cs__$1,meta17995){
return (new cljs.core.async.t_cljs$core$async17994(ch__$1,cs__$1,meta17995));
});

}

return (new cljs.core.async.t_cljs$core$async17994(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__17246__auto___19817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17024__auto__ = (function (state_18134){
var state_val_18135 = (state_18134[(1)]);
if((state_val_18135 === (7))){
var inst_18130 = (state_18134[(2)]);
var state_18134__$1 = state_18134;
var statearr_18137_19819 = state_18134__$1;
(statearr_18137_19819[(2)] = inst_18130);

(statearr_18137_19819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (20))){
var inst_18033 = (state_18134[(7)]);
var inst_18046 = cljs.core.first(inst_18033);
var inst_18047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18046,(0),null);
var inst_18048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18046,(1),null);
var state_18134__$1 = (function (){var statearr_18138 = state_18134;
(statearr_18138[(8)] = inst_18047);

return statearr_18138;
})();
if(cljs.core.truth_(inst_18048)){
var statearr_18139_19820 = state_18134__$1;
(statearr_18139_19820[(1)] = (22));

} else {
var statearr_18140_19821 = state_18134__$1;
(statearr_18140_19821[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (27))){
var inst_18001 = (state_18134[(9)]);
var inst_18076 = (state_18134[(10)]);
var inst_18083 = (state_18134[(11)]);
var inst_18078 = (state_18134[(12)]);
var inst_18083__$1 = cljs.core._nth(inst_18076,inst_18078);
var inst_18084 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18083__$1,inst_18001,done);
var state_18134__$1 = (function (){var statearr_18142 = state_18134;
(statearr_18142[(11)] = inst_18083__$1);

return statearr_18142;
})();
if(cljs.core.truth_(inst_18084)){
var statearr_18143_19822 = state_18134__$1;
(statearr_18143_19822[(1)] = (30));

} else {
var statearr_18144_19823 = state_18134__$1;
(statearr_18144_19823[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (1))){
var state_18134__$1 = state_18134;
var statearr_18145_19824 = state_18134__$1;
(statearr_18145_19824[(2)] = null);

(statearr_18145_19824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (24))){
var inst_18033 = (state_18134[(7)]);
var inst_18053 = (state_18134[(2)]);
var inst_18054 = cljs.core.next(inst_18033);
var inst_18011 = inst_18054;
var inst_18012 = null;
var inst_18013 = (0);
var inst_18014 = (0);
var state_18134__$1 = (function (){var statearr_18146 = state_18134;
(statearr_18146[(13)] = inst_18053);

(statearr_18146[(14)] = inst_18012);

(statearr_18146[(15)] = inst_18013);

(statearr_18146[(16)] = inst_18014);

(statearr_18146[(17)] = inst_18011);

return statearr_18146;
})();
var statearr_18147_19825 = state_18134__$1;
(statearr_18147_19825[(2)] = null);

(statearr_18147_19825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (39))){
var state_18134__$1 = state_18134;
var statearr_18152_19826 = state_18134__$1;
(statearr_18152_19826[(2)] = null);

(statearr_18152_19826[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (4))){
var inst_18001 = (state_18134[(9)]);
var inst_18001__$1 = (state_18134[(2)]);
var inst_18002 = (inst_18001__$1 == null);
var state_18134__$1 = (function (){var statearr_18153 = state_18134;
(statearr_18153[(9)] = inst_18001__$1);

return statearr_18153;
})();
if(cljs.core.truth_(inst_18002)){
var statearr_18154_19827 = state_18134__$1;
(statearr_18154_19827[(1)] = (5));

} else {
var statearr_18155_19828 = state_18134__$1;
(statearr_18155_19828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (15))){
var inst_18012 = (state_18134[(14)]);
var inst_18013 = (state_18134[(15)]);
var inst_18014 = (state_18134[(16)]);
var inst_18011 = (state_18134[(17)]);
var inst_18029 = (state_18134[(2)]);
var inst_18030 = (inst_18014 + (1));
var tmp18148 = inst_18012;
var tmp18149 = inst_18013;
var tmp18150 = inst_18011;
var inst_18011__$1 = tmp18150;
var inst_18012__$1 = tmp18148;
var inst_18013__$1 = tmp18149;
var inst_18014__$1 = inst_18030;
var state_18134__$1 = (function (){var statearr_18156 = state_18134;
(statearr_18156[(14)] = inst_18012__$1);

(statearr_18156[(15)] = inst_18013__$1);

(statearr_18156[(16)] = inst_18014__$1);

(statearr_18156[(17)] = inst_18011__$1);

(statearr_18156[(18)] = inst_18029);

return statearr_18156;
})();
var statearr_18157_19829 = state_18134__$1;
(statearr_18157_19829[(2)] = null);

(statearr_18157_19829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (21))){
var inst_18057 = (state_18134[(2)]);
var state_18134__$1 = state_18134;
var statearr_18161_19830 = state_18134__$1;
(statearr_18161_19830[(2)] = inst_18057);

(statearr_18161_19830[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (31))){
var inst_18083 = (state_18134[(11)]);
var inst_18087 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18083);
var state_18134__$1 = state_18134;
var statearr_18163_19831 = state_18134__$1;
(statearr_18163_19831[(2)] = inst_18087);

(statearr_18163_19831[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (32))){
var inst_18076 = (state_18134[(10)]);
var inst_18075 = (state_18134[(19)]);
var inst_18078 = (state_18134[(12)]);
var inst_18077 = (state_18134[(20)]);
var inst_18089 = (state_18134[(2)]);
var inst_18090 = (inst_18078 + (1));
var tmp18158 = inst_18076;
var tmp18159 = inst_18075;
var tmp18160 = inst_18077;
var inst_18075__$1 = tmp18159;
var inst_18076__$1 = tmp18158;
var inst_18077__$1 = tmp18160;
var inst_18078__$1 = inst_18090;
var state_18134__$1 = (function (){var statearr_18165 = state_18134;
(statearr_18165[(10)] = inst_18076__$1);

(statearr_18165[(19)] = inst_18075__$1);

(statearr_18165[(12)] = inst_18078__$1);

(statearr_18165[(20)] = inst_18077__$1);

(statearr_18165[(21)] = inst_18089);

return statearr_18165;
})();
var statearr_18166_19837 = state_18134__$1;
(statearr_18166_19837[(2)] = null);

(statearr_18166_19837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (40))){
var inst_18103 = (state_18134[(22)]);
var inst_18107 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18103);
var state_18134__$1 = state_18134;
var statearr_18167_19839 = state_18134__$1;
(statearr_18167_19839[(2)] = inst_18107);

(statearr_18167_19839[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (33))){
var inst_18093 = (state_18134[(23)]);
var inst_18096 = cljs.core.chunked_seq_QMARK_(inst_18093);
var state_18134__$1 = state_18134;
if(inst_18096){
var statearr_18169_19840 = state_18134__$1;
(statearr_18169_19840[(1)] = (36));

} else {
var statearr_18170_19841 = state_18134__$1;
(statearr_18170_19841[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (13))){
var inst_18023 = (state_18134[(24)]);
var inst_18026 = cljs.core.async.close_BANG_(inst_18023);
var state_18134__$1 = state_18134;
var statearr_18171_19842 = state_18134__$1;
(statearr_18171_19842[(2)] = inst_18026);

(statearr_18171_19842[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (22))){
var inst_18047 = (state_18134[(8)]);
var inst_18050 = cljs.core.async.close_BANG_(inst_18047);
var state_18134__$1 = state_18134;
var statearr_18172_19843 = state_18134__$1;
(statearr_18172_19843[(2)] = inst_18050);

(statearr_18172_19843[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (36))){
var inst_18093 = (state_18134[(23)]);
var inst_18098 = cljs.core.chunk_first(inst_18093);
var inst_18099 = cljs.core.chunk_rest(inst_18093);
var inst_18100 = cljs.core.count(inst_18098);
var inst_18075 = inst_18099;
var inst_18076 = inst_18098;
var inst_18077 = inst_18100;
var inst_18078 = (0);
var state_18134__$1 = (function (){var statearr_18173 = state_18134;
(statearr_18173[(10)] = inst_18076);

(statearr_18173[(19)] = inst_18075);

(statearr_18173[(12)] = inst_18078);

(statearr_18173[(20)] = inst_18077);

return statearr_18173;
})();
var statearr_18174_19845 = state_18134__$1;
(statearr_18174_19845[(2)] = null);

(statearr_18174_19845[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (41))){
var inst_18093 = (state_18134[(23)]);
var inst_18109 = (state_18134[(2)]);
var inst_18110 = cljs.core.next(inst_18093);
var inst_18075 = inst_18110;
var inst_18076 = null;
var inst_18077 = (0);
var inst_18078 = (0);
var state_18134__$1 = (function (){var statearr_18175 = state_18134;
(statearr_18175[(10)] = inst_18076);

(statearr_18175[(19)] = inst_18075);

(statearr_18175[(12)] = inst_18078);

(statearr_18175[(20)] = inst_18077);

(statearr_18175[(25)] = inst_18109);

return statearr_18175;
})();
var statearr_18176_19846 = state_18134__$1;
(statearr_18176_19846[(2)] = null);

(statearr_18176_19846[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (43))){
var state_18134__$1 = state_18134;
var statearr_18178_19847 = state_18134__$1;
(statearr_18178_19847[(2)] = null);

(statearr_18178_19847[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (29))){
var inst_18118 = (state_18134[(2)]);
var state_18134__$1 = state_18134;
var statearr_18179_19848 = state_18134__$1;
(statearr_18179_19848[(2)] = inst_18118);

(statearr_18179_19848[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (44))){
var inst_18127 = (state_18134[(2)]);
var state_18134__$1 = (function (){var statearr_18180 = state_18134;
(statearr_18180[(26)] = inst_18127);

return statearr_18180;
})();
var statearr_18181_19855 = state_18134__$1;
(statearr_18181_19855[(2)] = null);

(statearr_18181_19855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (6))){
var inst_18067 = (state_18134[(27)]);
var inst_18066 = cljs.core.deref(cs);
var inst_18067__$1 = cljs.core.keys(inst_18066);
var inst_18068 = cljs.core.count(inst_18067__$1);
var inst_18069 = cljs.core.reset_BANG_(dctr,inst_18068);
var inst_18074 = cljs.core.seq(inst_18067__$1);
var inst_18075 = inst_18074;
var inst_18076 = null;
var inst_18077 = (0);
var inst_18078 = (0);
var state_18134__$1 = (function (){var statearr_18182 = state_18134;
(statearr_18182[(10)] = inst_18076);

(statearr_18182[(27)] = inst_18067__$1);

(statearr_18182[(28)] = inst_18069);

(statearr_18182[(19)] = inst_18075);

(statearr_18182[(12)] = inst_18078);

(statearr_18182[(20)] = inst_18077);

return statearr_18182;
})();
var statearr_18183_19859 = state_18134__$1;
(statearr_18183_19859[(2)] = null);

(statearr_18183_19859[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (28))){
var inst_18075 = (state_18134[(19)]);
var inst_18093 = (state_18134[(23)]);
var inst_18093__$1 = cljs.core.seq(inst_18075);
var state_18134__$1 = (function (){var statearr_18184 = state_18134;
(statearr_18184[(23)] = inst_18093__$1);

return statearr_18184;
})();
if(inst_18093__$1){
var statearr_18185_19864 = state_18134__$1;
(statearr_18185_19864[(1)] = (33));

} else {
var statearr_18186_19865 = state_18134__$1;
(statearr_18186_19865[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (25))){
var inst_18078 = (state_18134[(12)]);
var inst_18077 = (state_18134[(20)]);
var inst_18080 = (inst_18078 < inst_18077);
var inst_18081 = inst_18080;
var state_18134__$1 = state_18134;
if(cljs.core.truth_(inst_18081)){
var statearr_18187_19870 = state_18134__$1;
(statearr_18187_19870[(1)] = (27));

} else {
var statearr_18188_19871 = state_18134__$1;
(statearr_18188_19871[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (34))){
var state_18134__$1 = state_18134;
var statearr_18189_19875 = state_18134__$1;
(statearr_18189_19875[(2)] = null);

(statearr_18189_19875[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (17))){
var state_18134__$1 = state_18134;
var statearr_18191_19876 = state_18134__$1;
(statearr_18191_19876[(2)] = null);

(statearr_18191_19876[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (3))){
var inst_18132 = (state_18134[(2)]);
var state_18134__$1 = state_18134;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18134__$1,inst_18132);
} else {
if((state_val_18135 === (12))){
var inst_18062 = (state_18134[(2)]);
var state_18134__$1 = state_18134;
var statearr_18192_19877 = state_18134__$1;
(statearr_18192_19877[(2)] = inst_18062);

(statearr_18192_19877[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (2))){
var state_18134__$1 = state_18134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18134__$1,(4),ch);
} else {
if((state_val_18135 === (23))){
var state_18134__$1 = state_18134;
var statearr_18193_19881 = state_18134__$1;
(statearr_18193_19881[(2)] = null);

(statearr_18193_19881[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (35))){
var inst_18116 = (state_18134[(2)]);
var state_18134__$1 = state_18134;
var statearr_18194_19882 = state_18134__$1;
(statearr_18194_19882[(2)] = inst_18116);

(statearr_18194_19882[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (19))){
var inst_18033 = (state_18134[(7)]);
var inst_18037 = cljs.core.chunk_first(inst_18033);
var inst_18038 = cljs.core.chunk_rest(inst_18033);
var inst_18039 = cljs.core.count(inst_18037);
var inst_18011 = inst_18038;
var inst_18012 = inst_18037;
var inst_18013 = inst_18039;
var inst_18014 = (0);
var state_18134__$1 = (function (){var statearr_18195 = state_18134;
(statearr_18195[(14)] = inst_18012);

(statearr_18195[(15)] = inst_18013);

(statearr_18195[(16)] = inst_18014);

(statearr_18195[(17)] = inst_18011);

return statearr_18195;
})();
var statearr_18197_19892 = state_18134__$1;
(statearr_18197_19892[(2)] = null);

(statearr_18197_19892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (11))){
var inst_18011 = (state_18134[(17)]);
var inst_18033 = (state_18134[(7)]);
var inst_18033__$1 = cljs.core.seq(inst_18011);
var state_18134__$1 = (function (){var statearr_18198 = state_18134;
(statearr_18198[(7)] = inst_18033__$1);

return statearr_18198;
})();
if(inst_18033__$1){
var statearr_18199_19893 = state_18134__$1;
(statearr_18199_19893[(1)] = (16));

} else {
var statearr_18200_19894 = state_18134__$1;
(statearr_18200_19894[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (9))){
var inst_18064 = (state_18134[(2)]);
var state_18134__$1 = state_18134;
var statearr_18201_19895 = state_18134__$1;
(statearr_18201_19895[(2)] = inst_18064);

(statearr_18201_19895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (5))){
var inst_18009 = cljs.core.deref(cs);
var inst_18010 = cljs.core.seq(inst_18009);
var inst_18011 = inst_18010;
var inst_18012 = null;
var inst_18013 = (0);
var inst_18014 = (0);
var state_18134__$1 = (function (){var statearr_18202 = state_18134;
(statearr_18202[(14)] = inst_18012);

(statearr_18202[(15)] = inst_18013);

(statearr_18202[(16)] = inst_18014);

(statearr_18202[(17)] = inst_18011);

return statearr_18202;
})();
var statearr_18204_19905 = state_18134__$1;
(statearr_18204_19905[(2)] = null);

(statearr_18204_19905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (14))){
var state_18134__$1 = state_18134;
var statearr_18205_19906 = state_18134__$1;
(statearr_18205_19906[(2)] = null);

(statearr_18205_19906[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (45))){
var inst_18124 = (state_18134[(2)]);
var state_18134__$1 = state_18134;
var statearr_18206_19907 = state_18134__$1;
(statearr_18206_19907[(2)] = inst_18124);

(statearr_18206_19907[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (26))){
var inst_18067 = (state_18134[(27)]);
var inst_18120 = (state_18134[(2)]);
var inst_18121 = cljs.core.seq(inst_18067);
var state_18134__$1 = (function (){var statearr_18208 = state_18134;
(statearr_18208[(29)] = inst_18120);

return statearr_18208;
})();
if(inst_18121){
var statearr_18210_19908 = state_18134__$1;
(statearr_18210_19908[(1)] = (42));

} else {
var statearr_18211_19909 = state_18134__$1;
(statearr_18211_19909[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (16))){
var inst_18033 = (state_18134[(7)]);
var inst_18035 = cljs.core.chunked_seq_QMARK_(inst_18033);
var state_18134__$1 = state_18134;
if(inst_18035){
var statearr_18212_19914 = state_18134__$1;
(statearr_18212_19914[(1)] = (19));

} else {
var statearr_18213_19915 = state_18134__$1;
(statearr_18213_19915[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (38))){
var inst_18113 = (state_18134[(2)]);
var state_18134__$1 = state_18134;
var statearr_18215_19919 = state_18134__$1;
(statearr_18215_19919[(2)] = inst_18113);

(statearr_18215_19919[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (30))){
var state_18134__$1 = state_18134;
var statearr_18216_19925 = state_18134__$1;
(statearr_18216_19925[(2)] = null);

(statearr_18216_19925[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (10))){
var inst_18012 = (state_18134[(14)]);
var inst_18014 = (state_18134[(16)]);
var inst_18022 = cljs.core._nth(inst_18012,inst_18014);
var inst_18023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18022,(0),null);
var inst_18024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18022,(1),null);
var state_18134__$1 = (function (){var statearr_18218 = state_18134;
(statearr_18218[(24)] = inst_18023);

return statearr_18218;
})();
if(cljs.core.truth_(inst_18024)){
var statearr_18219_19939 = state_18134__$1;
(statearr_18219_19939[(1)] = (13));

} else {
var statearr_18221_19951 = state_18134__$1;
(statearr_18221_19951[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (18))){
var inst_18060 = (state_18134[(2)]);
var state_18134__$1 = state_18134;
var statearr_18222_19952 = state_18134__$1;
(statearr_18222_19952[(2)] = inst_18060);

(statearr_18222_19952[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (42))){
var state_18134__$1 = state_18134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18134__$1,(45),dchan);
} else {
if((state_val_18135 === (37))){
var inst_18001 = (state_18134[(9)]);
var inst_18093 = (state_18134[(23)]);
var inst_18103 = (state_18134[(22)]);
var inst_18103__$1 = cljs.core.first(inst_18093);
var inst_18104 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18103__$1,inst_18001,done);
var state_18134__$1 = (function (){var statearr_18224 = state_18134;
(statearr_18224[(22)] = inst_18103__$1);

return statearr_18224;
})();
if(cljs.core.truth_(inst_18104)){
var statearr_18225_19953 = state_18134__$1;
(statearr_18225_19953[(1)] = (39));

} else {
var statearr_18227_19954 = state_18134__$1;
(statearr_18227_19954[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (8))){
var inst_18013 = (state_18134[(15)]);
var inst_18014 = (state_18134[(16)]);
var inst_18016 = (inst_18014 < inst_18013);
var inst_18017 = inst_18016;
var state_18134__$1 = state_18134;
if(cljs.core.truth_(inst_18017)){
var statearr_18228_19955 = state_18134__$1;
(statearr_18228_19955[(1)] = (10));

} else {
var statearr_18230_19956 = state_18134__$1;
(statearr_18230_19956[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__17025__auto__ = null;
var cljs$core$async$mult_$_state_machine__17025__auto____0 = (function (){
var statearr_18233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18233[(0)] = cljs$core$async$mult_$_state_machine__17025__auto__);

(statearr_18233[(1)] = (1));

return statearr_18233;
});
var cljs$core$async$mult_$_state_machine__17025__auto____1 = (function (state_18134){
while(true){
var ret_value__17026__auto__ = (function (){try{while(true){
var result__17027__auto__ = switch__17024__auto__(state_18134);
if(cljs.core.keyword_identical_QMARK_(result__17027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17027__auto__;
}
break;
}
}catch (e18234){var ex__17028__auto__ = e18234;
var statearr_18235_19961 = state_18134;
(statearr_18235_19961[(2)] = ex__17028__auto__);


if(cljs.core.seq((state_18134[(4)]))){
var statearr_18238_19962 = state_18134;
(statearr_18238_19962[(1)] = cljs.core.first((state_18134[(4)])));

} else {
throw ex__17028__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19963 = state_18134;
state_18134 = G__19963;
continue;
} else {
return ret_value__17026__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17025__auto__ = function(state_18134){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17025__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17025__auto____1.call(this,state_18134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17025__auto____0;
cljs$core$async$mult_$_state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17025__auto____1;
return cljs$core$async$mult_$_state_machine__17025__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_18239 = f__17247__auto__();
(statearr_18239[(6)] = c__17246__auto___19817);

return statearr_18239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18241 = arguments.length;
switch (G__18241) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_19965 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_19965(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19973 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_19973(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19977 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19977(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19978 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_19978(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19979 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19979(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19980 = arguments.length;
var i__5770__auto___19981 = (0);
while(true){
if((i__5770__auto___19981 < len__5769__auto___19980)){
args__5775__auto__.push((arguments[i__5770__auto___19981]));

var G__19982 = (i__5770__auto___19981 + (1));
i__5770__auto___19981 = G__19982;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18248){
var map__18249 = p__18248;
var map__18249__$1 = cljs.core.__destructure_map(map__18249);
var opts = map__18249__$1;
var statearr_18250_19985 = state;
(statearr_18250_19985[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_18251_19986 = state;
(statearr_18251_19986[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_18252_19987 = state;
(statearr_18252_19987[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18244){
var G__18245 = cljs.core.first(seq18244);
var seq18244__$1 = cljs.core.next(seq18244);
var G__18246 = cljs.core.first(seq18244__$1);
var seq18244__$2 = cljs.core.next(seq18244__$1);
var G__18247 = cljs.core.first(seq18244__$2);
var seq18244__$3 = cljs.core.next(seq18244__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18245,G__18246,G__18247,seq18244__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18253 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18253 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18254){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18254 = meta18254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18255,meta18254__$1){
var self__ = this;
var _18255__$1 = this;
return (new cljs.core.async.t_cljs$core$async18253(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18254__$1));
}));

(cljs.core.async.t_cljs$core$async18253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18255){
var self__ = this;
var _18255__$1 = this;
return self__.meta18254;
}));

(cljs.core.async.t_cljs$core$async18253.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18253.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18253.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18253.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18253.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18253.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18253.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18253.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18253.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18254","meta18254",-1297680767,null)], null);
}));

(cljs.core.async.t_cljs$core$async18253.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18253");

(cljs.core.async.t_cljs$core$async18253.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18253");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18253.
 */
cljs.core.async.__GT_t_cljs$core$async18253 = (function cljs$core$async$mix_$___GT_t_cljs$core$async18253(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18254){
return (new cljs.core.async.t_cljs$core$async18253(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18254));
});

}

return (new cljs.core.async.t_cljs$core$async18253(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17246__auto___20001 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17024__auto__ = (function (state_18336){
var state_val_18337 = (state_18336[(1)]);
if((state_val_18337 === (7))){
var inst_18292 = (state_18336[(2)]);
var state_18336__$1 = state_18336;
if(cljs.core.truth_(inst_18292)){
var statearr_18343_20002 = state_18336__$1;
(statearr_18343_20002[(1)] = (8));

} else {
var statearr_18344_20003 = state_18336__$1;
(statearr_18344_20003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (20))){
var inst_18285 = (state_18336[(7)]);
var state_18336__$1 = state_18336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18336__$1,(23),out,inst_18285);
} else {
if((state_val_18337 === (1))){
var inst_18268 = calc_state();
var inst_18269 = cljs.core.__destructure_map(inst_18268);
var inst_18270 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18269,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18269,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18269,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18273 = inst_18268;
var state_18336__$1 = (function (){var statearr_18349 = state_18336;
(statearr_18349[(8)] = inst_18272);

(statearr_18349[(9)] = inst_18273);

(statearr_18349[(10)] = inst_18270);

(statearr_18349[(11)] = inst_18271);

return statearr_18349;
})();
var statearr_18350_20008 = state_18336__$1;
(statearr_18350_20008[(2)] = null);

(statearr_18350_20008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (24))){
var inst_18276 = (state_18336[(12)]);
var inst_18273 = inst_18276;
var state_18336__$1 = (function (){var statearr_18354 = state_18336;
(statearr_18354[(9)] = inst_18273);

return statearr_18354;
})();
var statearr_18355_20009 = state_18336__$1;
(statearr_18355_20009[(2)] = null);

(statearr_18355_20009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (4))){
var inst_18287 = (state_18336[(13)]);
var inst_18285 = (state_18336[(7)]);
var inst_18284 = (state_18336[(2)]);
var inst_18285__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18284,(0),null);
var inst_18286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18284,(1),null);
var inst_18287__$1 = (inst_18285__$1 == null);
var state_18336__$1 = (function (){var statearr_18360 = state_18336;
(statearr_18360[(14)] = inst_18286);

(statearr_18360[(13)] = inst_18287__$1);

(statearr_18360[(7)] = inst_18285__$1);

return statearr_18360;
})();
if(cljs.core.truth_(inst_18287__$1)){
var statearr_18361_20010 = state_18336__$1;
(statearr_18361_20010[(1)] = (5));

} else {
var statearr_18362_20011 = state_18336__$1;
(statearr_18362_20011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (15))){
var inst_18306 = (state_18336[(15)]);
var inst_18277 = (state_18336[(16)]);
var inst_18306__$1 = cljs.core.empty_QMARK_(inst_18277);
var state_18336__$1 = (function (){var statearr_18365 = state_18336;
(statearr_18365[(15)] = inst_18306__$1);

return statearr_18365;
})();
if(inst_18306__$1){
var statearr_18368_20015 = state_18336__$1;
(statearr_18368_20015[(1)] = (17));

} else {
var statearr_18370_20020 = state_18336__$1;
(statearr_18370_20020[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (21))){
var inst_18276 = (state_18336[(12)]);
var inst_18273 = inst_18276;
var state_18336__$1 = (function (){var statearr_18371 = state_18336;
(statearr_18371[(9)] = inst_18273);

return statearr_18371;
})();
var statearr_18373_20021 = state_18336__$1;
(statearr_18373_20021[(2)] = null);

(statearr_18373_20021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (13))){
var inst_18299 = (state_18336[(2)]);
var inst_18300 = calc_state();
var inst_18273 = inst_18300;
var state_18336__$1 = (function (){var statearr_18376 = state_18336;
(statearr_18376[(17)] = inst_18299);

(statearr_18376[(9)] = inst_18273);

return statearr_18376;
})();
var statearr_18378_20028 = state_18336__$1;
(statearr_18378_20028[(2)] = null);

(statearr_18378_20028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (22))){
var inst_18327 = (state_18336[(2)]);
var state_18336__$1 = state_18336;
var statearr_18379_20029 = state_18336__$1;
(statearr_18379_20029[(2)] = inst_18327);

(statearr_18379_20029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (6))){
var inst_18286 = (state_18336[(14)]);
var inst_18290 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18286,change);
var state_18336__$1 = state_18336;
var statearr_18384_20030 = state_18336__$1;
(statearr_18384_20030[(2)] = inst_18290);

(statearr_18384_20030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (25))){
var state_18336__$1 = state_18336;
var statearr_18386_20031 = state_18336__$1;
(statearr_18386_20031[(2)] = null);

(statearr_18386_20031[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (17))){
var inst_18286 = (state_18336[(14)]);
var inst_18278 = (state_18336[(18)]);
var inst_18309 = (inst_18278.cljs$core$IFn$_invoke$arity$1 ? inst_18278.cljs$core$IFn$_invoke$arity$1(inst_18286) : inst_18278.call(null,inst_18286));
var inst_18310 = cljs.core.not(inst_18309);
var state_18336__$1 = state_18336;
var statearr_18388_20032 = state_18336__$1;
(statearr_18388_20032[(2)] = inst_18310);

(statearr_18388_20032[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (3))){
var inst_18332 = (state_18336[(2)]);
var state_18336__$1 = state_18336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18336__$1,inst_18332);
} else {
if((state_val_18337 === (12))){
var state_18336__$1 = state_18336;
var statearr_18393_20033 = state_18336__$1;
(statearr_18393_20033[(2)] = null);

(statearr_18393_20033[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (2))){
var inst_18276 = (state_18336[(12)]);
var inst_18273 = (state_18336[(9)]);
var inst_18276__$1 = cljs.core.__destructure_map(inst_18273);
var inst_18277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18276__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18276__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18276__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18336__$1 = (function (){var statearr_18398 = state_18336;
(statearr_18398[(12)] = inst_18276__$1);

(statearr_18398[(18)] = inst_18278);

(statearr_18398[(16)] = inst_18277);

return statearr_18398;
})();
return cljs.core.async.ioc_alts_BANG_(state_18336__$1,(4),inst_18279);
} else {
if((state_val_18337 === (23))){
var inst_18318 = (state_18336[(2)]);
var state_18336__$1 = state_18336;
if(cljs.core.truth_(inst_18318)){
var statearr_18400_20034 = state_18336__$1;
(statearr_18400_20034[(1)] = (24));

} else {
var statearr_18401_20035 = state_18336__$1;
(statearr_18401_20035[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (19))){
var inst_18313 = (state_18336[(2)]);
var state_18336__$1 = state_18336;
var statearr_18405_20036 = state_18336__$1;
(statearr_18405_20036[(2)] = inst_18313);

(statearr_18405_20036[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (11))){
var inst_18286 = (state_18336[(14)]);
var inst_18296 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18286);
var state_18336__$1 = state_18336;
var statearr_18407_20037 = state_18336__$1;
(statearr_18407_20037[(2)] = inst_18296);

(statearr_18407_20037[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (9))){
var inst_18286 = (state_18336[(14)]);
var inst_18277 = (state_18336[(16)]);
var inst_18303 = (state_18336[(19)]);
var inst_18303__$1 = (inst_18277.cljs$core$IFn$_invoke$arity$1 ? inst_18277.cljs$core$IFn$_invoke$arity$1(inst_18286) : inst_18277.call(null,inst_18286));
var state_18336__$1 = (function (){var statearr_18411 = state_18336;
(statearr_18411[(19)] = inst_18303__$1);

return statearr_18411;
})();
if(cljs.core.truth_(inst_18303__$1)){
var statearr_18412_20038 = state_18336__$1;
(statearr_18412_20038[(1)] = (14));

} else {
var statearr_18413_20039 = state_18336__$1;
(statearr_18413_20039[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (5))){
var inst_18287 = (state_18336[(13)]);
var state_18336__$1 = state_18336;
var statearr_18415_20040 = state_18336__$1;
(statearr_18415_20040[(2)] = inst_18287);

(statearr_18415_20040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (14))){
var inst_18303 = (state_18336[(19)]);
var state_18336__$1 = state_18336;
var statearr_18418_20041 = state_18336__$1;
(statearr_18418_20041[(2)] = inst_18303);

(statearr_18418_20041[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (26))){
var inst_18323 = (state_18336[(2)]);
var state_18336__$1 = state_18336;
var statearr_18421_20042 = state_18336__$1;
(statearr_18421_20042[(2)] = inst_18323);

(statearr_18421_20042[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (16))){
var inst_18315 = (state_18336[(2)]);
var state_18336__$1 = state_18336;
if(cljs.core.truth_(inst_18315)){
var statearr_18423_20049 = state_18336__$1;
(statearr_18423_20049[(1)] = (20));

} else {
var statearr_18424_20050 = state_18336__$1;
(statearr_18424_20050[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (10))){
var inst_18329 = (state_18336[(2)]);
var state_18336__$1 = state_18336;
var statearr_18428_20051 = state_18336__$1;
(statearr_18428_20051[(2)] = inst_18329);

(statearr_18428_20051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (18))){
var inst_18306 = (state_18336[(15)]);
var state_18336__$1 = state_18336;
var statearr_18429_20052 = state_18336__$1;
(statearr_18429_20052[(2)] = inst_18306);

(statearr_18429_20052[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (8))){
var inst_18285 = (state_18336[(7)]);
var inst_18294 = (inst_18285 == null);
var state_18336__$1 = state_18336;
if(cljs.core.truth_(inst_18294)){
var statearr_18434_20053 = state_18336__$1;
(statearr_18434_20053[(1)] = (11));

} else {
var statearr_18437_20054 = state_18336__$1;
(statearr_18437_20054[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__17025__auto__ = null;
var cljs$core$async$mix_$_state_machine__17025__auto____0 = (function (){
var statearr_18440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18440[(0)] = cljs$core$async$mix_$_state_machine__17025__auto__);

(statearr_18440[(1)] = (1));

return statearr_18440;
});
var cljs$core$async$mix_$_state_machine__17025__auto____1 = (function (state_18336){
while(true){
var ret_value__17026__auto__ = (function (){try{while(true){
var result__17027__auto__ = switch__17024__auto__(state_18336);
if(cljs.core.keyword_identical_QMARK_(result__17027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17027__auto__;
}
break;
}
}catch (e18443){var ex__17028__auto__ = e18443;
var statearr_18445_20055 = state_18336;
(statearr_18445_20055[(2)] = ex__17028__auto__);


if(cljs.core.seq((state_18336[(4)]))){
var statearr_18446_20056 = state_18336;
(statearr_18446_20056[(1)] = cljs.core.first((state_18336[(4)])));

} else {
throw ex__17028__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20057 = state_18336;
state_18336 = G__20057;
continue;
} else {
return ret_value__17026__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17025__auto__ = function(state_18336){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17025__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17025__auto____1.call(this,state_18336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17025__auto____0;
cljs$core$async$mix_$_state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17025__auto____1;
return cljs$core$async$mix_$_state_machine__17025__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_18450 = f__17247__auto__();
(statearr_18450[(6)] = c__17246__auto___20001);

return statearr_18450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_20058 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20058(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20065 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20065(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20066 = (function() {
var G__20067 = null;
var G__20067__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20067__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20067 = function(p,v){
switch(arguments.length){
case 1:
return G__20067__1.call(this,p);
case 2:
return G__20067__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20067.cljs$core$IFn$_invoke$arity$1 = G__20067__1;
G__20067.cljs$core$IFn$_invoke$arity$2 = G__20067__2;
return G__20067;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18493 = arguments.length;
switch (G__18493) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20066(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20066(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__18509 = arguments.length;
switch (G__18509) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__18503_SHARP_){
if(cljs.core.truth_((p1__18503_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18503_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18503_SHARP_.call(null,topic)))){
return p1__18503_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18503_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18518 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18518 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18519){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18519 = meta18519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18520,meta18519__$1){
var self__ = this;
var _18520__$1 = this;
return (new cljs.core.async.t_cljs$core$async18518(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18519__$1));
}));

(cljs.core.async.t_cljs$core$async18518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18520){
var self__ = this;
var _18520__$1 = this;
return self__.meta18519;
}));

(cljs.core.async.t_cljs$core$async18518.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18518.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18518.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18518.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18518.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18518.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18518.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18519","meta18519",1430004606,null)], null);
}));

(cljs.core.async.t_cljs$core$async18518.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18518.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18518");

(cljs.core.async.t_cljs$core$async18518.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18518");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18518.
 */
cljs.core.async.__GT_t_cljs$core$async18518 = (function cljs$core$async$__GT_t_cljs$core$async18518(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18519){
return (new cljs.core.async.t_cljs$core$async18518(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18519));
});

}

return (new cljs.core.async.t_cljs$core$async18518(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17246__auto___20077 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17024__auto__ = (function (state_18645){
var state_val_18646 = (state_18645[(1)]);
if((state_val_18646 === (7))){
var inst_18641 = (state_18645[(2)]);
var state_18645__$1 = state_18645;
var statearr_18651_20078 = state_18645__$1;
(statearr_18651_20078[(2)] = inst_18641);

(statearr_18651_20078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (20))){
var state_18645__$1 = state_18645;
var statearr_18655_20083 = state_18645__$1;
(statearr_18655_20083[(2)] = null);

(statearr_18655_20083[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (1))){
var state_18645__$1 = state_18645;
var statearr_18657_20084 = state_18645__$1;
(statearr_18657_20084[(2)] = null);

(statearr_18657_20084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (24))){
var inst_18619 = (state_18645[(7)]);
var inst_18632 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18619);
var state_18645__$1 = state_18645;
var statearr_18658_20085 = state_18645__$1;
(statearr_18658_20085[(2)] = inst_18632);

(statearr_18658_20085[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (4))){
var inst_18549 = (state_18645[(8)]);
var inst_18549__$1 = (state_18645[(2)]);
var inst_18552 = (inst_18549__$1 == null);
var state_18645__$1 = (function (){var statearr_18662 = state_18645;
(statearr_18662[(8)] = inst_18549__$1);

return statearr_18662;
})();
if(cljs.core.truth_(inst_18552)){
var statearr_18664_20086 = state_18645__$1;
(statearr_18664_20086[(1)] = (5));

} else {
var statearr_18665_20087 = state_18645__$1;
(statearr_18665_20087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (15))){
var inst_18613 = (state_18645[(2)]);
var state_18645__$1 = state_18645;
var statearr_18666_20088 = state_18645__$1;
(statearr_18666_20088[(2)] = inst_18613);

(statearr_18666_20088[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (21))){
var inst_18637 = (state_18645[(2)]);
var state_18645__$1 = (function (){var statearr_18676 = state_18645;
(statearr_18676[(9)] = inst_18637);

return statearr_18676;
})();
var statearr_18681_20089 = state_18645__$1;
(statearr_18681_20089[(2)] = null);

(statearr_18681_20089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (13))){
var inst_18584 = (state_18645[(10)]);
var inst_18589 = cljs.core.chunked_seq_QMARK_(inst_18584);
var state_18645__$1 = state_18645;
if(inst_18589){
var statearr_18707_20090 = state_18645__$1;
(statearr_18707_20090[(1)] = (16));

} else {
var statearr_18708_20091 = state_18645__$1;
(statearr_18708_20091[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (22))){
var inst_18629 = (state_18645[(2)]);
var state_18645__$1 = state_18645;
if(cljs.core.truth_(inst_18629)){
var statearr_18709_20092 = state_18645__$1;
(statearr_18709_20092[(1)] = (23));

} else {
var statearr_18710_20093 = state_18645__$1;
(statearr_18710_20093[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (6))){
var inst_18621 = (state_18645[(11)]);
var inst_18549 = (state_18645[(8)]);
var inst_18619 = (state_18645[(7)]);
var inst_18619__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18549) : topic_fn.call(null,inst_18549));
var inst_18620 = cljs.core.deref(mults);
var inst_18621__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18620,inst_18619__$1);
var state_18645__$1 = (function (){var statearr_18718 = state_18645;
(statearr_18718[(11)] = inst_18621__$1);

(statearr_18718[(7)] = inst_18619__$1);

return statearr_18718;
})();
if(cljs.core.truth_(inst_18621__$1)){
var statearr_18720_20094 = state_18645__$1;
(statearr_18720_20094[(1)] = (19));

} else {
var statearr_18721_20095 = state_18645__$1;
(statearr_18721_20095[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (25))){
var inst_18634 = (state_18645[(2)]);
var state_18645__$1 = state_18645;
var statearr_18722_20096 = state_18645__$1;
(statearr_18722_20096[(2)] = inst_18634);

(statearr_18722_20096[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (17))){
var inst_18584 = (state_18645[(10)]);
var inst_18604 = cljs.core.first(inst_18584);
var inst_18605 = cljs.core.async.muxch_STAR_(inst_18604);
var inst_18606 = cljs.core.async.close_BANG_(inst_18605);
var inst_18607 = cljs.core.next(inst_18584);
var inst_18562 = inst_18607;
var inst_18563 = null;
var inst_18564 = (0);
var inst_18565 = (0);
var state_18645__$1 = (function (){var statearr_18726 = state_18645;
(statearr_18726[(12)] = inst_18564);

(statearr_18726[(13)] = inst_18606);

(statearr_18726[(14)] = inst_18565);

(statearr_18726[(15)] = inst_18563);

(statearr_18726[(16)] = inst_18562);

return statearr_18726;
})();
var statearr_18728_20097 = state_18645__$1;
(statearr_18728_20097[(2)] = null);

(statearr_18728_20097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (3))){
var inst_18643 = (state_18645[(2)]);
var state_18645__$1 = state_18645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18645__$1,inst_18643);
} else {
if((state_val_18646 === (12))){
var inst_18615 = (state_18645[(2)]);
var state_18645__$1 = state_18645;
var statearr_18730_20098 = state_18645__$1;
(statearr_18730_20098[(2)] = inst_18615);

(statearr_18730_20098[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (2))){
var state_18645__$1 = state_18645;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18645__$1,(4),ch);
} else {
if((state_val_18646 === (23))){
var state_18645__$1 = state_18645;
var statearr_18731_20100 = state_18645__$1;
(statearr_18731_20100[(2)] = null);

(statearr_18731_20100[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (19))){
var inst_18621 = (state_18645[(11)]);
var inst_18549 = (state_18645[(8)]);
var inst_18627 = cljs.core.async.muxch_STAR_(inst_18621);
var state_18645__$1 = state_18645;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18645__$1,(22),inst_18627,inst_18549);
} else {
if((state_val_18646 === (11))){
var inst_18584 = (state_18645[(10)]);
var inst_18562 = (state_18645[(16)]);
var inst_18584__$1 = cljs.core.seq(inst_18562);
var state_18645__$1 = (function (){var statearr_18739 = state_18645;
(statearr_18739[(10)] = inst_18584__$1);

return statearr_18739;
})();
if(inst_18584__$1){
var statearr_18740_20102 = state_18645__$1;
(statearr_18740_20102[(1)] = (13));

} else {
var statearr_18742_20103 = state_18645__$1;
(statearr_18742_20103[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (9))){
var inst_18617 = (state_18645[(2)]);
var state_18645__$1 = state_18645;
var statearr_18743_20104 = state_18645__$1;
(statearr_18743_20104[(2)] = inst_18617);

(statearr_18743_20104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (5))){
var inst_18559 = cljs.core.deref(mults);
var inst_18560 = cljs.core.vals(inst_18559);
var inst_18561 = cljs.core.seq(inst_18560);
var inst_18562 = inst_18561;
var inst_18563 = null;
var inst_18564 = (0);
var inst_18565 = (0);
var state_18645__$1 = (function (){var statearr_18747 = state_18645;
(statearr_18747[(12)] = inst_18564);

(statearr_18747[(14)] = inst_18565);

(statearr_18747[(15)] = inst_18563);

(statearr_18747[(16)] = inst_18562);

return statearr_18747;
})();
var statearr_18749_20105 = state_18645__$1;
(statearr_18749_20105[(2)] = null);

(statearr_18749_20105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (14))){
var state_18645__$1 = state_18645;
var statearr_18753_20106 = state_18645__$1;
(statearr_18753_20106[(2)] = null);

(statearr_18753_20106[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (16))){
var inst_18584 = (state_18645[(10)]);
var inst_18592 = cljs.core.chunk_first(inst_18584);
var inst_18596 = cljs.core.chunk_rest(inst_18584);
var inst_18597 = cljs.core.count(inst_18592);
var inst_18562 = inst_18596;
var inst_18563 = inst_18592;
var inst_18564 = inst_18597;
var inst_18565 = (0);
var state_18645__$1 = (function (){var statearr_18758 = state_18645;
(statearr_18758[(12)] = inst_18564);

(statearr_18758[(14)] = inst_18565);

(statearr_18758[(15)] = inst_18563);

(statearr_18758[(16)] = inst_18562);

return statearr_18758;
})();
var statearr_18759_20109 = state_18645__$1;
(statearr_18759_20109[(2)] = null);

(statearr_18759_20109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (10))){
var inst_18564 = (state_18645[(12)]);
var inst_18565 = (state_18645[(14)]);
var inst_18563 = (state_18645[(15)]);
var inst_18562 = (state_18645[(16)]);
var inst_18571 = cljs.core._nth(inst_18563,inst_18565);
var inst_18572 = cljs.core.async.muxch_STAR_(inst_18571);
var inst_18573 = cljs.core.async.close_BANG_(inst_18572);
var inst_18576 = (inst_18565 + (1));
var tmp18750 = inst_18564;
var tmp18751 = inst_18563;
var tmp18752 = inst_18562;
var inst_18562__$1 = tmp18752;
var inst_18563__$1 = tmp18751;
var inst_18564__$1 = tmp18750;
var inst_18565__$1 = inst_18576;
var state_18645__$1 = (function (){var statearr_18763 = state_18645;
(statearr_18763[(12)] = inst_18564__$1);

(statearr_18763[(17)] = inst_18573);

(statearr_18763[(14)] = inst_18565__$1);

(statearr_18763[(15)] = inst_18563__$1);

(statearr_18763[(16)] = inst_18562__$1);

return statearr_18763;
})();
var statearr_18765_20110 = state_18645__$1;
(statearr_18765_20110[(2)] = null);

(statearr_18765_20110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (18))){
var inst_18610 = (state_18645[(2)]);
var state_18645__$1 = state_18645;
var statearr_18766_20111 = state_18645__$1;
(statearr_18766_20111[(2)] = inst_18610);

(statearr_18766_20111[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (8))){
var inst_18564 = (state_18645[(12)]);
var inst_18565 = (state_18645[(14)]);
var inst_18568 = (inst_18565 < inst_18564);
var inst_18569 = inst_18568;
var state_18645__$1 = state_18645;
if(cljs.core.truth_(inst_18569)){
var statearr_18767_20112 = state_18645__$1;
(statearr_18767_20112[(1)] = (10));

} else {
var statearr_18768_20113 = state_18645__$1;
(statearr_18768_20113[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17025__auto__ = null;
var cljs$core$async$state_machine__17025__auto____0 = (function (){
var statearr_18769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18769[(0)] = cljs$core$async$state_machine__17025__auto__);

(statearr_18769[(1)] = (1));

return statearr_18769;
});
var cljs$core$async$state_machine__17025__auto____1 = (function (state_18645){
while(true){
var ret_value__17026__auto__ = (function (){try{while(true){
var result__17027__auto__ = switch__17024__auto__(state_18645);
if(cljs.core.keyword_identical_QMARK_(result__17027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17027__auto__;
}
break;
}
}catch (e18770){var ex__17028__auto__ = e18770;
var statearr_18771_20114 = state_18645;
(statearr_18771_20114[(2)] = ex__17028__auto__);


if(cljs.core.seq((state_18645[(4)]))){
var statearr_18772_20115 = state_18645;
(statearr_18772_20115[(1)] = cljs.core.first((state_18645[(4)])));

} else {
throw ex__17028__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20116 = state_18645;
state_18645 = G__20116;
continue;
} else {
return ret_value__17026__auto__;
}
break;
}
});
cljs$core$async$state_machine__17025__auto__ = function(state_18645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17025__auto____1.call(this,state_18645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17025__auto____0;
cljs$core$async$state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17025__auto____1;
return cljs$core$async$state_machine__17025__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_18773 = f__17247__auto__();
(statearr_18773[(6)] = c__17246__auto___20077);

return statearr_18773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__18779 = arguments.length;
switch (G__18779) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18782 = arguments.length;
switch (G__18782) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__18786 = arguments.length;
switch (G__18786) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__17246__auto___20122 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17024__auto__ = (function (state_18829){
var state_val_18830 = (state_18829[(1)]);
if((state_val_18830 === (7))){
var state_18829__$1 = state_18829;
var statearr_18831_20123 = state_18829__$1;
(statearr_18831_20123[(2)] = null);

(statearr_18831_20123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (1))){
var state_18829__$1 = state_18829;
var statearr_18832_20124 = state_18829__$1;
(statearr_18832_20124[(2)] = null);

(statearr_18832_20124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (4))){
var inst_18789 = (state_18829[(7)]);
var inst_18790 = (state_18829[(8)]);
var inst_18792 = (inst_18790 < inst_18789);
var state_18829__$1 = state_18829;
if(cljs.core.truth_(inst_18792)){
var statearr_18833_20126 = state_18829__$1;
(statearr_18833_20126[(1)] = (6));

} else {
var statearr_18834_20127 = state_18829__$1;
(statearr_18834_20127[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (15))){
var inst_18815 = (state_18829[(9)]);
var inst_18820 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18815);
var state_18829__$1 = state_18829;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18829__$1,(17),out,inst_18820);
} else {
if((state_val_18830 === (13))){
var inst_18815 = (state_18829[(9)]);
var inst_18815__$1 = (state_18829[(2)]);
var inst_18816 = cljs.core.some(cljs.core.nil_QMARK_,inst_18815__$1);
var state_18829__$1 = (function (){var statearr_18836 = state_18829;
(statearr_18836[(9)] = inst_18815__$1);

return statearr_18836;
})();
if(cljs.core.truth_(inst_18816)){
var statearr_18838_20128 = state_18829__$1;
(statearr_18838_20128[(1)] = (14));

} else {
var statearr_18839_20129 = state_18829__$1;
(statearr_18839_20129[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (6))){
var state_18829__$1 = state_18829;
var statearr_18840_20130 = state_18829__$1;
(statearr_18840_20130[(2)] = null);

(statearr_18840_20130[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (17))){
var inst_18822 = (state_18829[(2)]);
var state_18829__$1 = (function (){var statearr_18843 = state_18829;
(statearr_18843[(10)] = inst_18822);

return statearr_18843;
})();
var statearr_18844_20131 = state_18829__$1;
(statearr_18844_20131[(2)] = null);

(statearr_18844_20131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (3))){
var inst_18827 = (state_18829[(2)]);
var state_18829__$1 = state_18829;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18829__$1,inst_18827);
} else {
if((state_val_18830 === (12))){
var _ = (function (){var statearr_18846 = state_18829;
(statearr_18846[(4)] = cljs.core.rest((state_18829[(4)])));

return statearr_18846;
})();
var state_18829__$1 = state_18829;
var ex18841 = (state_18829__$1[(2)]);
var statearr_18847_20132 = state_18829__$1;
(statearr_18847_20132[(5)] = ex18841);


if((ex18841 instanceof Object)){
var statearr_18848_20133 = state_18829__$1;
(statearr_18848_20133[(1)] = (11));

(statearr_18848_20133[(5)] = null);

} else {
throw ex18841;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (2))){
var inst_18788 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18789 = cnt;
var inst_18790 = (0);
var state_18829__$1 = (function (){var statearr_18851 = state_18829;
(statearr_18851[(7)] = inst_18789);

(statearr_18851[(11)] = inst_18788);

(statearr_18851[(8)] = inst_18790);

return statearr_18851;
})();
var statearr_18852_20137 = state_18829__$1;
(statearr_18852_20137[(2)] = null);

(statearr_18852_20137[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (11))){
var inst_18794 = (state_18829[(2)]);
var inst_18795 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18829__$1 = (function (){var statearr_18853 = state_18829;
(statearr_18853[(12)] = inst_18794);

return statearr_18853;
})();
var statearr_18854_20138 = state_18829__$1;
(statearr_18854_20138[(2)] = inst_18795);

(statearr_18854_20138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (9))){
var inst_18790 = (state_18829[(8)]);
var _ = (function (){var statearr_18855 = state_18829;
(statearr_18855[(4)] = cljs.core.cons((12),(state_18829[(4)])));

return statearr_18855;
})();
var inst_18801 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18790) : chs__$1.call(null,inst_18790));
var inst_18802 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18790) : done.call(null,inst_18790));
var inst_18803 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18801,inst_18802);
var ___$1 = (function (){var statearr_18856 = state_18829;
(statearr_18856[(4)] = cljs.core.rest((state_18829[(4)])));

return statearr_18856;
})();
var state_18829__$1 = state_18829;
var statearr_18857_20139 = state_18829__$1;
(statearr_18857_20139[(2)] = inst_18803);

(statearr_18857_20139[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (5))){
var inst_18813 = (state_18829[(2)]);
var state_18829__$1 = (function (){var statearr_18858 = state_18829;
(statearr_18858[(13)] = inst_18813);

return statearr_18858;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18829__$1,(13),dchan);
} else {
if((state_val_18830 === (14))){
var inst_18818 = cljs.core.async.close_BANG_(out);
var state_18829__$1 = state_18829;
var statearr_18859_20140 = state_18829__$1;
(statearr_18859_20140[(2)] = inst_18818);

(statearr_18859_20140[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (16))){
var inst_18825 = (state_18829[(2)]);
var state_18829__$1 = state_18829;
var statearr_18860_20141 = state_18829__$1;
(statearr_18860_20141[(2)] = inst_18825);

(statearr_18860_20141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (10))){
var inst_18790 = (state_18829[(8)]);
var inst_18806 = (state_18829[(2)]);
var inst_18807 = (inst_18790 + (1));
var inst_18790__$1 = inst_18807;
var state_18829__$1 = (function (){var statearr_18861 = state_18829;
(statearr_18861[(8)] = inst_18790__$1);

(statearr_18861[(14)] = inst_18806);

return statearr_18861;
})();
var statearr_18862_20142 = state_18829__$1;
(statearr_18862_20142[(2)] = null);

(statearr_18862_20142[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (8))){
var inst_18811 = (state_18829[(2)]);
var state_18829__$1 = state_18829;
var statearr_18863_20146 = state_18829__$1;
(statearr_18863_20146[(2)] = inst_18811);

(statearr_18863_20146[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17025__auto__ = null;
var cljs$core$async$state_machine__17025__auto____0 = (function (){
var statearr_18866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18866[(0)] = cljs$core$async$state_machine__17025__auto__);

(statearr_18866[(1)] = (1));

return statearr_18866;
});
var cljs$core$async$state_machine__17025__auto____1 = (function (state_18829){
while(true){
var ret_value__17026__auto__ = (function (){try{while(true){
var result__17027__auto__ = switch__17024__auto__(state_18829);
if(cljs.core.keyword_identical_QMARK_(result__17027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17027__auto__;
}
break;
}
}catch (e18867){var ex__17028__auto__ = e18867;
var statearr_18868_20147 = state_18829;
(statearr_18868_20147[(2)] = ex__17028__auto__);


if(cljs.core.seq((state_18829[(4)]))){
var statearr_18869_20148 = state_18829;
(statearr_18869_20148[(1)] = cljs.core.first((state_18829[(4)])));

} else {
throw ex__17028__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20149 = state_18829;
state_18829 = G__20149;
continue;
} else {
return ret_value__17026__auto__;
}
break;
}
});
cljs$core$async$state_machine__17025__auto__ = function(state_18829){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17025__auto____1.call(this,state_18829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17025__auto____0;
cljs$core$async$state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17025__auto____1;
return cljs$core$async$state_machine__17025__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_18870 = f__17247__auto__();
(statearr_18870[(6)] = c__17246__auto___20122);

return statearr_18870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__18877 = arguments.length;
switch (G__18877) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17246__auto___20151 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17024__auto__ = (function (state_18924){
var state_val_18931 = (state_18924[(1)]);
if((state_val_18931 === (7))){
var inst_18893 = (state_18924[(7)]);
var inst_18897 = (state_18924[(8)]);
var inst_18893__$1 = (state_18924[(2)]);
var inst_18897__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18893__$1,(0),null);
var inst_18898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18893__$1,(1),null);
var inst_18899 = (inst_18897__$1 == null);
var state_18924__$1 = (function (){var statearr_18951 = state_18924;
(statearr_18951[(9)] = inst_18898);

(statearr_18951[(7)] = inst_18893__$1);

(statearr_18951[(8)] = inst_18897__$1);

return statearr_18951;
})();
if(cljs.core.truth_(inst_18899)){
var statearr_18952_20152 = state_18924__$1;
(statearr_18952_20152[(1)] = (8));

} else {
var statearr_18953_20153 = state_18924__$1;
(statearr_18953_20153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (1))){
var inst_18883 = cljs.core.vec(chs);
var inst_18884 = inst_18883;
var state_18924__$1 = (function (){var statearr_18958 = state_18924;
(statearr_18958[(10)] = inst_18884);

return statearr_18958;
})();
var statearr_18959_20154 = state_18924__$1;
(statearr_18959_20154[(2)] = null);

(statearr_18959_20154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (4))){
var inst_18884 = (state_18924[(10)]);
var state_18924__$1 = state_18924;
return cljs.core.async.ioc_alts_BANG_(state_18924__$1,(7),inst_18884);
} else {
if((state_val_18931 === (6))){
var inst_18913 = (state_18924[(2)]);
var state_18924__$1 = state_18924;
var statearr_18968_20155 = state_18924__$1;
(statearr_18968_20155[(2)] = inst_18913);

(statearr_18968_20155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (3))){
var inst_18915 = (state_18924[(2)]);
var state_18924__$1 = state_18924;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18924__$1,inst_18915);
} else {
if((state_val_18931 === (2))){
var inst_18884 = (state_18924[(10)]);
var inst_18886 = cljs.core.count(inst_18884);
var inst_18887 = (inst_18886 > (0));
var state_18924__$1 = state_18924;
if(cljs.core.truth_(inst_18887)){
var statearr_18970_20156 = state_18924__$1;
(statearr_18970_20156[(1)] = (4));

} else {
var statearr_18971_20157 = state_18924__$1;
(statearr_18971_20157[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (11))){
var inst_18884 = (state_18924[(10)]);
var inst_18906 = (state_18924[(2)]);
var tmp18969 = inst_18884;
var inst_18884__$1 = tmp18969;
var state_18924__$1 = (function (){var statearr_18972 = state_18924;
(statearr_18972[(11)] = inst_18906);

(statearr_18972[(10)] = inst_18884__$1);

return statearr_18972;
})();
var statearr_18973_20158 = state_18924__$1;
(statearr_18973_20158[(2)] = null);

(statearr_18973_20158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (9))){
var inst_18897 = (state_18924[(8)]);
var state_18924__$1 = state_18924;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18924__$1,(11),out,inst_18897);
} else {
if((state_val_18931 === (5))){
var inst_18911 = cljs.core.async.close_BANG_(out);
var state_18924__$1 = state_18924;
var statearr_18974_20159 = state_18924__$1;
(statearr_18974_20159[(2)] = inst_18911);

(statearr_18974_20159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (10))){
var inst_18909 = (state_18924[(2)]);
var state_18924__$1 = state_18924;
var statearr_18975_20160 = state_18924__$1;
(statearr_18975_20160[(2)] = inst_18909);

(statearr_18975_20160[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (8))){
var inst_18898 = (state_18924[(9)]);
var inst_18893 = (state_18924[(7)]);
var inst_18884 = (state_18924[(10)]);
var inst_18897 = (state_18924[(8)]);
var inst_18901 = (function (){var cs = inst_18884;
var vec__18889 = inst_18893;
var v = inst_18897;
var c = inst_18898;
return (function (p1__18875_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18875_SHARP_);
});
})();
var inst_18902 = cljs.core.filterv(inst_18901,inst_18884);
var inst_18884__$1 = inst_18902;
var state_18924__$1 = (function (){var statearr_18976 = state_18924;
(statearr_18976[(10)] = inst_18884__$1);

return statearr_18976;
})();
var statearr_18977_20161 = state_18924__$1;
(statearr_18977_20161[(2)] = null);

(statearr_18977_20161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17025__auto__ = null;
var cljs$core$async$state_machine__17025__auto____0 = (function (){
var statearr_18980 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18980[(0)] = cljs$core$async$state_machine__17025__auto__);

(statearr_18980[(1)] = (1));

return statearr_18980;
});
var cljs$core$async$state_machine__17025__auto____1 = (function (state_18924){
while(true){
var ret_value__17026__auto__ = (function (){try{while(true){
var result__17027__auto__ = switch__17024__auto__(state_18924);
if(cljs.core.keyword_identical_QMARK_(result__17027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17027__auto__;
}
break;
}
}catch (e18981){var ex__17028__auto__ = e18981;
var statearr_18982_20163 = state_18924;
(statearr_18982_20163[(2)] = ex__17028__auto__);


if(cljs.core.seq((state_18924[(4)]))){
var statearr_18983_20164 = state_18924;
(statearr_18983_20164[(1)] = cljs.core.first((state_18924[(4)])));

} else {
throw ex__17028__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20165 = state_18924;
state_18924 = G__20165;
continue;
} else {
return ret_value__17026__auto__;
}
break;
}
});
cljs$core$async$state_machine__17025__auto__ = function(state_18924){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17025__auto____1.call(this,state_18924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17025__auto____0;
cljs$core$async$state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17025__auto____1;
return cljs$core$async$state_machine__17025__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_18984 = f__17247__auto__();
(statearr_18984[(6)] = c__17246__auto___20151);

return statearr_18984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__18991 = arguments.length;
switch (G__18991) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17246__auto___20167 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17024__auto__ = (function (state_19015){
var state_val_19016 = (state_19015[(1)]);
if((state_val_19016 === (7))){
var inst_18997 = (state_19015[(7)]);
var inst_18997__$1 = (state_19015[(2)]);
var inst_18998 = (inst_18997__$1 == null);
var inst_18999 = cljs.core.not(inst_18998);
var state_19015__$1 = (function (){var statearr_19017 = state_19015;
(statearr_19017[(7)] = inst_18997__$1);

return statearr_19017;
})();
if(inst_18999){
var statearr_19018_20168 = state_19015__$1;
(statearr_19018_20168[(1)] = (8));

} else {
var statearr_19019_20169 = state_19015__$1;
(statearr_19019_20169[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19016 === (1))){
var inst_18992 = (0);
var state_19015__$1 = (function (){var statearr_19020 = state_19015;
(statearr_19020[(8)] = inst_18992);

return statearr_19020;
})();
var statearr_19021_20170 = state_19015__$1;
(statearr_19021_20170[(2)] = null);

(statearr_19021_20170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19016 === (4))){
var state_19015__$1 = state_19015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19015__$1,(7),ch);
} else {
if((state_val_19016 === (6))){
var inst_19010 = (state_19015[(2)]);
var state_19015__$1 = state_19015;
var statearr_19022_20171 = state_19015__$1;
(statearr_19022_20171[(2)] = inst_19010);

(statearr_19022_20171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19016 === (3))){
var inst_19012 = (state_19015[(2)]);
var inst_19013 = cljs.core.async.close_BANG_(out);
var state_19015__$1 = (function (){var statearr_19023 = state_19015;
(statearr_19023[(9)] = inst_19012);

return statearr_19023;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19015__$1,inst_19013);
} else {
if((state_val_19016 === (2))){
var inst_18992 = (state_19015[(8)]);
var inst_18994 = (inst_18992 < n);
var state_19015__$1 = state_19015;
if(cljs.core.truth_(inst_18994)){
var statearr_19024_20172 = state_19015__$1;
(statearr_19024_20172[(1)] = (4));

} else {
var statearr_19025_20173 = state_19015__$1;
(statearr_19025_20173[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19016 === (11))){
var inst_18992 = (state_19015[(8)]);
var inst_19002 = (state_19015[(2)]);
var inst_19003 = (inst_18992 + (1));
var inst_18992__$1 = inst_19003;
var state_19015__$1 = (function (){var statearr_19027 = state_19015;
(statearr_19027[(10)] = inst_19002);

(statearr_19027[(8)] = inst_18992__$1);

return statearr_19027;
})();
var statearr_19031_20174 = state_19015__$1;
(statearr_19031_20174[(2)] = null);

(statearr_19031_20174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19016 === (9))){
var state_19015__$1 = state_19015;
var statearr_19032_20175 = state_19015__$1;
(statearr_19032_20175[(2)] = null);

(statearr_19032_20175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19016 === (5))){
var state_19015__$1 = state_19015;
var statearr_19034_20176 = state_19015__$1;
(statearr_19034_20176[(2)] = null);

(statearr_19034_20176[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19016 === (10))){
var inst_19007 = (state_19015[(2)]);
var state_19015__$1 = state_19015;
var statearr_19035_20177 = state_19015__$1;
(statearr_19035_20177[(2)] = inst_19007);

(statearr_19035_20177[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19016 === (8))){
var inst_18997 = (state_19015[(7)]);
var state_19015__$1 = state_19015;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19015__$1,(11),out,inst_18997);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17025__auto__ = null;
var cljs$core$async$state_machine__17025__auto____0 = (function (){
var statearr_19038 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19038[(0)] = cljs$core$async$state_machine__17025__auto__);

(statearr_19038[(1)] = (1));

return statearr_19038;
});
var cljs$core$async$state_machine__17025__auto____1 = (function (state_19015){
while(true){
var ret_value__17026__auto__ = (function (){try{while(true){
var result__17027__auto__ = switch__17024__auto__(state_19015);
if(cljs.core.keyword_identical_QMARK_(result__17027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17027__auto__;
}
break;
}
}catch (e19039){var ex__17028__auto__ = e19039;
var statearr_19040_20182 = state_19015;
(statearr_19040_20182[(2)] = ex__17028__auto__);


if(cljs.core.seq((state_19015[(4)]))){
var statearr_19041_20183 = state_19015;
(statearr_19041_20183[(1)] = cljs.core.first((state_19015[(4)])));

} else {
throw ex__17028__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20184 = state_19015;
state_19015 = G__20184;
continue;
} else {
return ret_value__17026__auto__;
}
break;
}
});
cljs$core$async$state_machine__17025__auto__ = function(state_19015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17025__auto____1.call(this,state_19015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17025__auto____0;
cljs$core$async$state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17025__auto____1;
return cljs$core$async$state_machine__17025__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_19042 = f__17247__auto__();
(statearr_19042[(6)] = c__17246__auto___20167);

return statearr_19042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19044 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19044 = (function (f,ch,meta19045){
this.f = f;
this.ch = ch;
this.meta19045 = meta19045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19046,meta19045__$1){
var self__ = this;
var _19046__$1 = this;
return (new cljs.core.async.t_cljs$core$async19044(self__.f,self__.ch,meta19045__$1));
}));

(cljs.core.async.t_cljs$core$async19044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19046){
var self__ = this;
var _19046__$1 = this;
return self__.meta19045;
}));

(cljs.core.async.t_cljs$core$async19044.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19044.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19044.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19044.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19044.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19049 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19049 = (function (f,ch,meta19045,_,fn1,meta19050){
this.f = f;
this.ch = ch;
this.meta19045 = meta19045;
this._ = _;
this.fn1 = fn1;
this.meta19050 = meta19050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19051,meta19050__$1){
var self__ = this;
var _19051__$1 = this;
return (new cljs.core.async.t_cljs$core$async19049(self__.f,self__.ch,self__.meta19045,self__._,self__.fn1,meta19050__$1));
}));

(cljs.core.async.t_cljs$core$async19049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19051){
var self__ = this;
var _19051__$1 = this;
return self__.meta19050;
}));

(cljs.core.async.t_cljs$core$async19049.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19049.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19049.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19049.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__19043_SHARP_){
var G__19055 = (((p1__19043_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19043_SHARP_) : self__.f.call(null,p1__19043_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19055) : f1.call(null,G__19055));
});
}));

(cljs.core.async.t_cljs$core$async19049.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19045","meta19045",92820709,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19044","cljs.core.async/t_cljs$core$async19044",1527250770,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19050","meta19050",-216624238,null)], null);
}));

(cljs.core.async.t_cljs$core$async19049.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19049.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19049");

(cljs.core.async.t_cljs$core$async19049.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19049");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19049.
 */
cljs.core.async.__GT_t_cljs$core$async19049 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19049(f__$1,ch__$1,meta19045__$1,___$2,fn1__$1,meta19050){
return (new cljs.core.async.t_cljs$core$async19049(f__$1,ch__$1,meta19045__$1,___$2,fn1__$1,meta19050));
});

}

return (new cljs.core.async.t_cljs$core$async19049(self__.f,self__.ch,self__.meta19045,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19056 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19056) : self__.f.call(null,G__19056));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19044.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19044.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19045","meta19045",92820709,null)], null);
}));

(cljs.core.async.t_cljs$core$async19044.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19044.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19044");

(cljs.core.async.t_cljs$core$async19044.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19044");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19044.
 */
cljs.core.async.__GT_t_cljs$core$async19044 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19044(f__$1,ch__$1,meta19045){
return (new cljs.core.async.t_cljs$core$async19044(f__$1,ch__$1,meta19045));
});

}

return (new cljs.core.async.t_cljs$core$async19044(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19057 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19057 = (function (f,ch,meta19058){
this.f = f;
this.ch = ch;
this.meta19058 = meta19058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19059,meta19058__$1){
var self__ = this;
var _19059__$1 = this;
return (new cljs.core.async.t_cljs$core$async19057(self__.f,self__.ch,meta19058__$1));
}));

(cljs.core.async.t_cljs$core$async19057.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19059){
var self__ = this;
var _19059__$1 = this;
return self__.meta19058;
}));

(cljs.core.async.t_cljs$core$async19057.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19057.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19057.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19057.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19057.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19057.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async19057.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19058","meta19058",1536410921,null)], null);
}));

(cljs.core.async.t_cljs$core$async19057.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19057.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19057");

(cljs.core.async.t_cljs$core$async19057.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19057");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19057.
 */
cljs.core.async.__GT_t_cljs$core$async19057 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19057(f__$1,ch__$1,meta19058){
return (new cljs.core.async.t_cljs$core$async19057(f__$1,ch__$1,meta19058));
});

}

return (new cljs.core.async.t_cljs$core$async19057(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19068 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19068 = (function (p,ch,meta19069){
this.p = p;
this.ch = ch;
this.meta19069 = meta19069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19070,meta19069__$1){
var self__ = this;
var _19070__$1 = this;
return (new cljs.core.async.t_cljs$core$async19068(self__.p,self__.ch,meta19069__$1));
}));

(cljs.core.async.t_cljs$core$async19068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19070){
var self__ = this;
var _19070__$1 = this;
return self__.meta19069;
}));

(cljs.core.async.t_cljs$core$async19068.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19068.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19068.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19068.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19068.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19068.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19068.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19068.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19069","meta19069",-1994646769,null)], null);
}));

(cljs.core.async.t_cljs$core$async19068.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19068.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19068");

(cljs.core.async.t_cljs$core$async19068.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19068");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19068.
 */
cljs.core.async.__GT_t_cljs$core$async19068 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19068(p__$1,ch__$1,meta19069){
return (new cljs.core.async.t_cljs$core$async19068(p__$1,ch__$1,meta19069));
});

}

return (new cljs.core.async.t_cljs$core$async19068(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19077 = arguments.length;
switch (G__19077) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17246__auto___20223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17024__auto__ = (function (state_19098){
var state_val_19099 = (state_19098[(1)]);
if((state_val_19099 === (7))){
var inst_19094 = (state_19098[(2)]);
var state_19098__$1 = state_19098;
var statearr_19100_20227 = state_19098__$1;
(statearr_19100_20227[(2)] = inst_19094);

(statearr_19100_20227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (1))){
var state_19098__$1 = state_19098;
var statearr_19101_20228 = state_19098__$1;
(statearr_19101_20228[(2)] = null);

(statearr_19101_20228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (4))){
var inst_19080 = (state_19098[(7)]);
var inst_19080__$1 = (state_19098[(2)]);
var inst_19081 = (inst_19080__$1 == null);
var state_19098__$1 = (function (){var statearr_19102 = state_19098;
(statearr_19102[(7)] = inst_19080__$1);

return statearr_19102;
})();
if(cljs.core.truth_(inst_19081)){
var statearr_19103_20229 = state_19098__$1;
(statearr_19103_20229[(1)] = (5));

} else {
var statearr_19104_20230 = state_19098__$1;
(statearr_19104_20230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (6))){
var inst_19080 = (state_19098[(7)]);
var inst_19085 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19080) : p.call(null,inst_19080));
var state_19098__$1 = state_19098;
if(cljs.core.truth_(inst_19085)){
var statearr_19105_20231 = state_19098__$1;
(statearr_19105_20231[(1)] = (8));

} else {
var statearr_19106_20232 = state_19098__$1;
(statearr_19106_20232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (3))){
var inst_19096 = (state_19098[(2)]);
var state_19098__$1 = state_19098;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19098__$1,inst_19096);
} else {
if((state_val_19099 === (2))){
var state_19098__$1 = state_19098;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19098__$1,(4),ch);
} else {
if((state_val_19099 === (11))){
var inst_19088 = (state_19098[(2)]);
var state_19098__$1 = state_19098;
var statearr_19107_20234 = state_19098__$1;
(statearr_19107_20234[(2)] = inst_19088);

(statearr_19107_20234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (9))){
var state_19098__$1 = state_19098;
var statearr_19108_20235 = state_19098__$1;
(statearr_19108_20235[(2)] = null);

(statearr_19108_20235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (5))){
var inst_19083 = cljs.core.async.close_BANG_(out);
var state_19098__$1 = state_19098;
var statearr_19109_20236 = state_19098__$1;
(statearr_19109_20236[(2)] = inst_19083);

(statearr_19109_20236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (10))){
var inst_19091 = (state_19098[(2)]);
var state_19098__$1 = (function (){var statearr_19110 = state_19098;
(statearr_19110[(8)] = inst_19091);

return statearr_19110;
})();
var statearr_19111_20237 = state_19098__$1;
(statearr_19111_20237[(2)] = null);

(statearr_19111_20237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19099 === (8))){
var inst_19080 = (state_19098[(7)]);
var state_19098__$1 = state_19098;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19098__$1,(11),out,inst_19080);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17025__auto__ = null;
var cljs$core$async$state_machine__17025__auto____0 = (function (){
var statearr_19112 = [null,null,null,null,null,null,null,null,null];
(statearr_19112[(0)] = cljs$core$async$state_machine__17025__auto__);

(statearr_19112[(1)] = (1));

return statearr_19112;
});
var cljs$core$async$state_machine__17025__auto____1 = (function (state_19098){
while(true){
var ret_value__17026__auto__ = (function (){try{while(true){
var result__17027__auto__ = switch__17024__auto__(state_19098);
if(cljs.core.keyword_identical_QMARK_(result__17027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17027__auto__;
}
break;
}
}catch (e19113){var ex__17028__auto__ = e19113;
var statearr_19114_20242 = state_19098;
(statearr_19114_20242[(2)] = ex__17028__auto__);


if(cljs.core.seq((state_19098[(4)]))){
var statearr_19115_20243 = state_19098;
(statearr_19115_20243[(1)] = cljs.core.first((state_19098[(4)])));

} else {
throw ex__17028__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20244 = state_19098;
state_19098 = G__20244;
continue;
} else {
return ret_value__17026__auto__;
}
break;
}
});
cljs$core$async$state_machine__17025__auto__ = function(state_19098){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17025__auto____1.call(this,state_19098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17025__auto____0;
cljs$core$async$state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17025__auto____1;
return cljs$core$async$state_machine__17025__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_19117 = f__17247__auto__();
(statearr_19117[(6)] = c__17246__auto___20223);

return statearr_19117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19119 = arguments.length;
switch (G__19119) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17246__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17024__auto__ = (function (state_19188){
var state_val_19189 = (state_19188[(1)]);
if((state_val_19189 === (7))){
var inst_19184 = (state_19188[(2)]);
var state_19188__$1 = state_19188;
var statearr_19190_20246 = state_19188__$1;
(statearr_19190_20246[(2)] = inst_19184);

(statearr_19190_20246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (20))){
var inst_19150 = (state_19188[(7)]);
var inst_19165 = (state_19188[(2)]);
var inst_19166 = cljs.core.next(inst_19150);
var inst_19136 = inst_19166;
var inst_19137 = null;
var inst_19138 = (0);
var inst_19139 = (0);
var state_19188__$1 = (function (){var statearr_19191 = state_19188;
(statearr_19191[(8)] = inst_19139);

(statearr_19191[(9)] = inst_19138);

(statearr_19191[(10)] = inst_19137);

(statearr_19191[(11)] = inst_19165);

(statearr_19191[(12)] = inst_19136);

return statearr_19191;
})();
var statearr_19192_20251 = state_19188__$1;
(statearr_19192_20251[(2)] = null);

(statearr_19192_20251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (1))){
var state_19188__$1 = state_19188;
var statearr_19193_20252 = state_19188__$1;
(statearr_19193_20252[(2)] = null);

(statearr_19193_20252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (4))){
var inst_19125 = (state_19188[(13)]);
var inst_19125__$1 = (state_19188[(2)]);
var inst_19126 = (inst_19125__$1 == null);
var state_19188__$1 = (function (){var statearr_19194 = state_19188;
(statearr_19194[(13)] = inst_19125__$1);

return statearr_19194;
})();
if(cljs.core.truth_(inst_19126)){
var statearr_19195_20254 = state_19188__$1;
(statearr_19195_20254[(1)] = (5));

} else {
var statearr_19196_20255 = state_19188__$1;
(statearr_19196_20255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (15))){
var state_19188__$1 = state_19188;
var statearr_19200_20256 = state_19188__$1;
(statearr_19200_20256[(2)] = null);

(statearr_19200_20256[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (21))){
var state_19188__$1 = state_19188;
var statearr_19201_20257 = state_19188__$1;
(statearr_19201_20257[(2)] = null);

(statearr_19201_20257[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (13))){
var inst_19139 = (state_19188[(8)]);
var inst_19138 = (state_19188[(9)]);
var inst_19137 = (state_19188[(10)]);
var inst_19136 = (state_19188[(12)]);
var inst_19146 = (state_19188[(2)]);
var inst_19147 = (inst_19139 + (1));
var tmp19197 = inst_19138;
var tmp19198 = inst_19137;
var tmp19199 = inst_19136;
var inst_19136__$1 = tmp19199;
var inst_19137__$1 = tmp19198;
var inst_19138__$1 = tmp19197;
var inst_19139__$1 = inst_19147;
var state_19188__$1 = (function (){var statearr_19202 = state_19188;
(statearr_19202[(8)] = inst_19139__$1);

(statearr_19202[(9)] = inst_19138__$1);

(statearr_19202[(10)] = inst_19137__$1);

(statearr_19202[(14)] = inst_19146);

(statearr_19202[(12)] = inst_19136__$1);

return statearr_19202;
})();
var statearr_19203_20258 = state_19188__$1;
(statearr_19203_20258[(2)] = null);

(statearr_19203_20258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (22))){
var state_19188__$1 = state_19188;
var statearr_19204_20259 = state_19188__$1;
(statearr_19204_20259[(2)] = null);

(statearr_19204_20259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (6))){
var inst_19125 = (state_19188[(13)]);
var inst_19134 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19125) : f.call(null,inst_19125));
var inst_19135 = cljs.core.seq(inst_19134);
var inst_19136 = inst_19135;
var inst_19137 = null;
var inst_19138 = (0);
var inst_19139 = (0);
var state_19188__$1 = (function (){var statearr_19205 = state_19188;
(statearr_19205[(8)] = inst_19139);

(statearr_19205[(9)] = inst_19138);

(statearr_19205[(10)] = inst_19137);

(statearr_19205[(12)] = inst_19136);

return statearr_19205;
})();
var statearr_19214_20262 = state_19188__$1;
(statearr_19214_20262[(2)] = null);

(statearr_19214_20262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (17))){
var inst_19150 = (state_19188[(7)]);
var inst_19155 = cljs.core.chunk_first(inst_19150);
var inst_19159 = cljs.core.chunk_rest(inst_19150);
var inst_19160 = cljs.core.count(inst_19155);
var inst_19136 = inst_19159;
var inst_19137 = inst_19155;
var inst_19138 = inst_19160;
var inst_19139 = (0);
var state_19188__$1 = (function (){var statearr_19221 = state_19188;
(statearr_19221[(8)] = inst_19139);

(statearr_19221[(9)] = inst_19138);

(statearr_19221[(10)] = inst_19137);

(statearr_19221[(12)] = inst_19136);

return statearr_19221;
})();
var statearr_19222_20265 = state_19188__$1;
(statearr_19222_20265[(2)] = null);

(statearr_19222_20265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (3))){
var inst_19186 = (state_19188[(2)]);
var state_19188__$1 = state_19188;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19188__$1,inst_19186);
} else {
if((state_val_19189 === (12))){
var inst_19174 = (state_19188[(2)]);
var state_19188__$1 = state_19188;
var statearr_19229_20270 = state_19188__$1;
(statearr_19229_20270[(2)] = inst_19174);

(statearr_19229_20270[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (2))){
var state_19188__$1 = state_19188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19188__$1,(4),in$);
} else {
if((state_val_19189 === (23))){
var inst_19182 = (state_19188[(2)]);
var state_19188__$1 = state_19188;
var statearr_19230_20271 = state_19188__$1;
(statearr_19230_20271[(2)] = inst_19182);

(statearr_19230_20271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (19))){
var inst_19169 = (state_19188[(2)]);
var state_19188__$1 = state_19188;
var statearr_19231_20272 = state_19188__$1;
(statearr_19231_20272[(2)] = inst_19169);

(statearr_19231_20272[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (11))){
var inst_19150 = (state_19188[(7)]);
var inst_19136 = (state_19188[(12)]);
var inst_19150__$1 = cljs.core.seq(inst_19136);
var state_19188__$1 = (function (){var statearr_19232 = state_19188;
(statearr_19232[(7)] = inst_19150__$1);

return statearr_19232;
})();
if(inst_19150__$1){
var statearr_19241_20273 = state_19188__$1;
(statearr_19241_20273[(1)] = (14));

} else {
var statearr_19242_20274 = state_19188__$1;
(statearr_19242_20274[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (9))){
var inst_19176 = (state_19188[(2)]);
var inst_19177 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19188__$1 = (function (){var statearr_19249 = state_19188;
(statearr_19249[(15)] = inst_19176);

return statearr_19249;
})();
if(cljs.core.truth_(inst_19177)){
var statearr_19250_20275 = state_19188__$1;
(statearr_19250_20275[(1)] = (21));

} else {
var statearr_19251_20276 = state_19188__$1;
(statearr_19251_20276[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (5))){
var inst_19128 = cljs.core.async.close_BANG_(out);
var state_19188__$1 = state_19188;
var statearr_19258_20277 = state_19188__$1;
(statearr_19258_20277[(2)] = inst_19128);

(statearr_19258_20277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (14))){
var inst_19150 = (state_19188[(7)]);
var inst_19152 = cljs.core.chunked_seq_QMARK_(inst_19150);
var state_19188__$1 = state_19188;
if(inst_19152){
var statearr_19259_20278 = state_19188__$1;
(statearr_19259_20278[(1)] = (17));

} else {
var statearr_19260_20279 = state_19188__$1;
(statearr_19260_20279[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (16))){
var inst_19172 = (state_19188[(2)]);
var state_19188__$1 = state_19188;
var statearr_19261_20280 = state_19188__$1;
(statearr_19261_20280[(2)] = inst_19172);

(statearr_19261_20280[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (10))){
var inst_19139 = (state_19188[(8)]);
var inst_19137 = (state_19188[(10)]);
var inst_19144 = cljs.core._nth(inst_19137,inst_19139);
var state_19188__$1 = state_19188;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19188__$1,(13),out,inst_19144);
} else {
if((state_val_19189 === (18))){
var inst_19150 = (state_19188[(7)]);
var inst_19163 = cljs.core.first(inst_19150);
var state_19188__$1 = state_19188;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19188__$1,(20),out,inst_19163);
} else {
if((state_val_19189 === (8))){
var inst_19139 = (state_19188[(8)]);
var inst_19138 = (state_19188[(9)]);
var inst_19141 = (inst_19139 < inst_19138);
var inst_19142 = inst_19141;
var state_19188__$1 = state_19188;
if(cljs.core.truth_(inst_19142)){
var statearr_19264_20281 = state_19188__$1;
(statearr_19264_20281[(1)] = (10));

} else {
var statearr_19265_20282 = state_19188__$1;
(statearr_19265_20282[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17025__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17025__auto____0 = (function (){
var statearr_19267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19267[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17025__auto__);

(statearr_19267[(1)] = (1));

return statearr_19267;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17025__auto____1 = (function (state_19188){
while(true){
var ret_value__17026__auto__ = (function (){try{while(true){
var result__17027__auto__ = switch__17024__auto__(state_19188);
if(cljs.core.keyword_identical_QMARK_(result__17027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17027__auto__;
}
break;
}
}catch (e19268){var ex__17028__auto__ = e19268;
var statearr_19269_20283 = state_19188;
(statearr_19269_20283[(2)] = ex__17028__auto__);


if(cljs.core.seq((state_19188[(4)]))){
var statearr_19270_20284 = state_19188;
(statearr_19270_20284[(1)] = cljs.core.first((state_19188[(4)])));

} else {
throw ex__17028__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20285 = state_19188;
state_19188 = G__20285;
continue;
} else {
return ret_value__17026__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17025__auto__ = function(state_19188){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17025__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17025__auto____1.call(this,state_19188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17025__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17025__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17025__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_19271 = f__17247__auto__();
(statearr_19271[(6)] = c__17246__auto__);

return statearr_19271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));

return c__17246__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19276 = arguments.length;
switch (G__19276) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19278 = arguments.length;
switch (G__19278) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19280 = arguments.length;
switch (G__19280) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17246__auto___20289 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17024__auto__ = (function (state_19304){
var state_val_19305 = (state_19304[(1)]);
if((state_val_19305 === (7))){
var inst_19299 = (state_19304[(2)]);
var state_19304__$1 = state_19304;
var statearr_19306_20290 = state_19304__$1;
(statearr_19306_20290[(2)] = inst_19299);

(statearr_19306_20290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19305 === (1))){
var inst_19281 = null;
var state_19304__$1 = (function (){var statearr_19307 = state_19304;
(statearr_19307[(7)] = inst_19281);

return statearr_19307;
})();
var statearr_19308_20292 = state_19304__$1;
(statearr_19308_20292[(2)] = null);

(statearr_19308_20292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19305 === (4))){
var inst_19284 = (state_19304[(8)]);
var inst_19284__$1 = (state_19304[(2)]);
var inst_19285 = (inst_19284__$1 == null);
var inst_19286 = cljs.core.not(inst_19285);
var state_19304__$1 = (function (){var statearr_19309 = state_19304;
(statearr_19309[(8)] = inst_19284__$1);

return statearr_19309;
})();
if(inst_19286){
var statearr_19310_20293 = state_19304__$1;
(statearr_19310_20293[(1)] = (5));

} else {
var statearr_19311_20294 = state_19304__$1;
(statearr_19311_20294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19305 === (6))){
var state_19304__$1 = state_19304;
var statearr_19312_20298 = state_19304__$1;
(statearr_19312_20298[(2)] = null);

(statearr_19312_20298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19305 === (3))){
var inst_19301 = (state_19304[(2)]);
var inst_19302 = cljs.core.async.close_BANG_(out);
var state_19304__$1 = (function (){var statearr_19313 = state_19304;
(statearr_19313[(9)] = inst_19301);

return statearr_19313;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19304__$1,inst_19302);
} else {
if((state_val_19305 === (2))){
var state_19304__$1 = state_19304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19304__$1,(4),ch);
} else {
if((state_val_19305 === (11))){
var inst_19284 = (state_19304[(8)]);
var inst_19293 = (state_19304[(2)]);
var inst_19281 = inst_19284;
var state_19304__$1 = (function (){var statearr_19314 = state_19304;
(statearr_19314[(10)] = inst_19293);

(statearr_19314[(7)] = inst_19281);

return statearr_19314;
})();
var statearr_19315_20299 = state_19304__$1;
(statearr_19315_20299[(2)] = null);

(statearr_19315_20299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19305 === (9))){
var inst_19284 = (state_19304[(8)]);
var state_19304__$1 = state_19304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19304__$1,(11),out,inst_19284);
} else {
if((state_val_19305 === (5))){
var inst_19284 = (state_19304[(8)]);
var inst_19281 = (state_19304[(7)]);
var inst_19288 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19284,inst_19281);
var state_19304__$1 = state_19304;
if(inst_19288){
var statearr_19317_20300 = state_19304__$1;
(statearr_19317_20300[(1)] = (8));

} else {
var statearr_19318_20301 = state_19304__$1;
(statearr_19318_20301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19305 === (10))){
var inst_19296 = (state_19304[(2)]);
var state_19304__$1 = state_19304;
var statearr_19319_20302 = state_19304__$1;
(statearr_19319_20302[(2)] = inst_19296);

(statearr_19319_20302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19305 === (8))){
var inst_19281 = (state_19304[(7)]);
var tmp19316 = inst_19281;
var inst_19281__$1 = tmp19316;
var state_19304__$1 = (function (){var statearr_19320 = state_19304;
(statearr_19320[(7)] = inst_19281__$1);

return statearr_19320;
})();
var statearr_19321_20303 = state_19304__$1;
(statearr_19321_20303[(2)] = null);

(statearr_19321_20303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17025__auto__ = null;
var cljs$core$async$state_machine__17025__auto____0 = (function (){
var statearr_19322 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19322[(0)] = cljs$core$async$state_machine__17025__auto__);

(statearr_19322[(1)] = (1));

return statearr_19322;
});
var cljs$core$async$state_machine__17025__auto____1 = (function (state_19304){
while(true){
var ret_value__17026__auto__ = (function (){try{while(true){
var result__17027__auto__ = switch__17024__auto__(state_19304);
if(cljs.core.keyword_identical_QMARK_(result__17027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17027__auto__;
}
break;
}
}catch (e19323){var ex__17028__auto__ = e19323;
var statearr_19324_20304 = state_19304;
(statearr_19324_20304[(2)] = ex__17028__auto__);


if(cljs.core.seq((state_19304[(4)]))){
var statearr_19325_20305 = state_19304;
(statearr_19325_20305[(1)] = cljs.core.first((state_19304[(4)])));

} else {
throw ex__17028__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20306 = state_19304;
state_19304 = G__20306;
continue;
} else {
return ret_value__17026__auto__;
}
break;
}
});
cljs$core$async$state_machine__17025__auto__ = function(state_19304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17025__auto____1.call(this,state_19304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17025__auto____0;
cljs$core$async$state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17025__auto____1;
return cljs$core$async$state_machine__17025__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_19326 = f__17247__auto__();
(statearr_19326[(6)] = c__17246__auto___20289);

return statearr_19326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19328 = arguments.length;
switch (G__19328) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17246__auto___20311 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17024__auto__ = (function (state_19366){
var state_val_19367 = (state_19366[(1)]);
if((state_val_19367 === (7))){
var inst_19362 = (state_19366[(2)]);
var state_19366__$1 = state_19366;
var statearr_19376_20313 = state_19366__$1;
(statearr_19376_20313[(2)] = inst_19362);

(statearr_19376_20313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19367 === (1))){
var inst_19329 = (new Array(n));
var inst_19330 = inst_19329;
var inst_19331 = (0);
var state_19366__$1 = (function (){var statearr_19380 = state_19366;
(statearr_19380[(7)] = inst_19331);

(statearr_19380[(8)] = inst_19330);

return statearr_19380;
})();
var statearr_19381_20314 = state_19366__$1;
(statearr_19381_20314[(2)] = null);

(statearr_19381_20314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19367 === (4))){
var inst_19334 = (state_19366[(9)]);
var inst_19334__$1 = (state_19366[(2)]);
var inst_19335 = (inst_19334__$1 == null);
var inst_19336 = cljs.core.not(inst_19335);
var state_19366__$1 = (function (){var statearr_19382 = state_19366;
(statearr_19382[(9)] = inst_19334__$1);

return statearr_19382;
})();
if(inst_19336){
var statearr_19383_20315 = state_19366__$1;
(statearr_19383_20315[(1)] = (5));

} else {
var statearr_19384_20316 = state_19366__$1;
(statearr_19384_20316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19367 === (15))){
var inst_19356 = (state_19366[(2)]);
var state_19366__$1 = state_19366;
var statearr_19385_20317 = state_19366__$1;
(statearr_19385_20317[(2)] = inst_19356);

(statearr_19385_20317[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19367 === (13))){
var state_19366__$1 = state_19366;
var statearr_19386_20318 = state_19366__$1;
(statearr_19386_20318[(2)] = null);

(statearr_19386_20318[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19367 === (6))){
var inst_19331 = (state_19366[(7)]);
var inst_19352 = (inst_19331 > (0));
var state_19366__$1 = state_19366;
if(cljs.core.truth_(inst_19352)){
var statearr_19387_20319 = state_19366__$1;
(statearr_19387_20319[(1)] = (12));

} else {
var statearr_19388_20320 = state_19366__$1;
(statearr_19388_20320[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19367 === (3))){
var inst_19364 = (state_19366[(2)]);
var state_19366__$1 = state_19366;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19366__$1,inst_19364);
} else {
if((state_val_19367 === (12))){
var inst_19330 = (state_19366[(8)]);
var inst_19354 = cljs.core.vec(inst_19330);
var state_19366__$1 = state_19366;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19366__$1,(15),out,inst_19354);
} else {
if((state_val_19367 === (2))){
var state_19366__$1 = state_19366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19366__$1,(4),ch);
} else {
if((state_val_19367 === (11))){
var inst_19346 = (state_19366[(2)]);
var inst_19347 = (new Array(n));
var inst_19330 = inst_19347;
var inst_19331 = (0);
var state_19366__$1 = (function (){var statearr_19389 = state_19366;
(statearr_19389[(7)] = inst_19331);

(statearr_19389[(10)] = inst_19346);

(statearr_19389[(8)] = inst_19330);

return statearr_19389;
})();
var statearr_19390_20325 = state_19366__$1;
(statearr_19390_20325[(2)] = null);

(statearr_19390_20325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19367 === (9))){
var inst_19330 = (state_19366[(8)]);
var inst_19344 = cljs.core.vec(inst_19330);
var state_19366__$1 = state_19366;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19366__$1,(11),out,inst_19344);
} else {
if((state_val_19367 === (5))){
var inst_19331 = (state_19366[(7)]);
var inst_19330 = (state_19366[(8)]);
var inst_19334 = (state_19366[(9)]);
var inst_19339 = (state_19366[(11)]);
var inst_19338 = (inst_19330[inst_19331] = inst_19334);
var inst_19339__$1 = (inst_19331 + (1));
var inst_19340 = (inst_19339__$1 < n);
var state_19366__$1 = (function (){var statearr_19391 = state_19366;
(statearr_19391[(12)] = inst_19338);

(statearr_19391[(11)] = inst_19339__$1);

return statearr_19391;
})();
if(cljs.core.truth_(inst_19340)){
var statearr_19392_20327 = state_19366__$1;
(statearr_19392_20327[(1)] = (8));

} else {
var statearr_19393_20328 = state_19366__$1;
(statearr_19393_20328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19367 === (14))){
var inst_19359 = (state_19366[(2)]);
var inst_19360 = cljs.core.async.close_BANG_(out);
var state_19366__$1 = (function (){var statearr_19395 = state_19366;
(statearr_19395[(13)] = inst_19359);

return statearr_19395;
})();
var statearr_19396_20329 = state_19366__$1;
(statearr_19396_20329[(2)] = inst_19360);

(statearr_19396_20329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19367 === (10))){
var inst_19350 = (state_19366[(2)]);
var state_19366__$1 = state_19366;
var statearr_19397_20330 = state_19366__$1;
(statearr_19397_20330[(2)] = inst_19350);

(statearr_19397_20330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19367 === (8))){
var inst_19330 = (state_19366[(8)]);
var inst_19339 = (state_19366[(11)]);
var tmp19394 = inst_19330;
var inst_19330__$1 = tmp19394;
var inst_19331 = inst_19339;
var state_19366__$1 = (function (){var statearr_19398 = state_19366;
(statearr_19398[(7)] = inst_19331);

(statearr_19398[(8)] = inst_19330__$1);

return statearr_19398;
})();
var statearr_19399_20331 = state_19366__$1;
(statearr_19399_20331[(2)] = null);

(statearr_19399_20331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17025__auto__ = null;
var cljs$core$async$state_machine__17025__auto____0 = (function (){
var statearr_19400 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19400[(0)] = cljs$core$async$state_machine__17025__auto__);

(statearr_19400[(1)] = (1));

return statearr_19400;
});
var cljs$core$async$state_machine__17025__auto____1 = (function (state_19366){
while(true){
var ret_value__17026__auto__ = (function (){try{while(true){
var result__17027__auto__ = switch__17024__auto__(state_19366);
if(cljs.core.keyword_identical_QMARK_(result__17027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17027__auto__;
}
break;
}
}catch (e19401){var ex__17028__auto__ = e19401;
var statearr_19402_20332 = state_19366;
(statearr_19402_20332[(2)] = ex__17028__auto__);


if(cljs.core.seq((state_19366[(4)]))){
var statearr_19403_20334 = state_19366;
(statearr_19403_20334[(1)] = cljs.core.first((state_19366[(4)])));

} else {
throw ex__17028__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20335 = state_19366;
state_19366 = G__20335;
continue;
} else {
return ret_value__17026__auto__;
}
break;
}
});
cljs$core$async$state_machine__17025__auto__ = function(state_19366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17025__auto____1.call(this,state_19366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17025__auto____0;
cljs$core$async$state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17025__auto____1;
return cljs$core$async$state_machine__17025__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_19404 = f__17247__auto__();
(statearr_19404[(6)] = c__17246__auto___20311);

return statearr_19404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19406 = arguments.length;
switch (G__19406) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17246__auto___20341 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17024__auto__ = (function (state_19456){
var state_val_19457 = (state_19456[(1)]);
if((state_val_19457 === (7))){
var inst_19451 = (state_19456[(2)]);
var state_19456__$1 = state_19456;
var statearr_19459_20342 = state_19456__$1;
(statearr_19459_20342[(2)] = inst_19451);

(statearr_19459_20342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19457 === (1))){
var inst_19409 = [];
var inst_19410 = inst_19409;
var inst_19411 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19456__$1 = (function (){var statearr_19460 = state_19456;
(statearr_19460[(7)] = inst_19410);

(statearr_19460[(8)] = inst_19411);

return statearr_19460;
})();
var statearr_19463_20343 = state_19456__$1;
(statearr_19463_20343[(2)] = null);

(statearr_19463_20343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19457 === (4))){
var inst_19414 = (state_19456[(9)]);
var inst_19414__$1 = (state_19456[(2)]);
var inst_19415 = (inst_19414__$1 == null);
var inst_19416 = cljs.core.not(inst_19415);
var state_19456__$1 = (function (){var statearr_19464 = state_19456;
(statearr_19464[(9)] = inst_19414__$1);

return statearr_19464;
})();
if(inst_19416){
var statearr_19465_20344 = state_19456__$1;
(statearr_19465_20344[(1)] = (5));

} else {
var statearr_19466_20345 = state_19456__$1;
(statearr_19466_20345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19457 === (15))){
var inst_19410 = (state_19456[(7)]);
var inst_19443 = cljs.core.vec(inst_19410);
var state_19456__$1 = state_19456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19456__$1,(18),out,inst_19443);
} else {
if((state_val_19457 === (13))){
var inst_19438 = (state_19456[(2)]);
var state_19456__$1 = state_19456;
var statearr_19467_20346 = state_19456__$1;
(statearr_19467_20346[(2)] = inst_19438);

(statearr_19467_20346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19457 === (6))){
var inst_19410 = (state_19456[(7)]);
var inst_19440 = inst_19410.length;
var inst_19441 = (inst_19440 > (0));
var state_19456__$1 = state_19456;
if(cljs.core.truth_(inst_19441)){
var statearr_19468_20347 = state_19456__$1;
(statearr_19468_20347[(1)] = (15));

} else {
var statearr_19469_20348 = state_19456__$1;
(statearr_19469_20348[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19457 === (17))){
var inst_19448 = (state_19456[(2)]);
var inst_19449 = cljs.core.async.close_BANG_(out);
var state_19456__$1 = (function (){var statearr_19470 = state_19456;
(statearr_19470[(10)] = inst_19448);

return statearr_19470;
})();
var statearr_19471_20353 = state_19456__$1;
(statearr_19471_20353[(2)] = inst_19449);

(statearr_19471_20353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19457 === (3))){
var inst_19453 = (state_19456[(2)]);
var state_19456__$1 = state_19456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19456__$1,inst_19453);
} else {
if((state_val_19457 === (12))){
var inst_19410 = (state_19456[(7)]);
var inst_19431 = cljs.core.vec(inst_19410);
var state_19456__$1 = state_19456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19456__$1,(14),out,inst_19431);
} else {
if((state_val_19457 === (2))){
var state_19456__$1 = state_19456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19456__$1,(4),ch);
} else {
if((state_val_19457 === (11))){
var inst_19410 = (state_19456[(7)]);
var inst_19418 = (state_19456[(11)]);
var inst_19414 = (state_19456[(9)]);
var inst_19427 = inst_19410.push(inst_19414);
var tmp19472 = inst_19410;
var inst_19410__$1 = tmp19472;
var inst_19411 = inst_19418;
var state_19456__$1 = (function (){var statearr_19473 = state_19456;
(statearr_19473[(7)] = inst_19410__$1);

(statearr_19473[(12)] = inst_19427);

(statearr_19473[(8)] = inst_19411);

return statearr_19473;
})();
var statearr_19474_20358 = state_19456__$1;
(statearr_19474_20358[(2)] = null);

(statearr_19474_20358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19457 === (9))){
var inst_19411 = (state_19456[(8)]);
var inst_19422 = cljs.core.keyword_identical_QMARK_(inst_19411,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19456__$1 = state_19456;
var statearr_19475_20359 = state_19456__$1;
(statearr_19475_20359[(2)] = inst_19422);

(statearr_19475_20359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19457 === (5))){
var inst_19419 = (state_19456[(13)]);
var inst_19418 = (state_19456[(11)]);
var inst_19411 = (state_19456[(8)]);
var inst_19414 = (state_19456[(9)]);
var inst_19418__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19414) : f.call(null,inst_19414));
var inst_19419__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19418__$1,inst_19411);
var state_19456__$1 = (function (){var statearr_19476 = state_19456;
(statearr_19476[(13)] = inst_19419__$1);

(statearr_19476[(11)] = inst_19418__$1);

return statearr_19476;
})();
if(inst_19419__$1){
var statearr_19477_20360 = state_19456__$1;
(statearr_19477_20360[(1)] = (8));

} else {
var statearr_19478_20361 = state_19456__$1;
(statearr_19478_20361[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19457 === (14))){
var inst_19418 = (state_19456[(11)]);
var inst_19414 = (state_19456[(9)]);
var inst_19433 = (state_19456[(2)]);
var inst_19434 = [];
var inst_19435 = inst_19434.push(inst_19414);
var inst_19410 = inst_19434;
var inst_19411 = inst_19418;
var state_19456__$1 = (function (){var statearr_19479 = state_19456;
(statearr_19479[(7)] = inst_19410);

(statearr_19479[(14)] = inst_19433);

(statearr_19479[(8)] = inst_19411);

(statearr_19479[(15)] = inst_19435);

return statearr_19479;
})();
var statearr_19480_20362 = state_19456__$1;
(statearr_19480_20362[(2)] = null);

(statearr_19480_20362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19457 === (16))){
var state_19456__$1 = state_19456;
var statearr_19481_20363 = state_19456__$1;
(statearr_19481_20363[(2)] = null);

(statearr_19481_20363[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19457 === (10))){
var inst_19424 = (state_19456[(2)]);
var state_19456__$1 = state_19456;
if(cljs.core.truth_(inst_19424)){
var statearr_19482_20364 = state_19456__$1;
(statearr_19482_20364[(1)] = (11));

} else {
var statearr_19483_20365 = state_19456__$1;
(statearr_19483_20365[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19457 === (18))){
var inst_19445 = (state_19456[(2)]);
var state_19456__$1 = state_19456;
var statearr_19484_20366 = state_19456__$1;
(statearr_19484_20366[(2)] = inst_19445);

(statearr_19484_20366[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19457 === (8))){
var inst_19419 = (state_19456[(13)]);
var state_19456__$1 = state_19456;
var statearr_19485_20367 = state_19456__$1;
(statearr_19485_20367[(2)] = inst_19419);

(statearr_19485_20367[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17025__auto__ = null;
var cljs$core$async$state_machine__17025__auto____0 = (function (){
var statearr_19486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19486[(0)] = cljs$core$async$state_machine__17025__auto__);

(statearr_19486[(1)] = (1));

return statearr_19486;
});
var cljs$core$async$state_machine__17025__auto____1 = (function (state_19456){
while(true){
var ret_value__17026__auto__ = (function (){try{while(true){
var result__17027__auto__ = switch__17024__auto__(state_19456);
if(cljs.core.keyword_identical_QMARK_(result__17027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17027__auto__;
}
break;
}
}catch (e19487){var ex__17028__auto__ = e19487;
var statearr_19488_20369 = state_19456;
(statearr_19488_20369[(2)] = ex__17028__auto__);


if(cljs.core.seq((state_19456[(4)]))){
var statearr_19489_20370 = state_19456;
(statearr_19489_20370[(1)] = cljs.core.first((state_19456[(4)])));

} else {
throw ex__17028__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20371 = state_19456;
state_19456 = G__20371;
continue;
} else {
return ret_value__17026__auto__;
}
break;
}
});
cljs$core$async$state_machine__17025__auto__ = function(state_19456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17025__auto____1.call(this,state_19456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17025__auto____0;
cljs$core$async$state_machine__17025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17025__auto____1;
return cljs$core$async$state_machine__17025__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_19490 = f__17247__auto__();
(statearr_19490[(6)] = c__17246__auto___20341);

return statearr_19490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
