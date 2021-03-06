/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

function onGoogleReady() {
  console.log("google maps api initialised");
  angular.bootstrap(document, ['avalancheCanada']);
}

angular.module( 'avalancheCanada', [
  'templates-app',
  'templates-common',
  'avalancheCanada.home',
  'avalancheCanada.about',
  'avalancheCanada.bulletin',
  'ui.router',
  'constants'
])


.run(
  [ '$rootScope', '$state', '$stateParams', 'ENV',
    function ($rootScope, $state, $stateParams, ENV) {

      //! Make globals - Add references to state, state params and ENV to rootscope
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
      $rootScope.ENV = ENV;

    }
  ]
)

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})


.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Avalanche Canada' ;
    }
  });
})

;

