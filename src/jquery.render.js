(function($, undefined){

    $.fn.extend({

        /**
         * Function to render HTML from template and data
         * 
         * @param {Object} data - Collection of data ( array or object )
         * @param {Boolean} render - Return jQuery object or not
         * @return {jQueryObject|String}
         *
         * @example:
         *   $("script#template-example")
         *   .render(data)
         *   .appendTo("#container");
         */
        render: function(data, render){
            var tmpl, html, create;

            tmpl = this.html();
            html = "";
            create = function(t, d){
                var m = t.match(/\{\{(.+?)\}\}/g) || [], r = t;
                $.each(m, function(i, k){
                    var v = d[ k.replace(/\{|\}/g, "") ];
                    r = r.replace(k, ( v === undefined ) ? "" : v);
                });
                return r;
            };

            data = (data === undefined) ? {} : data;
            render = (render === undefined) ? true : false;

            if(! (data instanceof Array)){
                data = [data];
            }

            $.each(data, function(i, o){
                html += create(tmpl, o);
            });

            return render ? $("<div>").html(html).children() : html;
        }
    });

}(jQuery));
