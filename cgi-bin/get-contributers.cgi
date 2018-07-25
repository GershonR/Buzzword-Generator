#!/usr/bin/env python

import sys
import logging
import subprocess

logging.basicConfig(filename='error.log',level=logging.DEBUG)
output = ""
try:
    process = subprocess.Popen(["git", "shortlog", "-s", "-n"], stdout=subprocess.PIPE)
    output = proc.stdout.readline()
    logging.info("Contributers: " + str(output))
except Exception as e:
    logging.info("POST ERROR: " + str(e))
    output = "Error happened in the Python script"

print("Content-Type: text/html")
print
print("Contributers: " + str(output))