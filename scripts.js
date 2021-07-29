window.onload = function() {
    for (let i in cmdrList) {
        document.getElementById('cardHolder').insertAdjacentHTML ('beforeend', cardTemplate
            .replace('{{IMAGE}}', cmdrList[i]['image'])
            .replace('{{NAME}}', cmdrList[i]['fullname'])
            .replace('{{POWER_LEVEL}}', cmdrList[i]['level'])
            .replace('{{PLAY_STYLE}}', cmdrList[i]['style'])
            .replace('{{WIN_CONS}}', cmdrList[i]['wincons'])
            .replace('{{HOW_TO_WIN}}', cmdrList[i]['how_to_win'])
            .replace('{{DECKLIST}}', cmdrList[i]['decklist'])

            .replace('{{WHITE}}', getColorSymbol(cmdrList[i]['colors'], 'w'))
            .replace('{{BLUE}}', getColorSymbol(cmdrList[i]['colors'], 'u'))
            .replace('{{BLACK}}', getColorSymbol(cmdrList[i]['colors'], 'b'))
            .replace('{{RED}}', getColorSymbol(cmdrList[i]['colors'], 'r'))
            .replace('{{GREEN}}', getColorSymbol(cmdrList[i]['colors'], 'g'))
        );
    }
}

function getColorSymbol(identity, color) {
    var base = '<img src="images/symbols/{{SYMBOL}}.png" class="colorSymbol {{CLASS}}">';
    var symbol = '';

    if(identity.indexOf(color) > -1) {
        base = base.replace('{{CLASS}}', '');
    } else {
        base = base.replace('{{CLASS}}', 'absent');
    }

    if(color == 'w') {
        symbol = 'white';
    } else if(color == 'u') {
        symbol = 'blue';
    } else if(color == 'b') {
        symbol = 'black';
    } else if(color == 'r') {
        symbol = 'red';
    } else if(color = 'g') {
        symbol = 'green';
    }

    return base.replace('{{SYMBOL}}', symbol);
}

const cardTemplate = `<div class="col s12 m3">
<div class="card hoverable large">
    <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="images/cmdr/{{IMAGE}}.png">
    </div>
    <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">
            {{NAME}}
            <i class="material-icons right">more_vert</i>
        </span>
        <p>
            <span>Colors</span>
            <span style="float: right;">
                {{WHITE}}
                {{BLUE}}
                {{BLACK}}
                {{RED}}
                {{GREEN}}
            </span>
        </p>
        <p>
            <span>Powel-Level</span>
            <span style="float: right;">{{POWER_LEVEL}}</span>
        </p>
        <p>
            <span>Play-Style</span>
            <span style="float: right;">{{PLAY_STYLE}}</span>
        </p>
        <p>
            <span>Win-Cons</span>
            <span style="float: right;">{{WIN_CONS}}</span>
        </p>
    </div>
    <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">How to win<i class="material-icons right">close</i></span>
        <p>
            <ul>
                {{HOW_TO_WIN}}
            </ul>
        </p>
        <p><a href="https://archidekt.com/decks/{{DECKLIST}}" target="_blank">Decklist</a></p>
    </div>
</div>
</div>`;