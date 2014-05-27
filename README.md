# jquery.render.js

Function to render HTML from template and data.

## Basic Usage

Pass an object data to $.fn.render() to render the html.
This returns jQuery object which contains the rendered nodes.

```html
<div id="output"></div>

<script type="text/template" id="template-foo">
	<div>
		<span class="name">{{name}}</span>
		<span class="age">{{age}}</span>
	</div>
</script>
```

```javascript
$("#template-foo").render({name: "John", age: 20})
.appendTo("#output");
```


### Loop

Pass an array to loop.

```javascript
$("#template-foo").render([
	{name: "John", age: 20},
	{name: "Tom", age: 23},
	...
]);
```

### Return HTML String

Pass `false` as the second argument to get the HTML string.

```javascript
var html = $("#template-foo").render({...}, false);
```
