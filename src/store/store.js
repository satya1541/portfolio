
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../store/authSlice';

// Function to load state from localStorage
function loadState() {
  console.log('loadState')
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) return undefined; // State will be undefined if not found in localStorage
    return JSON.parse(serializedState); // Parse and return the stored state
  } catch (e) {
    console.warn('Failed to load state from localStorage:', e);
    return undefined;
  }
}

// Function to save state to localStorage
function saveState(state) {
  console.log('Save State')
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (e) {
    console.warn('Failed to save state to localStorage:', e);
  }
}
// Load initial state from localStorage
const preloadedState = loadState();
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState,
});
store.subscribe(() => {
  console.log('subcribe state')
  saveState(store.getState()); // You can save only specific parts of the state if desired
});
export default store;
