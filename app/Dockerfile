FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code to the container
COPY . .

# Build the React application
RUN npm run build

# Install the serve package globally
RUN npm install -g serve

# Expose port 5000 for serving the React application
EXPOSE 3000

# Start the server
CMD ["serve", "-s", "build"]