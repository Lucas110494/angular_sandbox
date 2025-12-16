## `combineLatest`
### `combineLatest([$obs1, $obs2, ...])`
### Emit an array of value and ONLY when all sources emit together
### After that, If `$obs1` first, then the result will be `[$obs1 (latest), $obs2 (current), ...]`
### Good for page filter, refetch if sort, pagination, filtering changed...

## `withLatestFrom`
### `$obs1.pipe(withLatestFrom($obs2))`
### Emit an array of value ONLY when the source `$obs1` emit
### the result will be `[$obs1 (latest), $obs2 (latest), ...]`
### Good fpr call http when: route change, auth-save timer

## `forkJoin`
### `forkJoin([$obs1, $obs2, ...])` or `forkJoin({ obs1: $obs1, obs2: $obs2 })`
### Call multiple APIs in parallel, will wait until ALL source observables complete.
### Emit one and complete, not suitable for `Repeated` observable
### Good for calling API on init

## `zip`
### `zip($obs1, $obs2, ...)`
### Emit an array of value, it will wait and ONLY emit when all sources emit together/completed
### Stop if want of the observables error or stop emitting

## `concat`
### `concat($obs1, $obs2, ...)`
### Emit in SEQUEL, and in strict order
### `$obs1`, must be completed before `$obs2` emit
### If any source errors `concat` errors immediately, No “final completion” happens
### Suitable for workflow process, ex: `Create => Assembly => Paint`

## `concatMap`
### `$obs1.pipe(concatMap($obs2))`
### Emit inner obs in sequel ordered after the source `$obs1` emit

## `endWith`
### `$obs1.pipe(endWith(...))`
### `endWith` emits one or more values ONLY when the source observable completes.
### If the source NEVER completes, `endWith` will NEVER emit.
### Suitable for `Final UI or log emission` `API calls`

## `startWith`
### `$obs1.pipe(startWith(...))`
### emits one or more values immediately upon subscription, before the source observable emits anything.
### Because many Angular observables: don’t emit immediately only emit on user action or async events `startWith` gives your UI an initial state.
### Good to create init value like `[]` before API call completed

## `defaultIfEmpty`
### `$obs1.pipe(defaultIfEmpty(...))`
### `defaultIfEmpty` emits a default value if the source completes WITHOUT emitting anything.
### Diff between `defaultIfEmpty` (only after completion) and `startWith` (emit immediately on subscribe)
### Suitable for initial value
### `of().pipe(startWith(0))`        // emits 0 immediately
### `of().pipe(defaultIfEmpty(0))`  // emits 0 after completion

## `every`
### `every` checks whether ALL values emitted by the source match a condition.
### source$.pipe(every(value => condition))
### Emit `true` all values passed, `false` at least one value failed, then complete
### `of(2, 3, 4).pipe(every(n => n % 2 === 0))` Output: `false`
### `of(2, 4).pipe(every(n => n % 2 === 0))` Output: `ttrue`
### Validate all form fields before submit `from(this.form.controls).pipe(every(control => control.valid));`
### Authorization / permission checks `from(user.permissions).pipe(every(p => p.allowed));`

## `filter`
### `filter` lets values pass through only if they match a condition.
### `of(1, 2, 3, 4).pipe(filter(n => n % 2 === 0))` Output: `2, 4`

## `find`
### `find` emits the first value that matches a condition and then completes.
### `of(1, 3, 5, 8, 10).pipe(find(n => n % 2 === 0))` Output: `8`

## `iif`
### `iif` (if–else for observables) chooses one of two observables at subscription time, based on a condition.
### `iif(() => condition, trueObservable$, falseObservable$)`
### The condition is evaluated ONLY ON SUBSCRIPTION, not on every emission.
### `loadData$ = iif(() => isAdmin, getAdminData(), getUserData());`

## `EMPTY`
### `EMPTY` emits no values and completes immediately
### `EMPTY.pipe(defaultIfEmpty('hello'))`
### Can be use to skip an API call
### load$ = this.click$.pipe(
###   switchMap(() =>
###     this.hasPermission
###       ? this.api.loadData()
###       : EMPTY
###   )
### );
### or cancel after error handling
### this.api.call().pipe(
###   catchError(err => {
###     this.notify(err);
###     return EMPTY;
###   })
### );

## `from`
### `from().pipe()` converts other data types into an Observable.
### `Promise`, `Array / Iterable`, `String`, `Set / Map`
### `from(fetch('/api/data'))`

## `fromEvent`
### `fromEvent` creates an observable from event sources.
### `fromEvent(target, eventName)`

## `interval`
### `interval(timer)` creates an observable that emits 0, 1, 2, 3, … at a fixed time interval (milliseconds)
### never completes on its own, it emits forever
### Use for count down timer or refresh dashboard

## `timer`
### `timer`creates an observable that can emit once after a delay or emit repeatedly after an initial delay
### `timer(dueTime)`
### `timer(dueTime, period)`

## `of`
### of creates an observable that emits the values you pass synchronously in order then completes immediately

## `throwError`
### `throwError` — the RxJS operator used to create an observable that errors immediately.
### `throwError(() => new Error('Boom'))`
### emits no next values, errors immediately and never completes normally


## `catchError`
### `catchError` is an error-handling operator that lets you intercept an error from an Observable and replace it with another Observable instead of letting the stream die.
### Catches errors only, must return an Observable and the original stream completes
### `catchError(() => of([]));`

## `retry`
### `retry(numberOfTry)`
### `retry()` automatically resubscribes to a source Observable when it errors, up to a given number of times.

## `debounceTime`
### `debounceTime` waits for silence before emitting the latest value (only emit when the user stops doing something.)
### `inputControl.valueChanges.pipe(debounceTime(300))`

## `distinct`
### `distinct` filters out duplicate values that have already appeared at any time before in the stream.
### from([
###   { id: 1, name: 'a' },
###   { id: 2, name: 'b' },
###    ...
### ])
### .pipe(distinct(u => u.id))

## `distinctUntilChanged`
### `distinctUntilChanged` filters out consecutive duplicate values.
### this.searchControl.valueChanges.pipe(
###  debounceTime(300),
###  distinctUntilChanged(),
### )

## `first`
### Emits the first value (optionally matching a condition) then completes
### Errors if nothing matches (unless you provide a default)
### `of(1, 2, 3).pipe(first())` Output: 1
### `of(1, 2, 3, 4).pipe(first(n => n % 2 === 0))` Output: 2
### W/ default value `of(1, 3, 5).pipe(first(n => n % 2 === 0, 0))` Output: 0

## `last`
### last emits the final value from a stream (optionally matching a condition) and only emits when the source completes.
### `of(1, 2, 3).pipe(last())` Output: 3
### `of(1, 2, 4, 3).pipe(last(n => n % 2 === 0)) Output: 4
### W/ default value `of(1, 3, 5).pipe(last(n => n % 2 === 0, 0))` Output: 0

## `skip`
### `skip` ignores the first N emissions, then lets everything else through.
### of(1, 2, 3, 4, 5).pipe(skip(2)) Output: 3, 4, 5

## `skipUntil`
### `skipUntil` ignores source emissions until another Observable emits, then lets everything after pass through.
### `source$.pipe(skipUntil(notifier$))` (start `source$` when `notifier$` trigger)

##  `takeUntil`
### takeUntil emits values from the source until another Observable emits, then it completes immediately.
### `source$.pipe(takeUntil(notifier$))` (stop `source$` when `notifier$` trigger)

## `take`
### `take` emits only the first N values from a stream, then completes.
### `of(1, 2, 3, 4, 5).pipe(take(3))` Output: 1, 2, 3

## `skipWhile`
### `skipWhile` ignores values from the source while a condition is `true`, then emits everything after the condition `false`.
### source$.pipe(skipWhile(value => condition(value)))

## `takeLast`
### `takeLast` emits the last N values of a stream, but only after the source completes.
### `of(1, 2, 3, 4, 5).pipe(takeLast(3))` Output: 3, 4, 5

## `exhaustMap`
### `exhaustMap` is a higher-order mapping operator that
### `source$.pipe(exhaustMap(value => innerObservable(value)))`
### First source emission → starts inner Observable
### While inner Observable is active → other source emissions are ignored
### Once inner Observable completes → next source emission is processed

## `map`
### `map` is a transformation operator that applies a function to each emitted value from the source Observable and emits the result.
mergeMap
switchMap

tap
delay
finalize
timeInterval

lasValueFrom

Subject
BehaviorSubject
RelaySubject


retryWhen

shareRelay
