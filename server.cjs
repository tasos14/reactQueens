const Express = require('express');
const dotenv = require('dotenv');
const http = require('http');
const path = require('path');
const pl = require('tau-prolog');
require('tau-prolog/modules/lists.js')(pl);
require('tau-prolog/modules/promises.js')(pl);

dotenv.config();

const app = new Express();
// allow CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Set-Cookie', 'HttpOnly;Secure;SameSite=Strict');
    next();
});
app.use(Express.json({ limit: '50mb' }));

const program = `
    :- use_module(library(lists)).

    queens(N, Queens) :-
        length(Queens, N),
        board(Queens, Board, 0, N, _, _),
        queens(Board, 0, Queens).

    board([], [], N, N, _, _).
    board([_|Queens], [Col-Vars|Board], Col0, N, [_|VR], VC) :-
        Col is Col0+1,
        functor(Vars, f, N),
        constraints(N, Vars, VR, VC),
        board(Queens, Board, Col, N, VR, [_|VC]).

    constraints(0, _, _, _) :- !.
    constraints(N, Row, [R|Rs], [C|Cs]) :-
        arg(N, Row, R-C),
        M is N-1,
        constraints(M, Row, Rs, Cs).

    queens([], _, []).
    queens([C|Cs], Row0, [Col|Solution]) :-
        Row is Row0+1,
        select(Col-Vars, [C|Cs], Board),
        arg(Row, Vars, Row-Row),
        queens(Board, Row, Solution).
`;

app.use('/', Express.static(path.join(__dirname, 'dist')));

app.post('/', async (req, res) => {
    try {
        const { size, queens } = req.body;

        const query = `queens(${size}, [${queens}]).`;

        const session = pl.create();
        await session.promiseConsult(program);
        await session.promiseQuery(query);

        const a = [];

        for await (const answer of session.promiseAnswers()) {
            a.push(session.format_answer(answer));
        }
        res.send({ result: a.length > 0 });
    } catch (error) {
        console.log(error);
    }
});

app.listen(process.env.PORT || 3333, () => {
    console.log(`Listening on port ${process.env.PORT || 3333}!`);
});

module.exports = app;
