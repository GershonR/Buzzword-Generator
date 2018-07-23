#!/usr/bin/env python
import cgi
import sys
import logging
import subprocess


logging.basicConfig(filename='error.log',level=logging.DEBUG)
info = ""
try:
    form = cgi.FieldStorage()
    info = form.getvalue("method")
    if(info == 'pull'):
       info = "PULLING FROM MASTER.."
       process = subprocess.Popen(["git", "pull", "origin", "master"], stdout=subprocess.PIPE)
       output = process.communicate()[0]
       logging.info("Pulled from master: " + str(output))
except Exception as e:
	logging.info("POST ERROR: " + str(e))

print("Content-Type: text/html")
print
print("<html><body>Hello")
print(info)
print("</body></html>")