function makeTag(tag,tContent,tID,tClass,tValue,tAlt,tOther){
	var tagAttributeNames = [];
	var tagOutput;
	
	tagAttributeNames = ['','','id','class','value','alt'];
	
		for(var i=0; i<arguments.length; i++) {
			if(i > 1 && i < 6 && arguments[i] != undefined && arguments[i] != ''){
				tagAttributes += tagAttributeNames+' "'+arguments[i]+'" ';
			}
  		}
	
		if(tContent == undefined || tContent == ''){ // is this tag self-closing?
			tagOutput = '<'+tag+' '+tagAttributes+' />';
		}else{
			tagOutput = '<'+tag+' '+tagAttributes+'>'+tContent+'</'+tag+'>';
		}

	return tagOutput;
}
