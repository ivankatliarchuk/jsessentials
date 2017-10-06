angular.module('TestApp', []);
angular.module('TestApp')
    .controller('MainContorller', ctrlFunc);

function ctrlFunc() {
    this.people = clientPeople;
}