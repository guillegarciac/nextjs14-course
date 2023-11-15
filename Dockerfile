FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm cache clean --force && npm install 

# Copy source files
COPY . .

# The CMD command should start your application in development mode
CMD ["npm", "run", "dev"]