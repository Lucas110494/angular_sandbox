import { AfterViewInit, Component, inject, OnInit, viewChild } from '@angular/core';
import {
  combineLatest,
  concat,
  concatMap,
  debounceTime,
  defaultIfEmpty,
  delay,
  EMPTY,
  endWith,
  forkJoin,
  from,
  fromEvent,
  interval,
  of,
  startWith,
  timer,
  withLatestFrom,
  zip,
} from 'rxjs';
import { AppService } from '../../app.service';

@Component({
  template: ` <button #btn (click)="onClick()">Click me</button> `,
  styles: `
    button {
      border: 1px solid #000;
      padding: 1rem 2rem;
      width: 10rem;
      cursor: pointer;
    }
  `,
})
export class RxjsComponent implements OnInit, AfterViewInit {
  private btnRef = viewChild<HTMLButtonElement>('btn');
  private _appService = inject(AppService);

  a$ = interval(1000);
  b$ = interval(3000);
  c$ = interval(5000);
  A$ = of('A').pipe(delay(2000));
  B$ = of('B').pipe(delay(2000));

  ngOnInit() {
    // combineLatest([this.a$, this.b$]).subscribe(console.log);
    // this.b$.pipe(withLatestFrom(this.a$)).subscribe((val) => {
    //   console.log(val);
    // });
    // this.getData();
    // this.zipper();
    // this.concat()
    // this.concatMap();
    // this.endWith();
    // this.startWith();
    // this.defaultIfEmpty();
    // this.empty();
    // this.from();
    // timer(2000, 1000).subscribe((val) => {
    //   console.log(val);
    // })
  }

  from() {
    const arr = [1, 2, 3, 4, 5];
    const aPromise = new Promise((res, rej) => res('Hello'));
    from(arr)
      .subscribe((val) => {
        console.log(val);
      });
  }

  empty() {
    EMPTY.pipe(defaultIfEmpty('hello')).subscribe((val) => {
      console.log(val);
    });
  }

  defaultIfEmpty() {
    this.A$.pipe(defaultIfEmpty('C')).subscribe((val) => {
      console.log(val);
    });
  }

  endWith(): void {
    this.A$.pipe(endWith('hello')).subscribe((val) => {
      console.log(val);
    });
  }

  startWith(): void {
    this.retrieveUsers()
      .pipe(delay(2000), startWith([]))
      .subscribe((val) => {
        console.log(val);
      });
  }

  concat(): void {
    concat(of('A').pipe(delay(1000)), of('B').pipe(delay(1000)), of('C')).subscribe((val) => {
      console.log(val);
    });
  }

  concatMap(): void {
    this.c$.pipe(concatMap(() => concat(this.a$, this.b$))).subscribe((val) => {
      console.log(val);
      console.log('##########');
    });
  }

  zipper(): void {
    zip(of('A', 'B', 'C'), of(1, 2, 3, 4)).subscribe((val) => {
      console.log(val);
    });
  }

  getData(): void {
    forkJoin({
      user: this.retrieveUsers(),
      posts: this.retrievePosts(),
    }).subscribe((val) => {
      console.log(val);
    });
  }

  retrieveUsers() {
    return this._appService.retrieveUsers();
  }

  retrievePosts() {
    return this._appService.retrievePosts();
  }

  ngAfterViewInit(): void {
    // fromEvent(this.btnRef().nativeElement, 'click').subscribe((val) => {
    //   console.log(val);
    // });
  }

  onClick(): void {}
}
