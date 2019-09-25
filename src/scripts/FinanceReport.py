
##################################################
## Description: Scraper for new finance blogs
##################################################
## MIT License
## Copyright (c) 2018 Jake Jeffreys
##################################################

import requests
import json
import datetime
from bs4 import BeautifulSoup

currentDate = datetime.datetime.today()
cutoffDate = (currentDate - datetime.timedelta(days=10))
cutoffDateString = cutoffDate.strftime('%Y-%m-%d')

blogData = {}

#################################
# Oblivious Invester
#################################

url = "https://obliviousinvestor.com/"
response = requests.get(url)
html = response.content
soup = BeautifulSoup(html, "html.parser")

dateOI = soup.find("span", class_="date published time").get('title').split('T')[0]
articleOI = soup.find("a", class_="entry-title-link").string

new = False
if dateOI > cutoffDateString:
    new = True
else:
    new = False

blogData['Oblivious Investor'] = []
blogData['Oblivious Investor'].append({
    'date': dateOI,
    'article': articleOI,
    'url': url,
    'new': new
})


#################################
# Retire By 40
#################################

url = "https://retireby40.org/"
response = requests.get(url)
html = response.content
soup = BeautifulSoup(html, "html.parser")

dateRBF = soup.find("span", class_="post_date").get('title')
articleRBF = soup.h2.get_text()

new = False
if dateRBF > cutoffDateString:
    new = True
else:
    new = False

blogData['Retire By 40'] = []
blogData['Retire By 40'].append({
    'date': dateRBF,
    'article': articleRBF,
    'url': url,
    'new': new
})


#################################
# My Money Blog
#################################

url = "https://www.mymoneyblog.com/"
response = requests.get(url)
html = response.content
soup = BeautifulSoup(html, "html.parser")

dateMMB = soup.find("span", class_="date published time").get('title').split('T')[0]
articleMMB = soup.h2.get_text()

new = False
if dateMMB > cutoffDateString:
    new = True
else:
    new = False

blogData['My Money Blog'] = []
blogData['My Money Blog'].append({
    'date': dateMMB,
    'article': articleMMB,
    'url': url,
    'new': new
})


#################################
# Final Print to Console
#################################

print (blogData)

with open('json/financeblogs.json', 'w') as outfile:
    json.dump(blogData, outfile)
