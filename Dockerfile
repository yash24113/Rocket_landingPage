# 1. Use official Node.js image as the base
FROM node:18-alpine AS builder

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json and package-lock.json (if present)
COPY package.json ./
# COPY package-lock.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of your application code
COPY . .

# Debug: List files before build
RUN ls -al

# 6. Build the Next.js app
RUN npm run build

# 7. Use a smaller image for the final output
FROM node:18-alpine AS runner
WORKDIR /app

# 8. Copy only the necessary files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.mjs ./next.config.mjs
COPY --from=builder /app/jsconfig.json ./jsconfig.json

# 9. Expose the port Next.js runs on
EXPOSE 3000

# 10. Start the Next.js app
CMD ["npm", "start"] 