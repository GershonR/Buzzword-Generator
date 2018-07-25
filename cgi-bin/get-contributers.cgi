#!/usr/bin/env python
import cgi
import sys
import logging
import subprocess

logging.basicConfig(filename='error.log',level=logging.DEBUG)
output = ""
try:
    form = cgi.FieldStorage()
    value = form.getvalue("method")
    process = subprocess.Popen(["git", "shortlog -s -n"], stdout=subprocess.PIPE)
    output = process.communicate()[0]
    logging.info("Contributers: " + str(output))
except Exception as e:
    logging.info("POST ERROR: " + str(e))
    output = "Error happend in the Python script"

print("Content-Type: text/text")
print
print(output)