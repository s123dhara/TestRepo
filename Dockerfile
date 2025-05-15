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

# ✅ Install only production dependencies
COPY package*.json ./
RUN npm install --omit=dev

# ✅ Copy built app only
COPY --from=builder /app/dist ./dist

# ✅ If using config files like .env, also copy them:
# COPY --from=builder /app/.env ./

EXPOSE 3000

CMD ["node", "dist/main"]
