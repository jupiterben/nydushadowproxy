@echo off   

echo 开始关闭IE代理上网   

reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v AutoConfigURL /d ""  /f     