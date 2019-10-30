
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

dns = "http://api.blogbase.io"
postURL = dns + "/api/blog"
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

#################################
# Coding horror
#################################

url = "https://blog.codinghorror.com/"
response = requests.get(url)
html = response.content
soup = BeautifulSoup(html, "html.parser")

dateCH_1 = soup.find_all("span", class_="post-meta")[0].time.get('datetime')
articleCH_1 = soup.find_all("h2", class_="post-title")[0].string
linkCH_1 = soup.find_all("h2", class_="post-title")[0].a.get('href')

dateCH_2 = soup.find_all("span", class_="post-meta")[1].time.get('datetime')
articleCH_2 = soup.find_all("h2", class_="post-title")[1].string
linkCH_2 = soup.find_all("h2", class_="post-title")[1].a.get('href')

dateCH_3 = soup.find_all("span", class_="post-meta")[2].time.get('datetime')
articleCH_3 = soup.find_all("h2", class_="post-title")[2].string
linkCH_3 = soup.find_all("h2", class_="post-title")[2].a.get('href')

blogData5 = {
    "id": 5,
    "category": "Tech",
    "website": "Coding Horror",
    "author": "Jeff Atwood",
    "url": url,
    "article1": articleCH_1,
    "date1": dateCH_1,
    "link1": url + linkCH_1,
    "article2": articleCH_2,
    "date2": dateCH_2,
    "link2": url + linkCH_2,
    "article3": articleCH_3,
    "date3": dateCH_3,
    "link3": url + linkCH_3,
}

resp = requests.post(postURL, data=json.dumps(blogData5), headers=headers)
print("CH: ", resp)


#################################
# Joel On Software
#################################

url = "https://www.joelonsoftware.com/"
response = requests.get(url)
html = response.content
soup = BeautifulSoup(html, "html.parser")

dateJOS_1 = soup.find_all("time", class_="entry-date published")[0].get('datetime').split('T')[0]
articleJOS_1 = soup.find_all("h2", class_="entry-title")[0].string
linkJOS_1 = soup.find_all("h2", class_="entry-title")[0].a.get('href')

dateJOS_2 = soup.find_all("time", class_="entry-date published")[1].get('datetime').split('T')[0]
articleJOS_2 = soup.find_all("h2", class_="entry-title")[1].string
linkJOS_2 = soup.find_all("h2", class_="entry-title")[1].a.get('href')

dateJOS_3 = soup.find_all("time", class_="entry-date published")[2].get('datetime').split('T')[0]
articleJOS_3 = soup.find_all("h2", class_="entry-title")[2].string
linkJOS_3 = soup.find_all("h2", class_="entry-title")[2].a.get('href')

blogData6 = {
    "id": 6,
    "category": "Tech",
    "website": "Joel On Software",
    "author": "Joel Spolsky",
    "url": url,
    "article1": articleJOS_1,
    "date1": dateJOS_1,
    "link1": linkJOS_1,
    "article2": articleJOS_2,
    "date2": dateJOS_2,
    "link2": linkJOS_2,
    "article3": articleJOS_3,
    "date3": dateJOS_3,
    "link3": linkJOS_3,
}

resp = requests.post(postURL, data=json.dumps(blogData6), headers=headers)
print("JOS: ", resp)

#################################
# A List Apart
#################################

url = "https://alistapart.com/"
response = requests.get(url)
html = response.content
soup = BeautifulSoup(html, "html.parser")

dateALA_1 = soup.find_all("time", class_="entry-date published")[0].get('datetime').split('T')[0]
articleALA_1 = soup.find_all("h2", class_="entry-title")[0].string
linkALA_1 = soup.find_all("h2", class_="entry-title")[0].a.get('href')

dateALA_2 = soup.find_all("time", class_="entry-date published")[1].get('datetime').split('T')[0]
articleALA_2 = soup.find_all("h2", class_="entry-title")[1].string
linkALA_2 = soup.find_all("h2", class_="entry-title")[1].a.get('href')

# dateALA_3 = soup.find_all("time", class_="entry-date published")[2].get('datetime').split('T')[0]
# articleALA_3 = soup.find_all("h2", class_="entry-title")[2].string
# linkALA_3 = soup.find_all("h2", class_="entry-title")[2].a.get('href')

blogData7 = {
    "id": 7,
    "category": "Tech",
    "website": "Joel On Software",
    "author": "Joel Spolsky",
    "url": url,
    "article1": articleALA_1,
    "date1": dateALA_1,
    "link1": linkALA_1,
    "article2": articleALA_2,
    "date2": dateALA_2,
    "link2": linkALA_2,
    # "article3": articleALA_3,
    # "date3": dateALA_3,
    # "link3": linkALA_3,
}

resp = requests.post(postURL, data=json.dumps(blogData7), headers=headers)
print("ALA: ", resp)