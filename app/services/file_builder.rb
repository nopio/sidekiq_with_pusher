class FileBuilder
  def call
    GeneratorWorker.perform_async
  end
end
