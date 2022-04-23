makeTag
=======

Tag making Javascript function

Usage:\
makeTag(tag,tContent,tID,tClass,tValue,tAlt,tOther);\
e.g. var tag1 = makeTag('button','Test','testBtn','TestBtnClass','','Test Alt','title="Test Title"');\
var tag2 = makeTag('input','','testInput','testInputClass','','','title="test title"');

// JQuery dom insert\
 $(document).ready(function() {\
  $('#node-9 .content').append(tag1);\
  $('#node-9 .content').append(tag2);\
});
