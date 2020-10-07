const Rx = require("rxjs");
const RxOperators = require("rxjs/operators");

const source = Rx.throwError("error")
  .pipe(
    RxOperators.catchError((err) => {
      return Rx.empty();
    }),
    RxOperators.tap((s) => console.log(s))
  )
  .pipe(RxOperators.tap((s) => console.log(s)));
source.subscribe();

/* -------------------------------------------------------------------------- */
/*                       Switchmap after throwing error                       */
/* -------------------------------------------------------------------------- */

const source1 = Rx.throwError("error").pipe(
  RxOperators.switchMap(() => {
    return Rx.of("no error");
  })
);
source1.subscribe(
  (m) => console.log(m),
  (err) => console.log(err)
);
