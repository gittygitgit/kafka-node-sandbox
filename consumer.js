var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.Client(),
    consumer = new Consumer(
        client,
        [
            { topic: 'mikeg', partition: 0}, {topic: 'mikeg', partition: 1}, { topic: 'mikeg', partition: 2}, { topic: 'mikeg', partition: 3}
        ],
        {
            autoCommit: false
        }
    );
    consumer.on('message', function(message) {
      console.log(message.value);
    });
    consumer.on('error', function(err) {
      console.log('error:' + err);
    });
    consumer.on('offsetOutOfRange', function(err) {
      console.log('ofsetOutOfRange' + err);
    });
