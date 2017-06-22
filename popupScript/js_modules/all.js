const fs = require('fs');

module.exports.overWrite = function (file, text) {
	new Promise(function (resolve, reject) {
		fs.readFile(file, 'utf-8', function (er, rs) {
			if(er)
				console.log(er);
			else
				resolve(rs);
		});
	}).then(function (rs) {
		if(rs.indexOf(text) != -1){
			return
		}
		rs += `\n${text}`;
		fs.writeFile(file, rs, function (er, rs) {
			if(er)
				console.log(er);
			else
				console.log(`${file}에 "${text}" 텍스트 추가 완료`);
		});
	});
}

module.exports.removeText = function (file, text) {
	new Promise(function (resolve, reject) {
		fs.readFile(file, 'utf-8', function (er, rs) {
			if(er)
				console.log(er);
			else
				resolve(rs);
		});
	}).then(function (rs) {
		if(rs.indexOf(text) == -1){
			console.log(`${file}에 삭제하려는 ${text} 가 없습니다.`);
			return
		}
		rs = rs.replace(`\n${text}`, '');
		fs.writeFile(file, rs, function (er, rs) {
			if(er)
				console.log(er);
			else
				console.log(`${file}에 "${text}" 텍스트 삭제 완료`);
		});
	});
}

module.exports.indexing = function (num, extension) {
	if(!extension)
			extension = '';
	let result = '';
	for(let i = 0; i<num; i++){
		if(i==(num-1))
			result += '/*'+extension;
		else
			result += '/**';
	}
	return result
}