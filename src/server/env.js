import debug from 'debug';
import dotenv from 'dotenv';

dotenv.config();
debug.enable(process.env.DEBUG);

const defaults = {
  PORT: 3001,
  NODE_ENV: 'development',
  API_KEY: '09u624Pc9F47zoGLlkg1TBSbOl2ydSAq',
  API_URL: 'https://api-staging.opencollective.com',
  IMAGES_URL: 'http://localhost:3001',
  WEBSITE_URL: 'https://staging.opencollective.com',
};

for (const key in defaults) {
  if (process.env[key] === undefined) {
    process.env[key] = defaults[key];
  }
}
