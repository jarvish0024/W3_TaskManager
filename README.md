Prerequisites  

Before starting, ensure you have the following tools and software installed:  

1. Node.js (v14 or higher) - [Download Node.js](https://nodejs.org/)  
2. MongoDB - You can either:  
   - Install MongoDB locally or  
   - Use a cloud database like [MongoDB Atlas](https://www.mongodb.com/atlas).  
3. Git (Optional) - To clone the repository.  

---

Steps to Run the Application  

1. Clone the Repository  
First, clone the project repository to your local machine:  
```bash  
git clone https://github.com/ManishVerma4903/W3villa_project.git  
cd mern-app  
```  

2. Install Backend Dependencies  
Navigate to the `backend` folder and install the required dependencies:  
```bash  
cd backend  
npm install  
```  

3. Install Frontend Dependencies  
Next, navigate to the frontend folder and install its dependencies:  
```bash  
cd ../W3villa  
npm install  
```  

4. Set Up MongoDB  
- If you're using **MongoDB Atlas**, retrieve your connection string.  
- If you're using **local MongoDB**, ensure it’s running by starting the MongoDB service:  
```bash  
mongod  
```  

5. Configure Environment Variables  

Backend  
In the `backend` folder, create a `.env` file with the following content:  
```env  
MONGO_URI=mongodb://<your_mongo_connection_string>  
PORT=5000  
JWT_SECRET=<your_jwt_secret>  
```  

Frontend  
In the `frontend` folder, create a `.env` file with:  
```env  
REACT_APP_API_URL=http://localhost:5000  
```  

6. Run the Application  

Start Backend (Server)  
Navigate to the `backend` folder and start the server:  
```bash  
cd backend  
npm start  
```  

Start Frontend (React App)  
Navigate to the `frontend` folder and start the React application:  
```bash  
cd frontend  
npm start  
```  

 7. Open the Application  
Once both the backend and frontend servers are running, open your web browser and visit:  
```
http://localhost:3000  
```  

---  
Follow these steps carefully to ensure the application runs smoothly! If you encounter any issues, check your configurations and the respective logs for detailed error messages.
