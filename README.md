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
![image](https://github.com/user-attachments/assets/bfeb2bc4-ccf7-48d6-8299-fcab4e00483b)

### 📱 Small screens View
![image](https://github.com/user-attachments/assets/3f8fbba0-3dcf-475c-b249-dc6adb2ae88a)

## Dark:
![image](https://github.com/user-attachments/assets/105c598e-ba57-4291-9cb2-01b20e9c0096)
