import urllib, json
from urllib.request import urlretrieve
from urllib.error import HTTPError



with open('flags.json', 'r') as f:
    flags = json.load(f)

for image in flags:
    print(flags[image])
    try:
        urlretrieve(flags[image], image+".jpg")
    except FileNotFoundError as err:
        print(err)   
    except HTTPError as err:
        print(err)  