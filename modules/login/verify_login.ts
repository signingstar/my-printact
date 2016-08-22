var fs = require('fs');
var path = require('path');

// var pathString = path.join(__dirname, './config', 'user_info.json');
let pathString = './config/user_info.json';

var readFileAsync = function(path: string, cb: (data: any) => void) {
	fs.readFile(path, function(err: Error, data: any) {
		if(err) {
			console.log(err);
			return;
		}
    console.log(`data:${data}`);
		cb(JSON.parse(data));
	});
}

const verifyUser = (userId: string, password: string, cb: (state: boolean) => void) => {
  let validUser = false;

  readFileAsync(pathString, function(data) {
    let exactData = data[userId];
    if(exactData) {
      if(exactData.id === userId && password === exactData.password) {
        validUser = true;
      }
    }
    cb(validUser);
  });

  return validUser;
}

export default verifyUser;
