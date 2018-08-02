#!/usr/bin/python

import sys
import cgi
import webbrowser


#Get this to open another script
#Other script will be maybe php
#Try to install framework to build startup sites?
#shut the fuck up eric
dirurl = "/?r=1234"


#webbrowser.get('firefox').open_new_tab('http://www.google.com')
#Opens URL in Firefox browser
 
#webbrowser.get('chrome').open_new_tab('http://www.google.com')
#Opens URL in Chrome browser


print "Content-type: text/html"
print 'Location: %s' % dirurl
print
print '<html>'
print ' <head>'
print '  <meta http-equiv="refresh" content="0;url=%s" />' % dirurl
print '  <title> Get redirected bro </title>'
print ' </head>'
print ' <body>'
print '  yeee boiiiii'
print ' </body>'
print '</html>'
#print "<html><body>this is the startup. Going to make it gen website from what's generated on main page ok?</body></html>"
