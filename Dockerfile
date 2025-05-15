# Use Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install --production

# Copy app source code
COPY . .

# Build the project
RUN npm run build
RUN npm run start

# Expose the app port
EXPOSE 3000

# Start the app
CMD ["node", "dist/main"]