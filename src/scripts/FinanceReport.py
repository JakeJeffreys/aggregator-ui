
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
import time

# dns = "http://api.blogbase.io"
dns = "https://localhost:5000"
postURL = dns + "/api/blog"
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

#################################
# Financial Samurai
#################################

url = "https://www.financialsamurai.com/"
response = requests.get(url)
html = response.content
soup = BeautifulSoup(html, "html.parser")

articleFS_1 = soup.find_all("h2", class_="entry-title")[0].string
linkFS_1 = soup.find_all("h2", class_="entry-title")[0].a.get('href')

articleFS_2 = soup.find_all("h2", class_="entry-title")[1].string
linkFS_2 = soup.find_all("h2", class_="entry-title")[1].a.get('href')

articleFS_3 = soup.find_all("h2", class_="entry-title")[2].string
linkFS_3 = soup.find_all("h2", class_="entry-title")[2].a.get('href')

blogData1 = {
    "id": 1,
    "category": "Finance",
    "website": "Financial Samurai",
    "author": "Sam Dogen",
    "url": url,
    "article1": articleFS_1,
    "date1": "No date available",
    "link1": linkFS_1,
    "article2": articleFS_2,
    "date2": "No date available",
    "link2": linkFS_2,
    "article3": articleFS_3,
    "date3": "No date available",
    "link3": linkFS_3,
}

resp = requests.post(postURL, data=json.dumps(blogData1), headers=headers, verify='./certs/publicCert.pem')
print("FS: ", resp)


# #################################
# # Oblivious Invester
# #################################
#
# url = "https://obliviousinvestor.com/"
# response = requests.get(url)
# html = response.content
# soup = BeautifulSoup(html, "html.parser")
#
# dateOI_1 = soup.find("span", class_="date published time").get('title').split('T')[0]
# articleOI_1 = soup.find("a", class_="entry-title-link").string
# linkOI_1 = soup.find("a", class_="entry-title-link").get('href')
#
# dateOI_2 = soup.find_all("span", class_="date published time")[1].get('title').split('T')[0]
# articleOI_2 = soup.find_all("a", class_="entry-title-link")[1].string
# linkOI_2 = soup.find_all("a", class_="entry-title-link")[1].get('href')
#
# dateOI_3 = soup.find_all("span", class_="date published time")[2].get('title').split('T')[0]
# articleOI_3 = soup.find_all("a", class_="entry-title-link")[2].string
# linkOI_3 = soup.find_all("a", class_="entry-title-link")[2].get('href')
#
# blogData2 = {
#     "id": 2,
#     "category": "Finance",
#     "website": "Oblivious Investor",
#     "author": "Mike Piper",
#     "url": url,
#     "article1": articleOI_1,
#     "date1": dateOI_1,
#     "link1": linkOI_1,
#     "article2": articleOI_2,
#     "date2": dateOI_2,
#     "link2": linkOI_2,
#     "article3": articleOI_3,
#     "date3": dateOI_3,
#     "link3": linkOI_3,
# }
#
# resp = requests.post(postURL, data=json.dumps(blogData2), headers=headers)
# print("OI: ", resp)
#
#
# #################################
# # Retire By 40
# #################################
#
# url = "https://retireby40.org/"
# response = requests.get(url)
# html = response.content
# soup = BeautifulSoup(html, "html.parser")
#
# dateRBF_1 = soup.find_all("span", class_="post_date")[0].get('title')
# articleRBF_1 = soup.find_all("h2", class_="headline")[0].string
# linkRBF_1 = soup.find_all("h2", class_="headline")[0].a.get('href')
#
# dateRBF_2 = soup.find_all("span", class_="post_date")[1].get('title')
# articleRBF_2 = soup.find_all("h2", class_="headline")[1].string
# linkRBF_2 = soup.find_all("h2", class_="headline")[1].a.get('href')
#
# dateRBF_3 = soup.find_all("span", class_="post_date")[2].get('title')
# articleRBF_3 = soup.find_all("h2", class_="headline")[2].string
# linkRBF_3 = soup.find_all("h2", class_="headline")[2].a.get('href')
#
# blogData3 = {
#     "id":3,
#     "category": "Finance",
#     "website": "Retire By 40",
#     "author": "Joe Udo",
#     "url": url,
#     "article1": articleRBF_1,
#     "date1": dateRBF_1,
#     "link1": linkRBF_1,
#     "article2": articleRBF_2,
#     "date2": dateRBF_2,
#     "link2": linkRBF_2,
#     "article3": articleRBF_3,
#     "date3": dateRBF_3,
#     "link3": linkRBF_3,
# }
#
# resp = requests.post(postURL, data=json.dumps(blogData3), headers=headers)
# print("RBF: ", resp)
#
#
# #################################
# # My Money Blog
# #################################
#
# url = "https://www.mymoneyblog.com/"
# response = requests.get(url)
# html = response.content
# soup = BeautifulSoup(html, "html.parser")
#
# dateMMB_1 = soup.find_all("span", class_="date published time")[0].get('title').split('T')[0]
# articleMMB_1 = soup.find_all("a", class_="entry-title-link")[0].string
# linkMMB_1 = soup.find_all("a", class_="entry-title-link")[0].get('href')
#
# dateMMB_2 = soup.find_all("span", class_="date published time")[2].get('title').split('T')[0]
# articleMMB_2 = soup.find_all("a", class_="entry-title-link")[1].string
# linkMMB_2 = soup.find_all("a", class_="entry-title-link")[1].get('href')
#
# dateMMB_3 = soup.find_all("span", class_="date published time")[4].get('title').split('T')[0]
# articleMMB_3 = soup.find_all("a", class_="entry-title-link")[2].string
# linkMMB_3 = soup.find_all("a", class_="entry-title-link")[2].get('href')
#
# blogData4 = {
#     "id": 4,
#     "category": "Finance",
#     "website": "My Money Blog",
#     "author": "Jonathan Ping",
#     "url": url,
#     "article1": articleMMB_1,
#     "date1": dateMMB_1,
#     "link1": linkMMB_1,
#     "article2": articleMMB_2,
#     "date2": dateMMB_2,
#     "link2": linkMMB_2,
#     "article3": articleMMB_3,
#     "date3": dateMMB_3,
#     "link3": linkMMB_3,
# }
#
# resp = requests.post(postURL, data=json.dumps(blogData4), headers=headers)
# print("MMB: ", resp)
