# Market Intel Dashboard - Frontend Technical Assessment

## Project Overview

Welcome to the **Market Intelligence Dashboard** technical assessment. 

This repository contains a React-based dashboard used by our internal analysts to monitor product performance, user activity, and crypto market trends. The application aggregates data from multiple public APIs and visualizes them through interactive charts and tables.

However, the codebase has accumulated significant "technical debt" over time. Several bugs have been reported by the analytics team that affect data accuracy and user experience.

Your task is to identify, diagnose, and fix the **6 primary issues** listed below.

## Tech Stack

- **Framework**: React + Vite
- **Language**: TypeScript
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Data Fetching**: Axios
- **Charts**: Recharts
- **Icons**: Lucide React

## Setup Instructions

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## API Information

The dashboard uses the following public APIs:
- **DummyJSON**: For product inventory and category data.
- **RandomUser**: For simulating real-time user activity logs.
- **CoinGecko**: For fetching live market price trends (BTC/USD).

---

## Technical Challenges

Your task is to identify and resolve the following **6 core issues**. These range from simple logic errors to deep architectural "legacy" bombs.

### Issue 1 – The "Math Doesn't Match" Problem
The total revenue numbers at the top don't update correctly when you filter the list below. Also, the app feels "laggy" when switching categories.
*   **Objective**: Fix the data calculation logic and ensure the app doesn't do extra work during filtering.

### Issue 2 – The "Stubborn Refresh" & Changing Prices
The "Refresh" button doesn't always update the charts, and users noticed that prices sometimes change by a few cents purely by sorting the table.
*   **Objective**: Fix the broken refresh button and find where the data is being "corrupted" during sorting.

### Issue 3 – The "Confused Search" Filter
Searching for a product while a category is selected sometimes ignores the category entirely or uses a previous one. 
*   **Objective**: Ensure the search function always knows exactly which category is currently selected and correctly filters the list by name.

### Issue 4 – The "Heavy Clicks and bad code optimization" Problem
The further you scroll in the Entity Explorer, the slower it gets and clicking to select an item in the Character list has a noticeable delay. It feels like the whole screen "freezes" for a split second on every click.
*   **Objective**: Optimize how the app handles selections so that clicking one item doesn't force the entire list to restart its rendering process and also fix the slowing down of page after scrolling down.

### Issue 5 – The "Inconsistant Table Data" Problem
The table data is not consistent with the data displayed in the dashboard after changes pages back and forth.
*   **Objective**: Fix the table data to be consistent with the data displayed in the Dashboard.

### Issue 6 – The "Foundation" Failure (Architectural)
Intermittently, navigating between pages or refreshing causes the entire dashboard sidebar and content to disappear, replaced by a "Legacy System Fault" error screen.
*   **Symptom**: A critical crash that triggers randomly across different parts of the application.

---

## Technical Expectations

Candidates are expected to demonstrate:
- **Profiling**: Using React DevTools Profiler to hunt re-renders.
- **Memory Analysis**: Finding detached nodes and leaked listeners in Chrome DevTools.
- **Architectural Depth**: Implementing `AbortController` or similar for async safety.
- **Internal Knowledge**: Understanding React's reconciliation, referential identity, and Context propagation.

Good luck!
