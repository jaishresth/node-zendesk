var zendesk = require('node-zendesk');

const client = zendesk.createClient({
  username:  'email-id',
  token:     'api-token',
  remoteUri: ''https://subdomain.zendesk.com/api/v2''
});

const ticket = {
  "ticket":
    {
      "subject":"My printer is on fire!",
      "comment": {
        "body": "The smoke is very colorful."
      }
    }
  };

(async () => {
  try {
    const result = await client.tickets.create(ticket);
    console.log(JSON.stringify(result, null, 2, true));
  } catch (err) {
    handleError(err);
  }
})();

function handleError(err) {
    console.log(err);
    process.exit(-1);
}
