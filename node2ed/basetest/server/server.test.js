const request = require('supertest');
const expect = require('expect');
let app = require('./server').app;

describe('server', () => {

    it('should return hello world response', (done) => {
        request(app)
            .get('/')
            .expect(404)
            .expect({
                error: 'Page not found',
                status: 404
            })
            .expect((res) => {
                expect(res.body).toInclude({
                    status: 404
                });
            })
            .end(done);
    });

    it('should return user object', (done) => {
        request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({
                    name: 'Andrew',
                    age: 26
                })
            })
            .end(done);
    });

    describe('spies', () => {
        
    })
});