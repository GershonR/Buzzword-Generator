#!/usr/bin/env python
import cgi
import sys
import logging
from subprocess import check_output

logging.basicConfig(filename='error.log',level=logging.DEBUG)
output = ""
try:
    output = check_output(["/usr/bin/git", "shortlog", "-s", "-n"])
    logging.info("Contributers: " + str(output))
	
except Exception as e:
    logging.info("POST ERROR: " + str(e))
    output = "Error happened in the Python script"

print("Content-Type: text/text")
print
print("Contributers: " + output)
