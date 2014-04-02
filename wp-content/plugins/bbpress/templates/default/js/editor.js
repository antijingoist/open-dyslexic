jQuery(document).ready(function(){if(typeof(edButtons)!=='undefined'){edButtons[110]=new QTags.TagButton('code','code','`','`','c');QTags._buttonsInit();}
jQuery('#bbp_topic_title').bind('keydown.editor-focus',function(e){if(e.which!==9)
return;if(!e.ctrlKey&&!e.altKey&&!e.shiftKey){if(typeof(tinymce)!=='undefined'){if(!tinymce.activeEditor.isHidden()){var editor=tinymce.activeEditor.editorContainer;jQuery('#'+ editor+' td.mceToolbar > a').focus();}else{jQuery('textarea.bbp-the-content').focus();}}else{jQuery('textarea.bbp-the-content').focus();}
e.preventDefault();}});jQuery('#bbp_topic_tags').bind('keydown.editor-focus',function(e){if(e.which!==9)
return;if(e.shiftKey&&!e.ctrlKey&&!e.altKey){if(typeof(tinymce)!=='undefined'){if(!tinymce.activeEditor.isHidden()){var editor=tinymce.activeEditor.editorContainer;jQuery('#'+ editor+' td.mceToolbar > a').focus();}else{jQuery('textarea.bbp-the-content').focus();}}else{jQuery('textarea.bbp-the-content').focus();}
e.preventDefault();}});});