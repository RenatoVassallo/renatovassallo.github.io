---
title: "Turning Text into Data"
date: 2025-06-04
author: "Renato Vassallo"
description: "3 Approaches from Simple to Smart"
tags: ["NLP", "machine learning", "LLMs", "few-shot learning"]
categories: ["AI & Economics"]
draft: false
math: true
---

We will explore three methods to generate text-based variables, ranging from simple dictionary approaches to more complex, fine-tuned few-shot learning models using pre-trained LLMs.

![Overview](/images/posts/text_as_data/xyplot.png)

> All examples in this post are implemented using [FewShotX](https://github.com/RenatoVassallo/FewShotX), a Python package  
> for dictionary scoring, zero-shot, and few-shot learning in text classification.  
> Explore the [documentation and tutorials](https://github.com/RenatoVassallo/FewShotX/tree/main/tutorials) for hands-on notebooks.

## 1. Dictionary Methods

Dictionary methods have been widely used in economics to transform textual data into quantitative indicators. A notable example is the **Economic Policy Uncertainty (EPU)** index developed by [Baker, Bloom, and Davis (2016)](https://www.policyuncertainty.com/media/BakerBloomDavis.pdf), where the frequency of specific terms in newspaper articles is used to capture policy-related uncertainty over time.

These methods remain popular due to their transparency and simplicity, and continue to appear in high-impact economic research such as:

1. Ehrmann & Talmi (2020). Starting from a blank page? Semantic similarity in central bank communication and market volatility. *Journal of Monetary Economics*.

2. Rice & Zorn (2021). Corpus-based dictionaries for sentiment analysis of specialized vocabularies. *Political Science Research and Methods*.

3. Parle (2022). The financial market impact of ECB monetary policy press conferences—a text-based approach. *European Journal of Political Economy*.

---

### 🧰 Example: EPU-style Dictionary Scoring

```python
from FewShotX import DictionaryScorer

# Define an EPU-style dictionary
epu_dict = {
    "uncertainty": ["uncertainty", "uncertain"],
    "economic": ["economic", "economy"],
    "policy": ["congress", "deficit", "federal reserve", "legislation", "regulation", "white house"]
}

# Initialize scorer
scorer = DictionaryScorer(dictionaries=epu_dict, model_name="en_core_web_sm")

# Apply scoring to a dataframe of headlines/articles
df_dict = scorer.score_df(df_corpus, text_col="headline")
df_dict.head()
```

This example scores each text based on the presence of terms related to **uncertainty**, **economics**, and **policy**. You can extend this by:
- Weighting the categories
- Creating composite indices (e.g., requiring all three categories to appear)
- Normalizing by total word count or news volume

---

## 2. Zero-Shot Learning

Zero-shot learning (ZSL) enables document classification without any labeled training data. Instead of relying on predefined word lists or trained classifiers, ZSL leverages large pre-trained language models (LLMs) to evaluate the semantic similarity between a document and a set of label descriptions.

A common use case is identifying whether a piece of text (e.g., a news article) relates to a specific economic concept, such as "finance" or "inflation", even if the system has never seen labeled examples of those concepts before.

The classification process can be summarized as:

- Given a query document $ q $, and a set of candidate labels $ \mathcal{L} $,
- Encode both the query and labels into a shared embedding space,
- Select the label $ \ell \in \mathcal{L} $ that is most semantically similar to the query.

The predicted label $ \hat{\ell} $ is obtained by:
$$
  \hat{\ell}_{\text{ZSL}} = \arg \underset{\ell \in \mathcal{L}}{\max} \quad \cos \left( \mathbf{E}(q), \mathbf{E}(\ell) \right)
$$

---

### 🧪 Code Example

```python
from FewShotX import Embeddings, ZeroShotLearner

# Generate embeddings
embedding_model = Embeddings(model_name='all-MiniLM-L6-v2')
df_embed = embedding_model.embed_df(df_corpus, text_col='headline')

# Define your target label
labels = ["economic policy uncertainty"]

# Instantiate the learner
zs = ZeroShotLearner(embedding_model.model, similarity='cosine')

# Score similarity between texts and label
df_scored = zs.score_df(
    df=df_embed.copy(),
    text_embedding_cols=[f"emb_{i}" for i in range(embedding_model.embedding_dim)],
    labels=labels,
    label_names=["is_epu"]
)

df_scored.head()
```

This approach is especially useful when:
- Labels are abstract (e.g., “risk”, “policy uncertainty”)
- You lack labeled data
- You want to prototype classification tasks quickly using LLMs

Zero-shot learning builds on the generalization power of transformer-based encoders like **BERT**, **RoBERTa**, or **SentenceTransformers**. It’s ideal for early exploration before moving to supervised or few-shot approaches.

---

## 3. Few-Shot Learning

Few-shot learning (FSL) bridges the gap between traditional supervised learning and zero-shot approaches by leveraging **just a few labeled examples** to make accurate predictions on unseen data. This is particularly valuable when building text-based indicators in low-resource or specialized domains, where labeled data is scarce or costly to obtain.

Examples include:

- Classifying nuanced *monetary policy* announcements or *economic sanctions*.
- Interpreting domain-specific texts, such as *clinical reports* or *political news*.
- Detecting emerging patterns in *fraud* or evolving *hate speech variants*.

**Goal**: to learn a mapping from limited support examples to labels that generalizes effectively to new, unseen queries, without relying on large annotated datasets.

---

### 🔧 Method Overview

[FewShotX](https://github.com/RenatoVassallo/FewShotX) implements a two-stage pipeline:

1. **Training**  
   A **linear model** with L2 regularization is trained on the *support set* (labeled examples). The optimization objective balances prediction error and regularization to prevent overfitting:

$$
\mathbf{W}^{\star} = \arg \min_{\mathbf{W}} \left( | \mathbf{X}^\top \mathbf{W} - \mathbf{Y} |^2 + \lambda | \mathbf{W} - \mathbb{I} |^2 \right)
$$

2. **Prediction**  
   New documents (*query set*) are classified by projecting their embeddings using the learned mapping $\mathbf{W}^{\star}$, and selecting the label that maximizes cosine similarity:

$$
\hat{\ell}_{\text{FSL}} = \arg \underset{\ell \in \mathcal{L}}{\max} \quad \cos \left( \mathbf{E}(q) \mathbf{W}^{\star}, \mathbf{E}(\ell) \mathbf{W}^{\star} \right)
$$

---

### 🧪 Code Example

```python
from FewShotX import Embeddings, FewShotLearner

# Instantiate the Embeddings class
embedding_model = Embeddings(model_name='all-MiniLM-L6-v2')

# Train our learner with the support set
learner = FewShotLearner(
    support_set, 
    text_col='text', 
    label_col='label', 
    embedding_model=embedding_model
)
learner.fit(val_split=0.2, lam=0.1, lr=0.1, epochs=20, early_stop=5, verbose=True)

# Compute predictions on the query set
predictions, acc = learner.predict(query_set, k=3, return_accuracy=True)
predictions
```

---

### 🧠 Notes

- This method is ideal for applications where labeled data is scarce.
- Overfitting is common with few examples, so tuning `lambda`, `learning rate`, and `early stopping` is critical.
- Supports any encoder (e.g. SBERT, OpenAI models, etc.) and can be extended to regression or ranking tasks.

---

## Beyond These Methods

While dictionary, zero-shot, and few-shot learning provide scalable ways to turn text into data, other complementary approaches are also common in empirical research:

- **Topic Modeling (e.g., LDA):** Unsupervised methods for identifying latent themes across large corpora (Blei et al., 2003).
  For example, [Mueller & Rauh (2022)](https://academic.oup.com/jeea/article/20/6/2440/6574413) use dynamic LDA to extract 15 evolving news topics that help forecast global armed conflict.

--- 

> All examples in this post are implemented using [FewShotX](https://github.com/RenatoVassallo/FewShotX), a Python package  
> for dictionary scoring, zero-shot, and few-shot learning in text classification.  
> Explore the [documentation and tutorials](https://github.com/RenatoVassallo/FewShotX/tree/main/tutorials) for hands-on notebooks.

