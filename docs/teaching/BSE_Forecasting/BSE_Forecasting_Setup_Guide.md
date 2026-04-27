---
title: "Forecasting and Nowcasting with Text as Data: Setup Guide"
subtitle: "macOS and Windows"
author: "Renato Vassallo"
date: "April 27, 2026"
fontsize: 11pt
geometry: margin=1in
colorlinks: true
linkcolor: blue
urlcolor: blue
toc: true
toc-depth: 2
---

# Overview

This guide walks you through the software setup for the course **Forecasting and Nowcasting with Text as Data**.

We will use materials from the GitHub repository:

- [BSE-ForecastNLP](https://github.com/RenatoVassallo/BSE-ForecastNLP.git)

Before the first session, please install:

- Python 3.11
- Git
- Visual Studio Code
- The VS Code extensions `Python`, `Pylance`, and `Jupyter`

## Important note on Python 3.11

As of April 27, 2026, Python 3.11 is already in a legacy maintenance phase. The most practical installer-based version for this course is **Python 3.11.9**, which is the last Python 3.11 bugfix release with macOS and Windows installers on python.org.

- Direct macOS installer: [python-3.11.9-macos11.pkg](https://www.python.org/ftp/python/3.11.9/python-3.11.9-macos11.pkg)
- Direct Windows 64-bit installer: [python-3.11.9-amd64.exe](https://www.python.org/ftp/python/3.11.9/python-3.11.9-amd64.exe)
- Archived Python 3.11.9 release notes (reference only): [python.org/downloads/release/python-3119](https://www.python.org/downloads/release/python-3119/)

# Quick Checklist

Use this checklist if you are already comfortable with setup:

1. Install Python 3.11.9.
2. Install Git.
3. Install Visual Studio Code.
4. Install the VS Code extensions:
   - [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
   - [Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance)
   - [Jupyter](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter)
5. Clone the course repo:

```bash
git clone https://github.com/RenatoVassallo/BSE-ForecastNLP.git
cd BSE-ForecastNLP
```

6. Create and activate a virtual environment.
7. Install dependencies with `pip install -r requirements.txt`.

# macOS Setup

## 1. Install Python 3.11.9

Use the direct official installer:

- [macOS universal installer for Python 3.11.9](https://www.python.org/ftp/python/3.11.9/python-3.11.9-macos11.pkg)

If you want background details, the archived release notes are here:

- [Python 3.11.9 release notes](https://www.python.org/downloads/release/python-3119/)

Then:

1. Open the downloaded installer package.
2. Follow the installation steps.
3. When the installation is complete, close and reopen Terminal.

Verify the installation:

```bash
python3.11 --version
```

Expected output should begin with:

```text
Python 3.11
```

If the command is not found, restart Terminal and try again.

## 2. Install Git

Recommended official guidance:

- [Git for macOS](https://git-scm.com/install/mac)

The simplest option on macOS is usually:

```bash
xcode-select --install
```

This installs the Apple Command Line Tools, which include Git.

Verify:

```bash
git --version
```

## 3. Install Visual Studio Code

Official links:

- [VS Code download page](https://code.visualstudio.com/download)
- [VS Code setup on macOS](https://code.visualstudio.com/docs/setup/osx)

Download the macOS build that matches your machine:

- Apple silicon
- Intel chip
- Universal

Then:

1. Open the downloaded `.dmg`.
2. Drag Visual Studio Code into `Applications`.
3. Open VS Code once so macOS registers it.

Optional but recommended: add the `code` command to your shell PATH.

The official macOS setup page explains this step.

## 4. Install the main VS Code extensions

Open VS Code, then go to the Extensions tab and install:

- [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
- [Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance)
- [Jupyter](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter)

These are the main extensions we will use in class.

## 5. Clone the course repository

Open Terminal and run:

```bash
git clone https://github.com/RenatoVassallo/BSE-ForecastNLP.git
cd BSE-ForecastNLP
```

## 6. Create and activate the virtual environment

Create the environment:

```bash
python3.11 -m venv .venv
```

Activate it:

```bash
source .venv/bin/activate
```

After activation, your prompt will usually show something like `(.venv)`.

## 7. Install the dependencies

```bash
pip install --upgrade pip
pip install -r requirements.txt
```

## 8. Open the project in VS Code

From inside the repository:

```bash
code .
```

Then select the interpreter inside `.venv` if VS Code does not pick it automatically.

Typical path on macOS:

```text
.venv/bin/python
```

# Windows Setup

## 1. Install Python 3.11.9

Use the direct official installer:

- [Windows 64-bit installer for Python 3.11.9](https://www.python.org/ftp/python/3.11.9/python-3.11.9-amd64.exe)

If you want background details, the archived release notes are here:

- [Python 3.11.9 release notes](https://www.python.org/downloads/release/python-3119/)

During installation:

1. Start the installer.
2. Make sure the option to add Python to PATH is enabled if it is shown.
3. Finish the installation.

Open a new PowerShell window and verify:

```powershell
py -3.11 --version
```

If needed, also try:

```powershell
python --version
```

## 2. Install Git

Official link:

- [Git for Windows](https://git-scm.com/install/windows)

Download the latest x64 installer and follow the default installation steps.

Verify in PowerShell:

```powershell
git --version
```

## 3. Install Visual Studio Code

Official links:

- [VS Code download page](https://code.visualstudio.com/download)
- [VS Code setup on Windows](https://code.visualstudio.com/docs/setup/windows)

Recommended option:

- **User Installer x64**

After installation, open VS Code once.

## 4. Install the main VS Code extensions

In VS Code, install:

- [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
- [Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance)
- [Jupyter](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter)

## 5. Clone the course repository

Open **Git Bash** or **PowerShell** and run:

```bash
git clone https://github.com/RenatoVassallo/BSE-ForecastNLP.git
cd BSE-ForecastNLP
```

## 6. Create and activate the virtual environment

In PowerShell:

```powershell
py -3.11 -m venv .venv
.\.venv\Scripts\activate
```

If you are using Git Bash instead:

```bash
python3.11 -m venv .venv
source .venv/Scripts/activate
```

## 7. Install the dependencies

```powershell
python -m pip install --upgrade pip
pip install -r requirements.txt
```

## 8. Open the project in VS Code

From the repository folder:

```powershell
code .
```

Then select the virtual-environment interpreter if VS Code does not detect it automatically.

Typical path on Windows:

```text
.venv\Scripts\python.exe
```

# One-Minute Sanity Check

Once the environment is active and dependencies are installed, test:

```bash
python --version
git --version
```

If those work, you are ready to start.

# Troubleshooting

## `python3.11` is not found

- On macOS, reopen Terminal after installation.
- On Windows, try `py -3.11 --version`.
- If Python is still missing, reinstall Python 3.11.9 from the official release page.

## `git` is not found

- On macOS, run `xcode-select --install`.
- On Windows, reinstall Git from the official installer.

## VS Code does not detect the virtual environment

In VS Code:

1. Open the Command Palette.
2. Search for `Python: Select Interpreter`.
3. Choose the Python executable inside `.venv`.

## `pip install -r requirements.txt` fails

Try:

```bash
python -m pip install --upgrade pip
pip install -r requirements.txt
```

If the error persists, copy the full error message and bring it to class or send it in advance.

# Official Links

- Course repository: [github.com/RenatoVassallo/BSE-ForecastNLP](https://github.com/RenatoVassallo/BSE-ForecastNLP.git)
- Python 3.11.9 macOS installer: [python-3.11.9-macos11.pkg](https://www.python.org/ftp/python/3.11.9/python-3.11.9-macos11.pkg)
- Python 3.11.9 Windows installer: [python-3.11.9-amd64.exe](https://www.python.org/ftp/python/3.11.9/python-3.11.9-amd64.exe)
- Python 3.11.9 archived release notes: [python.org/downloads/release/python-3119](https://www.python.org/downloads/release/python-3119/)
- VS Code download: [code.visualstudio.com/download](https://code.visualstudio.com/download)
- VS Code macOS setup: [code.visualstudio.com/docs/setup/osx](https://code.visualstudio.com/docs/setup/osx)
- VS Code Windows setup: [code.visualstudio.com/docs/setup/windows](https://code.visualstudio.com/docs/setup/windows)
- Git macOS install: [git-scm.com/install/mac](https://git-scm.com/install/mac)
- Git Windows install: [git-scm.com/install/windows](https://git-scm.com/install/windows)
- Python extension: [marketplace.visualstudio.com/items?itemName=ms-python.python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
- Pylance extension: [marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance)
- Jupyter extension: [marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter)
