# Use an official Node.js runtime as a parent image
FROM public.ecr.aws/lambda/nodejs:20-arm64

# Set the working directory inside the container
WORKDIR /var/task

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Command to run the Lambda function handler
CMD ["index.handler"]
