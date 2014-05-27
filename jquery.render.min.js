/*!
 * js-jquery-render
 * -------------
 * Simple template method for jQuery
 * 
 * @version 1.1.0
 * @license MIT
 * @author mach3 <http://github.com/mach3>
 * @require jquery#1
 */
!function(a,b){a.fn.extend({render:function(c,d){var e,f,g;return e=this.html(),f="",g=function(c,d){var e=c.match(/\{\{(.+?)\}\}/g)||[],f=c;return a.each(e,function(a,c){var e=d[c.replace(/\{|\}/g,"")];f=f.replace(c,e===b?"":e)}),f},c=c===b?{}:c,d=d===b?!0:!1,c instanceof Array||(c=[c]),a.each(c,function(a,b){f+=g(e,b)}),d?a("<div>").html(f).children():f}})}(jQuery);