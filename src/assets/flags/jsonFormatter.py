import json
def substring_after(string, delim):
    return string.partition(delim)[2]
def substring_before(string, delim):
    return string.partition(delim)[-2]
count = 0

def writeToJSONFile(path, fileName, data):
    filePath = './' + path + '/' + fileName + '.json'
    with open(filePath, 'a+') as fp:
        json.dump(data, fp, indent=2)

with open('uni.json', 'r') as f:
    uni = json.load(f)

states= [
          "Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua_and_Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
	,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia_and_Herzegovina","Botswana","Brazil","British_Virgin_Islands"
	,"Brunei","Bulgaria","Burkina_Faso","Burundi","Cambodia","Cameroon","Canada","Cape_Verde","Cayman_Islands","Chad","Chile","China","Colombia","Congo","Cook_Islands","Costa_Rica"
	,"Ivorycoast","Croatia","Cuba","Cyprus","Czech_Republic","Denmark","Djibouti","Dominica","Dominican_Republic","Ecuador","Egypt","El_Salvador","Equatorial_Guinea"
	,"Estonia","Ethiopia","Falkland Islands","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana"
	,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea_Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
	,"Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz_Republic","Laos","Latvia"
	,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
	,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New_Caledonia"
	,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New_Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
	,"Puerto_Rico","Qatar","Reunion","Romania","Russia","Rwanda", "Miquelon","Samoa","San_Marino","Satellite","Saudi_Arabia","Senegal","Serbia","Seychelles"
	,"Sierra_Leone","Singapore","Slovakia","Slovenia","South_Africa","South_Korea","Spain","Sri_Lanka","Saint_and_Kitts_and_Nevis","Saint_Vincent","Saint_Lucia","Sudan"
	,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","East_Timor","Togo","Tonga","Trinidad_and_Tobago","Tunisia"
	,"Turkey","Turkmenistan","Uganda","Ukraine","United_Arab_Emirates","United_Kingdom","United_States","Uruguay"
	,"Uzbekistan","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
],
states = states[0]
length = len(states)
#Loops through all the objects in the Json

# for universities in uni:
#     print(universities['country'])
#     string = universities['country'].replace(" ", "_")
#     print(string)
for universities in uni:
    for i in range(0, length-1):
        # print(states[i])
        new = states[i].replace(" ", "_")
        string = universities['country'].replace(" ", "_")
        if ((string == states[i])):
            newflag =  "http://sciencekids.co.nz/images/pictures/flags680/" + states[i] +".jpg"
            universities['alpha_two_code'] = newflag
            print(universities['alpha_two_code'])
    writeToJSONFile('./', 'including', universities)


    # if (universities['country'] == 'Nigeria'):
    #     state = {}
    #     var = universities['name']
    #     var = urllib.parse.quote_plus(var)
    #     # print(var)
    #     #Makes the url an argument that accepts one variable
    #     url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=school=%s&inputtype=textquery&fields=formatted_address&key=AIzaSyAegEw7Hl7NilX0ZBnznVCbCA7mdXsVGuo" %(var)

    #     #gets the response from the url
    #     response = urllib.request.urlopen(url)
    #     data = json.loads(response.read())
    #     if(data['status'] == 'OK'):
    #         f = data['candidates']
    #         address = f[0]['formatted_address']
    #         address1 = address.split()
    #         length = len(address1)
    #         newWord = address1[length-2]
    #         universities['state-province'] = newWord
    #         count += 1

    #         # print (newWord)
    #         print(address1)
    #         print(count)
    #     else:
    #         universities['state-province'] = "NULL"
            
        # writeToJSONFile('./', 'Nigeriajson', universities)
