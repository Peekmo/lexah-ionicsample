(function (console) { "use strict";
var App = function() { };
App.main = function() {
	var mod = window.angular.module("starter",["ionic"]).controller("AppCtrl",["$scope","$ionicModal","$timeout",App.app_ctrl]).controller("PlaylistsCtrl",["$scope",App.playlists_ctrl]).controller("PlaylistCtrl",[function() {
	}]).run(["$ionicPlatform",function(ionicPlatform) {
		ionicPlatform.ready(function() {
			console.log("ok");
		});
	}]).config(["$stateProvider","$urlRouterProvider",function(stateProvider,urlRouterProvider) {
		stateProvider.state("app",{ 'url' : "/app", 'abstract' : true, 'templateUrl' : "templates/menu.html", 'controller' : "AppCtrl"}).state("app.search",{ url : "/search", views : { 'menuContent' : { templateUrl : "templates/search.html"}}}).state("app.browse",{ url : "/browse", views : { 'menuContent' : { templateUrl : "templates/browse.html"}}}).state("app.playlists",{ url : "/playlists", views : { 'menuContent' : { templateUrl : "templates/playlists.html", controller : "PlaylistsCtrl"}}}).state("app.single",{ url : "/playlists/:playlistId", views : { 'menuContent' : { templateUrl : "templates/playlist.html", controller : "PlaylistCtrl"}}});
		urlRouterProvider.otherwise("/app/playlists");
	}]);
};
App.playlists_ctrl = function(scope) {
	scope.playlists = [{ title : "Reggae", id : 1},{ title : "Chill", id : 2},{ title : "Dubstep", id : 3},{ title : "Indie", id : 4},{ title : "Rap", id : 5},{ title : "Cowbell", id : 6}];
};
App.app_ctrl = function(scope,ionicModal,t) {
	scope.loginData = { };
	ionicModal.fromTemplateUrl("templates/login.html",{ scope : scope}).then(function(modal) {
		scope.modal = modal;
	});
	scope.closeLogin = function() {
		Reflect.field(scope,"modal").hide();
	};
	scope.login = function() {
		Reflect.field(scope,"modal").show();
	};
	scope.doLogin = function() {
		console.log("do login");
		t(function() {
			(Reflect.field(scope,"closeLogin"))();
		},1000);
	};
};
var Reflect = function() { };
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
var angular__$Angular_TranscludeFn_$Impl_$ = {};
angular__$Angular_TranscludeFn_$Impl_$.call = function(this1,scope,link) {
	this1(scope,link);
};
angular__$Angular_TranscludeFn_$Impl_$.withoutScope = function(this1,link) {
	this1(link);
};
var angular_internal_ModuleMacros = function() { };
var angular_internal_InjectorMacros = function() { };
var q = window.jQuery;
var js = js || {}
js.JQuery = q;
App.main();
})(typeof console != "undefined" ? console : {log:function(){}});
