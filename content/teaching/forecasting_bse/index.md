---
title: "Forecasting and Nowcasting with Text as Data"
layout: "teaching-course"
ShowCodeCopyButtons: true
# description: "An applied introduction to turning unstructured language into measurable signals, and signals into decisions in macroeconomics and political science."
program: "Master's in Data Science for Decision Making"
institution: "Barcelona School of Economics"
period: "2025-2026"
hero_badges:
  - "Master's"
  - "BSE"
  - "2025-2026"
hero_title_main: "Forecasting & Nowcasting"
hero_title_connector: "with"
hero_title_accent: "Text as Data"
office_hours: "Available by prior request."
environment_setup:
  title: "Environment Setup"
  note: "Please complete this setup before Session 1."
  intro: "We will use the materials in the GitHub repository below. Before class, please make sure you have Python 3.11, Git, and Visual Studio Code with the `Python`, `Pylance`, and `Jupyter` extensions installed."
  repository:
    label: "BSE-ForecastNLP"
    url: "https://github.com/RenatoVassallo/BSE-ForecastNLP.git"
  steps:
    - title: "Verify Python 3.11"
      description: "Check that Python 3.11 is available on your machine."
      commands:
        - "python3.11 --version"
      note: "If Python 3.11 is not installed, download it from the [official Python website](https://www.python.org/downloads/)."
    - title: "Clone the course repository"
      commands:
        - "git clone https://github.com/RenatoVassallo/BSE-ForecastNLP.git"
        - "cd BSE-ForecastNLP"
    - title: "Create and activate the virtual environment"
      command_groups:
        - label: "macOS / Linux"
          commands:
            - "python3.11 -m venv .venv"
            - "source .venv/bin/activate"
        - label: "Windows"
          commands:
            - "python -m venv .venv"
            - ".venv\\Scripts\\activate"
    - title: "Install dependencies"
      commands:
        - "pip install --upgrade pip"
        - "pip install -r requirements.txt"
      note: "This step may take a few minutes depending on your system."
    - title: "Select the environment in VS Code"
      description: "Open a notebook in VS Code and select the `.venv` environment as the kernel."
    - title: "uv setup"
      optional: true
      description: "If you are already familiar with `uv`, you can use it instead."
      commands:
        - "uv sync"
  guide:
    label: "Detailed installation guide for macOS and Windows (PDF)"
    url: "pdf/teaching/BSE_Forecasting/BSE_Forecasting_Setup_Guide.pdf"
class_schedule:
  - title: "Session 1"
    date: "Thursday 30 April"
    time: "15:00-17:00"
    room: "24.009 (Ciutadella)"
  - title: "Session 2"
    date: "Wednesday 06 May"
    time: "08:30-12:30"
    room: "24.112 (Ciutadella)"
  - title: "Session 3"
    date: "Friday 08 May"
    time: "12:30-14:30"
    room: "24.009 (Ciutadella)"
sessions_note: "Slides, code, and additional resources will be posted below as the course progresses."
introduction_material:
  title: "Introduction"
  description: "Course framing, objectives, and workflow."
  materials:
    - label: "Slides"
      url: "pdf/teaching/BSE_Forecasting/BSE_Forecasting_Introduction.pdf"
sessions:
  - title: "From text to signals"
    topics:
      - "Learning with limited supervision: zero and few-shot learning"
    materials:
      - label: "Slides"
        url: ""
      - label: "Data"
        url: ""
  - title: "From signals to decisions"
    topics:
      - "Fine-tuning and policy-oriented evaluation"
    materials:
      - label: "Slides"
        url: ""
      - label: "Data"
        url: ""
  - title: "Mixed-frequency methods"
    topics:
      - "Classic MIDAS and machine learning extensions"
    materials:
      - label: "Slides"
        url: ""
      - label: "Data"
        url: ""
assignment:
  title: "In-class assignment"
  weight: "20% of overall grade"
  lead: "Construct and evaluate text-based signals"
  date: "Wednesday 06 May"
  details:
    - "Work in groups of up to 4 members."
    - "Duration: 45-60 minutes, followed by a brief 5-minute presentation per group."
    - "You will have access to three text corpora."
    - "Select one corpus, construct a text-based signal using methods from Sessions 1-2, and apply it to a specific task (event detection, classification, monitoring, or forecasting)."
    #- Discussion of limitations, metrics, and extensions is encouraged.
    #- High-quality questions or comments to other groups may receive bonus points.
---
We will learn how to transform unstructured text into usable signals, evaluate models in applied settings, and connect these tools to questions in the social sciences and policy.

The course covers a range of methods—from simple dictionary-based approaches to supervised models and modern LLM-based techniques—highlighting their strengths, limitations, and trade-offs. A central focus is on building text-based indicators to nowcast real-world events and forecast risks in applied contexts.

Particular emphasis is placed on fine-tuning, model evaluation, and threshold selection, with decisions guided by policy-relevant trade-offs (e.g., false positives vs. missed events). We also discuss why frequency mismatches in data matter, and introduce mixed-frequency methods to better integrate information from different sources.

By the end of the course, students will be able to construct text-based indicators using state-of-the-art methods that capture semantic and contextual information, and deploy them in decision-oriented applications.
