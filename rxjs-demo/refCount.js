const Rx = require("rxjs");
const RxOperators = require("rxjs/operators");

const source = Rx.interval(2000).pipe(RxOperators.take(5));

const example = source.pipe(
  RxOperators.tap(() => console.log("Side Effect #1F")),
  RxOperators.mapTo("Result!")
);

const multi = example.pipe(RxOperators.multicast(() => new Rx.Subject()));
const subs1 = multi.subscribe((val) => console.log(val));
const subs2 = multi.subscribe((val) => console.log(val));
multi.connect();
