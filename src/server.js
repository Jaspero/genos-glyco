import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import admin from 'firebase-admin';
import * as sapper from '@sapper/server';

admin.initializeApp({
	apiKey: 'AIzaSyBEWKn6Dw8cvgUBwbmDkM9VKHKEf0Q5svc',
	authDomain: 'genos-glyco.firebaseapp.com',
	databaseURL: 'https://genos-glyco.firebaseio.com',
	projectId: 'genos-glyco',
	storageBucket: 'genos-glyco.appspot.com',
	messagingSenderId: '147855481401',
	appId: '1:147855481401:web:b7a554fc44bae97f'
});

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

if (dev) {
	polka() // You can also use Express
		.use(
			compression({ threshold: 0 }),
			sirv('static', { dev }),
			sapper.middleware()
		)
		.listen(PORT, err => {
			if (err) console.log('error', err);
		});
}

export { sapper };
