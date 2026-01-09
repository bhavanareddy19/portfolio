# Plate-to-Health: A Global Nutritional Journey

<div align="center">

![Project Status](https://img.shields.io/badge/Status-Complete-success)
![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)
![ML Models](https://img.shields.io/badge/ML%20Models-6-orange)
![Data Science](https://img.shields.io/badge/Data%20Science-Nutrition%20Analytics-green)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

### Transforming Global Nutritional Data into Actionable Health Insights

[View Website](https://harshithaattanti1.wixsite.com/platetohealth) | [Explore Datasets](./Datasets.zip) | [View Visualizations](./Visualizations%20.ipynb)

</div>

---

## Table of Contents
- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Key Features](#key-features)
- [Dataset](#dataset)
- [Tech Stack](#tech-stack)
- [Methodology](#methodology)
- [Machine Learning Models](#machine-learning-models)
- [Visualizations](#visualizations)
- [Results & Insights](#results--insights)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [Contact](#contact)

---

## Overview

**Plate-to-Health** is a comprehensive data science project that analyzes the intricate relationship between diet and health across global populations. By leveraging the **Global Dietary Database (GDD)**, this project examines how demographic factors such as age, gender, education, and geographic location influence dietary habits over time (2010-2020).

The project processes and analyzes **1.4+ million records** across **185 countries** and **7 superregions**, covering **26 dietary factors** ranging from basic food groups to essential vitamins and minerals.

---

## Problem Statement

Global nutritional disparities are a critical public health challenge. Understanding dietary patterns across different demographics is essential for:

- **Identifying nutritional gaps** in vulnerable populations
- **Tracking temporal trends** in dietary habits (2010-2020)
- **Informing policy decisions** for targeted health interventions
- **Addressing micronutrient deficiencies** at regional and global scales
- **Understanding the impact** of education and urbanization on dietary choices

This project addresses these challenges by providing a data-driven analysis framework to uncover actionable insights from global nutritional data.

---

## Key Features

### Data Processing Excellence
- **Multi-dataset Integration**: Successfully merged 13+ dietary factor datasets with standardized preprocessing
- **Comprehensive Cleaning Pipeline**: Handled missing values, outliers, and duplicates across 1.4M+ records
- **Smart Data Reduction**: Applied undersampling and stratification techniques to create balanced, manageable datasets
- **Feature Engineering**: Created meaningful categorical encodings and temporal features

### Advanced Analytics
- **6 Machine Learning Models**: Ridge, Lasso, KNN, Random Forest, XGBoost, and Bayesian Regression
- **Hyperparameter Optimization**: GridSearchCV for optimal model performance
- **Comprehensive Evaluation**: MAE, MSE, RMSE, R², and Adjusted R² metrics
- **11+ Interactive Visualizations**: From correlation heatmaps to radar charts

### Global Scope
- **185 Countries** analyzed across 7 superregions (Asia, FSU, HIC, LAC, MENA, SAARC, SSA)
- **26 Dietary Factors** including foods, macronutrients, and micronutrients
- **Temporal Analysis** spanning 2010-2020
- **Demographic Segmentation** by age (12.5-42.5 years), gender, education, and region

---

## Dataset

### Source
**Global Dietary Database (GDD)** - A comprehensive repository of dietary intake data worldwide

### Specifications
| Metric | Value |
|--------|-------|
| Total Records | 1,442,560+ (post-preprocessing) |
| Countries Covered | 185 |
| Superregions | 7 (Asia, FSU, HIC, LAC, MENA, SAARC, SSA) |
| Time Period | 2010-2020 |
| Age Range | 12.5-42.5 years |
| Dietary Factors | 26 |

### Dietary Categories Analyzed
**Foods & Beverages**: Fruits, Vegetables (non-starchy & starchy), Potatoes, Beans, Legumes, Nuts, Seeds, Grains (refined & whole), Meats (processed & unprocessed), Seafood, Eggs, Dairy

**Macronutrients**: Dietary Fiber, Calcium, Protein sources (Cheese, Milk, etc.)

**Micronutrients**: Vitamins (A, B12, C, D), Minerals (Magnesium, Calcium), Added Sugars

---

## Tech Stack

### Languages & Libraries
- **Python 3.8+**: Core programming language
- **Pandas**: Data manipulation and analysis
- **NumPy**: Numerical computing
- **Matplotlib & Seaborn**: Static visualizations
- **Plotly**: Interactive visualizations

### Machine Learning
- **Scikit-learn**: ML algorithms and preprocessing
- **XGBoost**: Gradient boosting implementation
- **GridSearchCV**: Hyperparameter tuning

### Development Tools
- **Jupyter Notebook**: Interactive development environment
- **Git & GitHub**: Version control and collaboration

---

## Methodology

### 1. Data Acquisition & Preprocessing
```python
- Loaded 13 country-level datasets (v01-v27_cnty.csv)
- Standardized column naming conventions
- Filtered data: year >= 2010, age: 12.5-42.5 years
- Removed null values and outliers using IQR method
- Merged datasets with dietary factor labeling
```

### 2. Exploratory Data Analysis
```python
- Statistical summaries and distribution analysis
- Correlation analysis between features
- Temporal trend identification
- Demographic pattern recognition
```

### 3. Feature Engineering
```python
- Categorical encoding for regions and countries
- Age group stratification
- Education level standardization
- Confidence interval calculations
```

### 4. Model Development
```python
- Train-test split (80-20)
- Feature scaling using StandardScaler
- Hyperparameter tuning via GridSearchCV
- Cross-validation (5-fold CV)
```

### 5. Evaluation & Visualization
```python
- Multi-metric evaluation (MAE, MSE, RMSE, R², Adjusted R²)
- Comparative model analysis
- Interactive and static visualizations
```

---

## Machine Learning Models

### 1. Ridge Regression
- **Purpose**: Linear regression with L2 regularization
- **Hyperparameters**: alpha = [0.001, 0.01, 0.1, 1.0, 10.0, 100.0, 1000.0]
- **Use Case**: Handling multicollinearity in dietary factors

### 2. Lasso Regression
- **Purpose**: Linear regression with L1 regularization
- **Feature Selection**: Automatic feature selection capability
- **Use Case**: Identifying most influential dietary predictors

### 3. K-Nearest Neighbors (KNN)
- **Hyperparameters**: n_neighbors=[3,5,7,9,11,15,21], weights=['uniform','distance'], p=[1,2]
- **Use Case**: Non-linear pattern recognition in dietary habits

### 4. Random Forest
- **Configuration**: n_estimators=100, max_depth=20, min_samples_split=2
- **Advantage**: Handles non-linear relationships and feature interactions
- **Use Case**: Robust prediction with feature importance analysis

### 5. XGBoost
- **Configuration**: n_estimators=100, learning_rate=0.1, max_depth=3
- **Advantage**: State-of-the-art gradient boosting performance
- **Use Case**: Highest accuracy predictions

### 6. Bayesian Ridge Regression
- **Probabilistic Approach**: Incorporates uncertainty in predictions
- **Lambda Tuning**: [1e-6, 1e-4, 1e-2, 1, 10]
- **Use Case**: Probabilistic nutritional intake forecasting

### Model Performance Comparison
All models evaluated using:
- Mean Absolute Error (MAE)
- Mean Squared Error (MSE)
- Root Mean Squared Error (RMSE)
- R² Score
- Adjusted R² Score

---

## Visualizations

### 11 Comprehensive Visualizations

1. **Dietary Factors Across Countries** - Stacked bar chart showing distribution
2. **Fruit Intake Distribution** - Strip plot across 185 countries
3. **Nutrition by Gender** - Violin plot comparing male vs female intake
4. **Temporal Trends (2010-2020)** - Bar chart of yearly diet changes
5. **Education-Diet Correlation** - Horizontal bar chart
6. **Correlation Matrix** - Heatmap of age, education, year, and median intake
7. **Regional Nutrition Patterns** - Stacked histogram by region
8. **Pairwise Relationships** - Seaborn pairplot with KDE distributions
9. **USA/Canada Elderly Nutrition** - Radar chart for older populations
10. **Hierarchical Dietary Breakdown** - Sunburst chart (Plotly)
11. **Age Group Analysis** - Box plot with outlier capping

All visualizations available in [Visualizations.ipynb](./Visualizations%20.ipynb)

---

## Results & Insights

### Key Findings

#### Global Patterns
- **Regional Disparities**: Significant variation in dietary factor intake across superregions
- **Urban vs Rural**: Urban populations show higher diversity in dietary factors
- **Education Impact**: Positive correlation between education level and balanced nutrition

#### Temporal Trends (2010-2020)
- **Increasing Awareness**: Gradual improvement in micronutrient intake
- **Refined Grains**: Decreasing trend in favor of whole grains
- **Fruit & Vegetable Gap**: Persistent undernutrition in SSA and SAARC regions

#### Demographic Insights
- **Gender Differences**: Minimal variance in overall intake, but distinct patterns in specific nutrients
- **Age Correlation**: Dietary diversity increases with age (12.5 to 42.5 years)
- **Education Effect**: Higher education correlates with improved micronutrient intake

#### Model Performance
- **Best Performer**: XGBoost achieved the lowest RMSE
- **Interpretability**: Ridge and Lasso provide clear feature coefficients
- **Robustness**: Random Forest showed consistent performance across all metrics

---

## Installation

### Prerequisites
```bash
Python 3.8 or higher
pip package manager
Jupyter Notebook
```

### Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/bhavanareddy19/plate-to-health-AGlobalNutritionaljourney.git
cd plate-to-health-AGlobalNutritionaljourney
```

2. **Create virtual environment (recommended)**
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install dependencies**
```bash
pip install pandas numpy scikit-learn xgboost matplotlib seaborn plotly jupyter
```

4. **Extract datasets**
```bash
# Unzip Datasets.zip to access individual CSV files
unzip Datasets.zip
```

5. **Launch Jupyter Notebook**
```bash
jupyter notebook
```

6. **Run notebooks in order**
- `part 1 of datasets (3).ipynb` - Data preprocessing (first 13 datasets)
- `part 2 of datasets.ipynb` - Data preprocessing (remaining datasets)
- `model_training.ipynb` - Machine learning model training
- `Visualizations.ipynb` - Generate all visualizations

---

## Project Structure

```
plate-to-health-AGlobalNutritionaljourney/
│
├── Datasets.zip                      # Raw datasets (67.4 MB)
├── final_merged_data.xls             # Preprocessed merged data (86.5 MB)
│
├── part 1 of datasets (3).ipynb      # Data preprocessing pipeline 1
├── part 2 of datasets.ipynb          # Data preprocessing pipeline 2
├── model_training.ipynb              # ML model development & evaluation
├── Visualizations.ipynb              # All 11 visualizations
│
├── README.md                         # Project documentation (this file)
└── .git/                             # Git version control
```

---

## Future Enhancements

### Short-term Goals
- [ ] Deploy interactive dashboard using Streamlit/Dash
- [ ] Add time-series forecasting models (ARIMA, Prophet)
- [ ] Implement deep learning models (LSTM for temporal patterns)
- [ ] Create API for nutritional intake predictions

### Long-term Vision
- [ ] Expand dataset to include 2021-2025 data
- [ ] Integrate socioeconomic indicators (GDP, healthcare spending)
- [ ] Develop mobile app for personalized dietary recommendations
- [ ] Collaborate with public health organizations for policy impact

---

## Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## Contact

**Project Maintainer**: [Your Name]

- **GitHub**: [@yourusername](https://github.com/yourusername)
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **Email**: your.email@example.com
- **Project Website**: [Plate-to-Health](https://harshithaattanti1.wixsite.com/platetohealth)

---

## Acknowledgments

- **Global Dietary Database (GDD)** for providing comprehensive nutritional data
- **Scikit-learn** and **XGBoost** communities for excellent ML libraries
- **Matplotlib**, **Seaborn**, and **Plotly** for visualization capabilities

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

### If you found this project helpful, please consider giving it a star!

Made with passion for global health and data science

</div>
