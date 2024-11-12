# Rock-Papier-Schere Spiel-API

## Ziel

Erstelle eine REST-API für das Spiel Rock-Papier-Schere. Die API soll es einem Spieler ermöglichen, eine Auswahl zwischen „Stein“, „Papier“ oder „Schere“ zu treffen und basierend auf einer zufälligen Wahl des Servers eine Antwort zu erhalten.

---

## Task 1. **Einrichtung der Umgebung**

- Initialisiere ein Node.js-Projekt und installiere Express.
- Erstelle eine `.gitignore`
- Erstelle eine `server.js`
- Installieren `express`

## Task 2. **Express-Server einrichten**

- Erstelle einen Express-Server, der auf einem festgelegten Port (z. B. 3000) läuft.
- Richte Middleware ein, um JSON-Anfragen zu verarbeiten.
  - ```app.use(express.json())```

## Task 3. **Spiel-Logik definieren**

- Implementiere die Regeln:
  - Stein schlägt Schere.
  - Schere schlägt Papier.
  - Papier schlägt Stein.
- Erstelle eine **Funktion**, die die Wahl des Spielers mit der Wahl des Servers vergleicht und den Gewinner bestimmt.

## Task 4. **Endpoints**

- **POST `/play`**
  - Akzeptiert die Auswahl des Spielers als JSON (`rock`, `paper` oder `scissors`).
  - Wählt zufällig eine der drei Optionen für den Server aus.
  - Gibt eine JSON-Antwort zurück mit:
    - `playerChoice`: Die Wahl des Spielers.
    - `serverChoice`: Die zufällige Wahl des Servers.
    - `result`: Das Spielergebnis (z. B. „Du hast gewonnen!“, „Du hast verloren!“ oder „Unentschieden!“).
