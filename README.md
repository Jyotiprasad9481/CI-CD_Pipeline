# Git Commands Guide

## 1. Starting a New Repository
To create a new repository from the command line, follow these steps:

echo "# JavaScript" >> README.md
git init  
git add README.md		
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Jyotiprasad9481/JavaScript.git
git push -u origin main

## 2. Pushing an Existing Repository to GitHub
If you already have a local repository and want to push it to GitHub, use:

git remote add origin https://github.com/Jyotiprasad9481/JavaScript.git
git branch -M main
git push -u origin main

## 3. Cloning a Repository
To clone an existing repository, run:

git clone https://github.com/Jyotiprasad9481/Angular.git

## 4. Committing Changes and Pushing to Remote Branch
After making changes to your repository, use the following commands to commit and push them:

git status
git add .
git commit -m "Your commit message"
git push origin feature/custom-directive

## 5. Switching and Managing Branches in Git
To work with branches, here are some commonly used commands:

List all branches:
git branch

Create and switch to a new branch:
git checkout -b feature/custom-directive

Delete a local branch:
git branch -d feature/custom-directive



