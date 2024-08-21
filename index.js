const Redis = require('ioredis');

const redis = new Redis({
	host: process.env.REDIS_HOST || 'redis', // replace with your Redis cluster endpoint
	port: process.env.REDIS_PORT || 6379,
});

const RATE_LIMIT = 5; // Max requests
const TIME_WINDOW = 60 * 60; // 1 hour in seconds

exports.handler = async (event) => {
	console.log('Incoming event: ', event);

	// Safely retrieve the IP address from different possible sources
	let ip;
	if (event.ipAddress) { // if the function is invoked via API Gateway or ALB
		ip = event.ipAddress;
	} else {
		ip = 'unknown'; // fallback in case IP is not found
	}

	console.log('Client IP: ', ip);
	const key = `rate_limit:${ip}`;

	// Get current count
	const currentCount = await redis.get(key);

	if (currentCount && parseInt(currentCount) >= RATE_LIMIT) {
		return {
			statusCode: 429,
			body: JSON.stringify({ message: 'Rate limit exceeded' }),
		};
	}

	// Increment the count and set expiry
	await redis.multi()
		.incr(key)
		.expire(key, TIME_WINDOW)
		.exec();

	return {
		statusCode: 200,
		body: JSON.stringify({ message: 'Request allowed' }),
	};
};
