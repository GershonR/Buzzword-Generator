#!/usr/bin/env python

import sys
import logging
import subprocess

logging.basicConfig(filename='error.log',level=logging.DEBUG)
output = ""
try:
    process = subprocess.Popen(["git", "shortlog", "-s", "-n"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    output, err  = process.communicate()
    logging.info("Contributers: " + str(output))
    logging.info("Error Contributers: " + str(err))
except Exception as e:
    logging.info("POST ERROR: " + str(e))
    output = "Error happened in the Python script"

print("Content-Type: text/html")
print
print("Contributers: " + str(output))
print(str(err))