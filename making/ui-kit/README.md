크리스티나의 gulpfile과 파일경로를 바탕으로 만들었습니다. (시스템 그대로 옮겨옴)

# - 모듈 사용 설명서 -
---
- ui kit layer의 모듈은 `sass/modules/modules.sass`에 있으며,
color 시스템, 보여주기 위한 그리드, response 모듈 등을 제어하는 모듈은 `sass/modules/default/variables.sass`에 있습니다. (config file)

- ui kit 모듈을 보여주기 위한 `layout.sass, layout_media.sass` 와 실제로 가져다 옮겨쓰기 위한 `module.sass`파일로 나눠 작성했습니다.

### 1. color 모듈
#### - DESCRIPTION
color 시스템을 보다 유동적으로 제어하기 위해 `initColor(${map}, (${display color-name option},) (${border-width}) )`이라는 mixin을 만들었습니다.

- OPTION
 1. ${display-name} :: (type = boolean), (default_vlaue = true)
	true => ::after 해당 컬러값을 `content`로 넣습니다.

 2. ${border-width} :: (type = integer), (default_value = 1)
	넣은 값만큼 border-width를 설정합니다.

#### - USE
1. 객체 선언 => `$black : (className : "b", 1 : black, 2 : gray)`
	주의할 점 : className 값은 `String`형태로, color 값은 `STRING으로 하되 콤마 ('' or "") 없이`
2. 선언한 객체를 `initColor`에 삽입 => `@include initColor($black, false, 5)`

- RESULT
border를 유동적으로 제어하기 위해 세분화했습니다 (syntax 로 사용할 경우 세부적인 조절 못함)
	```
    .b-1{
    	background: black;
        color: black }
    .b-1.round {
    	background: none;
    	border-width: 5px;
        border-style: solid;
        border-color: black }
    .b-1-c{
    	color: black; }
    .b-1-bg{
    	background : black;}
    .b-1-br{
    	border-style: solid
        border-width: 5px
        border-color: #color
    }

    .b-2{
    	background: gray;
        color: gray;}
    .b-2.round {
    	background: none;
    	border-width: 5px;
        border-style: solid;
        border-color: gray;}
    .b-2-c{
    	color: gray;}
    .b-2-bg{
    	background : gray;}
    .b-2-br{
    	border-style: solid;
        border-width: 5px;
        border-color: gray;}
    ```

---

### 2. gird to see
#### - DESCRIPTION
gird 모듈로 해당하는 변수에 값을 넣으면 자동으로 그에맞는 size를 계산해 실제로 어떻게 보여지는지 말 그대로 보여주는 모듈입니다.

#### - USE
```
[경로 : sass/modules/default/variables.sass]

// see-grid
$width : 전체 width
$col-num : column의 개수
$gutter: gutter의 width
$side-gutter: 양 끝쪽 margin 값

! type = integer !
```

---

### 3. response module
#### - DESCRIPTION
! 작은 size부터 설정해야 합니다. ( from small to big)
1. 기준점 나누기
	기준점은 작은 size => 큰 size로 `$response-setting`이라는 변수에 `type = list`형태로 담아야 하며 분기되기 때문에 1나의 값을 쓰면 2개, 2개의 값을 쓰면 3개 로 나뉩니다.
 `EX => $response-setting : (720, 1366) 을 쓸 경우 분기점이 A, B, C로 나뉨`

2. `$col-setting`이라는 변수에 각각의 기준점 마다의 column의 개수를 정합니다 `type = list`
	`$col-setting : (4, 8, 12)`
3. `$class-prefix : (m, t, d)` 각각의 기준점마다 class명을 정합니다. `type = list`

4. `@include responseGet` 명령어를 작성합니다

#### - USE
```
$response-setting: (720, 1366)
$col-setting : (4, 8, 12)
$class-prefix(m, t, d)

@include responseGet
```
- result
	```
    mediea screen all and (max-width : 720px){
        m--1-1 {width: 100%;}
        m--1-2
        m--1-3
        m--2-3
        ....
        m--3-4
    }
	mediea screen all and (min-width : 721px) and (max-width: 1365px){
    	t--1-1 {width: 100%;}
        t--1-2
        t--1-3
        t--2-3
        ....
        t--7-8
    }
    mediea screen all and (min-width : 1366px){
    	d--1-1 {width: 100%;}
        d--1-2
        d--1-3
        d--2-3
        ....
        d--7-8
    }
    ```