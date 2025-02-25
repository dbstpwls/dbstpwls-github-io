## CSS 병합/압축 도구

1. [Node.js](https://nodejs.org/en/download/) 설치

2. [`package.json`](./package.json) 파일 다운로드 (또는 코드 복사/붙여넣고 저장)

3. 명령어 도구 (cmd, powershell, [cmder](http://cmder.net/)) 열고, `npm start` 명령어 실행

4. 명령어 목록
  - `combine`: CSS 파일 병합
  - `min`: 병합된 CSS 파일 압축
  - `combine-min`: `combine` + `min` 동시 수행

-

### rwd-grid.css

```css
/*! rwd-grid.css © yamoo9.net, 2016 */

/* RWD = Responsive Web Design Layout */

/*

 Breakpoint ---------------------------------------------

 Mobile       : 0    - 767
 Tablet       : 768  - 1023
 Desktop      : 1024 - 1366
 Wide Screen  : 1367 - ...

 Keywords -----------------------------------------------
 Mobile       : xs | m
 Tablet       : md | t
 Desktop      : lg | d
 Wide Screen  : xl | w

*/

/* grid */
.grid:after,
.grid::after {
  content: '';
  display: block;
  clear: both;
}

.grid-adapt {
  margin-left: auto;
  margin-right: auto;
}

/* gutter */
.gutter {
  padding-left: 1rem;
  padding-right: 1rem;
}

/* column */
.grid [class*="m-"],
.grid [class*="t-"],
.grid [class*="d-"],
.grid [class*="w-"] {
  box-sizing: border-box;
  float: left;
  width: 100%;
}

/* Mobile First ------------------------------------------------------ */
.m-1-2,
.m-2-4,
.m-3-6,
.m-4-8,
.m-5-10,
.m-6-12       { width: calc( (100% / 2) * 1 );   }
.m-1-3,
.m-2-6,
.m-3-9,
.m-4-12       { width: calc( (100% / 3) * 1 );   }
.m-2-3,
.m-4-6,
.m-8-12       { width: calc( (100% / 3) * 2 );   }
.m-1-4,
.m-2-8,
.m-3-12       { width: calc( (100% / 4) * 1 );   }
.m-1-5,
.m-2-10       { width: calc( (100% / 5) * 1 );   }
.m-2-5,
.m-4-10       { width: calc( (100% / 5) * 2 );   }
.m-3-5,
.m-6-10       { width: calc( (100% / 5) * 3 );   }
.m-4-5,
.m-8-10       { width: calc( (100% / 5) * 4 );   }
.m-1-6,
.m-2-12       { width: calc( (100% / 6) * 1 );   }
.m-5-6,
.m-10-12      { width: calc( (100% / 6) * 5 );   }
.m-1-7        { width: calc( (100% / 7) * 1 );   }
.m-2-7        { width: calc( (100% / 7) * 2 );   }
.m-3-7        { width: calc( (100% / 7) * 3 );   }
.m-4-7        { width: calc( (100% / 7) * 4 );   }
.m-5-7        { width: calc( (100% / 7) * 5 );   }
.m-6-7        { width: calc( (100% / 7) * 6 );   }
.m-1-8        { width: calc( (100% / 8) * 1 );   }
.m-3-8        { width: calc( (100% / 8) * 3 );   }
.m-5-8        { width: calc( (100% / 8) * 5 );   }
.m-7-8        { width: calc( (100% / 8) * 7 );   }
.m-1-9        { width: calc( (100% / 9) * 1 );   }
.m-2-9        { width: calc( (100% / 9) * 2 );   }
.m-4-9        { width: calc( (100% / 9) * 4 );   }
.m-7-9        { width: calc( (100% / 9) * 7 );   }
.m-1-10       { width: calc( (100% / 10) * 1 );  }
.m-3-10       { width: calc( (100% / 10) * 3 );  }
.m-7-10       { width: calc( (100% / 10) * 7 );  }
.m-9-10       { width: calc( (100% / 10) * 9 );  }
.m-1-11       { width: calc( (100% / 11) * 1 );  }
.m-2-11       { width: calc( (100% / 11) * 2 );  }
.m-3-11       { width: calc( (100% / 11) * 3 );  }
.m-4-11       { width: calc( (100% / 11) * 4 );  }
.m-5-11       { width: calc( (100% / 11) * 5 );  }
.m-6-11       { width: calc( (100% / 11) * 6 );  }
.m-7-11       { width: calc( (100% / 11) * 7 );  }
.m-8-11       { width: calc( (100% / 11) * 8 );  }
.m-9-11       { width: calc( (100% / 11) * 9 );  }
.m-10-11      { width: calc( (100% / 11) * 10 ); }
.m-1-12       { width: calc( (100% / 12) * 1 );  }
.m-5-12       { width: calc( (100% / 12) * 5 );  }
.m-7-12       { width: calc( (100% / 12) * 7 );  }
.m-11-12      { width: calc( (100% / 12) * 11 ); }

/* offset */
@media screen and (max-width: 767px) {
  .offset-m-1       { margin-left: 100%;                     }
  .offset-m-1-2,
  .offset-m-2-4,
  .offset-m-3-6,
  .offset-m-4-8,
  .offset-m-5-10,
  .offset-m-6-12    { margin-left: calc( (100% / 2) * 1 );   }
  .offset-m-1-3,
  .offset-m-2-6,
  .offset-m-3-9,
  .offset-m-4-12    { margin-left: calc( (100% / 3) * 1 );   }
  .offset-m-2-3,
  .offset-m-4-6,
  .offset-m-8-12    { margin-left: calc( (100% / 3) * 2 );   }
  .offset-m-1-4,
  .offset-m-2-8,
  .offset-m-3-12    { margin-left: calc( (100% / 4) * 1 );   }
  .offset-m-1-5,
  .offset-m-2-10    { margin-left: calc( (100% / 5) * 1 );   }
  .offset-m-2-5,
  .offset-m-4-10    { margin-left: calc( (100% / 5) * 2 );   }
  .offset-m-3-5,
  .offset-m-6-10    { margin-left: calc( (100% / 5) * 3 );   }
  .offset-m-4-5,
  .offset-m-8-10    { margin-left: calc( (100% / 5) * 4 );   }
  .offset-m-1-6,
  .offset-m-2-12    { margin-left: calc( (100% / 6) * 1 );   }
  .offset-m-5-6,
  .offset-m-10-12   { margin-left: calc( (100% / 6) * 5 );   }
  .offset-m-1-7     { margin-left: calc( (100% / 7) * 1 );   }
  .offset-m-2-7     { margin-left: calc( (100% / 7) * 2 );   }
  .offset-m-3-7     { margin-left: calc( (100% / 7) * 3 );   }
  .offset-m-4-7     { margin-left: calc( (100% / 7) * 4 );   }
  .offset-m-5-7     { margin-left: calc( (100% / 7) * 5 );   }
  .offset-m-6-7     { margin-left: calc( (100% / 7) * 6 );   }
  .offset-m-1-8     { margin-left: calc( (100% / 8) * 1 );   }
  .offset-m-3-8     { margin-left: calc( (100% / 8) * 3 );   }
  .offset-m-5-8     { margin-left: calc( (100% / 8) * 5 );   }
  .offset-m-7-8     { margin-left: calc( (100% / 8) * 7 );   }
  .offset-m-1-9     { margin-left: calc( (100% / 9) * 1 );   }
  .offset-m-2-9     { margin-left: calc( (100% / 9) * 2 );   }
  .offset-m-4-9     { margin-left: calc( (100% / 9) * 4 );   }
  .offset-m-7-9     { margin-left: calc( (100% / 9) * 7 );   }
  .offset-m-1-10    { margin-left: calc( (100% / 10) * 1 );  }
  .offset-m-3-10    { margin-left: calc( (100% / 10) * 3 );  }
  .offset-m-7-10    { margin-left: calc( (100% / 10) * 7 );  }
  .offset-m-9-10    { margin-left: calc( (100% / 10) * 9 );  }
  .offset-m-1-11    { margin-left: calc( (100% / 11) * 1 );  }
  .offset-m-2-11    { margin-left: calc( (100% / 11) * 2 );  }
  .offset-m-3-11    { margin-left: calc( (100% / 11) * 3 );  }
  .offset-m-4-11    { margin-left: calc( (100% / 11) * 4 );  }
  .offset-m-5-11    { margin-left: calc( (100% / 11) * 5 );  }
  .offset-m-6-11    { margin-left: calc( (100% / 11) * 6 );  }
  .offset-m-7-11    { margin-left: calc( (100% / 11) * 7 );  }
  .offset-m-8-11    { margin-left: calc( (100% / 11) * 8 );  }
  .offset-m-9-11    { margin-left: calc( (100% / 11) * 9 );  }
  .offset-m-10-11   { margin-left: calc( (100% / 11) * 10 ); }
  .offset-m-1-12    { margin-left: calc( (100% / 12) * 1 );  }
  .offset-m-5-12    { margin-left: calc( (100% / 12) * 5 );  }
  .offset-m-7-12    { margin-left: calc( (100% / 12) * 7 );  }
  .offset-m-11-12   { margin-left: calc( (100% / 12) * 11 ); }

  .grid .m-hidden   { display: none;                         }
}

/* Tablet (768px) -------------------------------------------------------- */
@media screen and (min-width: 768px) {

  .grid-adapt { max-width: 768px; }

  .t-1-2,
  .t-2-4,
  .t-3-6,
  .t-4-8,
  .t-5-10,
  .t-6-12       { width: calc( (100% / 2) * 1 );   }
  .t-1-3,
  .t-2-6,
  .t-3-9,
  .t-4-12       { width: calc( (100% / 3) * 1 );   }
  .t-2-3,
  .t-4-6,
  .t-8-12       { width: calc( (100% / 3) * 2 );   }
  .t-1-4,
  .t-2-8,
  .t-3-12       { width: calc( (100% / 4) * 1 );   }
  .t-1-5,
  .t-2-10       { width: calc( (100% / 5) * 1 );   }
  .t-2-5,
  .t-4-10       { width: calc( (100% / 5) * 2 );   }
  .t-3-5,
  .t-6-10       { width: calc( (100% / 5) * 3 );   }
  .t-4-5,
  .t-8-10       { width: calc( (100% / 5) * 4 );   }
  .t-1-6,
  .t-2-12       { width: calc( (100% / 6) * 1 );   }
  .t-5-6,
  .t-10-12      { width: calc( (100% / 6) * 5 );   }
  .t-1-7        { width: calc( (100% / 7) * 1 );   }
  .t-2-7        { width: calc( (100% / 7) * 2 );   }
  .t-3-7        { width: calc( (100% / 7) * 3 );   }
  .t-4-7        { width: calc( (100% / 7) * 4 );   }
  .t-5-7        { width: calc( (100% / 7) * 5 );   }
  .t-6-7        { width: calc( (100% / 7) * 6 );   }
  .t-1-8        { width: calc( (100% / 8) * 1 );   }
  .t-3-8        { width: calc( (100% / 8) * 3 );   }
  .t-5-8        { width: calc( (100% / 8) * 5 );   }
  .t-7-8        { width: calc( (100% / 8) * 7 );   }
  .t-1-9        { width: calc( (100% / 9) * 1 );   }
  .t-2-9        { width: calc( (100% / 9) * 2 );   }
  .t-4-9        { width: calc( (100% / 9) * 4 );   }
  .t-7-9        { width: calc( (100% / 9) * 7 );   }
  .t-1-10       { width: calc( (100% / 10) * 1 );  }
  .t-3-10       { width: calc( (100% / 10) * 3 );  }
  .t-7-10       { width: calc( (100% / 10) * 7 );  }
  .t-9-10       { width: calc( (100% / 10) * 9 );  }
  .t-1-11       { width: calc( (100% / 11) * 1 );  }
  .t-2-11       { width: calc( (100% / 11) * 2 );  }
  .t-3-11       { width: calc( (100% / 11) * 3 );  }
  .t-4-11       { width: calc( (100% / 11) * 4 );  }
  .t-5-11       { width: calc( (100% / 11) * 5 );  }
  .t-6-11       { width: calc( (100% / 11) * 6 );  }
  .t-7-11       { width: calc( (100% / 11) * 7 );  }
  .t-8-11       { width: calc( (100% / 11) * 8 );  }
  .t-9-11       { width: calc( (100% / 11) * 9 );  }
  .t-10-11      { width: calc( (100% / 11) * 10 ); }
  .t-1-12       { width: calc( (100% / 12) * 1 );  }
  .t-5-12       { width: calc( (100% / 12) * 5 );  }
  .t-7-12       { width: calc( (100% / 12) * 7 );  }
  .t-11-12      { width: calc( (100% / 12) * 11 ); }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  /* offset */
  .offset-t-1       { margin-left: 100%; }
  .offset-t-1-2,
  .offset-t-2-4,
  .offset-t-3-6,
  .offset-t-4-8,
  .offset-t-5-10,
  .offset-t-6-12    { margin-left: calc( (100% / 2) * 1 );   }
  .offset-t-1-3,
  .offset-t-2-6,
  .offset-t-3-9,
  .offset-t-4-12    { margin-left: calc( (100% / 3) * 1 );   }
  .offset-t-2-3,
  .offset-t-4-6,
  .offset-t-8-12    { margin-left: calc( (100% / 3) * 2 );   }
  .offset-t-1-4,
  .offset-t-2-8,
  .offset-t-3-12    { margin-left: calc( (100% / 4) * 1 );   }
  .offset-t-1-5,
  .offset-t-2-10    { margin-left: calc( (100% / 5) * 1 );   }
  .offset-t-2-5,
  .offset-t-4-10    { margin-left: calc( (100% / 5) * 2 );   }
  .offset-t-3-5,
  .offset-t-6-10    { margin-left: calc( (100% / 5) * 3 );   }
  .offset-t-4-5,
  .offset-t-8-10    { margin-left: calc( (100% / 5) * 4 );   }
  .offset-t-1-6,
  .offset-t-2-12    { margin-left: calc( (100% / 6) * 1 );   }
  .offset-t-5-6,
  .offset-t-10-12   { margin-left: calc( (100% / 6) * 5 );   }
  .offset-t-1-7     { margin-left: calc( (100% / 7) * 1 );   }
  .offset-t-2-7     { margin-left: calc( (100% / 7) * 2 );   }
  .offset-t-3-7     { margin-left: calc( (100% / 7) * 3 );   }
  .offset-t-4-7     { margin-left: calc( (100% / 7) * 4 );   }
  .offset-t-5-7     { margin-left: calc( (100% / 7) * 5 );   }
  .offset-t-6-7     { margin-left: calc( (100% / 7) * 6 );   }
  .offset-t-1-8     { margin-left: calc( (100% / 8) * 1 );   }
  .offset-t-3-8     { margin-left: calc( (100% / 8) * 3 );   }
  .offset-t-5-8     { margin-left: calc( (100% / 8) * 5 );   }
  .offset-t-7-8     { margin-left: calc( (100% / 8) * 7 );   }
  .offset-t-1-9     { margin-left: calc( (100% / 9) * 1 );   }
  .offset-t-2-9     { margin-left: calc( (100% / 9) * 2 );   }
  .offset-t-4-9     { margin-left: calc( (100% / 9) * 4 );   }
  .offset-t-7-9     { margin-left: calc( (100% / 9) * 7 );   }
  .offset-t-1-10    { margin-left: calc( (100% / 10) * 1 );  }
  .offset-t-3-10    { margin-left: calc( (100% / 10) * 3 );  }
  .offset-t-7-10    { margin-left: calc( (100% / 10) * 7 );  }
  .offset-t-9-10    { margin-left: calc( (100% / 10) * 9 );  }
  .offset-t-1-11    { margin-left: calc( (100% / 11) * 1 );  }
  .offset-t-2-11    { margin-left: calc( (100% / 11) * 2 );  }
  .offset-t-3-11    { margin-left: calc( (100% / 11) * 3 );  }
  .offset-t-4-11    { margin-left: calc( (100% / 11) * 4 );  }
  .offset-t-5-11    { margin-left: calc( (100% / 11) * 5 );  }
  .offset-t-6-11    { margin-left: calc( (100% / 11) * 6 );  }
  .offset-t-7-11    { margin-left: calc( (100% / 11) * 7 );  }
  .offset-t-8-11    { margin-left: calc( (100% / 11) * 8 );  }
  .offset-t-9-11    { margin-left: calc( (100% / 11) * 9 );  }
  .offset-t-10-11   { margin-left: calc( (100% / 11) * 10 ); }
  .offset-t-1-12    { margin-left: calc( (100% / 12) * 1 );  }
  .offset-t-5-12    { margin-left: calc( (100% / 12) * 5 );  }
  .offset-t-7-12    { margin-left: calc( (100% / 12) * 7 );  }
  .offset-t-11-12   { margin-left: calc( (100% / 12) * 11 ); }

  .grid .t-hidden   { display: none;                         }
}

/* Desktop (1024px) ------------------------------------------------------ */
@media screen and (min-width: 1024px) {

  .grid-adapt { max-width: 1024px; }

  .d-1-2,
  .d-2-4,
  .d-3-6,
  .d-4-8,
  .d-5-10,
  .d-6-12       { width: calc( (100% / 2) * 1 );   }
  .d-1-3,
  .d-2-6,
  .d-3-9,
  .d-4-12       { width: calc( (100% / 3) * 1 );   }
  .d-2-3,
  .d-4-6,
  .d-8-12       { width: calc( (100% / 3) * 2 );   }
  .d-1-4,
  .d-2-8,
  .d-3-12       { width: calc( (100% / 4) * 1 );   }
  .d-1-5,
  .d-2-10       { width: calc( (100% / 5) * 1 );   }
  .d-2-5,
  .d-4-10       { width: calc( (100% / 5) * 2 );   }
  .d-3-5,
  .d-6-10       { width: calc( (100% / 5) * 3 );   }
  .d-4-5,
  .d-8-10       { width: calc( (100% / 5) * 4 );   }
  .d-1-6,
  .d-2-12       { width: calc( (100% / 6) * 1 );   }
  .d-5-6,
  .d-10-12      { width: calc( (100% / 6) * 5 );   }
  .d-1-7        { width: calc( (100% / 7) * 1 );   }
  .d-2-7        { width: calc( (100% / 7) * 2 );   }
  .d-3-7        { width: calc( (100% / 7) * 3 );   }
  .d-4-7        { width: calc( (100% / 7) * 4 );   }
  .d-5-7        { width: calc( (100% / 7) * 5 );   }
  .d-6-7        { width: calc( (100% / 7) * 6 );   }
  .d-1-8        { width: calc( (100% / 8) * 1 );   }
  .d-3-8        { width: calc( (100% / 8) * 3 );   }
  .d-5-8        { width: calc( (100% / 8) * 5 );   }
  .d-7-8        { width: calc( (100% / 8) * 7 );   }
  .d-1-9        { width: calc( (100% / 9) * 1 );   }
  .d-2-9        { width: calc( (100% / 9) * 2 );   }
  .d-4-9        { width: calc( (100% / 9) * 4 );   }
  .d-7-9        { width: calc( (100% / 9) * 7 );   }
  .d-1-10       { width: calc( (100% / 10) * 1 );  }
  .d-3-10       { width: calc( (100% / 10) * 3 );  }
  .d-7-10       { width: calc( (100% / 10) * 7 );  }
  .d-9-10       { width: calc( (100% / 10) * 9 );  }
  .d-1-11       { width: calc( (100% / 11) * 1 );  }
  .d-2-11       { width: calc( (100% / 11) * 2 );  }
  .d-3-11       { width: calc( (100% / 11) * 3 );  }
  .d-4-11       { width: calc( (100% / 11) * 4 );  }
  .d-5-11       { width: calc( (100% / 11) * 5 );  }
  .d-6-11       { width: calc( (100% / 11) * 6 );  }
  .d-7-11       { width: calc( (100% / 11) * 7 );  }
  .d-8-11       { width: calc( (100% / 11) * 8 );  }
  .d-9-11       { width: calc( (100% / 11) * 9 );  }
  .d-10-11      { width: calc( (100% / 11) * 10 ); }
  .d-1-12       { width: calc( (100% / 12) * 1 );  }
  .d-5-12       { width: calc( (100% / 12) * 5 );  }
  .d-7-12       { width: calc( (100% / 12) * 7 );  }
  .d-11-12      { width: calc( (100% / 12) * 11 ); }
}

@media screen and (min-width: 1024px) and (max-width: 1366px) {
  /* offset */
  .offset-d-1       { margin-left: 100%;                     }
  .offset-d-1-2,
  .offset-d-2-4,
  .offset-d-3-6,
  .offset-d-4-8,
  .offset-d-5-10,
  .offset-d-6-12    { margin-left: calc( (100% / 2) * 1 );   }
  .offset-d-1-3,
  .offset-d-2-6,
  .offset-d-3-9,
  .offset-d-4-12    { margin-left: calc( (100% / 3) * 1 );   }
  .offset-d-2-3,
  .offset-d-4-6,
  .offset-d-8-12    { margin-left: calc( (100% / 3) * 2 );   }
  .offset-d-1-4,
  .offset-d-2-8,
  .offset-d-3-12    { margin-left: calc( (100% / 4) * 1 );   }
  .offset-d-1-5,
  .offset-d-2-10    { margin-left: calc( (100% / 5) * 1 );   }
  .offset-d-2-5,
  .offset-d-4-10    { margin-left: calc( (100% / 5) * 2 );   }
  .offset-d-3-5,
  .offset-d-6-10    { margin-left: calc( (100% / 5) * 3 );   }
  .offset-d-4-5,
  .offset-d-8-10    { margin-left: calc( (100% / 5) * 4 );   }
  .offset-d-1-6,
  .offset-d-2-12    { margin-left: calc( (100% / 6) * 1 );   }
  .offset-d-5-6,
  .offset-d-10-12   { margin-left: calc( (100% / 6) * 5 );   }
  .offset-d-1-7     { margin-left: calc( (100% / 7) * 1 );   }
  .offset-d-2-7     { margin-left: calc( (100% / 7) * 2 );   }
  .offset-d-3-7     { margin-left: calc( (100% / 7) * 3 );   }
  .offset-d-4-7     { margin-left: calc( (100% / 7) * 4 );   }
  .offset-d-5-7     { margin-left: calc( (100% / 7) * 5 );   }
  .offset-d-6-7     { margin-left: calc( (100% / 7) * 6 );   }
  .offset-d-1-8     { margin-left: calc( (100% / 8) * 1 );   }
  .offset-d-3-8     { margin-left: calc( (100% / 8) * 3 );   }
  .offset-d-5-8     { margin-left: calc( (100% / 8) * 5 );   }
  .offset-d-7-8     { margin-left: calc( (100% / 8) * 7 );   }
  .offset-d-1-9     { margin-left: calc( (100% / 9) * 1 );   }
  .offset-d-2-9     { margin-left: calc( (100% / 9) * 2 );   }
  .offset-d-4-9     { margin-left: calc( (100% / 9) * 4 );   }
  .offset-d-7-9     { margin-left: calc( (100% / 9) * 7 );   }
  .offset-d-1-10    { margin-left: calc( (100% / 10) * 1 );  }
  .offset-d-3-10    { margin-left: calc( (100% / 10) * 3 );  }
  .offset-d-7-10    { margin-left: calc( (100% / 10) * 7 );  }
  .offset-d-9-10    { margin-left: calc( (100% / 10) * 9 );  }
  .offset-d-1-11    { margin-left: calc( (100% / 11) * 1 );  }
  .offset-d-2-11    { margin-left: calc( (100% / 11) * 2 );  }
  .offset-d-3-11    { margin-left: calc( (100% / 11) * 3 );  }
  .offset-d-4-11    { margin-left: calc( (100% / 11) * 4 );  }
  .offset-d-5-11    { margin-left: calc( (100% / 11) * 5 );  }
  .offset-d-6-11    { margin-left: calc( (100% / 11) * 6 );  }
  .offset-d-7-11    { margin-left: calc( (100% / 11) * 7 );  }
  .offset-d-8-11    { margin-left: calc( (100% / 11) * 8 );  }
  .offset-d-9-11    { margin-left: calc( (100% / 11) * 9 );  }
  .offset-d-10-11   { margin-left: calc( (100% / 11) * 10 ); }
  .offset-d-1-12    { margin-left: calc( (100% / 12) * 1 );  }
  .offset-d-5-12    { margin-left: calc( (100% / 12) * 5 );  }
  .offset-d-7-12    { margin-left: calc( (100% / 12) * 7 );  }
  .offset-d-11-12   { margin-left: calc( (100% / 12) * 11 ); }

  .grid .d-hidden   { display: none;                         }
}

/* Wide Screen (1367px) -------------------------------------------------- */
@media screen and (min-width: 1367px) {

  .grid-adapt { max-width: 1367px; }

  .w-1-2,
  .w-2-4,
  .w-3-6,
  .w-4-8,
  .w-5-10,
  .w-6-12       { width: calc( (100% / 2) * 1 );   }
  .w-1-3,
  .w-2-6,
  .w-3-9,
  .w-4-12       { width: calc( (100% / 3) * 1 );   }
  .w-2-3,
  .w-4-6,
  .w-8-12       { width: calc( (100% / 3) * 2 );   }
  .w-1-4,
  .w-2-8,
  .w-3-12       { width: calc( (100% / 4) * 1 );   }
  .w-1-5,
  .w-2-10       { width: calc( (100% / 5) * 1 );   }
  .w-2-5,
  .w-4-10       { width: calc( (100% / 5) * 2 );   }
  .w-3-5,
  .w-6-10       { width: calc( (100% / 5) * 3 );   }
  .w-4-5,
  .w-8-10       { width: calc( (100% / 5) * 4 );   }
  .w-1-6,
  .w-2-12       { width: calc( (100% / 6) * 1 );   }
  .w-5-6,
  .w-10-12      { width: calc( (100% / 6) * 5 );   }
  .w-1-7        { width: calc( (100% / 7) * 1 );   }
  .w-2-7        { width: calc( (100% / 7) * 2 );   }
  .w-3-7        { width: calc( (100% / 7) * 3 );   }
  .w-4-7        { width: calc( (100% / 7) * 4 );   }
  .w-5-7        { width: calc( (100% / 7) * 5 );   }
  .w-6-7        { width: calc( (100% / 7) * 6 );   }
  .w-1-8        { width: calc( (100% / 8) * 1 );   }
  .w-3-8        { width: calc( (100% / 8) * 3 );   }
  .w-5-8        { width: calc( (100% / 8) * 5 );   }
  .w-7-8        { width: calc( (100% / 8) * 7 );   }
  .w-1-9        { width: calc( (100% / 9) * 1 );   }
  .w-2-9        { width: calc( (100% / 9) * 2 );   }
  .w-4-9        { width: calc( (100% / 9) * 4 );   }
  .w-7-9        { width: calc( (100% / 9) * 7 );   }
  .w-1-10       { width: calc( (100% / 10) * 1 );  }
  .w-3-10       { width: calc( (100% / 10) * 3 );  }
  .w-7-10       { width: calc( (100% / 10) * 7 );  }
  .w-9-10       { width: calc( (100% / 10) * 9 );  }
  .w-1-11       { width: calc( (100% / 11) * 1 );  }
  .w-2-11       { width: calc( (100% / 11) * 2 );  }
  .w-3-11       { width: calc( (100% / 11) * 3 );  }
  .w-4-11       { width: calc( (100% / 11) * 4 );  }
  .w-5-11       { width: calc( (100% / 11) * 5 );  }
  .w-6-11       { width: calc( (100% / 11) * 6 );  }
  .w-7-11       { width: calc( (100% / 11) * 7 );  }
  .w-8-11       { width: calc( (100% / 11) * 8 );  }
  .w-9-11       { width: calc( (100% / 11) * 9 );  }
  .w-10-11      { width: calc( (100% / 11) * 10 ); }
  .w-1-12       { width: calc( (100% / 12) * 1 );  }
  .w-5-12       { width: calc( (100% / 12) * 5 );  }
  .w-7-12       { width: calc( (100% / 12) * 7 );  }
  .w-11-12      { width: calc( (100% / 12) * 11 ); }

  /* offset */
  .offset-w-1       { margin-left: 100%; }
  .offset-w-1-2,
  .offset-w-2-4,
  .offset-w-3-6,
  .offset-w-4-8,
  .offset-w-5-10,
  .offset-w-6-12    { margin-left: calc( (100% / 2) * 1 );   }
  .offset-w-1-3,
  .offset-w-2-6,
  .offset-w-3-9,
  .offset-w-4-12    { margin-left: calc( (100% / 3) * 1 );   }
  .offset-w-2-3,
  .offset-w-4-6,
  .offset-w-8-12    { margin-left: calc( (100% / 3) * 2 );   }
  .offset-w-1-4,
  .offset-w-2-8,
  .offset-w-3-12    { margin-left: calc( (100% / 4) * 1 );   }
  .offset-w-1-5,
  .offset-w-2-10    { margin-left: calc( (100% / 5) * 1 );   }
  .offset-w-2-5,
  .offset-w-4-10    { margin-left: calc( (100% / 5) * 2 );   }
  .offset-w-3-5,
  .offset-w-6-10    { margin-left: calc( (100% / 5) * 3 );   }
  .offset-w-4-5,
  .offset-w-8-10    { margin-left: calc( (100% / 5) * 4 );   }
  .offset-w-1-6,
  .offset-w-2-12    { margin-left: calc( (100% / 6) * 1 );   }
  .offset-w-5-6,
  .offset-w-10-12   { margin-left: calc( (100% / 6) * 5 );   }
  .offset-w-1-7     { margin-left: calc( (100% / 7) * 1 );   }
  .offset-w-2-7     { margin-left: calc( (100% / 7) * 2 );   }
  .offset-w-3-7     { margin-left: calc( (100% / 7) * 3 );   }
  .offset-w-4-7     { margin-left: calc( (100% / 7) * 4 );   }
  .offset-w-5-7     { margin-left: calc( (100% / 7) * 5 );   }
  .offset-w-6-7     { margin-left: calc( (100% / 7) * 6 );   }
  .offset-w-1-8     { margin-left: calc( (100% / 8) * 1 );   }
  .offset-w-3-8     { margin-left: calc( (100% / 8) * 3 );   }
  .offset-w-5-8     { margin-left: calc( (100% / 8) * 5 );   }
  .offset-w-7-8     { margin-left: calc( (100% / 8) * 7 );   }
  .offset-w-1-9     { margin-left: calc( (100% / 9) * 1 );   }
  .offset-w-2-9     { margin-left: calc( (100% / 9) * 2 );   }
  .offset-w-4-9     { margin-left: calc( (100% / 9) * 4 );   }
  .offset-w-7-9     { margin-left: calc( (100% / 9) * 7 );   }
  .offset-w-1-10    { margin-left: calc( (100% / 10) * 1 );  }
  .offset-w-3-10    { margin-left: calc( (100% / 10) * 3 );  }
  .offset-w-7-10    { margin-left: calc( (100% / 10) * 7 );  }
  .offset-w-9-10    { margin-left: calc( (100% / 10) * 9 );  }
  .offset-w-1-11    { margin-left: calc( (100% / 11) * 1 );  }
  .offset-w-2-11    { margin-left: calc( (100% / 11) * 2 );  }
  .offset-w-3-11    { margin-left: calc( (100% / 11) * 3 );  }
  .offset-w-4-11    { margin-left: calc( (100% / 11) * 4 );  }
  .offset-w-5-11    { margin-left: calc( (100% / 11) * 5 );  }
  .offset-w-6-11    { margin-left: calc( (100% / 11) * 6 );  }
  .offset-w-7-11    { margin-left: calc( (100% / 11) * 7 );  }
  .offset-w-8-11    { margin-left: calc( (100% / 11) * 8 );  }
  .offset-w-9-11    { margin-left: calc( (100% / 11) * 9 );  }
  .offset-w-10-11   { margin-left: calc( (100% / 11) * 10 ); }
  .offset-w-1-12    { margin-left: calc( (100% / 12) * 1 );  }
  .offset-w-5-12    { margin-left: calc( (100% / 12) * 5 );  }
  .offset-w-7-12    { margin-left: calc( (100% / 12) * 7 );  }
  .offset-w-11-12   { margin-left: calc( (100% / 12) * 11 ); }

  .grid .w-hidden   { display: none;                         }
}
```
