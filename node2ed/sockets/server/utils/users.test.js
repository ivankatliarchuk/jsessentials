'use strict';

const expect = require('expect');

const { Users } = require('./users')

describe('Users', () => {
    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Jen',
            room: 'React Course'
        },{
            id: '3',
            name: 'Julie',
            room: 'Node Course'
        }];
    });

    it('Should add new user', () => {
        let users = new Users();
        let user = {
            id: '123',
            name: 'Andrew',
            room: 'The Office Fans'
        };
        let result = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('Should return names for node course', () => {
        let userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Mike', 'Julie'])
    });

    it('Should find a user', () => {
        let user = users.getUser('1');
        expect(user.name).toBe('Mike');
    });

    it('Should not find a user', () => {
        let user = users.getUser('4');
        expect(user).toBe(undefined);
    });

    it('Should remove single user', () => {
        let user = users.removeUser('2');
        expect(user.name).toBe('Jen');
        expect(users.users.length).toBe(2);
    });

    it('Should not remove a user', () => {
        users.removeUser('34');
        expect(users.users.length).toBe(3);
    });
    
});