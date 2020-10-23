
/*
easy way 2 localized app's language
author: ezhsine
*/

const fs = require("fs");

let keys;
let values;

function load(langfile){
	let data=fs.readFileSync(langfile,'utf-8');
	
	const list = data.split("\n");

	keys=[];
	values=[];

	for (var i = list.length - 1; i >= 0; i--) {
		var row=list[i];
		var key=row.split("=")[0].trim().match(/(?<=').*?(?=')/)[0];
		var value=row.split("=")[1].trim().match(/(?<=').*?(?=')/)[0];

		keys.push(key);
		values.push(value);
	}
}

function parse(key,...args){
	let searchIndex=keys.indexOf(key);
	if(searchIndex<0)return key;

	let value=values[searchIndex];
	let dynamics=value.match(/{\$.*?}/g);

	if(!dynamics)return value;

	var dynamic_str = value;
	for (var i = 0; i < dynamics.length; i++) {
		var d_item=dynamics[i];

		dynamic_str=dynamic_str.replace(d_item,`${args[i]}`);
	}

	return `${dynamic_str}`;
}

module.exports={
	load:load,
	parse:parse
}