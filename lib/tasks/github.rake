desc "Update github information for all users"
task "github:update" => :environment do
  puts "GITHUB UPDATE..."
  User.all.each do |user|
    puts ".. Updating #{user.github}"
    user.update_github
    puts "Languages for #{user.github} Now are: #{user.current_languages}"
  end
end
