

Configuration
=============

Swagger editor is configured from the file [`app/config/defaults.js`](../app/config/defaults.json).
To learn more about this file please review [`defaults.json.guide.js`](../app/config/default.json.guide.js).

Custom UI
---------

You can also enable `headerBranding` flag and serve `/templates/branding-left.html`
and `/templates/branding-right.html` files to have custom header.

It's possible to serve a custom CSS file at `/styles/branding.css` path to override editor's appearances.

It's also possible to serve a custom JavaScript file at `/scirpts/branding.js` to add 
new functionalities to Swagger Editor. Using branding HTML pieces and branding JavaScript
file you can add new controllers to Swagger Editor.

#### `disableFileMenu`
Set to `true` to disable the editor menu

#### `editorOptions`
Ace editor options. This object will overload existing editor options.
See all possible options [here](http://ace.c9.io/#nav=api&api=ace)

External Hooks
--------------

Swagger Editor provides an API for executing arbitrary code on certain events.

To install a hook simply use `SwaggerEditor.on()` method. `.on()` method accepts two arguments,
the first argument is the event name and the second argument is callback function that will be invoked when 
that event occurs.

Here is a list of available event names:

* `'code-change'`
* `'put-success'`
* `'put-failure`

#### Example usage of external hooks
```js
SwaggerEditor.on('put-failure', function() {
  alert('There was something wrong with saving your document.');
});
```

Backends
--------

#### `backendEndpoint`
Url to a backend which supports `GET` for retrieving a swagger spec to edit
and `PUT` for saving it.

#### `useBackendForStorage`
Set to ``true`` to enable a backend.

#### `backendHealthCheckTimeout`
Timeout in millseconds of the http request to healthchecks the backend

##### note:
This healthcheck is actually hitting location.href, not the url specified by backendEndpoint

#### `backendThrottle`
The timeout for throttling backend calls. The default is 200 milliseconds

#### `useYamlBackend`
Set to ``true`` if the backend expects YAML, ``false`` will use JSON

##### note:
``Storage.save()`` is only ever called with yaml so this probably does nothing if set to ``false``

Analytics
---------
`analytics` section in JSON configuration is used for user tracking configurations. At the moment only Google Analytics is supported.

Example:

```js
analytics: {
    google: {
    /*
     * Put your Google Analytics ID here
    */
    id: 'YOUR_GOOGLE_ANALYTICS_ID'
  }
}
```

Code Generation
---------------

#### `disableCodeGen`
Set to ``true`` to hide codegen links for clients and servers.

#### `codegen`
An object with keys ``servers``, ``clients``, ``server``, and ``client``. Each of with is a url to codegen service.


Examples
--------

#### `examplesFolder`
Path to a directory with examples specs

#### `exampleFiles`
List of files in ``exampleFolder`` that contain example specs. The first file is used as the default document for the editor when it is opened.


Swagger Validation
------------------

#### `schemaUrl`
Url of the swagger spec schema, defaults to the schema provided in `app/scripts/enums/swagger-json-schema.js`.
