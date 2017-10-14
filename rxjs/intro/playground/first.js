const { Observable } = require('rxjs/Observable');

let source = Observable.create((observer) => {
    let id = setTimeout(() => {
        try {
            throw 'my bad error';
            observer.next(42);
            observer.complete();
        } catch (error) {
            observer.error(error);
        }        
    }, 1000);
    console.log('started');
    return () => {
        console.log('disposal called');
        clearTimeout(id);
    }
});

let sub = source.subscribe((x) => {
    console.log('next ' + x);
}, (err) => {
    console.log(err);
}, () => {
    console.log('done');
});

// setTimeout(() => {
//     sub.unsubscribe();
// }, 500);