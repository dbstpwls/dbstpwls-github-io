#POPUP 띄우는 script

## spec
1. only javascript
2. ie9++, chrome, safari, firefox 지원
3. 높이 자동으로 계산해서 적용하므로 높이 신경쓸 필요 없습니다.

### 현재 확인한 device & browser
Apple

- iphone 5, 5s
- ipad PRO, ipad AIR

Andorid

- galaxy 6

browser

- chrome
- firefox
- safari
- ie9++


***

## how to use?
### The list of must be defined property
- opt.url
- opt.link

```
opt = {
	url : 'popupUrl',
    link : 'linkUrl'
}

dunamuMobilePopup(opt);
```

1. 해당 script를 연결한뒤 (public/assets/javascripts/dnm_popup.script)
2. 위 함수 실행

***

### popup page setting
해당 popup페이지 세팅 목록과 연결되어있는 변수

- link => #dnm-link `opt.link`
- close => #dnm-close `opt.closeHours.default`
- period close => #dnm-close-period `opt.closeHours.long`

위에 있는 id값은 사용자 설정을 안했을 경우의 id값입니다.

```
opt : {
	eventBtNaming : {
		link : 'dnm-link',
		close : 'dnm-close',
		periodClose : 'dnm-close-period'
	}
}
```
으로 사용자 정의 setting을 할수 있으며, 위 세팅은 말그대로의 세팅이므로 굳이 맞출필요는 없습니다.
즉, 필요에 따라 element에 설정해둔 id만 연결해주면 됩니다.

***


## introduce option
`*` <= 무조건 설정해야 하는 변수

#### opt.link `*` [String]
`#dnm-link`와 연결되어 있습니다.
링크를 설정하되 pc, mobile 분리할수 있습니다.
```
link : 'link'
```
위의경우 pc, mobile 둘다 `link`로 연결됩니다.
```
link : {
    pc : 'pc_link'
    mobile : 'mobile_link'
}
```
위의경우 pc에선 `pc_link`가 mobile에선 `mobile_link`가 연결됩니다.

---

#### opt.url `*` [String]
팝업으로 띄워질 페이지의 url 입니다. `절대경로`로 작성하셔야 합니다.

---


#### opt.device [String]
팝업이 띄워질 디바이스 설정

`all`, `mobile`, `pc`

default : `all`

---

#### opt.ani [String]
${start-position}-${after-position}

 - `bottom-top`
 - `left-right`
 - `right-left`
 - `fadeIn`

default : `bottom-top`

---

#### opt.time [integer]
애니매이션 지속시간 (milissecond)

---

#### opt.filter [object]
특정 url에서만 동작할수 있도록 설계되었으며
url을 구분하는 가준을 세분화 시켰습니다.

filter.reg는 `array`의 형태로 줘서 여러개의 정규표현식 삽입이 가능하며, 각각의 array-item들은 regexp의 문법을 따릅니다.

filter.display는 매칭된 url을 보여줄지, 안보여줄지를 선정하는 키워드이며 `boolean` 형태입니다.

```
opt.filter : {
	reg : ['KOREA|t1'],
	display : true
}
```
만약 위와같은 옵션을 줄경우 url에 `KOREA` 혹은 `t1`이 들어갈 경우 팝업을`display` 합니다. 아와 반대로

```
opt.filter : {
	reg : ['KOREA|t1'],
	display : false
}
```
의 경우에는 url에 `KOREA` 혹은 `t1`이 들어갈 경우 팝업을 `no-display` 합니다.

---

#### opt.closeHours [integer]
닫기 버튼을 눌렀을 경우 사용자에게 어느기간동안 안보이게 할지 설정합니다. (cookie 생성)

closeDay.long => `#dnm-close-period`

closeDay.default => `#dnm-close`

```
closeHours : {
	long : 168,
	default : 24
}
<!-- default value -->
```

---

#### opt.floatControl [object]
iframe에 scroll이 생기는걸 방지하기 위해 `scrolling=no` attr을 줬습니다.
이는 내용이 넘쳐도 scroll이 생기지 않기 때문에 [페이지 전체에 띄우는 팝업](http://publishing.dunamu.io/map-renew/banner/html/contain-service.html)일 경우에 문제가 되며 element내부에 직접 styling을 줬기 때문에 후에 수정사항이 생겨 css를 줄려고 할시, 문제가 될수도 있습니다.
이 문제는 element에 직접 attr과 css를 줬기 때문에 일어나는 문제이며, 이러한 문제를 해결하고자 element에 직접 주는 attribute를 제어할수 있게 해놨습니다.

```
floatControl : {
	scrollAttr : ${boolean},
    style : ${boolean}
}
```

또한 floatControl.style : false를 줄 경우 animation을 나타내기 위해 줬던 함수실행을 중지했으므로, iframe이 나타나는 animation을 표현하기 위해
해당 iframe.onload 되는 순간 `screen-on`이라는 class가 추가되도록 했습니다.



---

description

- [예제페이지](http://publishing.dunamu.io/mkpopupTest/html/index.html)