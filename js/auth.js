// Simple Auth Logic
const ADMIN_CREDENTIALS = {
    username: "admin",
    password: "password123" // In a real app, never hardcode this!
};

// Keys
const USER_ACTIVITIES_KEY = 'gunnuu_user_activities';
const VISITOR_STATS_KEY = 'gunnuu_visitor_stats';

export function login(username, password) {
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        const loginTime = new Date().toISOString();
        localStorage.setItem('currentUser', JSON.stringify({
            role: 'admin',
            name: 'Ragini',
            lastLogin: loginTime
        }));
        return true;
    }
    return false;
}

export function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

export function checkAuth() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user || user.role !== 'admin') {
        window.location.href = 'login.html';
    }
    return user;
}
