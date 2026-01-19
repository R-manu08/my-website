// Simple Auth Simulation
const ADMIN_CREDENTIALS = {
    username: "admin",
    password: "password123" // In a real app, never hardcode this!
};

export function login(username, password) {
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        localStorage.setItem('currentUser', JSON.stringify({ role: 'admin', name: 'Ragini' }));
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
        window.location.href = 'login.html'; // Redirect to login
    }
    return user;
}
