#!/usr/bin/env python
import cgi
import sys
import logging
import subprocess

logging.basicConfig(filename='error.log',level=logging.DEBUG)
output = ""
result = ""
try:
    form = cgi.FieldStorage()
    value = form.getvalue("method")
    if(value == 'pull'):
       process = subprocess.Popen(["git", "fetch", "--all"], stdout=subprocess.PIPE)
       output = process.communicate()[0]
       logging.info("Fetched: " + str(output))
       process = subprocess.Popen(["git", "reset", "--hard",  "origin/master"], stdout=subprocess.PIPE)
       output = process.communicate()[0]
       logging.info("Reset: " + str(output))
       process = subprocess.Popen(["git", "pull"], stdout=subprocess.PIPE)
       output = process.communicate()[0]
       logging.info("Pulled from master: " + str(output))
       result = str(output)
    else:
       print("Status: 404 Not Found\n")
       result = "Parameter Not Recognized"
except Exception as e:
    logging.info("POST ERROR: " + str(e))
    print("Status: 500 Internal Server Error\n")
    result = "Error happend in the Python script"

print("Content-Type: text/text")
print
print(result)
print("Success")
