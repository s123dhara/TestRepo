# # Use Node.js image
# FROM node:18-alpine

# # Set working directory
# WORKDIR /app

# # Install app dependencies
# COPY package*.json ./
# RUN npm install --production

# # Copy app source code
# COPY . .

# # Build the project
# RUN npm run build
# RUN npm run start

# # Expose the app port
# EXPOSE 3000

# # Start the app
# CMD ["node", "dist/main"]

# Use Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json files and install all deps (including dev deps)
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Build the NestJS app (needs @nestjs/cli from devDependencies)
RUN npm run build

# Expose the app port
EXPOSE 3000

# Start the app
CMD ["node", "dist/main"]