FROM node:14

# Set the working directory to /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install react-scripts -g

# RUN npm install nodemon --save-dev

# Copy the production build of the React application to the container
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# Start the server
CMD ["nodemon", "--exec", "npm", "start"]