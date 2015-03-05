this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/dashboard.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>Dashboard</p>\n<div ng-repeat="assignment in assignments">\n    <div>{{assignment.name}}</div>\n    <a ng-href="{{assignment.name}}">Assignment Link</a>\n    <div>{{assignment.date}}</div>\n</div>\n';

}
return __p
};

this["JST"]["assets/templates/home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Home</h1>\n<button><a ng-href="register"></a>Register</button>';

}
return __p
};

this["JST"]["assets/templates/login.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section ng-control="loginCtrl">\n    <nav><h1>Login</h1></nav>\n    <div>\n        <input ng-model="userName" type="text" placeholder="Username">\n    </div>\n    <br>\n    <br>\n    <div>\n        <input ng-model="password" type="text" placeholder="Password">\n    </div>\n</section>';

}
return __p
};

this["JST"]["assets/templates/register.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>Register</p>';

}
return __p
};