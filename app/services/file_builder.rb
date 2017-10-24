class FileBuilder
  def call
    process_data
    generate_file_url
  end

  private

  def process_data
    # imagine heavy sql queries, data processing
    sleep(30)
  end

  def generate_file_url
    'http://example.com/file.pdf'
  end
end
