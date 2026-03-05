# Git & Version Control

## Initial Setup

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Rabab HALLOUKA portfolio SPA"

# Add remote (if using GitHub)
git remote add origin https://github.com/rhallouka-cmd/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Common Workflow

```bash
# Pull latest changes
git pull

# Create feature branch
git checkout -b feature/new-section

# Stage changes
git add .

# Commit changes
git commit -m "Add new portfolio section"

# Push to GitHub
git push origin feature/new-section

# Create pull request on GitHub
```

## Best Practices

- Always create feature branches for new content or features
- Write clear, descriptive commit messages
- Keep commits atomic and focused
- Test locally before pushing changes
- Use meaningful branch names (feature/*, fix/*, docs/*)

## Deployment Workflow

```bash
# Test locally
npm run dev
npm run build

# If all tests pass, push to main branch
git push origin main

# Vercel will automatically deploy on push to main
```
