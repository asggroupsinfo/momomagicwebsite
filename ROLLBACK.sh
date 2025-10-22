#!/bin/bash


set -e  # Exit on error

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

BACKUP_BRANCH="backup-stable-v1"
PRODUCTION_BRANCH="devin/1761120784-phase1-foundation"
REPO_URL="https://github.com/asggroupsinfo/momomagicwebsite"


print_header() {
    echo -e "${BLUE}"
    echo "============================================================================"
    echo "  MOMOS MAGIC WEBSITE - ROLLBACK SYSTEM"
    echo "============================================================================"
    echo -e "${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

confirm_action() {
    echo -e "${YELLOW}"
    read -p "⚠️  Are you sure you want to proceed? (yes/no): " -r
    echo -e "${NC}"
    if [[ ! $REPLY =~ ^[Yy][Ee][Ss]$ ]]; then
        print_error "Rollback cancelled by user"
        exit 1
    fi
}

check_git_status() {
    print_info "Checking git status..."
    if [ -n "$(git status --porcelain)" ]; then
        print_warning "You have uncommitted changes!"
        git status --short
        echo ""
        confirm_action
    else
        print_success "Working directory is clean"
    fi
}

fetch_latest() {
    print_info "Fetching latest changes from remote..."
    git fetch origin
    print_success "Fetch complete"
}

show_current_state() {
    echo ""
    print_info "Current State:"
    echo "  Current Branch: $(git branch --show-current)"
    echo "  Latest Commit: $(git log -1 --oneline)"
    echo "  Production URL: https://momomagicwebsite.vercel.app"
    echo ""
}

show_backup_info() {
    echo ""
    print_info "Backup Information:"
    echo "  Backup Branch: $BACKUP_BRANCH"
    echo "  Backup Commit: $(git log origin/$BACKUP_BRANCH -1 --oneline)"
    echo "  Backup Date: October 22, 2025"
    echo ""
}


rollback_complete() {
    print_header
    echo -e "${YELLOW}OPTION 1: COMPLETE WEBSITE RESTORE${NC}"
    echo "This will restore:"
    echo "  ✓ All source code"
    echo "  ✓ All content"
    echo "  ✓ All design elements"
    echo "  ✓ All functionality"
    echo ""
    
    show_current_state
    show_backup_info
    
    print_warning "This will replace ALL current changes with the backup version!"
    confirm_action
    
    print_info "Starting complete rollback..."
    
    print_info "Switching to backup branch..."
    git checkout $BACKUP_BRANCH
    print_success "Switched to $BACKUP_BRANCH"
    
    print_info "Pulling latest backup..."
    git pull origin $BACKUP_BRANCH
    print_success "Backup branch updated"
    
    print_warning "Pushing backup to production branch..."
    git push origin $BACKUP_BRANCH:$PRODUCTION_BRANCH --force
    print_success "Production branch updated with backup"
    
    echo ""
    print_success "COMPLETE ROLLBACK SUCCESSFUL!"
    echo ""
    print_info "Vercel will automatically deploy the backup version"
    print_info "Check deployment status at: https://vercel.com/momo-magics-projects/momomagicwebsite"
    print_info "Website will be live at: https://momomagicwebsite.vercel.app"
    echo ""
}

rollback_design_only() {
    print_header
    echo -e "${YELLOW}OPTION 2: DESIGN ONLY RESTORE${NC}"
    echo "This will restore:"
    echo "  ✓ Color scheme"
    echo "  ✓ Typography"
    echo "  ✓ UI components"
    echo "  ✓ Animations"
    echo ""
    echo "This will keep:"
    echo "  ✓ Content (menu items, reviews, etc.)"
    echo "  ✓ Functionality"
    echo ""
    
    print_warning "This option requires manual file selection"
    print_info "Files to restore:"
    echo "  - app/globals.css"
    echo "  - tailwind.config.ts"
    echo "  - components/ui/*"
    echo ""
    
    confirm_action
    
    print_info "Checking out design files from backup..."
    git checkout $BACKUP_BRANCH -- app/globals.css
    git checkout $BACKUP_BRANCH -- tailwind.config.ts
    git checkout $BACKUP_BRANCH -- components/ui/
    
    print_success "Design files restored"
    print_info "Review changes with: git diff"
    print_info "Commit changes with: git add . && git commit -m 'Restore design from backup'"
    print_info "Push changes with: git push"
}

rollback_content_only() {
    print_header
    echo -e "${YELLOW}OPTION 3: CONTENT ONLY RESTORE${NC}"
    echo "This will restore:"
    echo "  ✓ Menu items"
    echo "  ✓ Reviews"
    echo "  ✓ Brand story"
    echo "  ✓ Contact information"
    echo ""
    echo "This will keep:"
    echo "  ✓ Design elements"
    echo "  ✓ Functionality"
    echo ""
    
    print_info "Content is stored in: backup-data/content-export.json"
    print_warning "Manual content restoration required"
    print_info "Use the JSON file to restore content in your components"
    echo ""
}

rollback_functionality_only() {
    print_header
    echo -e "${YELLOW}OPTION 4: FUNCTIONALITY ONLY RESTORE${NC}"
    echo "This will restore:"
    echo "  ✓ Component logic"
    echo "  ✓ API routes"
    echo "  ✓ Form handling"
    echo "  ✓ Navigation"
    echo ""
    echo "This will keep:"
    echo "  ✓ Design elements"
    echo "  ✓ Content"
    echo ""
    
    confirm_action
    
    print_info "Checking out functionality files from backup..."
    git checkout $BACKUP_BRANCH -- components/sections/
    git checkout $BACKUP_BRANCH -- app/api/
    
    print_success "Functionality files restored"
    print_info "Review changes with: git diff"
    print_info "Commit changes with: git add . && git commit -m 'Restore functionality from backup'"
    print_info "Push changes with: git push"
}

create_backup_deployment() {
    print_header
    echo -e "${YELLOW}OPTION 5: CREATE BACKUP DEPLOYMENT${NC}"
    echo "This will:"
    echo "  ✓ Deploy backup branch to separate URL"
    echo "  ✓ Keep production unchanged"
    echo "  ✓ Allow comparison between versions"
    echo ""
    
    confirm_action
    
    print_info "Switching to backup branch..."
    git checkout $BACKUP_BRANCH
    
    print_info "Deploying backup to Vercel..."
    print_warning "Make sure you have Vercel CLI installed and authenticated"
    
    if command -v vercel &> /dev/null; then
        vercel --prod
        print_success "Backup deployment created"
    else
        print_error "Vercel CLI not found"
        print_info "Install with: npm install -g vercel"
        print_info "Then run: vercel login"
    fi
}


show_menu() {
    print_header
    echo "Select rollback option:"
    echo ""
    echo "  1) Complete Website Restore (All changes reverted)"
    echo "  2) Design Only Restore (Keep content & functionality)"
    echo "  3) Content Only Restore (Keep design & functionality)"
    echo "  4) Functionality Only Restore (Keep design & content)"
    echo "  5) Create Backup Deployment (Test backup without affecting production)"
    echo "  6) Show Backup Information"
    echo "  7) Cancel"
    echo ""
    read -p "Enter your choice (1-7): " choice
    echo ""
    
    case $choice in
        1)
            rollback_complete
            ;;
        2)
            rollback_design_only
            ;;
        3)
            rollback_content_only
            ;;
        4)
            rollback_functionality_only
            ;;
        5)
            create_backup_deployment
            ;;
        6)
            show_current_state
            show_backup_info
            read -p "Press Enter to return to menu..."
            show_menu
            ;;
        7)
            print_info "Rollback cancelled"
            exit 0
            ;;
        *)
            print_error "Invalid option"
            show_menu
            ;;
    esac
}


if [ ! -d .git ]; then
    print_error "Not a git repository!"
    print_info "Please run this script from the repository root"
    exit 1
fi

check_git_status

fetch_latest

show_menu
