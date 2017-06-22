// module import
const exec = require('child_process').exec;
const config = require('./config.json');
const CWD = config.root;
const PT = require('path');

const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const gulp = require('gulp');
const includer = require('gulp-file-include');
const gConcat = require('gulp-concat');
const gIf = require('gulp-if');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const gWatch = require('gulp-watch');

// require and baseSetting modules
var allModules = require(CWD+'/js_modules/all.js');

var BS = `${CWD}/${config.path.src}`;
var BD = `${CWD}/${config.path.dist}`;
var BAS = `${BS}/${config.path.assets.wrap}`;
var BAD = `${BD}/${config.path.assets.wrap}`;
var path = {
	html : {
		s : `${BS}/${config.path.html}/content`,
		d : `${BD}/${config.path.html}`,
		w : `${BS}/${config.path.html}/*${allModules.indexing(config.html.index)}`
	},
	style : {
		s : `${BAS}/${config.path.assets.style}`,
		d : `${BAD}/${config.path.assets.style}`,
		w : `${BAS}/${config.path.assets.style}${allModules.indexing(config.style.index)}`
	},
	images : {
		s : `${BAS}/${config.path.assets.images}`,
		d : `${BAD}/${config.path.assets.images}`,
		w : `${BAS}/${config.path.assets.images}${allModules.indexing(config.images.index)}`
	},
	script : {
		s : `${BAS}/${config.path.assets.script}`,
		d : `${BAD}/${config.path.assets.script}`,
		w : `${BAS}/${config.path.assets.script}/*${allModules.indexing(config.script.index)}`
	},
	font : {
		s : `${BAS}/${config.path.assets.font}`,
		d : `${BAD}/${config.path.assets.font}`
	}
};

// THE STATE OF TASK
allModules.overWrite(CWD+'/.gitignore', '/'+config.path.src);
function firstTask() {
	return new Promise(function (resolve, reject) {
		// exec(`rm -rf ${BD}`, function (err) {
		// 	if(err)
		// 		console.log(err);
		// 	else
		// 		resolve();
		// });
	});
}
gulp.task('default', function () {
	// firstTask()
	// 	.then(function () {
			// console.log(`remove ${BD}`);
	gulp.start('oneTimeTask');
		// });
});
function beforeExit() {
	allModules.removeText(CWD+'/.gitignore', '/'+config.path.src);
}


// gulp-task
gulp.task('makeAssets', ['script:default', 'html:default', 'style:default', 'images:default', 'font:default']);
gulp.task('oneTimeTask', ['server', 'watch', 'images:min', 'makeAssets']);

// 			-script
gulp.task('script:default', ['script:concat', 'script:move']);
gulp.task('script:move', function () {
	return gulp.src(path.script.s+'/content'+allModules.indexing(config.script.moveIndex))
		.pipe( gIf(config.script.resultConcat, gConcat(config.script.resultConcatNaming)) )
		.pipe(gulp.dest(path.script.d));
});
gulp.task('script:concat', function () {
	return gulp.src(path.script.s+'/concat'+allModules.indexing(config.script.index))
		.pipe(gConcat(config.script.concatFolerJS))
		.pipe(gulp.dest(path.script.s+'/content'));
});
// 			-style
var sassOpt = {
	outputStyle : 'compact',
	indentType : config.style.indentType,
	precision : config.style.precision
};
gulp.task('style:default', function () {
	return gulp.src(path.style.s+'/*.{sass, scss}')
		.pipe( gIf(config.style.sourcemaps, sourcemaps.init()) )
			.pipe(sass(sassOpt).on('error', sass.logError))
		.pipe( gIf(config.style.sourcemaps, sourcemaps.write('./map')) )
		.pipe(gulp.dest(path.style.d));
});
// 			-images
gulp.task('images:default', ['images:move']);
gulp.task('images:move', function () {
	return gulp.src(path.images.s+`${allModules.indexing(config.images.index)}`)
		.pipe(gulp.dest(path.images.d));
});
gulp.task('images:min', function () {
	return gulp.src(path.images.s+`${allModules.indexing(config.images.index)}`)
		.pipe(imagemin([
			imagemin.optipng({optimizationLevel : config.images.optimize}),
			imagemin.svgo({plugins: [{removeViewBox: true}]})
		]))
		.pipe(gulp.dest(`${BAS}/${config.path.assets.images}`));
});
// 			-html
gulp.task('html:default', function () {
	return gulp.src(path.html.s+`${allModules.indexing(config.html.index)}`)
		.pipe(includer({
			prefix: config.func.includePrefix,
			context : {
				path : {
					style : '"'+PT.relative(path.html.d, path.style.d),
					script : '"'+PT.relative(path.html.d, path.script.d),
					images : '"'+PT.relative(path.html.d, path.images.d),
					font : '"'+PT.relative(path.html.d, path.font.d)
				}
			}
		}))
		.pipe(gulp.dest(path.html.d));
});

// 			-font
gulp.task('font:default', function () {
	return gulp.src(path.font.s+'/*')
		.pipe(gulp.dest(path.font.d));
});
// 			-server
gulp.task('server', function () {
	browserSync.init({
		server : {
			baseDir : `${CWD}/${config.path.dist}`
		},
		logFileChanges : false
	});

	// src파일이 바뀌는 것보다 dist파일이 바뀔시 reload 되는것이 더 나을것 같다.
	gWatch(path.html.d+allModules.indexing(config.html.index)).on('change', function (e) {
		reload();
	});
	gWatch(path.script.d+allModules.indexing(config.script.index)).on('change', function (e) {
		reload();
	});
	gWatch(path.style.d+allModules.indexing(config.style.index)).on('change', function (e) {
		reload();
	});
	gWatch(path.images.d+allModules.indexing(config.images.index)).on('change', function (e) {
		reload();
	});
	gWatch(path.font.d+'/*').on('change', function (e) {
		reload();
	});
});
// 			-frameWork
gulp.task('framework:move', function () {
	frameworkMove(config.func.framework);
	// ==== example ====
	// "func" : {
	// 	"framework" : {
	// 		"list" : ["font-awesome", "jquery"],
	// 		"font-awesome" : {
	// 			"file" : ["scss/*", "fonts/*"],
	// 			"distSrc" : ["style/modules/font-awesome", "font"]
	// 		}
	// 	}
	// }
	// ==== example ====
});
function frameworkMove(framework) {
	for(let i=0; i<framework.list.length; i++){
		let name = framework.list[i];
		let frameConfig = framework[name];
		let moveFile = frameConfig.file;
		for(let n=0; n<moveFile.length; n++){
			let distSrc = frameDistFilter(frameConfig.distSrc[n]);
			console.log(`moveFile ${name}/${moveFile[n]} => ${distSrc}`);
			gulp.src(`${CWD}/node_modules/${name}/${moveFile[n]}`)
				.pipe(gulp.dest(`${distSrc}`));
		}
	}
}
function frameDistFilter(filter) {
	if(filter.indexOf('style') != -1){
		filter = filter.replace('style', path.style.s);
		return filter
	}
	if(filter.indexOf('font') != -1){
		filter = filter.replace('font', path.font.s);
		return filter
	}
	if(filter.indexOf('script') != -1){
		filter = filter.replace('script', path.script.s);
		return filter
	}
}
// 			-watch
var imagesEventStop = null;

gulp.task('watch', function () {
	gWatch(path.html.w, function () {
		gulp.start('html:default');
	});

	gWatch(path.images.w, function (e) {
		if(e.event == 'change'){
			clearTimeout(imagesEventStop);
			imagesEventStop = setTimeout(function () {
				console.log('qwkeqweqeqjeowjej');
				gulp.start('images:move');
			}, 200);
		}else{
			gulp.start('images:move');
		}
	});

	gWatch(path.script.s+'/content'+allModules.indexing(config.script.index), function () {
		gulp.start('script:move');
	});
	gWatch(path.script.s+'/concat'+allModules.indexing(config.script.index), function () {
		gulp.start('script:concat');
	});

	gWatch(path.style.w, function () {
		gulp.start('style:default');
	});

	gWatch(path.font.s+'/*', function () {
		gulp.start('font:default');
	});
});

function nasMove() {
	console.log('nas 이동');
	exec(`cp -r ${CWD}/public/* ${config.nas}`, function (er) {
		if(er)
			console.log(er);
		else
			console.log('이동 완료');
	});
}
function nasMoveRe() {
	console.log('동기화 이동');
	exec('rm -rf '+config.nas+'/*', function (er) {
		if(er)
			console.log(er);
		else
			nasMove();
	});
}
function nasDelete() {
	exec('rm -rf '+config.nas+'/*', function (er) {
		if(er)
			console.log(er);
		else
			console.log('nas 삭제 완료');
	});
}

// get Stream interface
var readline = require('readline');
var readLine = readline.createInterface({
	input : process.stdin,
	output : process.stdout
});
readLine.on('line', function (line) {
	switch(line){
		case 'approve':
			console.log('aaaa');
			break;
		case 'e':
			process.exit();
			break;
		case 'jsConcat' :
			script.concat();
			break;
		case 'renew' :
			firstTask()
				.then(function () {
					console.log(`remove ${BD}`);
					gulp.start('makeAssets');
				});
			break;
		case 'images:min' :
			gulp.start('images:min');
			break;
		case 'move' :
			nasMove();
			break;
		case 'movere' :
			nasMoveRe();
			break;
		case 'nas:d' :
			nasDelete();
			break;
	}
});