
node app.js add --title=secret --body="This is my secret to persist"
node app.js add --title=tobuy --body="Food"
node app.js remove --title=tobuy4

node app.js read --title=tobuy4
node app.js list