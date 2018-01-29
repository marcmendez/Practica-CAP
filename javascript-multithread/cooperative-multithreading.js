/* Implementation of callcc (Smalltalk) */

Continuation.callcc = function(aBlock) {
    return aBlock(new Continuation());
}

/* ------ Thread entity  ------- */

function Thread(aBlock) {
    this.aBlock = aBlock;
    this.canExecute = false;
}

Thread.prototype.stop = function() {
  this.canExecute = false;
  this.state = Continuation.callcc(function(cc) { return cc; });
}

Thread.prototype.run = function() {
    this.canExecute = true;
    this.state(this.state);
}

/* ----------------------------- */

/* ---Cooperative Pool Entity--- */

function CooperativePool() {
    this.queue = [];
}

CooperativePool.prototype.spawn = function(aBlock) {
    var thread = new Thread(aBlock)
    this.queue.push(thread);
    thread.state = Continuation.callcc(function(cc) { return cc; });
    if (thread.canExecute) thread.aBlock();
};

CooperativePool.prototype.quit = function() {
    this.queue.shift();
    if (this.queue.length > 0) this.queue[0].run();
    else this.halt();

};

CooperativePool.prototype.relinquish = function() {
    this.queue[0].stop();
    if (!this.queue[0].canExecute) {
        this.queue.push(this.queue[0]);
        this.quit();
    }
};

CooperativePool.prototype.start_threads = function() {
    this.halt = Continuation.callcc(function(cc) { return cc; });
    if (this.queue.length > 0) this.queue[0].run();
};

/* ----------------------------- */

function make_thread_system() {
    return new CooperativePool();
}


/* Given examples */

/* First example */

print("\n"+ "=== First Example ===" + "\n");

var counter = 10;
function make_thread_thunk(name, thread_system) {

    function loop() {
        if (counter < 0) {
            thread_system.quit();
        }
        print("in thread", name, "; counter =", counter);
        counter--;
        thread_system.relinquish();
        loop();
    };
    return loop;
}

var example1_thread_sys = make_thread_system();
example1_thread_sys.spawn(make_thread_thunk('a', example1_thread_sys));
example1_thread_sys.spawn(make_thread_thunk('b', example1_thread_sys));
example1_thread_sys.spawn(make_thread_thunk('c', example1_thread_sys));
example1_thread_sys.start_threads();

/* Second Example */

print("\n"+ "=== Second Example ===" + "\n");

function make_thread_thunk2(name, thread_system) {
    function loop() {
     for(let i=0; i < 5; i++) {
         print('in thread',name,'; i =',i);
         thread_system.relinquish();
     }
     thread_system.quit();
    };
    return loop;
}
var example2_thread_sys =  make_thread_system();
example2_thread_sys.spawn(make_thread_thunk2('a', example2_thread_sys));
example2_thread_sys.spawn(make_thread_thunk2('b', example2_thread_sys));
example2_thread_sys.spawn(make_thread_thunk2('c', example2_thread_sys));
example2_thread_sys.start_threads();

print("\n");
