# Fetch Image 
## Decorator directive to fetch a image and set it on the `img` src

### When to use it:
If your images API is dependent on some authentication mechanism which requires a certain HTTP header to execute, that is when **Fetch Image** solves your problem.

### How to use it:

#### Add as a dependency
```javascript
  angular.module('demo', ['fetch.image']);
```

#### Configure the provider
```javascript
  angular.module('demo', ['fetch.image'])
    .config(function(fiConfigProvider){
      fiConfigProvider.setHeaderKey('token');
      fiConfigProvider.setImageAccessor('data.image');
    });
```

##### setHeaderKey(value)
- sets the header key to be send in the HTTP request
- Defaults to `Authorization`

##### setImageAccessor(value)
- sets the path of where to find the image string in the response
- Defaults to directive attribute (see below) or `''`

#### Use the directive in your templates
```html
...
<img fi-src="/api/users/4454/avatar" fi-token="token()" fi-acc="data.data">
...
```

##### fi-src
- Resource URL for the image

##### fi-token
- Method on the controller which returns the header value
```javascript
//some controller
$scope.token = function(){
  return 'accessToken';
}
```

##### fi-acc
- Defines where to find the image in the response

### Limitations
- Supports only `Base64` type images
- Can add only single header

```
Copyright (c) 2016 Mohammad Umair Khan

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

