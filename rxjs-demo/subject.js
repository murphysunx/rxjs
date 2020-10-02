const rx = require("rxjs");

const subject = new rx.Subject();
subject.subscribe({
  next: (v) => console.log(`observerA: ` + v),
});
subject.subscribe({
  next: (v) => console.log(`observerB: ` + v),
});
subject.next(1);
subject.next(2);
