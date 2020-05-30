import requests
import json

parameters={"limit":1000,"days":5000}
response=requests.get('https://eonet.sci.gsfc.nasa.gov/api/v3/events/geojson')
if response.status_code == 200:
    print('Success!')
elif response.status_code == 404:
    print('Not Found.')
json_response = response.json()
json_data = json.loads(response.text)
jsan_data_features=json_data['features']
date=[]
for events in range(len(jsan_data_features)):
       title=jsan_data_features[events]['properties']['title']
       cordenates=jsan_data_features[events]['geometry']['coordinates']
       print("title :"+str(title)+"  cordenadas :" + str(cordenates))

