# Git Commands Guide

## 1. Starting a New Repository

To create a new repository from the command line, follow these steps:

```bash
echo "# JavaScript" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Jyotiprasad9481/JavaScript.git
git push -u origin main

## 2. Pushing an Existing Repository to GitHub

If you already have a local repository and want to push it to GitHub, use:

```bash
git remote add origin https://github.com/Jyotiprasad9481/JavaScript.git
git branch -M main
git push -u origin main
