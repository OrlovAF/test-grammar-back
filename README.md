- Copy .env.example to .env file and fill it
```bash  
cp .env.example .env
```
Environment variables:
```
PORT=3005
SECRET_KEY=SuperSecretKeyForToken

# project relies on a gpt-4o-mini model 
API_KEY=...
```

## Running locally
1. Make sure Node.js v20+ is installed
2. Install dependencies:
```
npm install
``` 
3. Make sure to set environment variables (.env)
4. Start the server
```
npm run start
``` 

Test users data:
```
[
    {
        "username": "Test",
        "password": "1234"
    },
    {
        "username": "Jhon",
        "password": "Jhon"
    }
]
```

