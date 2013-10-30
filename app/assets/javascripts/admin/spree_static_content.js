//= require_tree .
//= require codemirror

$(function(){
  var myCodeMirror = CodeMirror.fromTextArea(document.getElementById('page_body'), {
    lineWrapping: true,
    lineNumbers: true
  });
});
