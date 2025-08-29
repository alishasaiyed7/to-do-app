# 📝 To-Do App with CI/CD Deployment on AWS

A simple **Node.js To-Do List application** deployed on **AWS EC2** with **PM2** for process management and a **GitHub Actions CI/CD pipeline** for automated deployment.

---

## 🚀 Features
- Add tasks via a web form  
- View tasks in JSON format (`/tasks`)  
- Styled UI with basic CSS  
- Runs continuously using **PM2** (auto-restart on crash/server reboot)  
- Fully automated deployment using **GitHub Actions**  

---

## 🛠️ Tech Stack
- **Backend:** Node.js (Express.js)  
- **Frontend:** HTML + CSS  
- **Deployment:** AWS EC2 (Ubuntu)  
- **Process Manager:** PM2  
- **CI/CD:** GitHub Actions  

---

# ⚙️ Setup Instructions

### 1️⃣ Run Locally
```bash
# Clone the repo
git clone https://github.com/<your-username>/todo-app.git
cd todo-app

# Install dependencies
npm install

# Start app
node app.js
Visit: 👉 http://localhost:3000

2️⃣ Deploy on EC2
On your EC2 instance (Ubuntu):

bash
Copy code
# Install Node.js & npm
sudo apt update -y
sudo apt install -y nodejs npm git

# Install PM2
sudo npm install -g pm2

# Clone and run
git clone https://github.com/<your-username>/todo-app.git
cd todo-app
npm install
pm2 start app.js --name todo-app
pm2 save
3️⃣ CI/CD with GitHub Actions
Every push to the main branch will:

SSH into EC2

Pull the latest code

Install dependencies

Check if PM2 is installed (install if missing)

Restart app with PM2

GitHub Secrets Required:
EC2_HOST → EC2 Public IP

EC2_SSH_KEY → Private key for SSH

(Optional) DB creds if using DB later

📸 Screenshots
(Add your app screenshot here, e.g. running on EC2 at http://<EC2_PUBLIC_IP>:3000)

🎯 Outcome
This project demonstrates:

GitHub Actions for CI/CD

PM2 for Node.js process management

AWS EC2 deployment

Basic DevOps automation skills

👤 Author
Alisha saiyed

GitHub: @alishasaiyed7

LinkedIn: https://in.linkedin.com/in/saiyed-alisha-8b7a53275?trk=people-guest_people_search-card



