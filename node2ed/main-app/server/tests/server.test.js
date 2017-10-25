const expect = require('expect');
const request = require('supertest');
const { ObjectID } = require('mongodb');

let { app } = require('../server');
let { Todo } = require('../models/todo');
const { todos, populateToDos, users, populateUsers } = require('./seed/seed');

beforeEach(populateUsers);
beforeEach(populateToDos);

describe('API Server Tests', () => {    

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

    describe('GET /todos/:id', () => {
        it('should return todo doc', (done) => {
            request(app)
                .get(`/todos/${todos[0]._id.toHexString()}`)
                .expect(200)
                .expect((res) => {
                    expect(res.body.todo.text).toBe('First text todo');
                })
                .end(done);
        });

        it('should return 404 if todo not found', (done) => {
            let hexId = new ObjectID().toHexString();
            request(app)
                .get(`/todos/${hexId}`)
                .expect(404)
                .end(done);
        });

        it('should return 404 for non-object ids', (done) => {
            request(app)
                .get(`/todos/123abc`)
                .expect(404)
                .end(done);
        });
    });

    describe('Delete /todos/:id', () => {
        it('should remove a todo', (done) => {
            let hexId = todos[1]._id.toHexString();
            request(app)
                .delete(`/todos/${hexId}`)
                .expect(204)
                .expect((res) => {
                    //
                })
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    } else {
                        request(app)
                            .get(`/todos/${hexId}`)
                            .expect(404)
                            .end(done)
                    }
                });
        });

        it('should return 404 if item not found', (done) => {
            let hexId = new ObjectID().toHexString();
            request(app)
                .delete(`/todos/${hexId}`)
                .expect(404)
                .end(done);
        });

        it('should return 404 for non-object ids', () => {
            it('should return 404 for non-object ids', (done) => {
                request(app)
                    .delete(`/todos/123abc`)
                    .expect(404)
                    .end(done);
            });
        });
    });

    describe('PATCH /todos/:id', () => {
        it('should update the todo', (done) => {
            let hexId = todos[0]._id.toHexString();
            let text = 'This should be the new text';
            request(app)
                .patch(`/todos/${hexId}`)
                .send({
                    text: text,
                    completed: true
                })
                .expect(200)
                .expect((res) => {
                    expect(res.body.todo.text).toBe(text);
                    expect(res.body.todo.completed).toBe(true);
                    expect(res.body.todo.completedAt).toBeDefined();
                })
                .end(done);
        });

        it('should clear \'completedAt\' when todo is not completed', (done) => {
            let hexId = todos[1]._id.toHexString();
            let text = 'This should be the new text';
            request(app)
                .patch(`/todos/${hexId}`)
                .send({
                    text: text,
                    completed: false
                })
                .expect(200)
                .expect((res) => {
                    expect(res.body.todo.text).toBe(text);
                    expect(res.body.todo.completed).toBe(false);
                    expect(res.body.todo.completedAt).toBeNull();
                })
                .end(done);
        });
    });
});