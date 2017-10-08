

export MAIN='/develop/repositories/javascript/node2ed/fundamentals/app.js'
node ${MAIN} add --title=secret --body="This is my secret to persist"
node ${MAIN} add --title=tobuy --body="Food"
node ${MAIN} remove --title=tobuy4

node ${MAIN} read --title=tobuy4
node ${MAIN} list