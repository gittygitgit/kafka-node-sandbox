var kafka = require('kafka-node'),
    Producer = kafka.Producer,
    client = new kafka.Client(),
    producer = new Producer(client);
producer.on('ready', function () {
  producer.send(
    [{
      topic: 'test',
      messages: ['bye world'],
    }], function(err, data) {
      console.log(data);
    });
  console.log("here");
});
 
producer.on('error', function (err) {})
