const passwordResetController = function({modules}) {
  let {pug, logger, jsAsset, cssAsset} = modules;

  return {
    main: function({attributes, responders, page}) {
      let {req, res} = attributes;
      let srcPath = './modules/password_reset/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});

      page.set( {
        javascript: jsAsset('sessionjs'),
        stylesheet: cssAsset('sessioncss'),
        title: 'Tisko - Password Reset',
        body_class: 'password-reset'
      })

      let html = fn(page);

      responders.html(html);
    },

    reset_password: function({attributes, responders, page}) {
      let {req, res} = attributes;
      let refUrl = decodeURI(req.protocol + '://' + req.get('host'));

      responders.redirectWithCookies(refUrl);

    }
  }
}

export default passwordResetController;
