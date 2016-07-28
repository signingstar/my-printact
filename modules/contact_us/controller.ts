let pug = require('pug');
let path = require('path');
let navigationConfig = require('../header/presenter');

module.exports = function(){
  return {
    main: function({attributes, responders, page}) {
      let {req, res} = attributes;
    	let srcPath:string = './modules/contact_us/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});

      responders.html(fn({navigationConfig}));
    }
  }
}