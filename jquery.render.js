/**
 * jquery.render.js
 * @version 1.0
 * @author mach3
 * @requires jQuery http://jquery.com/
 */

$.fn.extend({
	/**
	 * Function to render HTML from template and data
	 * @param {object} data Collection of data ( array or object )
	 * @return {object} jQuery object which contains rendered HTML.
	 * @example $("script#template-example").render( data ).appendTo( $("#Container") );
	 */
	render:function( data ){
		var tmpl = this.html(), result = "",
			create = function(t,d){
				var m = t.match(/{{(.+?)}}/g) || [], r = t;
				$.each( m, function(i,k){
					var v = d[ k.replace(/{|}/g, "") ];
					r = r.replace( k, ( v === undefined ) ? "" : v );
				});
				return r;
			};
		if( data === undefined ){ return $( tmpl.replace(/{{(.+?)}}/g, "") ); }
		if( !(data instanceof Array) ){ return $( create(tmpl, data) ); }
		$.each( data, function(i,o){ result += create(tmpl,o); } );
		return $(result);
	}
});