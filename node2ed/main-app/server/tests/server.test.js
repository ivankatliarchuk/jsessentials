const expect = require('expect');
const request = require('supertest');
const { ObjectID } = require('mongodb');

let { app } = require('../server');
let { Todo } = require('../models/todo');
let { User } = require('../models/user');
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
                    expect(res.body.todo.completedAt).toBeA('number');
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
                    expect(res.body.todo.completedAt).toNotExist();
                })
                .end(done);
        });
    });

    describe('GET /users/me', () => {
        it('should return user if authenticated', (done) => {
            request(app)
                .get('/users/me')
                .set('x-auth', users[0].tokens[0].token)
                .expect(200)
                .expect((res) => {
                    expect(res.body._id).toBe(users[0]._id.toHexString());
                    expect(res.body.email).toBe(users[0].email);
                })
                .end(done);
        });

        it('should return 401 if not authenticated', (done) => {
            request(app)
                .get('/users/me')
                .set('x-auth', 'testtoken')
                .expect(401)
                .expect((res) => {
                    expect(res.body).toEqual({});
                })
                .end(done);
        });
    });

    describe('POST /users', () => {
        it('should create a user', (done) => {
            let email = 'example@example.com';
            let password = '123mnb';
            
            request(app)
                .post('/users')
                .send({ email, password })
                .expect(201)
                .expect((res) => {
                    expect(res.headers['x-auth']).toExist();
                    expect(res.body._id).toExist();
                    expect(res.body.email).toBe(email);
                })
                .end((err) => {
                    if (err) {
                        return done(err);
                    }

                    User.findOne({ email }).then((user) => {
                        expect(user).toExist();
                        expect(user.password).toNotBe(password);
                    }).then(done);
                });
        });

        it('should return validation errors if request invalid', (done) => {
            let email = 'noteamailexample.com';
            let password = '123';

            request(app)
                .post('/users')
                .send({ email, password })
                .expect(400)
                .expect((res) => {
                    expect(res.body.errors).toExist();
                    expect(res.body.errors.password).toExist();
                    expect(res.body.errors.email).toExist();
                })
                .end(done);
        });

        it('should not create user if email in use', (done) => {
            let email = users[0].email;
            let password = '123mnb';

            request(app)
                .post('/users')
                .send({ email, password })
                .expect(400)
                .end(done);
        });
    });

    describe('PUT /users/login', () => {
        it('should login and return auth token', (done) => {
            request(app)
                .put('/users/login')
                .send({
                    email: users[1].email,
                    password: users[1].password
                })
                .expect(200)
                .expect((res) => {
                    expect(res.headers['x-auth']).toExist();                  
                })
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    // query database for a user that we potentially craete a token
                    User.findById(users[1]._id).then((user) => {
                        expect(user.tokens[0]).toInclude({
                            access: 'auth',
                            token: res.headers['x-auth']
                        });
                        done();
                    }).catch((err) => {
                        done(err);
                    });
                });
        });

        it('should reject invalid login', (done) => {
            request(app)
                .put('/users/login')
                .send({
                    email: users[1].email,
                    password: users[1].password + '1'
                })
                .expect(400)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    // query database for a user that we potentially craete a token
                    User.findById(users[1]._id).then((user) => {
                        expect(user.tokens.length).toBe(0);
                        done();
                    }).catch((err) => {
                        done(err);
                    });
                });
        });
    });
});