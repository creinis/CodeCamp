# Page View Time Series Visualizer

import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Import data (Make sure to parse dates. Consider setting index column to 'date'.)
df = pd.read_csv('fcc-forum-pageviews.csv', index_col='date', parse_dates=True)

# Clean data
df = df[
    (df['value'] >= df['value'].quantile(0.025)) &
    (df['value'] <= df['value'].quantile(0.975))
]

def draw_line_plot():
    # Draw line plot
    fig, ax = plt.subplots(figsize=(14, 7))
    ax.plot(df.index, df['value'], color='r', linewidth=1)
    ax.set_title('Daily freeCodeCamp Forum Page Views 5/2016-12/2019')
    ax.set_xlabel('Date')
    ax.set_ylabel('Page Views')

    # Save image and return fig (don't change this part)
    fig.savefig('line_plot.png')
    return fig

def draw_bar_plot():
    # Copy and modify data for monthly bar plot
    df_bar = df.copy()
    df_bar['year'] = df_bar.index.year
    df_bar['month'] = df_bar.index.month_name()

    # Draw bar plot
    fig, ax = plt.subplots(figsize=(10, 6))
    sns.barplot(x='year', y='value', hue='month', data=df_bar, ci=None, palette='viridis',
                order=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])
    ax.set_xlabel('months of the year')
    ax.set_ylabel('Average Page Views')
    ax.legend(title='Months')
    ax.set_title('Average Daily Page Views for Each Month Grouped by Year')

    # Save image and return fig (don't change this part)
    fig.savefig('bar_plot.png')
    return fig

def draw_box_plot():
    # Prepare data for box plots (this part is done!)
    df_box = df.copy()
    df_box.reset_index(inplace=True)
    df_box['year'] = [d.year for d in df_box.index]
    df_box['month'] = [d.strftime('%b') for d in df_box.index]

    # Draw box plots (using Seaborn)
    fig, ax = plt.subplots(figsize=(20, 8))
    plt.subplot(1, 2, 1)
    sns.boxplot(x='year', y='value', data=df_box)
    plt.xlabel('Year')
    plt.ylabel('Page Views')
    plt.title('Year-wise Box Plot (Trend)')

    plt.subplot(1, 2, 2)
    sns.boxplot(x='month', y='value', data=df_box, order=[
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])
    plt.xlabel('Month')
    plt.ylabel('Page Views')
    plt.title('Month-wise Box Plot (Seasonality)')

    # Save image and return fig (don't change this part)
    fig.savefig('box_plot.png')
    return fig

# Example usage:
# draw_line_plot()
# draw_bar_plot()
# draw_box_plot()
