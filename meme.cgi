#!/usr/bin/python

import sys
import cgi


arguments = cgi.FieldStorage()
for i in arguments.keys():
 print arguments[i].value

print "Content-Type: text/text"
print
print "MEME" + arguments