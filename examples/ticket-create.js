var zendesk = require('node-zendesk');

var client = zendesk.createClient({
  username:  'email-id',
  token:     'api-token',
  remoteUri: 'https://subdomain.zendesk.com/api/v2'
});

var ticket = {
  "ticket":
    {
      "subject":"My printer is on fire!",
      "comment": {
        "body": "The smoke is very colorful."
      }
    }
  };

client.tickets.create(ticket,  function(err, req, result) {
  if (err) return handleError(err);
  console.log(JSON.stringify(result, null, 2, true));
});

function handleError(err) {
    console.log(err);
    process.exit(-1);
}
