const expect = require('expect');
const request = require('supertest');

let { app } = require('../server');
let { Todo } = require('../models/todo');

beforeEach((done) => {
    Todo.remove({}).then(() => {
        done();
    });
});

describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        let text = 'Test todo Mocha';
        request(app)
            .post('/todos')
            .send({
                text: text
            })
            .expect(201)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                } else {
                    Todo.find().then((todos) => {
                        expect(todos.length).toBe(1);
                        expect(todos[0].text).toBe(text);
                        done();
                    }).catch((err) => done(e));
                }
            });
    });

    it('should not create todo with invalid body data', (done) => {
        
    })
});
