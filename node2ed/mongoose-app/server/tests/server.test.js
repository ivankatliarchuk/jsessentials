const expect = require('expect');
const request = require('supertest');

let { app } = require('../server');
let { Todo } = require('../models/todo');

const todos = [
    {
        text: 'First text todo'
    }, {
        text: 'Second text todo'
    }
]

beforeEach((done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);        
    }).then(() => {
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
                        expect(todos.length).toBe(3);
                        expect(todos[0].text).toBe('First text todo');
                        done();
                    }).catch((err) => done(err));
                }
            });
    });

    it('should not create todo with invalid body data', (done) => {
        const error = 'Todo validation failed: text: Text is required';
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .expect((res) => {
                expect(res.body.error).toBe(error);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                } else {
                    Todo.find().then((todos) => {
                        expect(todos.length).toBe(2);
                        done();
                    }).catch((err) => done(err));
                }
            });
    })
});

describe('GET /todos', () => {
    it('should get all todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(2);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                } else {
                    done();
                }
            });
    });

});