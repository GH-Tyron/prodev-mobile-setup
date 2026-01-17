# Expo Router – First Mobile App Setup

## Repository Information

* **Repository:** prodev-mobile-setup
* **Directory:** prodev-mobile-app-0x00

---

## Objective

Set up a first mobile application using the **Expo Router template**, understand the project structure, and document the scaffolding and reset process.

---

## Scaffolding Steps

### 1. Navigate to Project Directory

```bash
cd prodev-mobile-setup
```

### 2. Create a New Expo App (Expo Router)

```bash
npx create-expo-app@latest .
```

* Selected the **Expo Router** template when prompted
* Dependencies were installed automatically
* Project structure was generated successfully

---

## Modifying the Home Screen

### File Edited

```
app/(tabs)/index.tsx
```

### Change Made

* Located the default text:

  ```tsx
  Welcome!
  ```
* Updated it to:

  ```tsx
  First App Created
  ```

This confirmed that the app UI updates correctly when files are modified.

---

## Running and Testing the Application

### Start Development Server

```bash
npx expo start
```

### Testing on Physical Devices

* **Android:** Scanned QR code using **Expo Go**
* **iOS:** Scanned QR code using the **Camera app**

✅ Application loaded successfully and displayed **First App Created** on the home screen.

---

## Resetting the Application

### Command Used

```bash
npm run reset-project
```

### Observations

* Removed generated files and caches
* Reset the project to its initial scaffolded state
* Cleared custom changes made after setup
* Useful for troubleshooting or restarting development with a clean state

---

## Key Files and Folders Explained

* `app/` – Main routing and screens (Expo Router)
* `app/(tabs)/index.tsx` – Home screen entry point
* `constants/Colors.tsx` – Centralized color configuration
* `app-example/` – Reference example provided by Expo

---

## Status

✅ Expo Router project successfully scaffolded
✅ Home screen modified
✅ App tested on physical device
✅ Reset command verified
