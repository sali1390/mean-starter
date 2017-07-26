angular
    .module('meanStarter', [

    ])
    .config(meanStarterConfig);

function meanStarterConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/')
}

