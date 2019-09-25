
##################################################
## Description: Scraper for new blog posts and social media notifications.
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


#################################
# Coding horror
#################################

url = "https://blog.codinghorror.com/"
response = requests.get(url)
html = response.content
soup = BeautifulSoup(html, "html.parser")

dateCH = soup.time.get('datetime')
articleCH = soup.find("h2", class_="post-title").string

new = False
if dateCH > cutoffDateString:
    new = True
else:
    new = False

blogData = {}
blogData['Coding Horror'] = []
blogData['Coding Horror'].append({
    'date': dateCH,
    'article': articleCH,
    'url': url,
    'new': new
})


#################################
# Joel On Software
#################################

url = "https://www.joelonsoftware.com/"
response = requests.get(url)
html = response.content
soup = BeautifulSoup(html, "html.parser")

dateJOS = soup.time.get('datetime').split('T')[0]
articleJOS = soup.find("h2", class_="entry-title").string

new = False
if dateJOS > cutoffDateString:
    new = True
else:
    new = False

blogData['Joel On Software'] = []
blogData['Joel On Software'].append({
    'date': dateJOS,
    'article': articleJOS,
    'url': url,
    'new': new
})


#################################
# A List Apart
#################################

url = "https://alistapart.com/"
response = requests.get(url)
html = response.content
soup = BeautifulSoup(html, "html.parser")

dateALA = soup.time.get('datetime').split('T')[0]
articleALA = soup.find("h2", class_="entry-title").string

new = False
if dateALA > cutoffDateString:
    new = True
else:
    new = False

blogData['A List Apart'] = []
blogData['A List Apart'].append({
    'date': dateALA,
    'article': articleALA,
    'url': url,
    'new': new
})


#################################
# Final Print to Console
#################################

print (blogData)

with open('json/techblogs.json', 'w') as outfile:
    json.dump(blogData, outfile)
