/**
 * Created by Sandeep on 01/06/14.
 */

const app = require('../app');

app.set('port', process.env.PORT || 8000);

const server = app.listen(app.get('port'), () => {
	console.log(`Express server listening on port ${server.address().port}`);
});
