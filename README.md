# Employee Management Project

A responsive React + TypeScript app to display employee data.
I used a JSON file to simulate an API fetch :)

I wrapped the API fetch in a try/catch block to handle errors, and placed it inside a useEffect with an empty dependency array [], so the data is fetched once and doesn’t repeat on every render.

I used state to handle the error message, determine which employees to display, track the current page for pagination, and control the navbar class depending on the screen size.

I used the Context API to handle the dark theme, allowing the user to toggle it from the navbar or near the pagination.
To apply the theme globally, I used useEffect to add or remove the dark class on the <body> element based on the current theme.

*The navbar link is only for looks and doesn’t go anywhere. :D

## 📸 Screenshots

### 🖥 Desktop View
![image](https://github.com/user-attachments/assets/7c487787-8d9a-42c2-b7db-22c1819649ba)


### 📱 Small screens View
![image](https://github.com/user-attachments/assets/3f8fbba0-3dcf-475c-b249-dc6adb2ae88a)
![image](https://github.com/user-attachments/assets/268e26b5-747e-4784-8f7e-8563e0836b2d)


## Dark:
![image](https://github.com/user-attachments/assets/061b3af1-756d-456e-8a47-720183f4fbe2)


## 🚀How To Run

```bash
git clone https://github.com/shira1008/empProject.git
cd empProject
npm install
npm run dev
