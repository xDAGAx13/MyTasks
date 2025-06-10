# My Tasks App

## Developed by: Rohan Daga

A simple yet functional task management mobile application built with **React Native** using **Expo**. This app allows users to add, prioritize, complete, edit, and delete tasks while also receiving local notifications as reminders.

---

## 📱 Features

### ✅ Core Functionality
- **Task Input:** Add new tasks via a text input.
- **Task Display:** See a list of all added tasks in a scrollable view.
- **Task Completion:** Toggle tasks as completed with a checkbox.
- **Task Deletion:** Remove tasks with a trash icon.
- **Priority Selector:** Choose between High, Medium, and Low priorities using custom radio buttons.
- **Edit Tasks:** Tap the pencil icon to update an existing task's text.
- **Local Notifications:** A task reminder is automatically scheduled 10 seconds after a task is added.
- **Cancel Notifications:** If a task is marked completed, its pending notification is cancelled.

---

## 💾 Data Persistence
Tasks are stored locally using **AsyncStorage**, ensuring data persists even when the app is closed and reopened.

---

## 🛠️ Technologies Used
- React Native (with Expo)
- Expo Notifications
- AsyncStorage
- ES6+ JavaScript (Hooks: `useState`, `useEffect`)
- Tailwind CSS via NativeWind for styling

---

## 🧪 Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/my-tasks-app.git
   cd my-tasks-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the Expo development server:**
   ```bash
   npx expo start
   ```

4. **Test on device:**
   - Use the **Expo Go** app to scan the QR code and run the app on your phone.

---

## 📂 Project Structure

```
/my-tasks-app
├── tasks.jsx        # Main screen managing task input, listing, notifications, editing
├── priority.jsx     # Priority selection component with radio buttons
├── editTask.jsx     # Modal to edit task text
├── App.js           # Entry point (if not embedded elsewhere)
├── assets/          # Icons, images, etc.
└── README.md
```

---

## 🤔 Challenges Faced

- Ensuring the modal for task editing blackens the entire screen required re-structuring layout to avoid scroll view clipping.
- Handling dynamic task lengths without UI breaking involved careful flex and wrapping decisions.
- Integrating notification cancellation logic upon task completion in a reliable and clean manner.

---

## 🌟 Enhancements (Bonus Points Implemented)
- ✅ Local Data Persistence with AsyncStorage
- ✅ Task Editing with Modal
- ✅ Task Prioritization (High / Medium / Low)
- ✅ Basic UX styling with clear visual feedback
- ✅ Cancel scheduled notifications on task completion

---



## 📄 License
This project is developed for the AffWorld LLC assignment and educational purposes.
