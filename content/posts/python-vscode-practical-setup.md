---
title: "Python + VS Code: A Practical First Setup"
date: 2026-06-03
author: "Renato Vassallo"
description: "A bilingual first setup guide for people starting with Python, VS Code, GitHub repositories, virtual environments, and uv."
summary: "A bilingual first setup guide for people starting with Python, VS Code, GitHub repositories, virtual environments, and uv."
tags: ["Python", "VS Code", "Git", "uv", "reproducibility"]
categories: ["Tools"]
draft: false
---

{{< language-toggle default="en" label="Read in / Leer en" >}}

{{< lang code="en" active="true" >}}

This is a practical first setup for people who are starting with Python and want to run projects from GitHub, use modern libraries, and avoid the usual confusion around VS Code, Git, repositories, and virtual environments.

The goal is modest: after this guide, you should be able to clone a repository, open it in VS Code, create an isolated Python environment, and install the dependencies needed to run the project.

## The Mental Map

Think of a Python research project like this:

```text
GitHub repository
  -> clone it to your computer
local project folder
  -> open it in VS Code
virtual environment, usually .venv
  -> install the project's packages
scripts or notebooks
  -> run the analysis
```

A **repository** is a project folder with version history.  
A **clone** is your local copy of that repository.  
A **virtual environment** is a project-specific Python installation, so one project can use `pandas==2.2` while another uses something else.  
A **dependency** is a package the project needs, such as `numpy`, `pandas`, `scikit-learn`, `statsmodels`, or `polars`.

This guide uses standard Python tools and `uv`. It does not use Conda. Conda is still useful in some workflows, but many modern GitHub repositories now expect `venv`, `pip`, `pyproject.toml`, and sometimes `uv`.

## 1. Install Python 3.11

Important note: as of June 2026, Python 3.11 is a legacy series in security-fix mode. The newest 3.11 release, [Python 3.11.15](https://www.python.org/downloads/release/python-31115/), is source-only and does not provide the usual Windows/macOS installers. For a beginner-friendly Python.org installer, use [Python 3.11.9](https://www.python.org/downloads/release/python-3119/), which was the last full 3.11 release with installers.

### Windows

1. Go to [Python 3.11.9 on Python.org](https://www.python.org/downloads/release/python-3119/).
2. Download the **Windows installer (64-bit)**.
3. Open the installer.
4. Check **Add python.exe to PATH**.
5. Click **Install Now**.

Check it in PowerShell:

```powershell
py -3.11 --version
```

You should see something like:

```text
Python 3.11.9
```

### macOS

1. Go to [Python 3.11.9 on Python.org](https://www.python.org/downloads/release/python-3119/).
2. Download the **macOS 64-bit universal2 installer**.
3. Open the `.pkg` file and follow the installer.

Check it in Terminal:

```zsh
python3.11 --version
```

You should see something like:

```text
Python 3.11.9
```

## 2. Install Git

Git lets your computer download and track code from GitHub.

### Windows

Download Git from [git-scm.com/install/windows](https://git-scm.com/install/windows). The default installer options are fine for a first setup.

Then check:

```powershell
git --version
```

### macOS

First try:

```zsh
git --version
```

If macOS asks you to install command line developer tools, accept. You can also install Git from [git-scm.com/install/mac](https://git-scm.com/install/mac), or with Homebrew if you already use it:

```zsh
brew install git
```

## 3. Install VS Code

Download VS Code from [code.visualstudio.com/Download](https://code.visualstudio.com/Download).

On Windows, keep the option that adds VS Code to your PATH if the installer shows it.  
On macOS, open VS Code, press `Command + Shift + P`, search for **Shell Command: Install 'code' command in PATH**, and run it.

Check from a terminal:

```zsh
code --version
```

If this does not work, you can still open VS Code normally. The `code .` command is convenient, not required.

## 4. Install the Main VS Code Extensions

Open VS Code, go to the Extensions panel, and install:

| Extension | Why it matters |
|---|---|
| [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) | Runs Python files, selects environments, debugging |
| [Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance) | Better autocomplete and code hints, usually installed with Python |
| [Jupyter](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter) | Opens notebooks inside VS Code |
| [Ruff](https://marketplace.visualstudio.com/items?itemName=charliermarsh.ruff) | Fast formatting and linting |
| [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) | Optional, useful for seeing Git history |

Do not install twenty extensions at the start. For research work, this small set is enough.

## 5. Clone a Repository from GitHub

On GitHub, open the repository page, click **Code**, and copy the HTTPS URL. It usually looks like this:

```text
https://github.com/owner/project-name.git
```

Then in PowerShell or Terminal:

```zsh
cd Documents
mkdir GitHub
cd GitHub
git clone https://github.com/owner/project-name.git
cd project-name
code .
```

Replace `owner/project-name` with the real repository.

More detail: [GitHub's official cloning guide](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

## 6. Create and Activate a Virtual Environment

Do this inside the project folder, not in your home folder.

### Windows, PowerShell

```powershell
py -3.11 -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
python --version
```

If PowerShell blocks activation, run this once:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then activate again:

```powershell
.\.venv\Scripts\Activate.ps1
```

### macOS, Terminal

```zsh
python3.11 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python --version
```

When the environment is active, your terminal often starts with `(.venv)`.

In VS Code, press `Ctrl + Shift + P` on Windows or `Command + Shift + P` on macOS, search **Python: Select Interpreter**, and choose the interpreter inside `.venv`.

Official reference: [Python virtual environments](https://docs.python.org/3.11/tutorial/venv.html).

## 7. Install Dependencies with requirements.txt

Many older and simple repositories include a file named `requirements.txt`.

After activating `.venv`, run:

```zsh
python -m pip install -r requirements.txt
```

Then test imports:

```zsh
python
```

```python
import pandas as pd
import numpy as np
```

Exit Python:

```python
exit()
```

Official reference: [pip requirements files](https://pip.pypa.io/en/stable/user_guide/#requirements-files).

## 8. Modern Option: Use uv

[`uv`](https://docs.astral.sh/uv/) is a fast Python package and project manager from Astral. It can create environments, install dependencies, work with `pyproject.toml`, and manage Python versions.

Use `uv` especially when a repository contains:

```text
pyproject.toml
uv.lock
```

### Install uv

Windows PowerShell:

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

macOS Terminal:

```zsh
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Restart the terminal, then check:

```zsh
uv --version
```

Official reference: [uv installation](https://docs.astral.sh/uv/getting-started/installation/).

### Sync a Project with pyproject.toml

Inside the cloned repository:

```zsh
uv sync
```

That creates `.venv`, reads `pyproject.toml` and `uv.lock` if present, and installs the project's dependencies.

Run code through the project environment:

```zsh
uv run python --version
uv run python main.py
```

If the project requires Python 3.11:

```zsh
uv python install 3.11
uv sync --python 3.11
```

Official reference: [uv working on projects](https://docs.astral.sh/uv/guides/projects/).

## 9. Which Dependency Route Should I Use?

Use this rule:

| What you see in the repo | What to do |
|---|---|
| `requirements.txt` only | Create `.venv`, activate it, run `python -m pip install -r requirements.txt` |
| `pyproject.toml` and `uv.lock` | Run `uv sync` |
| `pyproject.toml` but no `uv.lock` | Read the README first. If it mentions `uv`, run `uv sync` |
| Both `requirements.txt` and `pyproject.toml` | Follow the README. If unclear, `requirements.txt` is usually the conservative path |

The claim that `uv` is always the best option is too strong. It is a strong modern default, but `requirements.txt` is still common and often correct for existing research code.

## 10. Common Problems

| Problem | Likely fix |
|---|---|
| `python` is not found | Restart the terminal. On Windows use `py -3.11`. On macOS use `python3.11` |
| `git` is not found | Restart the terminal or reinstall Git |
| `code .` is not found | Open VS Code manually, or install the `code` command in PATH |
| `ModuleNotFoundError` | Activate `.venv`, or use `uv run` |
| VS Code uses the wrong Python | Run **Python: Select Interpreter** and choose `.venv` |
| `uv` is not found | Restart the terminal after installing uv |

## 11. Minimal Workflow to Remember

For a `requirements.txt` project:

```zsh
git clone https://github.com/owner/project-name.git
cd project-name
python3.11 -m venv .venv        # macOS
source .venv/bin/activate       # macOS
python -m pip install -r requirements.txt
code .
```

Windows version:

```powershell
git clone https://github.com/owner/project-name.git
cd project-name
py -3.11 -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
code .
```

For a `uv` project:

```zsh
git clone https://github.com/owner/project-name.git
cd project-name
uv sync
uv run python main.py
code .
```

## Useful Links

- [Python 3.11.9 release page](https://www.python.org/downloads/release/python-3119/)
- [Python 3.11.15 release note](https://www.python.org/downloads/release/python-31115/)
- [VS Code download](https://code.visualstudio.com/Download)
- [Python in VS Code](https://code.visualstudio.com/docs/languages/python)
- [Git downloads](https://git-scm.com/downloads)
- [GitHub cloning guide](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
- [Python virtual environments](https://docs.python.org/3.11/tutorial/venv.html)
- [pip requirements files](https://pip.pypa.io/en/stable/user_guide/#requirements-files)
- [uv installation](https://docs.astral.sh/uv/getting-started/installation/)
- [uv project guide](https://docs.astral.sh/uv/guides/projects/)

{{< /lang >}}

{{< lang code="es" >}}

Esta es una primera configuración práctica para personas que están empezando con Python y quieren ejecutar proyectos desde GitHub, usar librerías modernas y evitar la confusión típica alrededor de VS Code, Git, repositorios y entornos virtuales.

El objetivo es modesto: después de esta guía deberías poder clonar un repositorio, abrirlo en VS Code, crear un entorno de Python aislado e instalar las dependencias necesarias para correr el proyecto.

## El Mapa Mental

Piensa en un proyecto de investigación en Python así:

```text
Repositorio en GitHub
  -> lo clonas en tu computadora
carpeta local del proyecto
  -> la abres en VS Code
entorno virtual, normalmente .venv
  -> instalas los paquetes del proyecto
scripts o notebooks
  -> corres el análisis
```

Un **repositorio** es una carpeta de proyecto con historial de versiones.  
Un **clon** es tu copia local de ese repositorio.  
Un **entorno virtual** es una instalación de Python específica para un proyecto, de modo que un proyecto puede usar `pandas==2.2` y otro puede usar otra versión.  
Una **dependencia** es un paquete que el proyecto necesita, como `numpy`, `pandas`, `scikit-learn`, `statsmodels` o `polars`.

Esta guía usa herramientas estándar de Python y `uv`. No usa Conda. Conda sigue siendo útil en algunos flujos de trabajo, pero muchos repositorios modernos de GitHub esperan `venv`, `pip`, `pyproject.toml` y a veces `uv`.

## 1. Instala Python 3.11

Nota importante: en junio de 2026, Python 3.11 ya está en modo de correcciones de seguridad. La versión más nueva de 3.11, [Python 3.11.15](https://www.python.org/downloads/release/python-31115/), es solo de código fuente y no ofrece los instaladores usuales para Windows/macOS. Para una instalación sencilla desde Python.org, usa [Python 3.11.9](https://www.python.org/downloads/release/python-3119/), que fue la última versión completa de 3.11 con instaladores.

### Windows

1. Entra a [Python 3.11.9 en Python.org](https://www.python.org/downloads/release/python-3119/).
2. Descarga **Windows installer (64-bit)**.
3. Abre el instalador.
4. Marca **Add python.exe to PATH**.
5. Haz clic en **Install Now**.

Compruébalo en PowerShell:

```powershell
py -3.11 --version
```

Deberías ver algo como:

```text
Python 3.11.9
```

### macOS

1. Entra a [Python 3.11.9 en Python.org](https://www.python.org/downloads/release/python-3119/).
2. Descarga **macOS 64-bit universal2 installer**.
3. Abre el archivo `.pkg` y sigue el instalador.

Compruébalo en Terminal:

```zsh
python3.11 --version
```

Deberías ver algo como:

```text
Python 3.11.9
```

## 2. Instala Git

Git permite que tu computadora descargue y siga código desde GitHub.

### Windows

Descarga Git desde [git-scm.com/install/windows](https://git-scm.com/install/windows). Las opciones por defecto del instalador están bien para una primera configuración.

Luego comprueba:

```powershell
git --version
```

### macOS

Primero intenta:

```zsh
git --version
```

Si macOS te pide instalar herramientas de desarrollo de línea de comandos, acepta. También puedes instalar Git desde [git-scm.com/install/mac](https://git-scm.com/install/mac), o con Homebrew si ya lo usas:

```zsh
brew install git
```

## 3. Instala VS Code

Descarga VS Code desde [code.visualstudio.com/Download](https://code.visualstudio.com/Download).

En Windows, conserva la opción que agrega VS Code al PATH si el instalador la muestra.  
En macOS, abre VS Code, presiona `Command + Shift + P`, busca **Shell Command: Install 'code' command in PATH** y ejecútalo.

Comprueba desde una terminal:

```zsh
code --version
```

Si esto no funciona, igual puedes abrir VS Code normalmente. El comando `code .` es conveniente, no obligatorio.

## 4. Instala las Extensiones Principales de VS Code

Abre VS Code, entra al panel de extensiones e instala:

| Extensión | Por qué importa |
|---|---|
| [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) | Ejecutar archivos de Python, elegir entornos, depurar |
| [Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance) | Mejor autocompletado y sugerencias, normalmente se instala con Python |
| [Jupyter](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter) | Abrir notebooks dentro de VS Code |
| [Ruff](https://marketplace.visualstudio.com/items?itemName=charliermarsh.ruff) | Formateo y revisión rápida de código |
| [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) | Opcional, útil para ver historial de Git |

No instales veinte extensiones al inicio. Para trabajo de investigación, este conjunto pequeño es suficiente.

## 5. Clona un Repositorio desde GitHub

En GitHub, abre la página del repositorio, haz clic en **Code** y copia la URL HTTPS. Normalmente se ve así:

```text
https://github.com/owner/project-name.git
```

Luego en PowerShell o Terminal:

```zsh
cd Documents
mkdir GitHub
cd GitHub
git clone https://github.com/owner/project-name.git
cd project-name
code .
```

Reemplaza `owner/project-name` por el repositorio real.

Más detalle: [guía oficial de GitHub para clonar repositorios](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

## 6. Crea y Activa un Entorno Virtual

Haz esto dentro de la carpeta del proyecto, no en tu carpeta personal.

### Windows, PowerShell

```powershell
py -3.11 -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
python --version
```

Si PowerShell bloquea la activación, ejecuta esto una sola vez:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Luego activa de nuevo:

```powershell
.\.venv\Scripts\Activate.ps1
```

### macOS, Terminal

```zsh
python3.11 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python --version
```

Cuando el entorno está activo, la terminal normalmente empieza con `(.venv)`.

En VS Code, presiona `Ctrl + Shift + P` en Windows o `Command + Shift + P` en macOS, busca **Python: Select Interpreter** y elige el intérprete dentro de `.venv`.

Referencia oficial: [entornos virtuales de Python](https://docs.python.org/3.11/tutorial/venv.html).

## 7. Instala Dependencias con requirements.txt

Muchos repositorios antiguos o simples incluyen un archivo llamado `requirements.txt`.

Después de activar `.venv`, ejecuta:

```zsh
python -m pip install -r requirements.txt
```

Luego prueba imports:

```zsh
python
```

```python
import pandas as pd
import numpy as np
```

Sal de Python:

```python
exit()
```

Referencia oficial: [archivos requirements de pip](https://pip.pypa.io/en/stable/user_guide/#requirements-files).

## 8. Opción Moderna: Usa uv

[`uv`](https://docs.astral.sh/uv/) es un gestor rápido de paquetes y proyectos de Python creado por Astral. Puede crear entornos, instalar dependencias, trabajar con `pyproject.toml` y gestionar versiones de Python.

Usa `uv` especialmente cuando un repositorio contiene:

```text
pyproject.toml
uv.lock
```

### Instala uv

Windows PowerShell:

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

macOS Terminal:

```zsh
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Reinicia la terminal y comprueba:

```zsh
uv --version
```

Referencia oficial: [instalación de uv](https://docs.astral.sh/uv/getting-started/installation/).

### Sincroniza un Proyecto con pyproject.toml

Dentro del repositorio clonado:

```zsh
uv sync
```

Eso crea `.venv`, lee `pyproject.toml` y `uv.lock` si existe, e instala las dependencias del proyecto.

Ejecuta código usando el entorno del proyecto:

```zsh
uv run python --version
uv run python main.py
```

Si el proyecto requiere Python 3.11:

```zsh
uv python install 3.11
uv sync --python 3.11
```

Referencia oficial: [uv para trabajar en proyectos](https://docs.astral.sh/uv/guides/projects/).

## 9. Qué Ruta de Dependencias Debo Usar

Usa esta regla:

| Lo que ves en el repo | Qué hacer |
|---|---|
| Solo `requirements.txt` | Crea `.venv`, actívalo y ejecuta `python -m pip install -r requirements.txt` |
| `pyproject.toml` y `uv.lock` | Ejecuta `uv sync` |
| `pyproject.toml` pero no `uv.lock` | Lee primero el README. Si menciona `uv`, ejecuta `uv sync` |
| `requirements.txt` y `pyproject.toml` | Sigue el README. Si no está claro, `requirements.txt` suele ser la ruta conservadora |

La afirmación de que `uv` siempre es la mejor opción es demasiado fuerte. Es un default moderno y sólido, pero `requirements.txt` sigue siendo común y muchas veces correcto para código de investigación existente.

## 10. Problemas Comunes

| Problema | Posible solución |
|---|---|
| `python` no aparece | Reinicia la terminal. En Windows usa `py -3.11`. En macOS usa `python3.11` |
| `git` no aparece | Reinicia la terminal o reinstala Git |
| `code .` no aparece | Abre VS Code manualmente, o instala el comando `code` en PATH |
| `ModuleNotFoundError` | Activa `.venv`, o usa `uv run` |
| VS Code usa el Python equivocado | Ejecuta **Python: Select Interpreter** y elige `.venv` |
| `uv` no aparece | Reinicia la terminal después de instalar uv |

## 11. Flujo Mínimo para Recordar

Para un proyecto con `requirements.txt`:

```zsh
git clone https://github.com/owner/project-name.git
cd project-name
python3.11 -m venv .venv        # macOS
source .venv/bin/activate       # macOS
python -m pip install -r requirements.txt
code .
```

Versión Windows:

```powershell
git clone https://github.com/owner/project-name.git
cd project-name
py -3.11 -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
code .
```

Para un proyecto con `uv`:

```zsh
git clone https://github.com/owner/project-name.git
cd project-name
uv sync
uv run python main.py
code .
```

## Links Útiles

- [Página de Python 3.11.9](https://www.python.org/downloads/release/python-3119/)
- [Nota de Python 3.11.15](https://www.python.org/downloads/release/python-31115/)
- [Descargar VS Code](https://code.visualstudio.com/Download)
- [Python en VS Code](https://code.visualstudio.com/docs/languages/python)
- [Descargas de Git](https://git-scm.com/downloads)
- [Guía de GitHub para clonar repositorios](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
- [Entornos virtuales de Python](https://docs.python.org/3.11/tutorial/venv.html)
- [Archivos requirements de pip](https://pip.pypa.io/en/stable/user_guide/#requirements-files)
- [Instalación de uv](https://docs.astral.sh/uv/getting-started/installation/)
- [Guía de proyectos con uv](https://docs.astral.sh/uv/guides/projects/)

{{< /lang >}}
