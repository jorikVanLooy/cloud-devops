'use strict';

const SockJS = require('sockjs-client');
require('stompjs');

function register(registrations) {
	const socket = SockJS('dev-app-react.greenbush-41edd243.westeurope.azurecontainerapps.io/payroll');
	const stompClient = Stomp.over(socket);
	stompClient.connect({}, function(frame) {
		registrations.forEach(function (registration) {
			stompClient.subscribe(registration.route, registration.callback);
		});
	});
}

module.exports = {
	register: register
};

