function enviar() {
    let email = document.getElementById("exampleInputEmail1").value;
    let password = document.getElementById("exampleInputPassword1").value;

    console.log(typeof (email))


    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDE4MzUxODYsImVtYWlsIjoicmFmYWVsLnZpdG9yQGtleXJ1cy5jb20uYnIiLCJhcHBsaWNhdGlvbiI6MzAwMTI1MjMwfX0.pkyrXEz6FYJA3c9-t7iAg4GHBhAxGcL1SwISob6mH57_WvWY2eMcHiNUt389ouWo8mTVcrwV1Z4fcVB-1AATvg',
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify({ query: `query{pipe(id:301919675){start_form_fields{id label}}}`})
        body: JSON.stringify({
            query: `mutation{ 
            createCard(input: {
                pipe_id: 301922925
                fields_attributes: [
                    {field_id: "email", field_value: "${email}"}
                    {field_id: "password" field_value: "${password}"}
                ]
            }) {clientMutationId}}`})
    };

    fetch('https://api.pipefy.com/graphql', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}