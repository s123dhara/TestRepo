# ----------- Stage 1: Build App -----------
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# ----------- Stage 2: Run App -----------
FROM node:18-alpine

WORKDIR /app

# # Only install production deps
# COPY package*.json ./
# RUN npm install --omit=dev

# Copy built output only
COPY --from=builder /app/dist ./dist

# Expose the port
EXPOSE 3000

# Run the app
CMD ["node", "dist/main"]
