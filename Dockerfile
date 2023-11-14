FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package.json ./
RUN npm install

# Copy source files
COPY . .

# The CMD command should start your application in development mode
CMD ["npm", "run", "dev"]