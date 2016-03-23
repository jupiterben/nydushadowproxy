@echo off 

echo 开始设置IE代理上网 

reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v AutoConfigURL /d "http://10.0.0.7:8080" /f