function startGame() {
    var messagesElement = document.getElementById('messages');
    messagesElement.innerHTML = 'Welcome to the Math Game! Starting a new game...';
}
document.getElementById('startGame').addEventListener('click', startGame);
// tsc CLI Options in ts docs has compiler options add to tsconfig.json
// target is the which version of js to output
// sourceMap used to debug ts ouput is running in browser
// outDir is directory of output
// strict true
// watch leaves compiler running
// files: [] is a Array of files to compile
//  ! is a non null operator
