const Rx = require("rxjs");
const RxOperators = require("rxjs/operators");

const source1 = Rx.interval(1000).pipe(RxOperators.take(3));
const source2 = Rx.interval(2000).pipe(RxOperators.take(2));
const source3 = Rx.interval(3000).pipe(RxOperators.take(2));

// const example = Rx.combineLatest([source1, source2, source3]);
const example = source1
  .pipe(
    RxOperators.map((val) => {
      return Rx.interval(1000).pipe(
        RxOperators.map((i) => {
          return `Result ${val}:${i}`;
        }),
        RxOperators.take(5)
      );
    })
  )
  .pipe(RxOperators.combineAll());
const subs = example.subscribe((args) => {
  console.log(args);
});
