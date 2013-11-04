//= require_tree .
//= require codemirror

$(function(){
  var mirrorContent = document.getElementById('page_body');
  if(mirrorContent){
    var myCodeMirror = CodeMirror.fromTextArea(mirrorContent, {
      lineWrapping: true,
      mode: 'text/html',
      lineNumbers: true
    });
  }
});