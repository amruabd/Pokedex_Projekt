# Pokedex_Projekt
<h1>Pokedex Projekt</h1>
    <p>Dieses Projekt ist eine Pokedex-Anwendung, die es Benutzern ermöglicht, Informationen über verschiedene Pokémon abzurufen und zu suchen. Das Erstellen neuer Pokémon ist derzeit im <b>Frontend</b> noch nicht vollständig implementiert, aber das <b>Backend</b> unterstützt diese Funktion bereits.</p>
    <h2>Projektstruktur</h2>
    <h3>Backend (Java)</h3>
    <ul>
        <li><b>pokedex:</b> Das Java-Backend, das die Datenbank und die API bereitstellt.</li>
        <li><b>data/pokedexdb.mv.db:</b> Die Datenbankdatei, die die Pokémon-Daten speichert.</li>
        <li><b>src/main/java:</b> Der Java-Quellcode des Backends.</li>
        <li><b>src/main/resources:</b> Ressourcen wie Konfigurationsdateien.</li>
        <li><b>target:</b> Der kompilierte Code und die generierten Dateien.</li>
    </ul>
    <h3>Frontend (React)</h3>
    <ul>
        <li><b>react-frontend:</b> Das React-Frontend, das die Benutzeroberfläche bereitstellt.</li>
        <li><b>src/Pages:</b> Die verschiedenen Seiten der Anwendung.</li>
        <li><b>src/components:</b> Die React-Komponenten, die in den Seiten verwendet werden.</li>
        <li><b>src/services:</b> Die API-Services, die mit dem Backend kommunizieren.</li>
    </ul>
    <h2>Voraussetzungen</h2>
    <ul>
        <li>Java JDK 11 oder höher</li>
        <li>Maven</li>
        <li>Node.js und npm</li>
    </ul>
    <h2>Installation</h2>
    <h3>Backend</h3>
    <p>1. Navigiere in das <code>pokedex</code>-Verzeichnis:</p>
    <pre><code>cd pokedex</code></pre>
    <p>2. Führe den folgenden Befehl aus, um das Backend zu starten:</p>
    <pre><code>./mvnw spring-boot:run</code></pre>
    <h3>Frontend</h3>
    <p>1. Navigiere in das <code>react-frontend</code>-Verzeichnis:</p>
    <pre><code>cd react-frontend</code></pre>
    <p>2. Installiere die Abhängigkeiten:</p>
    <pre><code>npm install</code></pre>
    <p>3. Starte das Frontend:</p>
    <pre><code>npm start</code></pre>
    <h2>Verwendung</h2>
    <ul>
        <li><b>Home:</b> Zeigt eine Übersicht über die verfügbaren Pokémon.</li>
        <li><b>PokemonListPage:</b> Listet alle Pokémon auf.</li>
        <li><b>PokemonDetailPage:</b> Zeigt detaillierte Informationen zu einem bestimmten Pokémon.</li>
        <li><b>SearchPage:</b> Ermöglicht die Suche nach Pokémon.</li>
        <li><b>CreatPokemonPage:</b> <i>(In Arbeit)</i> Das Erstellen neuer Pokémon ist im <b>Frontend</b> noch nicht vollständig implementiert, aber das <b>Backend</b> unterstützt diese Funktion bereits.</li>
    </ul>
    <h2>Tests</h2>
    <p>Das Backend enthält Unit-Tests, die mit Maven ausgeführt werden können:</p>
    <pre><code>./mvnw test</code></pre>
    <h2>Lizenz</h2>
    <p>Dieses Projekt ist unter der MIT-Lizenz lizenziert. Weitere Informationen findest du in der <code>LICENSE</code>-Datei.</p>
