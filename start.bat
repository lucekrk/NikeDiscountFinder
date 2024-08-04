@echo off
REM Sprawdź, czy Python jest zainstalowany
where python >nul 2>nul
if errorlevel 1 (
    echo Python nie jest zainstalowany. Zainstaluj Pythona, aby kontynuowac.
    pause
    exit /b
)

REM Ustaw katalog roboczy na ten, w którym znajduje się skrypt
cd /d "%~dp0"

REM Uruchom lokalny serwer HTTP na porcie 8000 w tle
start "" python -m http.server 8000

REM Czekaj chwilę na uruchomienie serwera
timeout /t 2 /nobreak >nul

REM Otwórz stronę w domyślnej przeglądarce
start "" http://localhost:8000/index.html

REM Czekaj na wciśnięcie dowolnego klawisza, aby zamknąć okno
pause