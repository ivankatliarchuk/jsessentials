angular.module('TestApp', []);
angular.module('TestApp')
    .controller('MainContorller', ctrlFunc);

function ctrlFunc() {
    this.message = 'Hello';
    this.people = [
        {
            name: 'John Doe'
        },
        {
            name: 'Jane Doe'
        },
        {
            name: 'Jim Doe'
        }
    ]
}