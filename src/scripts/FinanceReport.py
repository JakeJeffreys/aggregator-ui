
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

postURL = "http://localhost:8080/api/blog"
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

currentDate = datetime.datetime.today()
cutoffDate = (currentDate - datetime.timedelta(days=10))
cutoffDateString = cutoffDate.strftime('%Y-%m-%d')

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

blogData1 = {
    "category": "Tech",
    "website": "Oblivious Investor",
    "author": "Mike Piper",
    "article1": articleOI,
    "date1": dateOI,
    "link1": url,
    "article2": articleOI,
    "date2": dateOI,
    "link2": url,
    "article3": articleOI,
    "date3": dateOI,
    "link3": url,
}

resp = requests.post(postURL, data=json.dumps(blogData1), headers=headers)
print("OI: ", resp)


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

blogData2 = {
    "category": "Tech",
    "website": "Retire By 40",
    "author": "Joe Udo",
    "article1": articleRBF,
    "date1": dateRBF,
    "link1": url,
    "article2": articleRBF,
    "date2": dateRBF,
    "link2": url,
    "article3": articleRBF,
    "date3": dateRBF,
    "link3": url,
}

resp = requests.post(postURL, data=json.dumps(blogData2), headers=headers)
print("RBF: ", resp)


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

blogData2 = {
    "category": "Tech",
    "website": "My Money Blog",
    "author": "Jonathan Ping",
    "article1": articleMMB,
    "date1": dateMMB,
    "link1": url,
    "article2": articleMMB,
    "date2": dateMMB,
    "link2": url,
    "article3": articleMMB,
    "date3": dateMMB,
    "link3": url,
}

resp = requests.post(postURL, data=json.dumps(blogData2), headers=headers)
print("MMB: ", resp)
