FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the production build of the React application to the container
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# Start the server
CMD [ "npm", "start" ]