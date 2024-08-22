# IP Rate Limiter

An IP rate limiter lambda function designed to prevent excessive requests from a single IP address, ensuring fair usage of your web applications. This project leverages Redis for efficient request tracking and limiting with low latency.

## Features

- **IP-based Rate Limiting:** Limits the number of requests an IP address can make within a specified time frame.
- **Customizable Limits:** Easily configure request limits and time windows to suit your application's needs.
- **Dockerized Setup:** Simple Docker Compose configuration for easy deployment and scaling.
- **Node.js Backend:** Built with Node.js for a robust and maintainable backend service.
- **AWS Lambda:** Built for AWS Lambda function.
- **Redis:** Built with Redis for low latency.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Ensure you have the following installed on your local machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (v14 or higher)
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/shashikhanal/ip-rate-limiter-lambda.git
	```

2. **Navigate to the project directory:**

   ```bash
   cd ip-rate-limiter
	```

3. **Install Node.js dependencies:**

   ```bash
   npm install
	```

4. **Create your environment file:**

   ```bash
   cp .env.example .env
	```

## Run Lambda function and Redis in Docker containers

Build and start the Docker containers:

```bash
docker compose up --build
```

### Configuration

You can customize the rate limiting parameters (e.g., max requests, time window) in the `.env` file. The default configuration is set to:

- MAX_REQUESTS: 5
- TIME_WINDOW: 1 hour

## Usage

Once the setup is complete, the IP rate limiter service will be available at:

`http://localhost:9000/2015-03-31/functions/function/invocations`

You can integrate it with your application by sending requests to this service.

## Contributing

Contributions are welcome! Please follow the standard GitHub workflow:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push them to your fork.
4. Open a pull request and describe your changes.

## License
This project is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0). See the LICENSE file for details.

## Contact

For any inquiries or issues, feel free to open an issue on GitHub or contact the repository owner directly.