#!/usr/bin/env python

import sys
import logging
import subprocess

logging.basicConfig(filename='error.log',level=logging.DEBUG)
output = ""
try:
    process = subprocess.Popen(["git", "shortlog", "-s", "-n"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    output = str(process.communicate()[0])
    logging.info("Contributers: " + str(output))
except Exception as e:
    logging.info("POST ERROR: " + str(e))
    output = "Error happend in the Python script"

print("Content-Type: text/html")
print
print("Contributers: " + output)