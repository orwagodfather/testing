
//google analytics
var googleTracker =  null;
var googleTrackerCategroy = "Click-Throughs";
if (useGoogleTracker == "1"){
	var protocal = ("https:" == document.location.protocol) ? "https://ssl." : "http://www.";
	document.write(unescape("%3Cscript src='" + protocal + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));	
}

function initGoogleTrack(googleId, bookName){
	try{
		googleTracker = _gat._getTracker(googleId); 
		if (googleTracker != null){
			googleTracker._setAllowLinker(true);
			googleTracker._initData();
			googleTrackerCategroy = "Click-Throughs-" + bookName;
			googleTracker._trackPageview;
		}		
	}		
	catch(err) {}
}

function googlePageViewTrack(pageUrl) {
		if (googleTracker != null){//alert(pageUrl);
		googleTracker._trackPageview(pageUrl);}
}

function googlePageClickTrack(referrerUrl, referrerPageNumber, clickUrl) {
	if (googleTracker != null)
		googleTracker._trackEvent(googleTrackerCategroy, clickUrl, referrerPageNumber);
		//googleTracker._trackEvent("Click-Throughs", clickUrl, referrerPageNumber);
		
	var intPos = clickUrl.toLowerCase().indexOf("linkto");	
	if (intPos >= 0) 
    window.external.NotifyMsg("flipviewerxpress", clickUrl.substr(intPos));
}

function fvxTrack(pageUrl) {
		pageTracker._trackPageview(pageUrl);
}
//end of google analytics

//handling finishing of print job
function finishPrintJob(availabeNum) {
		//changing code to response
		//alert("your entitlement for printing has been used up.");
}
//end of handling finishing of print job

//**
//** callback function to handle print
//**
//***how many pages has been printed
function pagesPrinted(bookId, availabeNum, range) {
		//changing code to response
		//alert("bookId=" + bookId + "\n Number printed is " + availabeNum + "\nrange is=" + range);
}

//***how many pages will be printed
function pagesToPrint(bookId, availabeNum, range) {
		//changing code to response
		//alert("bookId=" + bookId + "\n Number to print is " + availabeNum + "\nrange is=" + range);
		//!!!!normally return availabeNum
		//!!!!changing code to response
		return availabeNum;
}
//end of handling finishing of print job

//**
//** callback function to handle text copy
//**
//***how many chars will be copied
function textToCopy(bookId, availabeNum, text) {
		//alert("bookId=" + bookId + "\nnumber of chars to copy is " + availabeNum + "\n" + text);
		//!!!!normally return availabeNum
		//!!!!changing code to response
		return availabeNum;
}
//**
//** callback function to handle download
//**
function bookToDownload(bookId, packageurl) {
		//alert("bookId=" + bookId + "\url of package is " + packageurl);
		//!!!!normally return availabeNum
		//!!!!changing code to response
		return 1;
}

function reloadBook(pageNum) {
	//!!!
	//** document.URL and window.location are different
	//!!!
	var realURL = document.URL;
	var intPos = realURL.indexOf("?"); 
  if (intPos >= 1)
		realURL = realURL.substr(0, intPos);
  //alert(realURL + "\n" + window.location + "\n" + intPos); 
	window.location = realURL + "?pn=" + pageNum;
}

//customized background colors
var searchBGColor = "";
var searchBRColor = "";
var bookmarkBGColor = "";
var bookmarkBRColor = "";  
var notesBGColor = "";
var notesBRColor = "";
var notesCTColor = "";
//

function thisMovie(movieName) {
	if (navigator.appName.indexOf("Microsoft") != -1) {
		return window[movieName];
	} else {
		return document[movieName];
	}
}

var highlightTexts = "";
function fvxHighlight() {
	thisMovie("main").sendToAS("highlight="+encodeURI(highlightTexts));
	return true; 
}

function setFocus() {
	thisMovie("main").focus();
}

function resizeWindow(h, w) {thisMovie("main").sendToAS("resizeWindow=" + encodeURI(h + "|" + w));}
		
function flipToLeft() {thisMovie("main").sendToAS("flipToLeft");}
		
function flipToRight() {thisMovie("main").sendToAS("flipToRight");}
		
function flipToFrontCover() {thisMovie("main").sendToAS("flipToFrontCover");}
		
function flipToBackCover() {thisMovie("main").sendToAS("flipToBackCover");}
		
function flipToPage(pg) {thisMovie("main").sendToAS("flipToPage=" + encodeURI(pg));}
		
function information() {thisMovie("main").sendToAS("information");}
		
function help() {thisMovie("main").sendToAS("help");}
		
function zoom() {thisMovie("main").sendToAS("zoom");}
		
function startAutoFlip() {thisMovie("main").sendToAS("startAutoFlip");}
		
function switchFrame() {thisMovie("main").sendToAS("switchFrame");}
		
function search() {thisMovie("main").sendToAS("search");}
		
function highlight() {thisMovie("main").sendToAS("highlightRec");}
		
function note() {thisMovie("main").sendToAS("note");}
		
function bookmark() {thisMovie("main").sendToAS("bookmark");}
		
function selectText() {thisMovie("main").sendToAS("selectText");}
		
function enableFlipSound(value) {thisMovie("main").sendToAS("enableFlipSound=" + encodeURI(value));}
		
function enableAudio(value) {thisMovie("main").sendToAS("enableAudio=" + encodeURI(value));}
		
function changeLanguage() {thisMovie("main").sendToAS("changeLanguage");}
		
function tableContents() {thisMovie("main").sendToAS("tableContents");}
		
function thumbnail() {thisMovie("main").sendToAS("thumbnail");}
		
function printLeft() {thisMovie("main").sendToAS("printLeft");}
		
function printRight() {thisMovie("main").sendToAS("printRight");}
		
function printRange(pages) {thisMovie("main").sendToAS("printRange=" + encodeURI(pages));}
		
function printBoth() {thisMovie("main").sendToAS("printBoth");}
		
function aboutUs() {thisMovie("main").sendToAS("aboutUs");}


function loadMain(swf, opf, lang, pn, subid, groupid, searchwrod, width, height) {
	
	var bookSrc = swf + "?opf=" + opf 
			  + "&pn=" + pn 
			  + "&lang=" + lang 
			  + "&groupid=" + groupid 
			  + "&subid=" + subid 
			  + "&search=" + searchwrod 
			  + "&htmlurl=" + document.URL;


	bookSrc = encodeURI(bookSrc);

	AC_FL_RunContent( 'src', bookSrc, 'movie', bookSrc, 'codebase', 'http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0', 'width', width, 'height', height, 'quality', 'high', 'align', 'middle', 'play', 'true', 'loop', 'true', 'scale', 'NO_SCALE', 'wmode', 'window', 'devicefont', 'false', 'id', 'main', 'bgcolor', '#ffffff', 'name', 'main', 'menu', 'true', 'allowFullScreen', 'true', 'pluginspage', 'http://www.macromedia.com/go/getflashplayer', 'allowScriptAccess','sameDomain', 'salign', 'LT');
}



function loadMain2(parms) {
	
	var swf = parms.swfUrl;
	var opf = parms.opfUrl;
  var FAKEDPROTOCOL = "ebs://";
	
	if (swf == null || opf == null) {
		alert("Missing Path for FlipViwer Xpress or FlipBook");
		return;
	}	
	var bookSrc = swf + "?opf=" + encodeURI(opf);
	
	
	var pn = parms.startPageNumber;
	if (pn != null && pn != "")
	  bookSrc = bookSrc + "&pn=" + encodeURI(pn); 

	var lang = parms.language;
	if (lang != null && lang != "")
	  bookSrc = bookSrc + "&lang=" + encodeURI(lang); 

	var subid = parms.subid;
	if (subid != null && subid != "")
	  bookSrc = bookSrc + "&subid=" + encodeURI(subid); 
	
	var groupid = parms.groupid;
	if (groupid != null && groupid != "")
	  bookSrc = bookSrc + "&groupid=" + encodeURI(groupid); 

	var pswd = parms.pswd;
	if (pswd != null && pswd != "")
	  bookSrc = bookSrc + "&password=" + encodeURI(pswd); 

	var search = parms.searchKeyword;
	if (search != null && search != "")
	  bookSrc = bookSrc + "&search=" + encodeURI(escape(search)); 
  
  var highlight = parms.highlight;
	if (highlight != null && highlight != "")
	  bookSrc = bookSrc + "&highlight=" + encodeURI(escape(highlight)); 
	
  var poweredBy = parms.poweredBy;
	if (poweredBy != null && poweredBy != "")
	  bookSrc = bookSrc + "&poweredBy=" + encodeURI(poweredBy); 
	
	var logo = parms.logo;
	if (logo != null && logo != "")
	  bookSrc = bookSrc + "&logo=" + encodeURI(logo); 
	
	var langs = parms.languages;
	if (langs != null && langs != "")
	  bookSrc = bookSrc + "&langs=" + encodeURI(langs); 
	
	var hiliteColor = parms.highlightColor;
	if (hiliteColor != null && hiliteColor != "")
	  bookSrc = bookSrc + "&hiliteColor=" + encodeURI(hiliteColor); 
	
	var hiliteMode = parms.highlightMode;
	if (hiliteMode != null && hiliteMode != "")
	  bookSrc = bookSrc + "&hiliteStyle=" + encodeURI(hiliteMode); 
	
	var hiliteLineWidth = parms.highlightLineWidth;
	if (hiliteLineWidth != null && hiliteLineWidth != "")
	  bookSrc = bookSrc + "&hiliteLineWidth=" + encodeURI(hiliteLineWidth); 
	
	var realURL = document.URL;
  var intPos = realURL.indexOf("?"); 
  if (intPos >= 1)
		realURL = realURL.substr(0, intPos);
	intPos = realURL.lastIndexOf("/");	
	if (intPos >= 1)
		realURL = realURL.substr(intPos + 1);
	
	realURL = FAKEDPROTOCOL + realURL;			  
	bookSrc = bookSrc + "&htmlurl=" + encodeURI(realURL);		
	
	var pages = parms.pages;
	if (pages != null && pages != "")
	  bookSrc = bookSrc + "&pages=" + encodeURI(pages); 

	var mode = parms.mode;
	if (mode != null && mode != "")
	  bookSrc = bookSrc + "&mode=" + encodeURI(mode); 

	var license = parms.license;
	if (license != null && license != "")
	  bookSrc = bookSrc + "&license=" + encodeURI(license); 

	var nodeid = parms.nodeid;
	if (nodeid != null && nodeid != "")
	  bookSrc = bookSrc + "&nodeid=" + encodeURI(nodeid); 

	var bookurl = parms.bookUrl;
	if (bookurl != null && bookurl != "")
	  bookSrc = bookSrc + "&bookurl=" + FAKEDPROTOCOL + encodeURI(bookurl); 
	 
	var publishingwebsite = parms.publishingwebsite;
	if (publishingwebsite != null && publishingwebsite != "")
	  bookSrc = bookSrc + "&publishingwebsite=" + FAKEDPROTOCOL + encodeURI(publishingwebsite); 
	
  var archivingserver = parms.archivingserver;
	if (archivingserver != null && archivingserver != "")
	  bookSrc = bookSrc + "&archiveurl=" + FAKEDPROTOCOL + encodeURI(archivingserver); 
  
  var bgTexture = parms.bgTexture;
	if (bgTexture != null && bgTexture != "")
	  bookSrc = bookSrc + "&bgTexture=" + encodeURI(bgTexture); 
	
	var bgColor = parms.bgColor;
	if (bgColor != null && bgColor != "")
	  bookSrc = bookSrc + "&bgColor=" + encodeURI(bgColor);  
  		
	var flatstructure = parms.flatstructure;
	if (flatstructure != null && flatstructure != "")
	  bookSrc = bookSrc + "&flatstructure=" + encodeURI(flatstructure);  
	
	var infoservlet = parms.infoservlet == null ? "":parms.infoservlet;  
	if (infoservlet != null && infoservlet != "")
	  bookSrc = bookSrc + "&infoservlet=" + encodeURI(infoservlet);  
	  
	var authservlet = parms.authservlet == null ? "":parms.authservlet;  
	if (authservlet != null && authservlet != "")
	  bookSrc = bookSrc + "&authservlet=" + encodeURI(authservlet); 
	   
	var learnerid = parms.learnerID == null ? "":parms.learnerID ;  
	if (learnerid != null && learnerid != "")
	  bookSrc = bookSrc + "&learnerid=" + encodeURI(learnerid); 
	   
	var productid = parms.productID  == null ? "":parms.productID;  
	if (productid != null && productid != "")
	  bookSrc = bookSrc + "&productid=" + encodeURI(productid);
	    
  var additionalcontrol = parms.additionalcontrol  == null ? "":parms.additionalcontrol;  
	if (additionalcontrol != null && additionalcontrol != "")
	  bookSrc = bookSrc + "&additionalcontrol=" + encodeURI(additionalcontrol); 
	   
  var progressservlet = parms.progressservlet  == null ? "":parms.progressservlet;
	if (progressservlet != null && progressservlet != "")
	  bookSrc = bookSrc + "&progressservlet=" + encodeURI(progressservlet); 
				
	var socialservlet = parms.socialservlet  == null ? "" : parms.socialservlet;
	if (socialservlet != null && socialservlet != "")
	  bookSrc = bookSrc + "&socialservlet=" + encodeURI(socialservlet); 
	
	//alert(bookSrc);
	
	var width = parms.width;
	if (width == null) { width = "100%"; }

	var height = parms.height;
	if (height == null) { height = "100%"; }	

	AC_FL_RunContent(
			'src', bookSrc, 'movie', bookSrc,
			'codebase', 'http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0',
			'width', width, 'height', height, 'quality', 'high', 'align', 'middle', 'play', 'true', 'loop', 'true', 'scale', 'NO_SCALE',
			//'wmode', 'opaque', 'devicefont', 'false', 'id', 'main',
			'wmode', 'window', 'devicefont', 'false', 'id', 'main',
			'bgcolor', '#ffffff', 'name', 'main', 'menu', 'true', 'allowFullScreen', 'true',
			'pluginspage', 'http://www.macromedia.com/go/getflashplayer',
			'allowScriptAccess','always', 'salign', 'LT'
			);

}


//v1.7
// Flash Player Version Detection
// Detect Client Browser type
// Copyright 2005-2007 Adobe Systems Incorporated.  All rights reserved.
var isIE  = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
var isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
var isOpera = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;
var isAndroid = (navigator.userAgent.match(/Android/i)) ? true : false;
var isiPhone_ipad = ((navigator.userAgent.match(/iPhone/i)) ||
                    (navigator.userAgent.match(/iPad/i))) ? true : false;                    
                    
function ControlVersion()
{
	var version;
	var axo;
	var e;

	// NOTE : new ActiveXObject(strFoo) throws an exception if strFoo isn't in the registry

	try {
		// version will be set for 7.X or greater players
		axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
		version = axo.GetVariable("$version");
	} catch (e) {
	}

	if (!version)
	{
		try {
			// version will be set for 6.X players only
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
			
			// installed player is some revision of 6.0
			// GetVariable("$version") crashes for versions 6.0.22 through 6.0.29,
			// so we have to be careful. 
			
			// default to the first public version
			version = "WIN 6,0,21,0";

			// throws if AllowScripAccess does not exist (introduced in 6.0r47)		
			axo.AllowScriptAccess = "always";

			// safe to call for 6.0r47 or greater
			version = axo.GetVariable("$version");

		} catch (e) {
		}
	}

	if (!version)
	{
		try {
			// version will be set for 4.X or 5.X player
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
			version = axo.GetVariable("$version");
		} catch (e) {
		}
	}

	if (!version)
	{
		try {
			// version will be set for 3.X player
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
			version = "WIN 3,0,18,0";
		} catch (e) {
		}
	}

	if (!version)
	{
		try {
			// version will be set for 2.X player
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
			version = "WIN 2,0,0,11";
		} catch (e) {
			version = -1;
		}
	}
	
	return version;
}

// JavaScript helper required to detect Flash Player PlugIn version information
function GetSwfVer(){
	// NS/Opera version >= 3 check for Flash plugin in plugin array
	var flashVer = -1;
	
	if (navigator.plugins != null && navigator.plugins.length > 0) {
		if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
			var swVer2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
			var flashDescription = navigator.plugins["Shockwave Flash" + swVer2].description;
			var descArray = flashDescription.split(" ");
			var tempArrayMajor = descArray[2].split(".");			
			var versionMajor = tempArrayMajor[0];
			var versionMinor = tempArrayMajor[1];
			var versionRevision = descArray[3];
			if (versionRevision == "") {
				versionRevision = descArray[4];
			}
			if (versionRevision[0] == "d") {
				versionRevision = versionRevision.substring(1);
			} else if (versionRevision[0] == "r") {
				versionRevision = versionRevision.substring(1);
				if (versionRevision.indexOf("d") > 0) {
					versionRevision = versionRevision.substring(0, versionRevision.indexOf("d"));
				}
			}
			var flashVer = versionMajor + "." + versionMinor + "." + versionRevision;
		}
	}
	// MSN/WebTV 2.6 supports Flash 4
	else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.6") != -1) flashVer = 4;
	// WebTV 2.5 supports Flash 3
	else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.5") != -1) flashVer = 3;
	// older WebTV supports Flash 2
	else if (navigator.userAgent.toLowerCase().indexOf("webtv") != -1) flashVer = 2;
	else if ( isIE && isWin && !isOpera ) {
		flashVer = ControlVersion();
	}	
	return flashVer;
}

// When called with reqMajorVer, reqMinorVer, reqRevision returns true if that version or greater is available
function DetectFlashVer(reqMajorVer, reqMinorVer, reqRevision)
{
	versionStr = GetSwfVer();
	if (versionStr == -1 ) {
		return false;
	} else if (versionStr != 0) {
		if(isIE && isWin && !isOpera) {
			// Given "WIN 2,0,0,11"
			tempArray         = versionStr.split(" "); 	// ["WIN", "2,0,0,11"]
			tempString        = tempArray[1];			// "2,0,0,11"
			versionArray      = tempString.split(",");	// ['2', '0', '0', '11']
		} else {
			versionArray      = versionStr.split(".");
		}
		var versionMajor      = versionArray[0];
		var versionMinor      = versionArray[1];
		var versionRevision   = versionArray[2];

        	// is the major.revision >= requested major.revision AND the minor version >= requested minor
		if (versionMajor > parseFloat(reqMajorVer)) {
			return true;
		} else if (versionMajor == parseFloat(reqMajorVer)) {
			if (versionMinor > parseFloat(reqMinorVer))
				return true;
			else if (versionMinor == parseFloat(reqMinorVer)) {
				if (versionRevision >= parseFloat(reqRevision))
					return true;
			}
		}
		return false;
	}
}

function AC_AddExtension(src, ext)
{
  if (src.indexOf('?') != -1)
    return src.replace(/\?/, ext+'?'); 
  else
    return src + ext;
}

function AC_Generateobj(objAttrs, params, embedAttrs) 
{ 
  var str = '';
  if (isIE && isWin && !isOpera) {
    str += '<object ';
    for (var i in objAttrs) {
      str += i + '="' + objAttrs[i] + '" ';
    }
    str += '>';
    for (var i in params) {
      str += '<param name="' + i + '" value="' + params[i] + '" /> ';
    }
    str += '</object>';
  } else {
    str += '<embed ';
    for (var i in embedAttrs) {
      str += i + '="' + embedAttrs[i] + '" ';
    }
    str += '> </embed>';
  }

  document.write(str);
}

function AC_FL_RunContent(){
  var ret = AC_GetArgs (arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000", "application/x-shockwave-flash");
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}


function AC_SW_RunContent(){
  var ret = AC_GetArgs (arguments, ".dcr", "src", "clsid:166B1BCA-3F9C-11CF-8075-444553540000" , null);
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}


function AC_GetArgs(args, ext, srcParamName, classid, mimeType){
  var ret = new Object();
  ret.embedAttrs = new Object();
  ret.params = new Object();
  ret.objAttrs = new Object();
  for (var i=0; i < args.length; i=i+2){
    var currArg = args[i].toLowerCase();    

    switch (currArg){	
      case "classid":
        break;
      case "pluginspage":
        ret.embedAttrs[args[i]] = args[i+1];
        break;
      case "src":
      case "movie":	
      	var src = args[i+1];
				ret.embedAttrs["src"] = src;
        ret.params[srcParamName] = src;
        break;
      case "onafterupdate":
      case "onbeforeupdate":
      case "onblur":
      case "oncellchange":
      case "onclick":
      case "ondblclick":
      case "ondrag":
      case "ondragend":
      case "ondragenter":
      case "ondragleave":
      case "ondragover":
      case "ondrop":
      case "onfinish":
      case "onfocus":
      case "onhelp":
      case "onmousedown":
      case "onmouseup":
      case "onmouseover":
      case "onmousemove":
      case "onmouseout":
      case "onkeypress":
      case "onkeydown":
      case "onkeyup":
      case "onload":
      case "onlosecapture":
      case "onpropertychange":
      case "onreadystatechange":
      case "onrowsdelete":
      case "onrowenter":
      case "onrowexit":
      case "onrowsinserted":
      case "onstart":
      case "onscroll":
      case "onbeforeeditfocus":
      case "onactivate":
      case "onbeforedeactivate":
      case "ondeactivate":
      case "type":
      case "codebase":
      case "id":
        ret.objAttrs[args[i]] = args[i+1];
        break;
      case "width":
      case "height":
      case "align":
      case "vspace": 
      case "hspace":
      case "class":
      case "title":
      case "accesskey":
      case "name":
      case "tabindex":
        ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i+1];
        break;
      default:
        ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i+1];
    }
  }
  ret.objAttrs["classid"] = classid;
  if (mimeType) ret.embedAttrs["type"] = mimeType;
  return ret;
}
