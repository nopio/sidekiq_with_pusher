class GeneratorWorker
  include Sidekiq::Worker

  def perform(*args)
    # imagine heavy sql queries, data processing
    sleep(30)

    Pusher.trigger('my-channel', 'generate', {
      url: 'http://example.com/file.pdf'
    })
  end
end
