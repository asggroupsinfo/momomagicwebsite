# 🌐 DOMAIN & DEPLOYMENT SETTINGS

## Backup Version: Stable v1.0
**Backup Date**: October 22, 2025

---

## 🔗 CURRENT DOMAIN CONFIGURATION

### **Production URL**
- **Primary Domain**: https://momomagicwebsite.vercel.app
- **Status**: Active and publicly accessible
- **SSL Certificate**: Automatic (Vercel managed)
- **HTTPS**: Enforced
- **CDN**: Vercel Edge Network (Global)

### **Custom Domain** (Future)
- **Planned Domain**: www.momomegics.com
- **Status**: Not yet configured
- **DNS Provider**: To be determined
- **Configuration**: Pending

---

## 🚀 VERCEL DEPLOYMENT SETTINGS

### **Project Configuration**
```json
{
  "projectName": "momomagicwebsite",
  "projectId": "prj_hBCmHuQyhfaJ1IiASCtmPRUc9WWv",
  "orgId": "team_5pixPs70uw69M8Z4wtBddsIP",
  "organization": "momo-magics-projects",
  "framework": "Next.js",
  "productionBranch": "devin/1761120784-phase1-foundation",
  "backupBranch": "backup-stable-v1"
}
```

### **Build Settings**
```json
{
  "buildCommand": "next build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "nodeVersion": "20.x",
  "framework": "nextjs"
}
```

### **Deployment Protection**
- **Status**: Disabled (for public access)
- **Authentication**: None required
- **Password Protection**: Disabled
- **Vercel Authentication**: Disabled

---

## 🔒 SSL/HTTPS CONFIGURATION

### **SSL Certificate**
- **Provider**: Vercel (Automatic)
- **Type**: Let's Encrypt
- **Status**: Active
- **Expiry**: Auto-renewed
- **Grade**: A+
- **TLS Version**: 1.3

### **Security Headers**
```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

---

## 📊 DNS CONFIGURATION (Current)

### **Vercel Default DNS**
```
Type: CNAME
Host: momomagicwebsite
Value: cname.vercel-dns.com
TTL: Auto
```

### **Future Custom Domain DNS** (When configured)
```
Type: A
Host: @
Value: 76.76.21.21
TTL: 3600

Type: CNAME
Host: www
Value: cname.vercel-dns.com
TTL: 3600
```

---

## 🌍 CDN & EDGE NETWORK

### **Vercel Edge Network**
- **Regions**: Global (100+ locations)
- **Caching**: Automatic
- **Compression**: Brotli + Gzip
- **HTTP/2**: Enabled
- **HTTP/3**: Enabled

### **Cache Configuration**
```
Static Assets: 31536000s (1 year)
HTML Pages: 0s (no cache, always fresh)
API Routes: 0s (no cache)
Images: Optimized and cached
```

---

## 📈 ANALYTICS & MONITORING

### **Vercel Analytics**
- **Status**: Enabled
- **Real User Monitoring**: Active
- **Performance Metrics**: Tracked
- **Error Tracking**: Enabled

### **Monitoring URLs**
- **Dashboard**: https://vercel.com/momo-magics-projects/momomagicwebsite
- **Analytics**: https://vercel.com/momo-magics-projects/momomagicwebsite/analytics
- **Deployments**: https://vercel.com/momo-magics-projects/momomagicwebsite/deployments

---

## 🔄 DEPLOYMENT WORKFLOW

### **Automatic Deployments**
```
Trigger: Git push to production branch
Process:
  1. Code pushed to GitHub
  2. Vercel detects changes
  3. Build starts automatically
  4. Tests run (if configured)
  5. Deploy to production
  6. URL updated instantly
```

### **Preview Deployments**
```
Trigger: Pull request or push to non-production branch
URL Format: https://momomagicwebsite-{hash}-momo-magics-projects.vercel.app
Purpose: Test changes before production
```

---

## 🎯 ENVIRONMENT VARIABLES

### **Production Environment**
```
NEXT_PUBLIC_SITE_URL=https://momomagicwebsite.vercel.app
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=[Stored in Vercel Dashboard]
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=[Stored in Vercel Dashboard]
NODE_ENV=production
```

### **Environment Variable Management**
- **Location**: Vercel Dashboard → Settings → Environment Variables
- **Encryption**: Encrypted at rest
- **Access**: Restricted to deployment process
- **Backup**: Documented in environment-config.json

---

## 🔐 ACCESS CONTROL

### **Vercel Account**
- **Email**: Shivamkumar14102801@gmail.com
- **Organization**: momo-magics-projects
- **Role**: Owner
- **2FA**: Recommended (not yet enabled)

### **GitHub Repository**
- **URL**: https://github.com/asggroupsinfo/momomagicwebsite
- **Owner**: asggroupsinfo
- **Visibility**: Private
- **Branch Protection**: Not configured

---

## 📦 BACKUP DEPLOYMENT CONFIGURATION

### **Backup Branch Deployment**
```
Branch: backup-stable-v1
Purpose: Stable backup for rollback
URL: Will be generated when deployed
Status: Ready for deployment
```

### **How to Deploy Backup**
```bash
# Option 1: Via Vercel CLI
vercel --prod --branch backup-stable-v1

# Option 2: Via Vercel Dashboard
1. Go to Vercel Dashboard
2. Select momomagicwebsite project
3. Go to Deployments
4. Select backup-stable-v1 branch
5. Click "Deploy"
```

---

## 🔄 ROLLBACK PROCEDURE

### **Quick Rollback (Via Vercel Dashboard)**
```
1. Go to: https://vercel.com/momo-magics-projects/momomagicwebsite/deployments
2. Find the backup-stable-v1 deployment
3. Click "..." menu
4. Select "Promote to Production"
5. Confirm promotion
6. Website reverts to backup version instantly
```

### **Git Rollback (Via Command Line)**
```bash
# Switch to backup branch
git checkout backup-stable-v1

# Force push to production branch (use with caution)
git push origin backup-stable-v1:devin/1761120784-phase1-foundation --force

# Vercel will auto-deploy the backup version
```

---

## 🌐 CUSTOM DOMAIN SETUP (Future)

### **Steps to Add www.momomegics.com**
```
1. Purchase domain from registrar (GoDaddy, Namecheap, etc.)
2. Go to Vercel Dashboard → Settings → Domains
3. Click "Add Domain"
4. Enter: www.momomegics.com
5. Follow DNS configuration instructions
6. Add DNS records at registrar:
   - A record: @ → 76.76.21.21
   - CNAME: www → cname.vercel-dns.com
7. Wait for DNS propagation (5-60 minutes)
8. SSL certificate auto-generated
9. Domain active!
```

---

## 📊 PERFORMANCE CONFIGURATION

### **Optimization Settings**
```
Image Optimization: Enabled
Code Splitting: Automatic
Compression: Brotli + Gzip
Caching: Edge caching enabled
Minification: Automatic
Tree Shaking: Enabled
```

### **Performance Targets**
```
First Contentful Paint: < 1.5s
Time to Interactive: < 3s
Largest Contentful Paint: < 2.5s
Cumulative Layout Shift: < 0.1
```

---

## 🎯 BACKUP DEPLOYMENT PLAN

### **Creating Backup Deployment**
```bash
# Deploy backup branch to separate URL
cd /home/ubuntu/repos/momomagicwebsite
git checkout backup-stable-v1
vercel --prod

# This creates: https://momomagicwebsite-backup.vercel.app
# Or similar backup URL
```

### **Backup URL Purpose**
- Test rollback before applying to production
- Verify backup integrity
- Compare old vs new versions
- Quick restore point

---

## ✅ DOMAIN SETTINGS CHECKLIST

- [x] Production URL documented
- [x] SSL certificate active
- [x] Deployment protection disabled
- [x] Vercel project configured
- [x] Build settings documented
- [x] Environment variables listed
- [x] CDN configuration noted
- [x] Rollback procedure documented
- [x] Backup branch created
- [ ] Custom domain configured (future)
- [ ] Backup deployment created (next step)

---

**All domain and deployment settings have been documented for backup purposes.**
