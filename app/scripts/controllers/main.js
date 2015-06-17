'use strict';

SwaggerEditor.controller('MainCtrl', function MainCtrl($rootScope, $stateParams,
  $location, Editor, Storage, FileLoader, BackendHealthCheck, defaults,
  Analytics) {

  Analytics.initialize();

  $rootScope.$on('$stateChangeStart', Editor.initializeEditor);
  BackendHealthCheck.startChecking();
  $rootScope.$on('$stateChangeStart', loadYaml);

  if (!$stateParams.mode) {
    $rootScope.mode = 'edit';
  } else {
    $rootScope.mode = $stateParams.mode;
  }

  // TODO: find a better way to add the branding class (grunt html template)
  $('body').addClass(defaults.brandingCssClass);

  loadYaml();
  /*
  * Load Default or URL YAML
  */
  function loadYaml() {
    Storage.load('yaml').then(function (yaml) {      
          var designer =  parent.APIDesigner();
          var yaml = jsyaml.safeDump(designer.api_doc); 
          if (yaml) {
            Storage.save('yaml', yaml);
            $rootScope.editorValue = yaml;
          }
    });
  }
});
