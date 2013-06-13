function makeTag(tag,tContent,tID,tClass,tValue,tAlt,tOther){
	var tagAttributeNames = ['','','id','class','value','alt'];
	var tagAttributes, tagOutput;
        tagAttributes = '';

		for(var i=0; i<arguments.length; i++) {
			if(i > 1 && i < 6 && arguments[i] != undefined && arguments[i] != ''){
				tagAttributes += tagAttributeNames[i]+'="'+arguments[i]+'" ';
alert(i+' :: '+tagAttributeNames[i]+' :: '+arguments[i]);
			}
  		}

		if(tContent == undefined || tContent == ''){ // is this tag self-closing?
			tagOutput = '<'+tag+' '+tagAttributes+' />';
		}else{
			tagOutput = '<'+tag+' '+tagAttributes+'>'+tContent+'</'+tag+'>';
		}

	return tagOutput;
}
