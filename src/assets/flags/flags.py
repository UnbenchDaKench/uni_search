import json, urllib.request, re

def writeToJSONFile(path, fileName, data):

    filePath = './' + path + '/' + fileName + '.json'
    with open(filePath, 'a+') as fp:
        json.dump(data, fp, indent=2)
country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua_amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
	,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia_and_Herzegovina","Botswana","Brazil","British_Virgin Islands"
	,"Brunei","Bulgaria","Burkina_Faso","Burundi","Cambodia","Cameroon","Canada","Cape_Verde","Cayman_Islands","Chad","Chile","China","Colombia","Congo","Cook_Islands","Costa_Rica"
	,"Ivorycoast","Croatia","Cuba","Cyprus","Czech_Republic","Denmark","Djibouti","Dominica","Dominican_Republic","Ecuador","Egypt","El Salvador","Equatorial_Guinea"
	,"Estonia","Ethiopia","Falkland Islands","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana"
	,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea_Bissau","Guyana","Haiti","Honduras","Hong_Kong","Hungary","Iceland","India"
	,"Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
	,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
	,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New_Caledonia"
	,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New_Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
	,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda", "Miquelon","Samoa","San_Marino","Satellite","Saudi_Arabia","Senegal","Serbia","Seychelles"
	,"Sierra Leone","Singapore","Slovakia","Slovenia","South_Africa","South_Korea","Spain","Sri_Lanka","Saint_and_Kitts_and_Nevis","Saint_Vincent","Saint_Lucia","Sudan"
	,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","East_Timor","Togo","Tonga","Trinidad_and_Tobago","Tunisia"
	,"Turkey","Turkmenistan","Uganda","Ukraine","United_Arab_Emirates","United_Kingdom","United_States","Uruguay"
	,"Uzbekistan","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"]

for country in country_list:
    newdata = {country: 'http://sciencekids.co.nz/images/pictures/flags680/{}.jpg' .format(country)}
    print(newdata)
    writeToJSONFile('./', 'flags.json', newdata)
