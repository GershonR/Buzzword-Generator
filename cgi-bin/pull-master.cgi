#!/usr/bin/env python
import cgi
import cgitb
cgitb.enable()
import sys
import logging


logging.basicConfig(filename='error.log',level=logging.DEBUG)
info = ""
try:
    form = cgi.FieldStorage()
    info = form.getvalue("method")
    if(info == 'pull'):
       info = "METHOD IS NOW PULL"
    logging.info("METHOD: " + str(info))
except Exception as e:
	logging.info("POST ERROR: " + str(e))

print("Content-Type: text/html")
print
print("<html><body>Hello")
print(info)
print("</body></html>")