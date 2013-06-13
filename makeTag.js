function makeTag(tag,content,tID,tClass){
	if(tID == undefined){
		tID = '';
	}
	if(tClass == undefined){
		tClass = '';
	}
	
	var tagOutput = '<'+tag+' id="'+tID+'" class="'+tClass+'">'+content+'</'+tag+'>';
	return tagOutput;
	
}
