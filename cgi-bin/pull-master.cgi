#!/usr/bin/env python
import cgi
import sys
import logging
import subprocess

logging.basicConfig(filename='error.log',level=logging.DEBUG)
info = ""
output = ""
result = ""
try:
    form = cgi.FieldStorage()
    info = form.getvalue("method")
    if(info == 'pull'):
       info = "PULLING FROM MASTER.."
       cmd = subprocess.Popen(["git", "status"], stdout=subprocess.PIPE)
       git = cmd.communicate()[0]
       logging.info("Status: " + str(git))
       process = subprocess.Popen(["git", "fetch", "--all"], stdout=subprocess.PIPE)
       output = process.communicate()[0]
       logging.info("Fetched: " + str(output))
       process = subprocess.Popen(["git", "reset", "--hard",  "origin/master"], stdout=subprocess.PIPE)
       output = process.communicate()[0]
       logging.info("Reset: " + str(output))
       process = subprocess.Popen(["git", "pull"], stdout=subprocess.PIPE)
       output = process.communicate()[0]
       logging.info("Pulled from master: " + str(output))
       print("HTTP/1.1 200 OK\n")
       result = str(output)
    else:
       print("HTTP/1.1 404 Not Found\n")
       result = "Parameter Not Recognized"
except Exception as e:
    logging.info("POST ERROR: " + str(e))
    print("HTTP/1.1 500 Internal Server Error\n")
    result = "Error happend in the Python script"

print("Content-Type: text/text")
print
print(result)