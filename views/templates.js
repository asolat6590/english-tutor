const fs = require('node:fs');
const path = require('node:path');

let loginHtml = '';
let adminHtml = '';

try {
  loginHtml = fs.readFileSync(path.join(__dirname, 'login.html'), 'utf8');
} catch {
  try {
    loginHtml = fs.readFileSync(path.join(__dirname, '..', 'public', 'login.html'), 'utf8');
  } catch {}
}

try {
  adminHtml = fs.readFileSync(path.join(__dirname, 'admin.html'), 'utf8');
} catch {
  try {
    adminHtml = fs.readFileSync(path.join(__dirname, '..', 'public', 'admin.html'), 'utf8');
  } catch {}
}

module.exports = {
  getLoginHtml() {
    if (loginHtml) return loginHtml;
    return fs.readFileSync(path.join(__dirname, 'login.html'), 'utf8');
  },
  getAdminHtml() {
    if (adminHtml) return adminHtml;
    return fs.readFileSync(path.join(__dirname, 'admin.html'), 'utf8');
  }
};
