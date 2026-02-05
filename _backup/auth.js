// Simple Auth Simulation
const ADMIN_CREDENTIALS = {
    username: "admin",
    password: "password123" // In a real app, never hardcode this!
};

// User Tracking System
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

        // Track admin login
        trackActivity('admin_login', { username, timestamp: loginTime });
        return true;
    }
    return false;
}

export function logout() {
    trackActivity('admin_logout', { timestamp: new Date().toISOString() });
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

export function checkAuth() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user || user.role !== 'admin') {
        window.location.href = 'login.html'; // Redirect to login
    }
    return user;
}

// Track user activities (cart actions, orders, page views)
export function trackActivity(activityType, data) {
    const activities = JSON.parse(localStorage.getItem(USER_ACTIVITIES_KEY) || '[]');
    const activity = {
        id: Date.now(),
        type: activityType,
        timestamp: new Date().toISOString(),
        data: data
    };
    activities.push(activity);

    // Keep only last 100 activities to prevent storage overflow
    if (activities.length > 100) {
        activities.shift();
    }

    localStorage.setItem(USER_ACTIVITIES_KEY, JSON.stringify(activities));
}

// Track visitor statistics
export function trackVisitor() {
    const stats = JSON.parse(localStorage.getItem(VISITOR_STATS_KEY) || '{}');
    const today = new Date().toISOString().split('T')[0];

    if (!stats[today]) {
        stats[today] = { visits: 0, uniqueVisitors: new Set() };
    }

    stats[today].visits = (stats[today].visits || 0) + 1;

    // Track unique visitor (simplified - using session)
    const sessionId = sessionStorage.getItem('visitor_session') || Date.now().toString();
    sessionStorage.setItem('visitor_session', sessionId);

    localStorage.setItem(VISITOR_STATS_KEY, JSON.stringify(stats));
}

// Get all user activities
export function getUserActivities() {
    return JSON.parse(localStorage.getItem(USER_ACTIVITIES_KEY) || '[]');
}

// Get visitor statistics
export function getVisitorStats() {
    return JSON.parse(localStorage.getItem(VISITOR_STATS_KEY) || '{}');
}

// Get orders from activities
export function getOrders() {
    const activities = getUserActivities();
    return activities.filter(a => a.type === 'order_placed');
}

// Get cart activities
export function getCartActivities() {
    const activities = getUserActivities();
    return activities.filter(a => a.type.includes('cart'));
}
